import React from "react";

const Button = ({ text, changeValue, id, fontSize }) => {
  console.log(`${text} renderd from functional Component!`);
  return (
    <div>
      <button onClick={changeValue} id={id} style={{ fontSize: fontSize }}>
        {/* TODO event occrus at most inner element! */}
        {text}
      </button>
    </div>
  );
};

export default Button;
