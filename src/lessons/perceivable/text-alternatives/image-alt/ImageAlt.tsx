import React from "react";

import { CenterExample } from "../../../../components/CenterExample/CenterExample";
// import { Accessibility } from "@mui/icons-material";

export const ImageAlt: React.VFC = () => {
  return (
    <CenterExample title="Image alt">
      <img
        src="https://avatarfiles.alphacoders.com/105/thumb-1920-105223.jpg"
        // alt="Link z Zeldy"
        // aria-describedby="p1"
      />
      {/*<p id="p1">*/}
      {/*  This painting dates back to 1730 and is oil on canvas. It was created by*/}
      {/*  Jean-Guy Millome, and represents ...*/}
      {/*</p>*/}
    </CenterExample>
  );
};
