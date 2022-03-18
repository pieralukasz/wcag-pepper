import React, { useState } from "react";

import { CenterExample } from "../../../components/CenterExample/CenterExample";

export const AriaAtomic: React.VFC = () => {
  const [value, setValue] = useState(0);

  const updateValue = () => {
    setValue(value + 1);
  };

  return (
    <CenterExample title="aria-atomic">
      <button onClick={updateValue}>Update points</button>
      <h2>Current score</h2>
      <span aria-live="polite" aria-atomic>
        {value}
      </span>
    </CenterExample>
  );
};
