import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MarkdownCell from "./MarkdownCell";

export default {
  title: "MarkdownCell",
  component: MarkdownCell,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MarkdownCell>;

const Template: ComponentStory<typeof MarkdownCell> = () => <MarkdownCell />;

export const Default = Template.bind({});
