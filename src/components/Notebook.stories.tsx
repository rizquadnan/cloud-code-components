import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Notebook, { NotebookCell } from "./Notebook";

export default {
  title: "Notebook",
  component: Notebook,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Notebook>;

const Template: ComponentStory<typeof Notebook> = (args) => (
  <Notebook {...args} />
);

const cellList: NotebookCell[] = [
  {
    type: "markdown",
    value: `## The interactive workflow: input, output, history`,
    key: "0",
  },
  {
    type: "code",
    value: `2+10`,
    resultValue: `12`,
    runOrder: 1,
    key: "1",
  },
  {
    type: "markdown",
    value: "Getting help:",
    key: "2",
  },
];

export const Default = Template.bind({});
Default.args = {
  language: "python",
  cellList,
};
