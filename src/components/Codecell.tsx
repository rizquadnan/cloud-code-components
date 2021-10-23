import { Flex, Box, Text } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/react";
import React, { useState } from "react";
import CodeEditor from "./CodeEditor";

function Codecell(props: CodeCellProps) {
  const {
    language = "go",
    initialValue = "",
    placeholder,
    onRunCode,
    isLoading,
    number,
  } = props;
  const [code, setCode] = useState(initialValue);

  const displayedNumber = number ?? " ";
  const displaySkeleton = !isLoading;

  return (
    <Flex>
      <Box marginRight="4" marginTop="1">
        <Skeleton isLoaded={displaySkeleton}>
          <Text fontFamily="monospace" color="blue.600">
            In [{displayedNumber}]:{" "}
          </Text>
        </Skeleton>
      </Box>
      <Box flex="1">
        <Skeleton isLoaded={displaySkeleton}>
          <CodeEditor
            value={code}
            placeholder={placeholder}
            onValueChange={(value) => setCode(value)}
            onCtrlEnter={() => onRunCode(code)}
            language={language}
          />
        </Skeleton>
      </Box>
    </Flex>
  );
}

export interface CodeCellProps {
  // eslint-disable-next-line no-unused-vars
  onRunCode: (value: string) => void;
  language: string;
  isLoading?: boolean;
  number?: number;
  initialValue?: string;
  placeholder?: string;
}

export default Codecell;
