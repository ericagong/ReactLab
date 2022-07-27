import React from "react";
import PropTypes from "prop-types";
const Button = ({ text, changeValue, id, fontSize }) => {
  console.log(`${text} was renderd!`);
  return (
    <div>
      <button onClick={changeValue} id={id} style={{ fontSize: fontSize }}>
        {/* TODO event occrus at most inner element! */}
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  changeValue: PropTypes.func,
  id: PropTypes.string,
  fondSize: PropTypes.number,
};

export default Button;
