import React from "react";

// const Checkbox = ({ type, name, title, checked, onChange }) => (
//   <label>
//     {title}
//     <input type={type} name={name} checked={checked} onChange={onChange} />
//   </label>
// );

const Checkbox = ({ title, ...props }) => (
  <label>
    {title}
    <input {...props} />
  </label>
);

export default Checkbox;
