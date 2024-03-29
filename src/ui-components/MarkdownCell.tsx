import React, { useReducer, useRef } from "react";
import { Box } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";

import { useTheme } from "@chakra-ui/system";
import Markdown from "./Markdown";
import Textarea from "./Textarea";

function stateReducer(
  state: MarkdownState,
  action: MarkdownAction
): MarkdownState {
  switch (action.type) {
    case "doubleClick":
      if (state.mode !== "read") return state;

      return { ...state, mode: "edit" };
    case "enterKeyPress":
      if (state.mode !== "read") return state;

      return { ...state, mode: "edit" };
    case "enterCtrlKeyPress":
      return { ...state, mode: "read" };
    case "input":
      return { ...state, content: action.payload ?? "" };
    default:
      return state;
  }
}

export interface MarkdownCellProps {
  initialValue?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  isLoading?: boolean;
}

const MarkdownCell = (props: MarkdownCellProps) => {
  const {
    initialValue: propsValue,
    onChange: propsOnchange,
    isLoading,
  } = props;

  const [state, dispatch] = useReducer(stateReducer, {
    mode: "read",
    content: propsValue ?? "Double click here to create markdown",
  });

  const { notebookCellLeftPadding } = useTheme();

  const ref = useRef<HTMLDivElement>(null);
  const { mode, content } = state;

  const onKeyPress = (e: React.KeyboardEvent) => {
    const { ctrlKey, key } = e;

    if (ctrlKey && key === "Enter") {
      ref.current?.blur();

      dispatch({ type: "enterCtrlKeyPress" });
      return;
    }

    if (mode === "read" && key === "Enter") {
      ref.current?.focus();

      dispatch({ type: "enterKeyPress" });
    }
  };

  const onDoubleClick = () => {
    ref.current?.focus();
    dispatch({ type: "doubleClick" });
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    dispatch({ type: "input", payload: value });

    propsOnchange(value);
  };

  const displaySkeleton = !isLoading;

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <Skeleton isLoaded={displaySkeleton}>
      <Box
        ref={ref}
        onDoubleClick={onDoubleClick}
        onKeyPress={onKeyPress}
        role="button"
        tabIndex={0}
        paddingLeft={notebookCellLeftPadding}
      >
        {mode === "read" ? (
          <Markdown>{content}</Markdown>
        ) : (
          <Textarea value={content} onChange={onChange} />
        )}
      </Box>
    </Skeleton>
  );
};

export interface MarkdownState {
  mode: "edit" | "read";
  content: string;
}

export interface MarkdownAction {
  type: string;
  payload?: string;
}

export default MarkdownCell;
