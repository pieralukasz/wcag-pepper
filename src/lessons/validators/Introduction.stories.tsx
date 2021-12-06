import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Introduction } from "./Introduction";
import { Principle } from "../../types/Principle";

export default {
  title: `Validators`,
  component: Introduction,
} as ComponentMeta<typeof Introduction>;

const Template: ComponentStory<typeof Introduction> = (args) => (
  <Introduction {...args} />
);

export const validators = Template.bind({});
validators.args = {};
