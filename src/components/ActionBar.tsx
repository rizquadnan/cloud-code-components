import React from "react";
import { HStack } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icons";
import { useTheme } from "@chakra-ui/system";
import { IconButton } from "@chakra-ui/button";
import actionBarIcons from "../config/ActionBarIcons";

function ActionBar() {
  const { iconSize } = useTheme();

  return (
    <HStack>
      {actionBarIcons.map(({ key, icon, ariaLabel }) => (
        <IconButton
          size="sm"
          key={key}
          aria-label={ariaLabel}
          icon={<Icon as={icon} w={iconSize} h={iconSize} />}
        />
      ))}
    </HStack>
  );
}

export default ActionBar;
