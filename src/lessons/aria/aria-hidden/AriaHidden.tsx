import React from "react";

import { CenterExample } from "../../../components/CenterExample/CenterExample";
import { Paragraph } from "../../../components/Paragraph/Paragraph";
import { BypassBlock } from "../../../components/BypassBlock/BypassBlock";

export const AriaHidden: React.VFC = () => {
  return (
    <>
      <BypassBlock id="#visible" />
      <CenterExample title="aria-hidden">
        <Paragraph id="visible">Jestem widoczny dla screen readera</Paragraph>
        <Paragraph aria-hidden>Jestem niewidoczny dla screen readera</Paragraph>
      </CenterExample>{" "}
    </>
  );
};
