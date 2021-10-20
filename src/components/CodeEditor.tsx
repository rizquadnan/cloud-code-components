/* eslint-disable no-unused-vars */
import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/themes/prism.css";

import supportedLanguages from "../config/CodeEditorSupportedLanguages.js";

function CodeEditor(props: CodeEditorProps) {
  const { language, fontSize = 12, ...otherProps } = props;

  if (!supportedLanguages.includes(language)) {
    return <div>Language Not Supported</div>;
  }

  return (
    <Editor
      className="line-numbers"
      padding={10}
      style={{
        fontFamily: "monospace",
        fontSize,
      }}
      {...props}
      highlight={(value) => highlight(value, languages[language], language)}
    />
  );
}

interface EditorProps {
  // Props for the component
  value: string;
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
    ((e: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => void);
  onFocus?: React.FocusEventHandler<HTMLDivElement> &
    ((e: React.FormEvent<HTMLTextAreaElement>) => void);
  onBlur?: React.FocusEventHandler<HTMLDivElement> &
    ((e: React.FocusEvent<HTMLTextAreaElement, Element>) => void);
  onKeyUp?: React.KeyboardEventHandler<HTMLDivElement> &
    ((e: React.KeyboardEvent<HTMLTextAreaElement>) => void);
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement> &
    ((e: React.KeyboardEvent<HTMLTextAreaElement>) => void);
  preClassName?: string;
}

export interface CodeEditorProps extends EditorProps {}

export default CodeEditor;
