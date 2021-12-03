import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FocusTrap } from "./FocusTrap";
import { Principle } from "../../../../types/Principle";
import { Operable } from "../../../../types/Operable";

export default {
  title: `${Principle.OPERABLE}/${Operable.KEYBOARD}`,
  component: FocusTrap,
} as ComponentMeta<typeof FocusTrap>;

const Template: ComponentStory<typeof FocusTrap> = (args) => (
  <FocusTrap {...args} />
);

export const focusTrap = Template.bind({});
focusTrap.args = {};
