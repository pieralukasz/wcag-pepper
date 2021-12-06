import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Introduction } from "./Introduction";

export default {
  title: `Screen Readers`,
  component: Introduction,
} as ComponentMeta<typeof Introduction>;

const Template: ComponentStory<typeof Introduction> = (args) => (
  <Introduction {...args} />
);

export const screenReaders = Template.bind({});
screenReaders.args = {};
