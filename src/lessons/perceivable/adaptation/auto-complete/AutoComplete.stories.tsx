import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AutoComplete } from "./AutoComplete";
import { Principle } from "../../../../types/Principle";
import { Perceivable } from "../../../../types/Perceivable";

export default {
  title: `${Principle.PERCEIVABLE}/${Perceivable.ADAPTATION}`,
  component: AutoComplete,
} as ComponentMeta<typeof AutoComplete>;

const Template: ComponentStory<typeof AutoComplete> = (args) => (
  <AutoComplete {...args} />
);

export const autoComplete = Template.bind({});
autoComplete.args = {};
