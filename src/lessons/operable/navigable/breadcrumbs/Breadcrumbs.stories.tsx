import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Breadcrumbs } from "./Breadcrumbs";
import { Principle } from "../../../../types/Principle";
import { Operable } from "../../../../types/Operable";

export default {
  title: `${Principle.OPERABLE}/${Operable.NAVIGABLE}`,
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args} />
);

export const breadcrumbs = Template.bind({});
breadcrumbs.args = {};
