import React from "react";

import { CenterExample } from "../../../../components/CenterExample/CenterExample";

export const SVGTitle: React.VFC = () => {
  return (
    <CenterExample title="SVG Title">
      <svg
        role="img"
        width="120"
        height="120"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Obrazek przedstawia niebieskie oko</title>
        <path
          d="M14 7.5C14 8.62368 13.381 9.72536 12.2119 10.5827C11.0435 11.4396 9.3808 12 7.5 12C5.6192 12 3.95654 11.4396 2.78806 10.5827C1.61899 9.72536 1 8.62368 1 7.5C1 6.37632 1.61899 5.27464 2.78806 4.41732C3.95654 3.56043 5.6192 3 7.5 3C9.3808 3 11.0435 3.56043 12.2119 4.41732C13.381 5.27464 14 6.37632 14 7.5Z"
          fill="white"
          stroke="#0047FF"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5 10C8.88071 10 10 8.88071 10 7.5C10 6.11929 8.88071 5 7.5 5C6.11929 5 5 6.11929 5 7.5C5 8.88071 6.11929 10 7.5 10Z"
          fill="#0047FF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5 8C7.77614 8 8 7.77614 8 7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5C7 7.77614 7.22386 8 7.5 8Z"
          fill="white"
        />
      </svg>
    </CenterExample>
  );
};
