import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label }: ButtonProps) => (
  <ChakraButton>{label}</ChakraButton>
);
