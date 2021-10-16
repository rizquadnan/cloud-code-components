import React, { useReducer, useRef } from "react";
// import ReactMarkdown from "react-markdown";
// import Markdown from "./Markdown";
import { Box, useToken } from "@chakra-ui/react";

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
  const { mode } = state;

  const onKeyPress = (e: React.KeyboardEvent) => {
    const { ctrlKey, key } = e;

    if (ctrlKey && key === "Enter") {
      ref.current?.blur();

      dispatch({ type: "enterCtrlKeyPress" });
      return;
    }

    if (key === "Enter") {
      ref.current?.focus();

      dispatch({ type: "enterKeyPress" });
    }
  };

  const onDoubleClick = () => {
    ref.current?.focus();
    dispatch({ type: "doubleClick" });
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
      outline={state.mode === "edit" ? `${lightGrayColor} auto 1px` : undefined}
    >
      {mode === "read" ? <div>Read mode</div> : <div>Edit mode</div>}
    </Box>
  );
};

export interface MarkdownState {
  mode: "edit" | "read";
  content: string;
}

export interface MarkdownAction {
  type: string;
  payload?: Partial<MarkdownState>;
}

export default MarkdownCell;
