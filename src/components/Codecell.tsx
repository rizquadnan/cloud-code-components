import React, { useState } from "react";
import CodeEditor from "./CodeEditor";

function Codecell(props: CodeCellProps) {
  const { language = "go", initialValue = "", placeholder, onRunCode } = props;
  const [code, setCode] = useState(initialValue);

  return (
    <CodeEditor
      value={code}
      placeholder={placeholder}
      onValueChange={(value) => setCode(value)}
      onCtrlEnter={() => onRunCode(code)}
      language={language}
    />
  );
}

export interface CodeCellProps {
  // eslint-disable-next-line no-unused-vars
  onRunCode: (value: string) => void;
  language: string;
  initialValue?: string;
  placeholder?: string;
}

export default Codecell;
