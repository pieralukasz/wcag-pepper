import React from "react";
import { CenterExample } from "../../../../components/CenterExample/CenterExample";
import { Box, Link } from "@mui/material";
import { VisuallyHidden } from "../../../../components/VisuallyHidden/VisuallyHidden";

export const LinkPurpose: React.VFC = () => {
  return (
    <CenterExample title={"Link purpose"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          height: 200,
        }}
      >
        <Link href="/">Nie wiem co robię.</Link>
        <Link href="/" aria-label="Przejdź do strony głównej">
          Wiem co robię
        </Link>
        <Link href="/">
          <VisuallyHidden>Przejdź do strony głównej</VisuallyHidden> Też wiem co
          robię
        </Link>
      </Box>
    </CenterExample>
  );
};
