import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Location } from "./Location";
import { Principle } from "../../../../types/Principle";
import { Operable } from "../../../../types/Operable";

export default {
  title: `${Principle.OPERABLE}/${Operable.NAVIGABLE}`,
  component: Location,
} as ComponentMeta<typeof Location>;

const Template: ComponentStory<typeof Location> = (args) => (
  <Location {...args} />
);

export const location = Template.bind({});
location.args = {};
