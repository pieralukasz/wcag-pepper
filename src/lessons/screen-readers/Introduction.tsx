import React from "react";
import { Helmet } from "react-helmet";
import { ListItem, List, Link } from "@mui/material";

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
        <title>Screen Readers</title>
      </Helmet>
      <BypassBlock id="#main-headline" />
      <Main sx={{ marginTop: 2 }}>
        <Article>
          <Headline id="main-headline" title="Screen readers" />
          <Paragraph>Po co nam czytniki ekranu?</Paragraph>
          <img
            style={{ marginTop: 16 }}
            alt="Na grafice widnieje ikona dostępności i coś tam jeszcze."
            src="https://www.audioeye.com/static/97727e1de8c825836c8d893f8609c16a/73e0d/76c03421-b4c3-4cdd-af53-b5689b20a048_audioeye-screen-reader-blog-image.webp"
          />
          <SecondTitle>Darmowe czytniki ekranu!</SecondTitle>
          <Paragraph id="screenExamples">
            Lista darmowych czytników ekranu:
          </Paragraph>
          <List aria-labelledby="screenExamples">
            <ListItem>
              <Link href="https://www.nvaccess.org/">
                <VisuallyHidden>Przejdź do strony</VisuallyHidden>NVDA Screen
                Reader
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://help.gnome.org/users/orca/stable/">
                <VisuallyHidden>Przejdź do strony</VisuallyHidden> Orca Screen
                Reader
              </Link>
            </ListItem>
            <ListItem>Wbudowane w system</ListItem>
          </List>
        </Article>
      </Main>
    </>
  );
};
