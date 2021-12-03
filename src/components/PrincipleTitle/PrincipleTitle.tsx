import React from "react";
import { Box, IconButton, Link, Typography } from "@mui/material";
import { linkTo } from "@storybook/addon-links";
import { Principle } from "../../types/Principle";
import { Perceivable } from "../../types/Perceivable";
import { Accessibility } from "@mui/icons-material";

interface Props {
  title: string;
  altLabel: string;
  onClick: () => void;
}

export const PrincipleTitle: React.VFC<Props> = (props) => {
  const { title, altLabel, onClick } = props;

  return (
    <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      <Typography id="alternativeTextHeadline" variant="h2">
        {title}
      </Typography>
      <IconButton
        component={Link}
        role="link"
        onClick={onClick}
        aria-label={altLabel}
      >
        <Accessibility />
      </IconButton>
    </Box>
  );
};
