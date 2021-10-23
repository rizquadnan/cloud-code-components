import React, { useReducer, useRef } from "react";
import { Box } from "@chakra-ui/layout";

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
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void;
}

const MarkdownCell = (props: MarkdownCellProps) => {
  const { value: propsValue, onChange: propsOnchange } = props;

  const [state, dispatch] = useReducer(stateReducer, {
    mode: "read",
    content: propsValue ?? "",
  });

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

    if (propsOnchange) {
      propsOnchange(value);
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <Box
      ref={ref}
      onDoubleClick={onDoubleClick}
      onKeyPress={onKeyPress}
      role="button"
      tabIndex={0}
    >
      {mode === "read" ? (
        <Markdown>{content}</Markdown>
      ) : (
        <Textarea value={content} onChange={onChange} />
      )}
    </Box>
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
