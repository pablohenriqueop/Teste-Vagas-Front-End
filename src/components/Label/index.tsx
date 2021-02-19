import React, { ReactNode } from "react";

import { Container } from "./styles";

interface LabelProps {
  children: ReactNode;
}

const Label = ({ children }: LabelProps) => {
  return <Container>{children}</Container>;
};

export default Label;
