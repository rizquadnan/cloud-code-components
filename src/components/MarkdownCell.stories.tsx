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

const Template: ComponentStory<typeof MarkdownCell> = (args) => (
  <MarkdownCell {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: `# Read, *mode*.
  **Double click me!**`,
};
