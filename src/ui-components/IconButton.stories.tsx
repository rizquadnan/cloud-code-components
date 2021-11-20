import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HStack } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icons";
import { MdSave } from "react-icons/md";
import IconButton from "./IconButton";
import theme from "../theme";

import actionBarIcons from "../config/ActionBarIcons";

export default {
  title: "IconButton",
  component: IconButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof IconButton>;

const { iconSize } = theme;

export const Default: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

Default.args = {
  icon: <Icon as={MdSave} w={iconSize} h={iconSize} />,
};

export const AllUsedIcons: ComponentStory<typeof IconButton> = () => (
  <HStack spacing="2">
    {actionBarIcons.map(({ key, icon, ariaLabel }) => (
      <IconButton
        key={key}
        aria-label={ariaLabel}
        icon={<Icon as={icon} w={iconSize} h={iconSize} />}
      />
    ))}
  </HStack>
);
