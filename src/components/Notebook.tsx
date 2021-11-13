import React from "react";
import { Box } from "@chakra-ui/layout";
import CellWrapper from "./CellWrapper";
import Codecell from "./Codecell";
import MarkdownCell from "./MarkdownCell";
import defaultLanguage from "../config/CodeEditorDefaultLanguage.js";

function Notebook({ cellList, language, onRunCodeCell }: NotebookProps) {
  const resolvedLanguage = language ?? defaultLanguage;

  return (
    <Box>
      {cellList.map((cell) => (
        <CellWrapper key={cell.key}>
          {cell.type === "code" ? (
            <Codecell
              language={resolvedLanguage}
              onRunCode={(value) => onRunCodeCell(cell.key, value)}
            />
          ) : (
            <MarkdownCell />
          )}
        </CellWrapper>
      ))}
    </Box>
  );
}

export interface NotebookProps {
  cellList: NotebookCell[];
  language?: string;
  // eslint-disable-next-line no-unused-vars
  onRunCodeCell: (key: string, value: string) => void;
}

export interface NotebookCell {
  key: string;
  initialValue: string;
  type: CellType;
  // eslint-disable-next-line no-unused-vars
}

export type CellType = "markdown" | "code";

export default Notebook;
