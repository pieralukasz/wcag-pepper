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
import { Section } from "../../components/Section/Section";
import { Article } from "../../components/Article/Article";
import { Main } from "../../components/Main/Main";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { SecondTitle } from "../../components/SecondTitle/SecondTitle";

export const Introduction: React.VFC = () => {
  return (
    <>
      <Helmet>
        <title>Screen Readers</title>
      </Helmet>
      <BypassBlock id="#main-headline" />
      <Main>
        <Article>
          <Headline id="main-headline" title="Accessibility" />
          <Paragraph>
            Czym właściwie jest dostępność stron internetowych?
          </Paragraph>
          <img
            style={{ marginTop: 8 }}
            width={700}
            src="https://images.samsung.com/is/image/samsung/assets/latin_en/p6_gro2/accessibility/overview/accessibility_overview_meaningful-innovation_pc.jpg?$FB_TYPE_A_JPG$"
            alt="Ten tekst powinien być duży i opisać wszystko co znajduje się na obrazku"
          />
          <Paragraph>Dużo by mówić...</Paragraph>
          <SecondTitle>Semantyczny HTML</SecondTitle>
          <Paragraph>
            Semantyczny HTML pozwala nam okiełznać całą stronę.{" "}
            <Link
              sx={{ marginTop: 1 }}
              href="https://codepen.io/huijing/full/wOXzNx?fbclid=IwAR1hM6hT31G7ix9nPmjVwDlreOEetqUJH4ODd0oqboAyXbsqQe1O0jO7SFo"
            >
              Fajna tabelka
            </Link>
          </Paragraph>
          <SecondTitle>Drzewko dostępności</SecondTitle>
          <Paragraph>
            Jest to inaczej model dostępności obiektu (AOM), który zawiera
            wszystkie informacje z dostępnością dla większości elementów HTML.
          </Paragraph>
          <img
            style={{ marginTop: 8 }}
            src="https://developers.google.com/web/fundamentals/accessibility/semantics-aria/imgs/acctree1.jpg?hl=pl"
            alt="Drzewko dostępności z DOM"
          />
          <SecondTitle id="semanticHTML">
            Elementy semantycznego HTML'a
          </SecondTitle>
          <Paragraph>Rozróżniamy kilka wartości semantycznego HTML'a</Paragraph>
          <List aria-labelledby="semanticHTML">
            <ListItem>
              <span lang="en">Role</span> - Jaką role odgrywa dany element
            </ListItem>
            <ListItem>
              <span lang="en">Title/ Name/ Placeholder/ Label/ Alt</span> -
              Część opisująca
            </ListItem>
            <ListItem>
              <span lang="en">State</span> - Stan elementu
            </ListItem>
            <ListItem>
              <span lang="en">Value</span> - Jaką wartość ma element
            </ListItem>
          </List>
          <SecondTitle>Landmarks</SecondTitle>
          <Paragraph>
            Czym są landmarki i jak osoby z niepełnosprawnościami z nich
            korzystają?
          </Paragraph>
          <List>
            <ListItem>
              <pre>{`<main />`}</pre>
            </ListItem>
            <ListItem>
              <pre>{`<nav />`}</pre>
            </ListItem>
            <ListItem>
              <pre>{`<aside />`}</pre>
            </ListItem>
            <ListItem>
              <pre>{`<section />`}*</pre>
            </ListItem>
            <ListItem>
              <pre>{`<header />`}*</pre>
            </ListItem>
            <ListItem>
              <pre>{`<footer />`}*</pre>
            </ListItem>
          </List>

          <SecondTitle>Testy E2E dla a11y</SecondTitle>
          <Link
            sx={{ marginTop: 3 }}
            href="https://github.com/dequelabs/axe-cli"
            title="Jakiś link"
          >
            https://github.com/dequelabs/axe-cli
          </Link>
        </Article>
      </Main>
      <footer style={{ height: 100 }} />
    </>
  );
};
