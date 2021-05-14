import React from "react";
import { ButtonContainer } from "./styles.js";

const Button = ({ children, ...props }) => (
  <ButtonContainer {...props}>{children}</ButtonContainer>
);

export default Button;
