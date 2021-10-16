import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Textarea from "./Textarea";

export default {
  title: "Textarea",
  component: Textarea,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = () => <Textarea />;

export const Default = Template.bind({});
