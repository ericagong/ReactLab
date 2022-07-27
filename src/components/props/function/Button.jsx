import React from "react";

const Button = ({ text, changeValue }) => {
  console.log(`${text} was renderd!`);
  return (
    <div>
      <button onClick={changeValue}>{text}</button>
    </div>
  );
};

export default Button;
