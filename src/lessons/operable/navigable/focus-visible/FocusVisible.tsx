import React from "react";
import { Box, Button, List, ListItem, styled } from "@mui/material";
import { CenterExample } from "../../../../components/CenterExample/CenterExample";

const FocusBox = styled(Box)`
  *:focus {
    outline: 3px dashed orange;
    outline-offset: 2px;
  }
`;

export const FocusVisible: React.FC = () => {
  return (
    <FocusBox>
      <CenterExample title={"Focus Visible"}>
        <List>
          <ListItem>
            <Button disableFocusRipple variant="contained">
              Menu 1
            </Button>
          </ListItem>
          <ListItem>
            <Button disableFocusRipple variant="contained">
              Menu 2
            </Button>
          </ListItem>
          <ListItem>
            <Button disableFocusRipple variant="contained">
              Menu 3
            </Button>
          </ListItem>
          <ListItem>
            <Button disableFocusRipple variant="contained">
              Menu 4
            </Button>
          </ListItem>
          <ListItem>
            <Button disableFocusRipple variant="contained">
              Menu 5
            </Button>
          </ListItem>
        </List>
      </CenterExample>
    </FocusBox>
  );
};
