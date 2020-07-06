import React from "react";
import PropTypes from "prop-types";

import Header from "components/core/Header";
import { Main, Container, Page } from "./LayoutStyle";

const Layout = ({ children }) => (
  <>
    <Header />
    <Main>
      <Container>
        <Page>{children}</Page>
      </Container>
    </Main>
  </>
);

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
