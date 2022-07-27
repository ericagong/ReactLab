import React from "react";

const Converter = ({ from, to }) => {
  let [amount, setAmount] = React.useState(0);
  let [flipped, setFlipped] = React.useState(false);
  const changeHandler = (event) => {
    // console.log(event.target);
    setAmount(event.target.value);
  };
  const clickHandler = (event) => {
    // console.log(event.target);
    const id = event.target.id;
    if (id === "reset") {
      setAmount(0);
    } else {
      setFlipped((curr) => !curr);
      setAmount(0);
    }
  };
  let unitMultiplier = from === "Hour" ? 60 : 1000;
  return (
    <div>
      <h3>
        Convert {!flipped ? from : to} to {!flipped ? to : from}!
      </h3>
      <div>
        <label htmlFor={from}>{from}</label>
        <input
          type='number'
          id={from}
          value={!flipped ? amount : amount / unitMultiplier}
          onChange={changeHandler}
          disabled={flipped}
        />
      </div>
      <div>
        <label htmlFor={to}>{to}</label>
        <input
          type='number'
          id={to}
          value={!flipped ? amount * unitMultiplier : amount}
          onChange={changeHandler}
          disabled={!flipped}
        />
      </div>
      <button id='reset' onClick={clickHandler}>
        Reset
      </button>
      <button id='flip' onClick={clickHandler}>
        Flip
      </button>
    </div>
  );
};

export default Converter;
