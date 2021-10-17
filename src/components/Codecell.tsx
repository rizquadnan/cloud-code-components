import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/themes/prism.css";

const initialCode = `function add(a, b) {
  return a + b;
}
`;

function Codecell() {
  const [code, setCode] = useState(initialCode);

  return (
    <Editor
      value={code}
      onValueChange={(value) => setCode(value)}
      highlight={(value) => highlight(value, languages.js, "javascript")}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
  );
}

export default Codecell;
