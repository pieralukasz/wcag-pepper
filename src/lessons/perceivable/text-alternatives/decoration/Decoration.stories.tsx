import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Decoration } from "./Decoration";
import { Principle } from "../../../../types/Principle";
import { Perceivable } from "../../../../types/Perceivable";

export default {
  title: `${Principle.PERCEIVABLE}/${Perceivable.ALTERNATIVE_TEXTS}`,
  component: Decoration,
} as ComponentMeta<typeof Decoration>;

const Template: ComponentStory<typeof Decoration> = (args) => (
  <Decoration {...args} />
);

export const decoration = Template.bind({});
decoration.args = {};
