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
          <Paragraph>
            a11y Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Delectus deserunt dicta nemo perferendis quaerat. Aut, quam
            voluptatum? A architecto distinctio eius, esse expedita facere
            molestias possimus voluptate. Adipisci alias autem consequatur
            distinctio ducimus eius ex expedita facere id minima nisi, officia
            officiis quaerat quod soluta. Beatae culpa error facere libero quae,
            recusandae ut vitae! Facere illo in sed? Ad aspernatur at aut
            dolores doloribus eaque eius eum expedita fugit hic impedit,
            inventore ipsam libero minima molestias, nemo placeat quod
            reiciendis, saepe veritatis vitae voluptas voluptatibus? Animi at
            consequuntur est eveniet harum neque nobis officiis optio quasi qui.
            Excepturi, minima, veniam.
          </Paragraph>
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
          <SecondTitle id="semanticHTML">
            Elementy semantycznego HTML'a?
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
