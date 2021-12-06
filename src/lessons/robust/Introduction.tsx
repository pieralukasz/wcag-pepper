import React from "react";
import { Helmet } from "react-helmet";
import { Principle } from "../../types/Principle";
import { Typography, Container, Box, List, ListItem } from "@mui/material";

import { linkTo } from "@storybook/addon-links";
import { PrincipleTitle } from "../../components/PrincipleTitle/PrincipleTitle";
import { Headline } from "../../components/Headline/Headline";
import { BypassBlock } from "../../components/BypassBlock/BypassBlock";
import { Operable } from "../../types/Operable";
import { Understandable } from "../../types/Understandable";

export const Introduction: React.VFC = () => {
  const title = `${Principle.ROBUST} | Introduction`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <BypassBlock id="#main-headline" />
      <Container sx={{ marginTop: 2 }}>
        <Headline id="main-headline" title="Zasada 4 – Solidność" />

        <Typography sx={{ marginTop: 1 }}>
          Za dużo w sumie to tutaj nie ma do powiedzenia bo w więkoszści zajmuje
          się tym edytor i framework z którego korzystamy. Poprawnie
          sformatowany kod itd jakieś role i status message czyli np. Poprawnie
          przesłałeś formularz
        </Typography>
      </Container>
    </>
  );
};
