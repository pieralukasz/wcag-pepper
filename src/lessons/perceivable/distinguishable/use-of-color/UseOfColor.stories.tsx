import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UseOfColor } from "./UseOfColor";
import { Principle } from "../../../../types/Principle";
import { Perceivable } from "../../../../types/Perceivable";

export default {
  title: `${Principle.PERCEIVABLE}/${Perceivable.DISTINGUISHABLE}`,
  component: UseOfColor,
} as ComponentMeta<typeof UseOfColor>;

const Template: ComponentStory<typeof UseOfColor> = (args) => (
  <UseOfColor {...args} />
);

export const useOfColor = Template.bind({});
useOfColor.args = {};
