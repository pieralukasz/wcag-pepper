import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FocusBypass } from "./FocusBypass";
import { Principle } from "../../../../types/Principle";
import { Operable } from "../../../../types/Operable";

export default {
  title: `${Principle.OPERABLE}/${Operable.NAVIGABLE}`,
  component: FocusBypass,
} as ComponentMeta<typeof FocusBypass>;

const Template: ComponentStory<typeof FocusBypass> = (args) => (
  <FocusBypass {...args} />
);

export const focusBypass = Template.bind({});
focusBypass.args = {};
