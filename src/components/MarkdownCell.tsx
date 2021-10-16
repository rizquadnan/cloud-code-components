import React, { useReducer, useRef } from "react";
// import ReactMarkdown from "react-markdown";
// import Markdown from "./Markdown";
import { Box, useToken } from "@chakra-ui/react";
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

const initialState: MarkdownState = {
  mode: "read",
  content: "",
};

const MarkdownCell = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const ref = useRef<HTMLDivElement>(null);
  const [lightGrayColor] = useToken("colors", ["lightGray.default"]);
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
    dispatch({ type: "input", payload: e.target.value });
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <Box
      ref={ref}
      onDoubleClick={onDoubleClick}
      onKeyPress={onKeyPress}
      role="button"
      tabIndex={0}
      _focusVisible={{ outline: `${lightGrayColor} auto 1px` }}
    >
      {mode === "read" ? (
        <div>Read mode</div>
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
