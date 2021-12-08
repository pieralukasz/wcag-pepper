import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Introduction } from "./Introduction";

export default {
  title: `Aria/Introduction`,
  component: Introduction,
} as ComponentMeta<typeof Introduction>;

const Template: ComponentStory<typeof Introduction> = (args) => (
  <Introduction {...args} />
);

export const introduction = Template.bind({});
introduction.args = {};
