import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Introduction } from "./Introduction";
import { Principle } from "../../types/Principle";

export default {
  title: `${Principle.PERCEIVABLE}/Introduction`,
  component: Introduction,
} as ComponentMeta<typeof Introduction>;

const Template: ComponentStory<typeof Introduction> = (args) => (
  <Introduction {...args} />
);

export const introduction = Template.bind({});
introduction.args = {};
