import React from "react";
import PropTypes from "prop-types";

import { handleInputMask } from "helpers/masks";
import { Container, Label, Field } from "./InputStyle";

const Input = ({ name, type, label, register, mask }) => (
  <Container>
    <Label htmlFor={name}>{label}</Label>
    <Field
      ref={register}
      id={name}
      name={name}
      type={type}
      data-testid={name}
      autoComplete="off"
      onInput={(e) => {
        handleInputMask(e, mask);
      }}
    />
  </Container>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  register: PropTypes.func,
};

Input.defaultProps = {
  label: "",
  register: null,
};

export default Input;
