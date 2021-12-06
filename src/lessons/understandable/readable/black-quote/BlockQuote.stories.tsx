import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Blockquote } from "./Blockquote";
import { Principle } from "../../../../types/Principle";
import { Understandable } from "../../../../types/Understandable";

export default {
  title: `${Principle.UNDERSTANDABLE}/${Understandable.READABLE}`,
  component: Blockquote,
} as ComponentMeta<typeof Blockquote>;

const Template: ComponentStory<typeof Blockquote> = (args) => (
  <Blockquote {...args} />
);

export const blockQuote = Template.bind({});
blockQuote.args = {};
