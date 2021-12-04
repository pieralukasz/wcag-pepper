import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RadioLabelGroup } from "./RadioLabelGroup";
import { Principle } from "../../../../types/Principle";
import { Operable } from "../../../../types/Operable";

export default {
  title: `${Principle.OPERABLE}/${Operable.NAVIGABLE}`,
  component: RadioLabelGroup,
} as ComponentMeta<typeof RadioLabelGroup>;

const Template: ComponentStory<typeof RadioLabelGroup> = (args) => (
  <RadioLabelGroup {...args} />
);

export const radioLabelGroup = Template.bind({});
radioLabelGroup.args = {};
