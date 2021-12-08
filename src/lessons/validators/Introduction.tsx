import React from "react";
import { Helmet } from "react-helmet";
import {
  Typography,
  Container,
  Link,
  Box,
  List,
  ListItem,
} from "@mui/material";

import { Headline } from "../../components/Headline/Headline";
import { BypassBlock } from "../../components/BypassBlock/BypassBlock";
import { PrincipleTitle } from "../../components/PrincipleTitle/PrincipleTitle";
import { linkTo } from "@storybook/addon-links";
import { Principle } from "../../types/Principle";
import { Perceivable } from "../../types/Perceivable";
import { VisuallyHidden } from "../../components/VisuallyHidden/VisuallyHidden";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { Main } from "../../components/Main/Main";
import { Article } from "../../components/Article/Article";
import { SecondTitle } from "../../components/SecondTitle/SecondTitle";

export const Introduction: React.VFC = () => {
  const validators = [
    {
      href: "https://validator.w3.org/nu/#textarea",
      name: "Nu HTML checker",
    },
    {
      href: "https://achecker.ca/checker/index.php",
      name: "Achecker",
    },
    {
      href: "https://wave.webaim.org/",
      name: "Wave",
    },
    {
      href: "https://validator.ampproject.org/",
      name: "AMPProject",
    },
    {
      href: "https://www.validity.org.uk/",
      name: "Validity",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Validators</title>
      </Helmet>
      <BypassBlock id="#main-headline" />
      <Main>
        <Article>
          <Headline id="main-headline" title="Walidatory" />
          <Paragraph>
            Po co właściwie nam są walidatory? No a po to żebyśmy sprawdzili w
            jaki sposób nasza strona internetowa jest zgodna z WCAG 2.0 lub WCAG
            2.1 w konkretnych poziomach tj. A, AA, AAA. Staramy się zazwyczaj
            żeby nasza strona była zgodna z WCAG 2.1 oraz poziomem AA.
            Osiągnięcie poziomu AAA bywa czasem bardzo trudne. Większość stron
            niestety nawet nie oferuje minimalnego poziomu A.
          </Paragraph>
          <Paragraph>
            Więc co daje nam walidator? No sprawdzi nam stronkę ale tylko w
            około w 20% resztą musi się zając człowiek z użyciem czytnika
            ekranu.
          </Paragraph>
          <SecondTitle>Darmowe walidatory kodu HTML</SecondTitle>
          <Paragraph id="validatorsExample">
            Przykłady darmowych walidatorów kodu:
          </Paragraph>
          <List aria-labelledby="validatorsExample">
            {validators.map(({ name, href }) => (
              <ListItem key={name}>
                {
                  <Link href={href}>
                    <VisuallyHidden>
                      Kliknij aby przejść na stronę walidatora:
                    </VisuallyHidden>
                    {name}
                  </Link>
                }
              </ListItem>
            ))}
          </List>
          <Link
            href="https://yvettesbridalformal.p1r8.net/"
            aria-label="Przejdź na zajebistą stronę"
          >
            Zajebista strona
          </Link>
        </Article>
      </Main>
    </>
  );
};
