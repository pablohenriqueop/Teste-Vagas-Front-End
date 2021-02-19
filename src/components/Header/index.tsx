import React, { ReactNode } from "react";

import { Container } from "./styles";

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return <Container>{children}</Container>;
};

export default Header;
