import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ImageAlt } from "./ImageAlt";
import { Principle } from "../../../../types/Principle";
import { Perceivable } from "../../../../types/Perceivable";

export default {
  title: `${Principle.PERCEIVABLE}/${Perceivable.ALTERNATIVE_TEXTS}`,
  component: ImageAlt,
} as ComponentMeta<typeof ImageAlt>;

const Template: ComponentStory<typeof ImageAlt> = (args) => (
  <ImageAlt {...args} />
);

export const imageAlt = Template.bind({});
imageAlt.args = {};
