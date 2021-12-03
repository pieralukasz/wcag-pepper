import React, { useEffect, useState } from "react";

import { CenterExample } from "../../../../components/CenterExample/CenterExample";
import { Box, Card, CardContent, styled, Typography } from "@mui/material";
// import { Accessibility } from "@mui/icons-material";

const Container = styled(Box)`
  display: flex;

  @media (orientation: landscape) {
    flex-direction: row;
  }

  @media (orientation: portrait) {
    flex-direction: column;
  }
`;

export const Orientation: React.VFC = () => {
  // const [orientation, setOrientation] = useState<"landscape" | "portrait">(
  //   "portrait"
  // );
  //
  // useEffect(() => {
  //   if (window.innerHeight > window.innerWidth) {
  //     setOrientation("landscape");
  //   } else {
  //     setOrientation("portrait");
  //   }
  // }, [window.innerHeight, window.innerWidth]);
  return (
    <CenterExample title={`Orientation`}>
      <Container>
        <Card sx={{ margin: 1 }}>
          <CardContent>
            <Typography variant="h2">Jakiś tytuł</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Adipisci, alias amet architecto consectetur, cum cupiditate
              ducimus eligendi esse exercitationem id illum impedit itaque nam
              nisi quaerat sapiente tempora unde vel! A at dolores eaque eius
              ipsum minima optio reiciendis rerum ut, vero. Alias aspernatur
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ margin: 1 }}>
          <CardContent>
            <Typography variant="h2">Jakiś tytuł 2</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Adipisci, alias amet architecto consectetur, cum cupiditate
              ducimus eligendi esse exercitationem id illum impedit itaque nam
              nisi quaerat sapiente tempora unde vel!
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ margin: 1 }}>
          <CardContent>
            <Typography variant="h2">Jakiś tytuł 3</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Adipisci, alias amet architecto consectetur, cum cupiditate
              ducimus eligendi esse exercitationem id illum impedit itaque nam
              nisi quaerat sapiente tempora unde vel! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Et maiores optio provident.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </CenterExample>
  );
};
