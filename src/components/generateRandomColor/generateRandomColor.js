import React from "react";

const GenerateRandomColor = () => {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  return "rgb(" + r + ", " + g + ", " + b + ")";
};

export default GenerateRandomColor;
