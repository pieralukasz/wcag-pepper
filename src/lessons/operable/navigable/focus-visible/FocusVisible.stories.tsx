import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FocusVisible } from "./FocusVisible";
import { Principle } from "../../../../types/Principle";
import { Operable } from "../../../../types/Operable";

export default {
  title: `${Principle.OPERABLE}/${Operable.NAVIGABLE}`,
  component: FocusVisible,
} as ComponentMeta<typeof FocusVisible>;

const Template: ComponentStory<typeof FocusVisible> = (args) => (
  <FocusVisible {...args} />
);

export const focusVisible = Template.bind({});
focusVisible.args = {};
