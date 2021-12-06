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

interface Props {
  id?: string;
  role?: string;
}

export const VisuallyHidden: React.FC<Props> = (props) => {
  const { children, id, role } = props;

  return (
    <Hidden id={id} role={role}>
      {children}
    </Hidden>
  );
};
