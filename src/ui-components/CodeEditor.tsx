import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/themes/prism.css";

import { Box } from "@chakra-ui/layout";
import { useToken } from "@chakra-ui/system";
import supportedLanguages from "../config/CodeEditorSupportedLanguages.js";

const CodeEditor = (props: CodeEditorProps) => {
  const {
    language,
    fontSize = 12,
    onCtrlEnter,
    onValueChange,
    ...otherProps
  } = props;
  const editor = React.useRef(null);

  if (!supportedLanguages.includes(language)) {
    return otherProps.readOnly ? null : <div>Language Not Supported</div>;
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
      onValueChange={onValueChange ?? (() => undefined)}
      highlight={(value) => highlight(value, languages[language], language)}
    />
  );
};

function CodeEditorWrapper(props: CodeEditorProps) {
  const { hasBorder = true, ...otherProps } = props;
  const [blue600] = useToken("colors", ["blue.600"]);

  return (
    <Box
      as={CodeEditor}
      textareaClassName="code-editor-text-area"
      borderColor="gray.200"
      borderRadius="md"
      sx={{
        ".code-editor-text-area": {
          border: hasBorder ? "1px solid !important" : "none !important",
          outline: otherProps.readOnly ? "none !important" : undefined,
          borderColor: "inherit !important",
          borderRadius: "inherit",
        },
        ".code-editor-text-area:focus-visible": {
          outline: otherProps.readOnly
            ? "transparent auto 1px !important"
            : `${blue600} auto 1px !important`,
        },
      }}
      {...otherProps}
    />
  );
}
interface EditorProps {
  // Props for the component
  value: string;
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
  // eslint-disable-next-line no-unused-vars
  onValueChange?: (value: string) => void;
  onCtrlEnter?: () => void;
  hasBorder?: boolean;
}

export default CodeEditorWrapper;
