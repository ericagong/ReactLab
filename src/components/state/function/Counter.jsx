import React from "react";

const Counter = (props) => {
  let [count, setCount] = React.useState(0);
  const countHandler = () => {
    // Wrong way
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // Right way
    setCount((count) => {
      console.log(count);
      return count + 1;
    });

    setCount(function (count) {
      console.log(count);
      return count + 1;
    });

    setCount((c) => c + 1);
  };
  const resetHandler = () => {
    setCount(0);
  };
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={countHandler}>count up!</button>
      <button onClick={resetHandler}>reset</button>
    </div>
  );
};

export default Counter;
