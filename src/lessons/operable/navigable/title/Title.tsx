import React from "react";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet";
import { CenterExample } from "../../../../components/CenterExample/CenterExample";

export const Title: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sample Title</title>
      </Helmet>
      <CenterExample title={"Title"}>
        <div />
      </CenterExample>
    </>
  );
};
