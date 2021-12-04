import React from "react";
import { CenterExample } from "../../../../components/CenterExample/CenterExample";
import {
  Box,
  RadioGroup,
  Typography,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@mui/material";

export const RadioLabelGroup: React.VFC = () => {
  return (
    <CenterExample title={"Radio Label Group"}>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Clear HTML
        </Typography>
        <fieldset style={{ marginTop: 16 }}>
          <legend>Rate your response</legend>
          <label htmlFor="hated">Hated it</label>
          <input type="radio" name="meal" id="hated" value="hated" />
          <input
            type="radio"
            name="meal"
            id="poor"
            value="poor"
            title="Disliked"
          />
          <input
            type="radio"
            name="meal"
            id="neutral"
            value="neutral"
            title="So-so"
          />
          <input
            type="radio"
            name="meal"
            id="okay"
            value="okay"
            title="Liked"
          />
          <input type="radio" name="meal" id="loved" value="loved" />
          <label htmlFor="loved">Loved it</label>
        </fieldset>
      </Box>
    </CenterExample>
  );
};
