import React from "react";
import { Typography, TypographyProps } from "@mui/material";

export const SecondTitle: React.FC<TypographyProps> = (props) => {
  const { children, variant, sx, ...rest } = props;

  return (
    <Typography variant="h2" sx={{ marginTop: 1, ...sx }} {...rest}>
      {children}
    </Typography>
  );
};
