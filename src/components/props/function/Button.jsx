import React from "react";

const Button = ({ text, changeValue, id }) => {
  console.log(`${text} was renderd!`);
  return (
    <div>
      <button onClick={changeValue} id={id}>
        {/* TODO event occrus at most inner element! */}
        {text}
      </button>
    </div>
  );
};

export default Button;
