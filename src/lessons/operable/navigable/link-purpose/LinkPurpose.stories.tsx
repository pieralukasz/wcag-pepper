import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LinkPurpose } from "./LinkPurpose";
import { Principle } from "../../../../types/Principle";
import { Operable } from "../../../../types/Operable";

export default {
  title: `${Principle.OPERABLE}/${Operable.NAVIGABLE}`,
  component: LinkPurpose,
} as ComponentMeta<typeof LinkPurpose>;

const Template: ComponentStory<typeof LinkPurpose> = (args) => (
  <LinkPurpose {...args} />
);

export const linkPurpose = Template.bind({});
linkPurpose.args = {};
