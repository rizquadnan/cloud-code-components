import { Button, ButtonProps } from "@chakra-ui/button";
import React, { ReactNode } from "react";

function IconButton({ icon, size = "sm" }: ButtonIconProps) {
  return (
    <Button variant="outline" size={size}>
      {icon}
    </Button>
  );
}

export interface ButtonIconProps {
  icon: ReactNode;
  size?: ButtonProps["size"];
}
export default IconButton;
