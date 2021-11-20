import {
  IconButton as ChakraIconButton,
  IconButtonProps as ChakraIconButtonProps,
} from "@chakra-ui/button";
import React from "react";

function IconButton({ size = "sm", ...otherProps }: ChakraIconButtonProps) {
  return <ChakraIconButton size={size} {...otherProps} />;
}
export default IconButton;
