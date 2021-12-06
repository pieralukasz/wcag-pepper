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
      <Container sx={{ marginTop: 2 }}>
        <Headline id="main-headline" title="Walidatory" />
        <Typography sx={{ marginTop: 1 }}>
          Po co właściwie nam są walidatory? No a po to żebyśmy sprawdzili w
          jaki sposób nasza strona internetowa jest zgodna z WCAG 2.0 lub WCAG
          2.1 w konkretnych poziomach tj. A, AA, AAA. Staramy się zazwyczaj żeby
          nasza strona była zgodna z WCAG 2.1 oraz poziomem AA. Osiągnięcie
          poziomu AAA bywa czasem bardzo trudne. Większość stron niestety nawet
          nie oferuje minimalnego poziomu A.
        </Typography>
        <Typography sx={{ marginTop: 1 }}>
          Więc co daje nam walidator? No sprawdzi nam stronkę ale tylko w około
          w 20% resztą musi się zając człowiek z użyciem czytnika ekranu.
        </Typography>
        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
          <PrincipleTitle
            title="Darmowe walidatory kodu HTML"
            altLabel=""
            withButton={false}
            onClick={() => {}}
          />
          <Typography id="validatorsExample" sx={{ marginTop: 1 }}>
            Przykłady darmowych walidatorów kodu:
          </Typography>
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
          <Typography>
            <Link
              href="https://yvettesbridalformal.p1r8.net/"
              aria-label="Przejdź na zajebistą stronę"
            >
              Zajebista strona
            </Link>
          </Typography>
        </Box>
      </Container>
    </>
  );
};
