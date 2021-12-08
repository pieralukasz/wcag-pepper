import React from "react";
import { Box, Typography } from "@mui/material";
import { CenterExample } from "../../../../components/CenterExample/CenterExample";

export const Blockquote: React.VFC = () => {
  return (
    <CenterExample title="Lang Screen Reader">
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2">Espanol</Typography>
        <Typography lang="es" sx={{ marginTop: 2 }}>
          Más vale pájaro en mano que ciento volando.
        </Typography>
      </Box>
      <Box sx={{ marginTop: 4, textAlign: "center" }}>
        <Typography variant="h2">France</Typography>
        <Typography lang="fr" sx={{ marginTop: 2 }}>
          La barbe ne fait pas l’homme.
        </Typography>
      </Box>
      <Box sx={{ marginTop: 3 }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0uzxu9dQnuU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
    </CenterExample>
  );
};
