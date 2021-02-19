import React, { ReactNode } from "react";

import { Container } from "./styles";

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <Container>{children}</Container>;
};

export default Title;
