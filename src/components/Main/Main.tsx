import React from "react";
import { Box, BoxProps, Container } from "@mui/material";

export const Main: React.FC<BoxProps> = (props) => {
  const { children, component, ...rest } = props;

  return (
    <Box component="main" {...rest} style={{ marginTop: 16 }}>
      <Container>{children}</Container>
    </Box>
  );
};
