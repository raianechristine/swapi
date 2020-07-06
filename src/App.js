import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "routes";

import Layout from "components/core/Layout";
import GlobalStyle from "./styles/globalStyle";

const App = () => (
  <Router>
    <Layout>
      <Routes />
    </Layout>
    <GlobalStyle />
  </Router>
);

export default App;
