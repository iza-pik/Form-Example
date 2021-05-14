import React from "react";

// const Button = ({ type, children, onClick }) => (
//   <button type={type} onClick={onClick}>
//     {children}
//   </button>
// );
const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

export default Button;
