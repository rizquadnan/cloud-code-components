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
    value: `# IPython: beyond plain Python`,
    key: "0",
  },
  {
    type: "markdown",
    value: `When executing code in IPython, all valid Python syntax works as-is, but IPython provides a number of features designed to make the interactive experience more fluid and efficient.`,
    key: "1",
  },
  {
    type: "markdown",
    value: `## First things first: running code, getting help`,
    key: "2",
  },
  {
    type: "markdown",
    value: `In the notebook, to run a cell of code, hit \`Shift-Enter\`. This executes the cell and puts the cursor in the next cell below, or makes a new one if you are at the end.  Alternately, you can use:
- \`Alt-Enter\` to force the creation of a new cell unconditionally (useful when inserting new content in the middle of an existing notebook).
- \`Control-Enter\` executes the cell and keeps the cursor in the same cell, useful for quick experimentation of snippets that you don't need to keep permanently.`,
    key: "3",
  },
  {
    type: "code",
    value: `print("Hi")`,
    resultValue: `Hi`,
    runOrder: 1,
    key: "4",
  },
  {
    type: "markdown",
    value: "Getting help:",
    key: "5",
  },
  {
    type: "code",
    value: `?`,
    runOrder: 2,
    key: "6",
  },
  {
    type: "code",
    value: `prin("Hi")`,
    resultValue: `---------------------------------------------------------------------------
NameError                                 Traceback (most recent call last)
<ipython-input-1-4c2e160dfadf> in <module>
----> 1 prin("Hi")

NameError: name 'prin' is not defined`,
    runOrder: 3,
    key: "4",
  },
  {
    type: "code",
    value: `1 + 1`,
    isLoading: true,
    runOrder: 3,
    key: "4",
  },
];

export const Default = Template.bind({});
Default.args = {
  language: "python",
  cellList,
};
