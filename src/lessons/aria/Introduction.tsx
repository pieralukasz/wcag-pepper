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
          <Paragraph>ARIA definiuje semantyczność</Paragraph>
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
          <SecondTitle sx={{ marginTop: 3 }}>Czym są ROLE</SecondTitle>
          <Paragraph>
            Role służą do definiowania typu elementu interfejsu użytkownika (UI)
          </Paragraph>
          <Paragraph id="roleExample">Dzielimy je na:</Paragraph>
          <List aria-labelledby="roleExample">
            <ListItem>ABSTRACT ROLES</ListItem>
            <ListItem>
              DOCUMENT STRUCTURE ROLES (img, document, heading, list, listitem,
              toolbar)
            </ListItem>
            <ListItem>
              LANDMARK ROLES (banner, contentinfo, form, main, navigation,
              search)
            </ListItem>
            <ListItem>
              WIDGET ROLES (alert, button, checkbox, link, menuitem, tab,
              tabpanel)
            </ListItem>
          </List>
          <SecondTitle>Jak pracować z ARIA?</SecondTitle>
          <Paragraph>Są one stosowane do </Paragraph>
          <Paragraph>
            Istnieją 4 grupy <span lang="en">States and properties</span>
          </Paragraph>
          <List>
            <ListItem lang="en">
              Drag-and-Drop Attributes (aria-dropeffect, aria-grabbed)
            </ListItem>
            <ListItem lang="en">
              Live Region Attributes (aria-atomic, aria-busy, aria-live)
            </ListItem>
            <ListItem lang="en">
              Relationship Attributes (aria-describedby, aria-labelledby)
            </ListItem>
            <ListItem lang="en">
              Widget Attributes (aria-autocomplete, aria-checked, aria-disabled,
              aria-label, aria-required)
            </ListItem>
          </List>
        </Article>
      </Main>
      <footer style={{ height: 100 }} />
    </>
  );
};
