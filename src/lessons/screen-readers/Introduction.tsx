import React from "react";
import { Helmet } from "react-helmet";
import { Typography, Container } from "@mui/material";

import { Headline } from "../../components/Headline/Headline";
import { BypassBlock } from "../../components/BypassBlock/BypassBlock";

export const Introduction: React.VFC = () => {
  return (
    <>
      <Helmet>
        <title>Screen Readers</title>
      </Helmet>
      <BypassBlock id="#main-headline" />
      <Container sx={{ marginTop: 2 }}>
        <Headline id="main-headline" title="Screen readers" />
        <Typography sx={{ marginTop: 1 }}>
          Po co właściwie nam są walidatory? No a po to żebyśmy sprawdzili w
          jaki sposób nasza strona internetowa jest zgodna z WCAG 2.0 lub WCAG
          2.1 w konkretnych poziomach tj. A, AA, AAA. Staramy się zazwyczaj żeby
          nasza strona była zgodna z WCAG 2.1 oraz poziomem AA. Osiągnięcie
          poziomu AAA bywa czasem bardzo trudne. Większość stron niestety nawet
          nie oferuje minimalnego poziomu A.
        </Typography>
      </Container>
    </>
  );
};
