import React from "react";
import ClassSuperConverter from "./components/state/class/ClassSuperConverter";
import SuperConverter from "./components/state/function/SuperConverter";
import Button from "./components/props/function/Button";

function App() {
  const [value, setValue] = React.useState("A");
  const changeValue = () => {
    setValue((curr) => {
      if (curr === "A") {
        return "B";
      } else {
        return "A";
      }
    });
  };
  return (
    <div className='App'>
      <div className='stateLab'>
        <h3>Converter with Functional Component</h3>
        <SuperConverter></SuperConverter>
        <hr />
        <h3>Converter with Class Component</h3>
        <ClassSuperConverter></ClassSuperConverter>
      </div>
      <hr />
      <div className='propsLab'>
        <h3>Button with functional Component</h3>
        <Button text={value} changeValue={changeValue} />
        <Button text='other' />
        <hr />
        <h3>Button with class Component</h3>
      </div>
    </div>
  );
}

export default App;
