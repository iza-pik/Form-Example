import React from "react";

const Input = ({ ...props }) => {
  return (
    <input
      // type={type}
      // id={id}
      // placeholder={placeholder}
      // value={value}
      // onChange={onChange}
      // required={required}
      {...props}
    />
  );
};

export default Input;
