import React from "react";
import { CheckboxContainer } from "./styles.js";

const Checkbox = ({ title, ...props }) => (
  <CheckboxContainer>
    <label>
      {title}
      <input {...props} />
    </label>
  </CheckboxContainer>
);

export default Checkbox;
