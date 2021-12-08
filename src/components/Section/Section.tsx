import React from "react";
import { Box, BoxProps } from "@mui/material";

export const Section: React.FC<BoxProps> = (props) => {
  const { children, component, sx, ...rest } = props;

  return (
    <Box component="section" {...rest} sx={{ marginTop: 1, ...sx }}>
      {children}
    </Box>
  );
};
