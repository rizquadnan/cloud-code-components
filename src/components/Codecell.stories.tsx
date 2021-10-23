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
    onRunCode={(value) => console.log("CODE CELL RUN CODE: ", value)}
  />
);

export const Default = Template.bind({});
Default.args = {
  language: "go",
  placeholder: `This is code cell. Type here. Ctrl + Enter to run code`,
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  initialValue: CodeEditorStory.args?.value ?? "",
  language: "go",
};
