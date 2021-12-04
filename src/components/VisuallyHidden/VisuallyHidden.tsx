import React from "react";
import { styled } from "@mui/material";

const Hidden = styled("span")`
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const VisuallyHidden: React.FC = (props) => {
  const { children } = props;

  return <Hidden>{children}</Hidden>;
};
