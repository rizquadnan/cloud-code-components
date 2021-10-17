import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Codecell from "./Codecell";

export default {
  title: "Codecell",
  component: Codecell,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Codecell>;

const Template: ComponentStory<typeof Codecell> = () => <Codecell />;

export const Default = Template.bind({});
