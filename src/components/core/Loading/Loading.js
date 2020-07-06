import React from "react";
import PropTypes from "prop-types";

import { Container, Text } from "./LoadingStyle";

const Loading = ({ isLoading, children }) => {
  if (isLoading)
    return (
      <Container>
        <Text>Calculating...</Text>
      </Container>
    );

  return children;
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.any,
};

Loading.defaultProps = {
  isLoading: false,
  children: null,
};

export default Loading;
