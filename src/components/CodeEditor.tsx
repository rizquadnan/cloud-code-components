import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/themes/prism.css";

import { Box } from "@chakra-ui/layout";
import supportedLanguages from "../config/CodeEditorSupportedLanguages.js";

const CodeEditor = (props: CodeEditorProps) => {
  const { language, fontSize = 12, onCtrlEnter, ...otherProps } = props;
  const editor = React.useRef(null);

  if (!supportedLanguages.includes(language)) {
    return <div>Language Not Supported</div>;
  }

  return (
    <Editor
      ref={editor}
      onKeyDown={(e) => {
        if (e.ctrlKey && e.key === "Enter" && onCtrlEnter) {
          (e.target as HTMLElement).blur();
          onCtrlEnter();
        }
      }}
      padding={16}
      style={{
        fontFamily: "monospace",
        fontSize,
      }}
      {...otherProps}
      highlight={(value) => highlight(value, languages[language], language)}
    />
  );
};

function CodeEditorWrapper(props: CodeEditorProps) {
  const { ...otherProps } = props;

  return (
    <Box
      as={CodeEditor}
      textareaClassName="adnan-text"
      borderColor="gray.200"
      borderRadius="md"
      sx={{
        ".adnan-text": {
          border: "1px solid !important",
          borderColor: "inherit !important",
          borderRadius: "inherit",
        },
      }}
      {...otherProps}
    />
  );
}
interface EditorProps {
  // Props for the component
  value: string;
  // eslint-disable-next-line no-unused-vars
  onValueChange: (value: string) => void;
  language: string;
  fontSize?: string;
  tabSize?: number;
  insertSpaces?: boolean;
  ignoreTabKey?: boolean;
  padding?: number | string;
  style?: React.CSSProperties;

  // Props for the textarea
  textareaId?: string;
  textareaClassName?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  form?: string;
  maxLength?: number;
  minLength?: number;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement> &
    // eslint-disable-next-line no-unused-vars
    ((e: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => void);
  onFocus?: React.FocusEventHandler<HTMLDivElement> &
    // eslint-disable-next-line no-unused-vars
    ((e: React.FormEvent<HTMLTextAreaElement>) => void);
  onBlur?: React.FocusEventHandler<HTMLDivElement> &
    // eslint-disable-next-line no-unused-vars
    ((e: React.FocusEvent<HTMLTextAreaElement, Element>) => void);
  onKeyUp?: React.KeyboardEventHandler<HTMLDivElement> &
    // eslint-disable-next-line no-unused-vars
    ((e: React.KeyboardEvent<HTMLTextAreaElement>) => void);
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement> &
    // eslint-disable-next-line no-unused-vars
    ((e: React.KeyboardEvent<HTMLTextAreaElement>) => void);
  preClassName?: string;
}

export interface CodeEditorProps extends EditorProps {
  onCtrlEnter?: () => void;
}

export default CodeEditorWrapper;
