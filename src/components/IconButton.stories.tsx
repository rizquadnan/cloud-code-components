import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MdSave, MdAdd, MdDelete, MdPlayArrow, MdStop } from "react-icons/md";
import { HStack } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icons";
import IconButton from "./IconButton";
import theme from "../theme";

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

const icons = [MdSave, MdAdd, MdDelete, MdPlayArrow, MdStop];

export const AllUsedIcons: ComponentStory<typeof IconButton> = () => (
  <HStack spacing="2">
    {icons.map((icon) => (
      <IconButton
        key="key"
        icon={<Icon as={icon} w={iconSize} h={iconSize} />}
      />
    ))}
  </HStack>
);
