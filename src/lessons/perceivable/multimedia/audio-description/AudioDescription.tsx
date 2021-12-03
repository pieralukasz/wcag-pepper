import React from "react";
import { CenterExample } from "../../../../components/CenterExample/CenterExample";
import { Box } from "@mui/material";

export const AudioDescription: React.FC = () => {
  return (
    <CenterExample title={"Audio Description"}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <audio controls data-default="default" preload="none">
          <source src="assets/sample-audio.mp3" type="audio/mp3" />
        </audio>
        <video width="640" height="480" controls>
          <source src="assets/sample-video.mp4" type="video/mp4" />
        </video>
      </Box>
    </CenterExample>
  );
};
