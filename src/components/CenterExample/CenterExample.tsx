import React from "react";
import { Container, Typography, Box } from "@mui/material";

interface Props {
  title: string;
}

export const CenterExample: React.FC<Props> = (props) => {
  const { children, title } = props;

  return (
    <Container
      sx={{
        marginTop: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1">{title}</Typography>
      <Box sx={{ marginTop: 4 }}>{children}</Box>
    </Container>
  );
};
