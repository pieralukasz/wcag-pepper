import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { CenterExample } from "../../../../components/CenterExample/CenterExample";

export const Epilepsy: React.FC = () => {
  const [color, setColor] = useState<"red" | "white">("white");

  const runEpilepsy = () => {
    setTimeout(() => {
      setColor("red");
    }, 50);
    setTimeout(() => {
      setColor("white");
    }, 75);
    setTimeout(() => {
      setColor("red");
    }, 100);
    setTimeout(() => {
      setColor("white");
    }, 125);
    setTimeout(() => {
      setColor("red");
    }, 150);
    setTimeout(() => {
      setColor("white");
    }, 175);
  };

  return (
    <>
      <Button onClick={runEpilepsy}>Run epilepsy</Button>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: `${color}`,
          position: "fixed",
        }}
      />
    </>
  );
};
