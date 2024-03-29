import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Codecell from "./Codecell";
import { Default as CodeEditorStory } from "./CodeEditor.stories";

export default {
  title: "Codecell",
  component: Codecell,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Codecell>;

const Template: ComponentStory<typeof Codecell> = (args) => (
  <Codecell
    {...args}
    // eslint-disable-next-line no-console
    language="go"
    onRunCode={(value) => console.log("CODE CELL RUN CODE: ", value)}
    placeholder="This is code cell. Type here. Ctrl + Enter to run code"
  />
);

export const Default = Template.bind({});

export const WithNumber = Template.bind({});
WithNumber.args = {
  number: 1,
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  initialValue: CodeEditorStory.args?.value ?? "",
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const WithResult = Template.bind({});
WithResult.args = {
  initialValue: `print("Hi")`,
  result: "Hi",
  number: 1,
};

export const WithError = Template.bind({});
WithError.args = {
  initialValue: `prin("Hi")`,
  result: `---------------------------------------------------------------------------
  NameError                                 Traceback (most recent call last)
  <ipython-input-1-4c2e160dfadf> in <module>
  ----> 1 prin("Hi")
  
  NameError: name 'prin' is not defined`,
  number: 1,
};
