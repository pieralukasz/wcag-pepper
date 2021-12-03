import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FocusOrder } from "./FocusOrder";
import { Principle } from "../../../../types/Principle";
import { Operable } from "../../../../types/Operable";

export default {
  title: `${Principle.OPERABLE}/${Operable.NAVIGABLE}`,
  component: FocusOrder,
} as ComponentMeta<typeof FocusOrder>;

const Template: ComponentStory<typeof FocusOrder> = (args) => (
  <FocusOrder {...args} />
);

export const focusOrder = Template.bind({});
focusOrder.args = {};
