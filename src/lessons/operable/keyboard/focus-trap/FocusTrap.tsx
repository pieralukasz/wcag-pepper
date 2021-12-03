import React from "react";

import { Box, Button, Card as MuiCard, styled } from "@mui/material";
import ReactFocusTrap from "focus-trap-react";

import { CenterExample } from "../../../../components/CenterExample/CenterExample";

const Card = styled(MuiCard)`
  border: 3px solid lightsalmon;
  padding: 16px;
  box-shadow: none;
`;

const ButtonBox = styled(Box)`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

export const FocusTrap: React.FC = () => {
  return (
    <CenterExample title={"Focus Trap"}>
      <Card>
        <ReactFocusTrap>
          <div>
            <ButtonBox>
              <Button variant="contained">TEXT 1</Button>
              <Button sx={{ marginLeft: 4 }} variant="contained">
                TEXT 2
              </Button>
            </ButtonBox>
            <ButtonBox>
              <Button variant="contained">TEXT 3</Button>
              <Button sx={{ marginLeft: 4 }} variant="contained">
                TEXT 4
              </Button>
            </ButtonBox>
          </div>
        </ReactFocusTrap>
      </Card>
      <Box sx={{ marginTop: 6 }}>
        <img
          src="https://memegenerator.net/img/instances/42675224.jpg"
          alt="Obrazek przedstawia mem Leonidasa krzyczaęcego NEVER"
        />
      </Box>
    </CenterExample>
  );
};
