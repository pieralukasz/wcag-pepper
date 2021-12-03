import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AudioDescription } from "./AudioDescription";
import { Principle } from "../../../../types/Principle";
import { Perceivable } from "../../../../types/Perceivable";

export default {
  title: `${Principle.PERCEIVABLE}/${Perceivable.MULTIMEDIA}`,
  component: AudioDescription,
} as ComponentMeta<typeof AudioDescription>;

const Template: ComponentStory<typeof AudioDescription> = (args) => (
  <AudioDescription {...args} />
);

export const audioDescription = Template.bind({});
audioDescription.args = {};
