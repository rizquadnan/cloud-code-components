import React from "react";
import { Box } from "@chakra-ui/layout";
import CellWrapper from "./CellWrapper";
import Codecell from "./Codecell";
import MarkdownCell from "./MarkdownCell";
import defaultLanguage from "../config/CodeEditorDefaultLanguage.js";

function Notebook({
  cellList,
  language,
  onRunCodeCell,
  onChange,
}: NotebookProps) {
  const resolvedLanguage = language ?? defaultLanguage;

  return (
    <Box>
      {cellList.map(
        ({ key, type, value: propsValue, runOrder, resultValue }) => (
          <CellWrapper key={key}>
            {type === "code" ? (
              <Codecell
                initialValue={propsValue}
                number={runOrder}
                result={resultValue}
                language={resolvedLanguage}
                onChange={(value) => onChange(key, value)}
                onRunCode={(value) => onRunCodeCell(key, value)}
              />
            ) : (
              <MarkdownCell
                initialValue={propsValue}
                onChange={(value) => onChange(key, value)}
              />
            )}
          </CellWrapper>
        )
      )}
    </Box>
  );
}

export interface NotebookProps {
  cellList: NotebookCell[];
  language?: string;
  // eslint-disable-next-line no-unused-vars
  onRunCodeCell: (key: string, value: string) => void;
  // eslint-disable-next-line no-unused-vars
  onChange: (key: string, value: string) => void;
}

export interface NotebookCell {
  key: string;
  value: string;
  resultValue?: string;
  runOrder?: number;
  type: CellType;
  // eslint-disable-next-line no-unused-vars
}

export type CellType = "markdown" | "code";

export default Notebook;
