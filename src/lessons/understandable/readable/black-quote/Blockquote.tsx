import React from "react";
import { Box, Typography } from "@mui/material";
import { CenterExample } from "../../../../components/CenterExample/CenterExample";

export const Blockquote: React.VFC = () => {
  return (
    <CenterExample title="BlackQuote">
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2">Espanol</Typography>
        <Typography component="blockquote" lang="es" sx={{ marginTop: 2 }}>
          Más vale pájaro en mano que ciento volando.
        </Typography>
      </Box>
      <Box sx={{ marginTop: 4, textAlign: "center" }}>
        <Typography variant="h2">France</Typography>
        <Typography component="blockquote" lang="fr" sx={{ marginTop: 2 }}>
          La barbe ne fait pas l’homme.
        </Typography>
      </Box>
    </CenterExample>
  );
};
