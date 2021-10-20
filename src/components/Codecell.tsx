import React, { useState } from "react";
import CodeEditor from "./CodeEditor";

function Codecell(props: CodeCellProps) {
  const { language = "go", initialValue = "", placeholder } = props;
  const [code, setCode] = useState(initialValue);

  return (
    <CodeEditor
      value={code}
      placeholder={placeholder}
      onValueChange={(value) => setCode(value)}
      language={language}
    />
  );
}

export interface CodeCellProps {
  language: string;
  initialValue?: string;
  placeholder?: string;
}

export default Codecell;
