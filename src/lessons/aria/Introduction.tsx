import React from "react";
import { Helmet } from "react-helmet";
import {
  Typography,
  Container,
  Box,
  ListItem,
  List,
  Link,
} from "@mui/material";

import { Headline } from "../../components/Headline/Headline";
import { BypassBlock } from "../../components/BypassBlock/BypassBlock";
import { VisuallyHidden } from "../../components/VisuallyHidden/VisuallyHidden";
import { Main } from "../../components/Main/Main";
import { Article } from "../../components/Article/Article";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { SecondTitle } from "../../components/SecondTitle/SecondTitle";

export const Introduction: React.VFC = () => {
  return (
    <>
      <Helmet>
        <title>WAI-ARIA</title>
      </Helmet>
      <BypassBlock id="#main-headline" />
      <Main>
        <Article>
          <Headline id="main-headline" title="WAI-ARIA" />
          <Paragraph>
            ARIA służą nam do poinformowania użytkownika korzystającego ze
            screen readera o pewnych informacjach na stronie.
          </Paragraph>
          <SecondTitle>Zasady ARIA</SecondTitle>
          <Typography sx={{ marginTop: 2 }} variant="h3">
            Pierwsza zasada ARIA
          </Typography>
          <Paragraph>
            Kiedy nie musisz używać ARIA, nie rób tego, skoro masz zamiennik w
            postaci semantycznego HTML'a.
          </Paragraph>
          <Typography sx={{ marginTop: 1 }} variant="h3">
            Druga zasada ARIA
          </Typography>
          <Paragraph>
            Nie zmieniaj semantycznego HTML'a, chyba, że musisz.
          </Paragraph>
          <Typography sx={{ marginTop: 1 }} variant="h3">
            Trzecia zasada ARIA
          </Typography>
          <Paragraph>
            Wszystkie ARIA control muszą być obsługiwane przez klawiaturę.
          </Paragraph>
          <Typography sx={{ marginTop: 1 }} variant="h3">
            Czwarta zasada ARIA
          </Typography>
          <Paragraph>
            Nie używaj role="presentation" i aria-hidden="true" na focusowanych
            elementach.
          </Paragraph>
          <Typography sx={{ marginTop: 1 }} variant="h3">
            Piąta zasada ARIA
          </Typography>
          <Paragraph>
            Wszystkie interaktywne elementy muszą być podpisane.
          </Paragraph>
        </Article>
      </Main>
      <footer style={{ height: 100 }} />
    </>
  );
};
