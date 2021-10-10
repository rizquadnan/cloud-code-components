import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Markdown from "./Markdown";

export default {
  title: "Markdown",
  component: Markdown,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Markdown>;

const Template: ComponentStory<typeof Markdown> = (args) => (
  <Markdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "# Hello, *world*!",
};
