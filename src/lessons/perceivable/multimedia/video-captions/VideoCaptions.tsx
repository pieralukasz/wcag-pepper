import React from "react";
import { CenterExample } from "../../../../components/CenterExample/CenterExample";

export const VideoCaptions: React.FC = () => {
  return (
    <CenterExample title={"Video Captions"}>
      <video width="640" height="480" controls>
        <source src="assets/sample-video.mp4" type="video/mp4" />
        <track src="assets/sample_captions.vtt" />
      </video>
    </CenterExample>
  );
};
