import React, { ReactNode } from "react";

import { Container } from "./styles";

interface BoxProps {
  children: ReactNode;
}

const Box = ({ children }: BoxProps) => {
  return <Container>{children}</Container>;
};

export default Box;
