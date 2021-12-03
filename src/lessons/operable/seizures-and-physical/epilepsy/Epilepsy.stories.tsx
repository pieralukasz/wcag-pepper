import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Epilepsy } from "./Epilepsy";
import { Principle } from "../../../../types/Principle";
import { Operable } from "../../../../types/Operable";

export default {
  title: `${Principle.OPERABLE}/${Operable.SEIZURES_AND_PHYSICAL}`,
  component: Epilepsy,
} as ComponentMeta<typeof Epilepsy>;

const Template: ComponentStory<typeof Epilepsy> = (args) => (
  <Epilepsy {...args} />
);

export const epilepsy = Template.bind({});
epilepsy.args = {};
