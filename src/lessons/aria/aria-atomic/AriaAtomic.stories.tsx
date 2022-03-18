import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AriaAtomic } from "./AriaAtomic";

export default {
  title: `Aria/Example`,
  component: AriaAtomic,
} as ComponentMeta<typeof AriaAtomic>;

const Template: ComponentStory<typeof AriaAtomic> = (args) => (
  <AriaAtomic {...args} />
);

export const ariaAtomic = Template.bind({});
ariaAtomic.args = {};
