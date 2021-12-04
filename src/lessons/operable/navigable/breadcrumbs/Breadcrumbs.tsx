import React from "react";
import {
  Box,
  Typography,
  Breadcrumbs as MuiBreadcrumbs,
  Link,
} from "@mui/material";
import { Helmet } from "react-helmet";
import { CenterExample } from "../../../../components/CenterExample/CenterExample";
import { BypassBlock } from "../../../../components/BypassBlock/BypassBlock";
import { ExampleAppBar } from "../../../../components/ExampleAppBar/ExampleAppBar";
import { VisuallyHidden } from "../../../../components/VisuallyHidden/VisuallyHidden";

export const Breadcrumbs: React.FC = () => {
  return (
    <Box>
      <ExampleAppBar />
      <MuiBreadcrumbs
        sx={{ marginTop: 2, marginLeft: 4 }}
        separator="›"
        aria-label="breadcrumb"
      >
        <Link underline="hover" color="inherit" href="/">
          Boring
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href={"/getting-started/installation/"}
        >
          <VisuallyHidden>Przejdź do głównej strony</VisuallyHidden>
          Core
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href={"/products"}
          aria-current="page"
        >
          Products
          <VisuallyHidden>
            Na tej stronie aktualnie się znajdujesz
          </VisuallyHidden>
        </Link>
      </MuiBreadcrumbs>
      <Box role="main" id="main-content">
        <CenterExample title={"Breadcrumbs"}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            adipisci amet commodi cupiditate deserunt ducimus magni maxime natus
            nihil nisi placeat, quisquam, quod repellendus tempora ut veritatis
            voluptates. In nobis provident quae quisquam ut, vitae. Accusamus
            delectus deserunt ducimus est ex ipsum, itaque maxime mollitia natus
            nulla officiis possimus quam quod ratione reprehenderit similique
            tempora? Accusantium alias aut beatae, doloremque earum enim et id
            magni, nulla odit pariatur placeat quasi qui quibusdam quis repellat
            reprehenderit, rerum sequi totam veritatis voluptatem voluptatibus
            voluptatum. Atque cum ea eius eum itaque libero magnam natus
            pariatur quas similique. Asperiores dolorem excepturi in quasi
            totam?
          </Typography>
        </CenterExample>
      </Box>
    </Box>
  );
};
