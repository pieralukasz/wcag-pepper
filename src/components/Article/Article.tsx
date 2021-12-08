import React from "react";
import { Box, BoxProps } from "@mui/material";

export const Article: React.FC<BoxProps> = (props) => {
  const { children, component, ...rest } = props;

  return (
    <Box component="article" {...rest}>
      {children}
    </Box>
  );
};
