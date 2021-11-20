import React from "react";
import {
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/textarea";
import ResizeTextarea from "react-textarea-autosize";
import { useToken } from "@chakra-ui/system";

function Textarea(props: TextareaProps) {
  const [blue600] = useToken("colors", ["blue.600"]);

  return (
    <ChakraTextarea
      as={ResizeTextarea}
      minH="unset"
      overflow="hidden"
      w="100%"
      resize="none"
      minrow={1}
      transition="height none"
      _focus={{
        zIndex: 1,
        borderColor: `${blue600}`,
        boxShadow: `0 0 0 1px ${blue600}`,
      }}
      {...props}
    />
  );
}

export interface TextareaProps extends ChakraTextareaProps {}

export default Textarea;
