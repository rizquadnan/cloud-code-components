import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CellWrapper from "./CellWrapper";
import Codecell from "./Codecell";
import MarkdownCell from "./MarkdownCell";

export default {
  title: "CellWrapper",
  component: CellWrapper,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CellWrapper>;

const Template: ComponentStory<typeof CellWrapper> = (args) => (
  <CellWrapper {...args} />
);

export const WrappingCodeCell = Template.bind({});
WrappingCodeCell.args = {
  children: (
    <Codecell
      language="go"
      onRunCode={(value) => console.log("CODE CELL RUN CODE: ", value)}
      placeholder="This is code cell. Type here. Ctrl + Enter to run code"
      onChange={() => console.log("")}
    />
  ),
};

export const WrappingCodeCellActive = Template.bind({});
WrappingCodeCellActive.args = {
  ...WrappingCodeCell.args,
  mode: "active",
};

export const WrappingMarkdownCell = Template.bind({});
WrappingMarkdownCell.args = {
  children: <MarkdownCell onChange={() => console.log("")} />,
};

export const WrappingMarkdownCellActive = Template.bind({});
WrappingMarkdownCellActive.args = {
  ...WrappingMarkdownCell.args,
  mode: "active",
};
