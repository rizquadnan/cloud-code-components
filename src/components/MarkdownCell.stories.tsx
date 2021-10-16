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
  value: `# Read, *mode*. Here's what you can do:
  - Double click to enter edit mode
  - \`ctrl\` key + \`enter\` key to execute cell and render markdown in read mode
  ---
  Read [here](https://duckduckgo.com) for markdown basics`,
};
