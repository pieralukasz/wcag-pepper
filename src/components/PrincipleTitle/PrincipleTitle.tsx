import React from "react";
import { Box, IconButton, Link, Typography } from "@mui/material";
import { linkTo } from "@storybook/addon-links";
import { Principle } from "../../types/Principle";
import { Perceivable } from "../../types/Perceivable";
import { Accessibility } from "@mui/icons-material";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";

interface Props {
  title: string;
  withButton?: boolean;
  altLabel?: string;
  onClick?: () => void;
}

export const PrincipleTitle: React.VFC<Props> = (props) => {
  const { title, altLabel, withButton = true, onClick } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 3,
      }}
    >
      <Typography id="alternativeTextHeadline" variant="h2">
        {title}
      </Typography>
      {withButton && (
        <IconButton component={Link} role="link" onClick={onClick}>
          <VisuallyHidden>{altLabel}</VisuallyHidden>
          <Accessibility />
        </IconButton>
      )}
    </Box>
  );
};
