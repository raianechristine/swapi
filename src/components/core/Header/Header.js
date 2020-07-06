import React from "react";

import swLogo from "assets/images/sw-logo.png";
import { Container, Wrapper, Logo } from "./HeaderStyle";

const Header = () => (
  <Container>
    <Wrapper>
      <Logo src={swLogo} />
    </Wrapper>
  </Container>
);

export default Header;
