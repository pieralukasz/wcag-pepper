import React from "react";
import { Link, styled } from "@mui/material";

interface Props {
  id: string;
}

const Bypass = styled(Link)`
  position: fixed;
  top: -200px;
  background: green;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  display: inline-block;

  &:focus {
    top: 0;
  }
`;

export const BypassBlock: React.VFC<Props> = (props) => {
  const { id } = props;
  return <Bypass href={id}>Przejdź do kontentu</Bypass>;
};
