import React from "react";
import PropTypes from "prop-types";
import { ButtonContent } from "./ButtonStyle";

const Button = ({ children, handleClick }) => (
  <ButtonContent onClick={handleClick} as="button">
    {children}
  </ButtonContent>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  handleClick: null,
};

export default Button;
