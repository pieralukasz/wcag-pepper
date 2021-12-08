import React from "react";
import { Typography, TypographyProps } from "@mui/material";

export const Paragraph: React.FC<TypographyProps> = (props) => {
  const { children, sx, ...rest } = props;
  return (
    <Typography sx={{ marginTop: 1, ...sx }} {...rest}>
      {children}
    </Typography>
  );
};
