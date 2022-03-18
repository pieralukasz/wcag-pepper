import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AriaHidden } from "./AriaHidden";

export default {
  title: `Aria/Example`,
  component: AriaHidden,
} as ComponentMeta<typeof AriaHidden>;

const Template: ComponentStory<typeof AriaHidden> = (args) => (
  <AriaHidden {...args} />
);

export const ariaHidden = Template.bind({});
ariaHidden.args = {};
