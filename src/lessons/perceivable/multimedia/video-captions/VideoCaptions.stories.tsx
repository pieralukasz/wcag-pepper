import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { VideoCaptions } from "./VideoCaptions";
import { Principle } from "../../../../types/Principle";
import { Perceivable } from "../../../../types/Perceivable";

export default {
  title: `${Principle.PERCEIVABLE}/${Perceivable.MULTIMEDIA}`,
  component: VideoCaptions,
} as ComponentMeta<typeof VideoCaptions>;

const Template: ComponentStory<typeof VideoCaptions> = (args) => (
  <VideoCaptions {...args} />
);

export const videoCaptions = Template.bind({});
videoCaptions.args = {};
