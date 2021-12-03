import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Orientation } from "./Orientation";
import { Principle } from "../../../../types/Principle";
import { Perceivable } from "../../../../types/Perceivable";

export default {
  title: `${Principle.PERCEIVABLE}/${Perceivable.ADAPTATION}`,
  component: Orientation,
} as ComponentMeta<typeof Orientation>;

const Template: ComponentStory<typeof Orientation> = (args) => (
  <Orientation {...args} />
);

export const orientation = Template.bind({});
orientation.args = {};
