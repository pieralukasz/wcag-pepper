import React from "react";
import { styled, Typography } from "@mui/material";

const Title = styled(Typography)`
  &:focus-within {
    outline: none;
  }
`;

interface Props {
  title: string;
  id: string;
}

export const Headline: React.FC<Props> = (props) => {
  const { title, id } = props;

  return (
    <Title id={id} variant="h1" fontWeight="bold" tabIndex={-1}>
      {title}
    </Title>
  );
};
