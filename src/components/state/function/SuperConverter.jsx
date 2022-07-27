import React from "react";
import Converter from "./Converter";

const SuperConverter = (props) => {
  let [selected, setSelected] = React.useState("0");
  const selectHandler = (event) => {
    // console.log(event.target.value);
    setSelected(event.target.value);
  };
  return (
    <div>
      <h1>Super Converter</h1>
      <select value={selected} onChange={selectHandler}>
        <option value='0'>Select Converter!</option>
        <option value='1'>Hour - Minute Converter</option>
        <option value='2'>Mile - Kilometer Converter</option>
      </select>
      <hr />
      {selected === "0" ? <h3>Please Select Converter type!</h3> : null}
      {selected === "1" ? <Converter from='Hour' to='Minutes' /> : null}
      {selected === "2" ? <Converter from='Kilometer' to='Meter' /> : null}
    </div>
  );
};

export default SuperConverter;
