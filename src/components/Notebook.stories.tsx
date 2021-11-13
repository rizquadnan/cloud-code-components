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
    initialValue: "",
    key: "0",
  },
  {
    type: "code",
    initialValue: "",
    key: "1",
  },
  {
    type: "markdown",
    initialValue: "",
    key: "2",
  },
];

export const Default = Template.bind({});
Default.args = {
  language: "go",
  cellList,
};
