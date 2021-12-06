import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ErrorAssistance } from "./ErrorAssistance";
import { Principle } from "../../../../types/Principle";
import { Understandable } from "../../../../types/Understandable";

export default {
  title: `${Principle.UNDERSTANDABLE}/${Understandable.INPUT_ASSISTANCE}`,
  component: ErrorAssistance,
} as ComponentMeta<typeof ErrorAssistance>;

const Template: ComponentStory<typeof ErrorAssistance> = (args) => (
  <ErrorAssistance {...args} />
);

export const errorAssistance = Template.bind({});
errorAssistance.args = {};
