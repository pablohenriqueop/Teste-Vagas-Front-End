import React from "react";

import { Container } from "./styles";

interface SpacerProps {
  size?: "small" | "medium";
}

const Spacer = ({ size = "small" }: SpacerProps) => {
  return <Container size={size}></Container>;
};

export default Spacer;
