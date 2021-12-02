import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SVGTitle } from "./SVGTitle";
import { Principle } from "../../../../types/Principle";
import { Perceivable } from "../../../../types/Perceivable";

export default {
  title: `${Principle.PERCEIVABLE}/${Perceivable.ALTERNATIVE_TEXTS}`,
  component: SVGTitle,
} as ComponentMeta<typeof SVGTitle>;

const Template: ComponentStory<typeof SVGTitle> = (args) => (
  <SVGTitle {...args} />
);

export const svgTitle = Template.bind({});
svgTitle.args = {};
