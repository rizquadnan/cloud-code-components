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
  const [isActiveCellListState, setIsActiveCellListState] = React.useState(() =>
    cellList.map(() => false)
  );

  const onCellWrapperEnter = (index: number) => {
    const list = isActiveCellListState.map(
      (_, itemIndex) => itemIndex === index
    );

    setIsActiveCellListState(list);
  };

  return (
    <Box
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      borderRadius="md"
      padding="2rem"
    >
      {cellList.map(
        (
          { key, type, value: propsValue, runOrder, resultValue, isLoading },
          index
        ) => (
          <CellWrapper
            key={key}
            mode={isActiveCellListState[index] ? "active" : "default"}
            onEnter={() => {
              if (!isActiveCellListState[index]) {
                onCellWrapperEnter(index);
              }
            }}
          >
            {type === "code" ? (
              <Codecell
                initialValue={propsValue}
                number={runOrder}
                result={resultValue}
                language={resolvedLanguage}
                onChange={(value) => onChange(key, value)}
                onRunCode={(value) => onRunCodeCell(key, value)}
                isLoading={isLoading}
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
  isLoading?: boolean;
  type: CellType;
  // eslint-disable-next-line no-unused-vars
}

export type CellType = "markdown" | "code";

export default Notebook;
