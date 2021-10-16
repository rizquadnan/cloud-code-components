import React from "react";
import {
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/textarea";
import ResizeTextarea from "react-textarea-autosize";

function Textarea(props: TextareaProps) {
  return (
    <ChakraTextarea
      as={ResizeTextarea}
      minH="unset"
      overflow="hidden"
      w="100%"
      resize="none"
      minRow={1}
      transition="height none"
      {...props}
    />
  );
}

export interface TextareaProps extends ChakraTextareaProps {}

export default Textarea;
