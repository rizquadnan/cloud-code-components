import { Button, ButtonProps } from "@chakra-ui/button";
import React, { ReactNode } from "react";

function IconButton({ icon, size = "sm", onClick }: ButtonIconProps) {
  return (
    <Button variant="outline" size={size} onClick={onClick}>
      {icon}
    </Button>
  );
}

export interface ButtonIconProps extends Pick<ButtonProps, "size" | "onClick"> {
  icon: ReactNode;
}
export default IconButton;
