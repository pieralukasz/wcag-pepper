import React from "react";
import { ExampleAppBar } from "../../../../components/ExampleAppBar/ExampleAppBar";
import { Box, Button, Typography } from "@mui/material";
import { CenterExample } from "../../../../components/CenterExample/CenterExample";
import { BypassBlock } from "../../../../components/BypassBlock/BypassBlock";

export const FocusBypass: React.FC = () => {
  return (
    <Box>
      <BypassBlock id={"#main-content"} />
      <ExampleAppBar />
      <Box role="main" id="main-content">
        <CenterExample title={"Focus Bypass Block"}>
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
