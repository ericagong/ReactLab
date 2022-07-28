import React from "react";

import SuperConverter from "./components/state/function/SuperConverter";
import ClassSuperConverter from "./components/state/class/ClassSuperConverter";
import Button from "./components/props/function/Button";
import ClassButton from "./components/props/class/ClassButton";
import ClassCounter from "./components/state/class/ClassCounter";
import Counter from "./components/state/function/Counter";

// const MemorizedBtn = React.memo(Button);
const MemorizedClassBtn = React.memo(ClassButton);

function App() {
  const [value1, setValue1] = React.useState("A");
  const [value2, setValue2] = React.useState("A");
  const changeValue = (event) => {
    // console.log(event.target);
    const id = event.target.id;
    if (id === "1") {
      setValue1((curr) => {
        if (curr === "A") return "B";
        else return "A";
      });
    } else {
      setValue2((curr) => {
        if (curr === "A") return "B";
        else return "A";
      });
    }
  };
  return (
    <div className='App'>
      <div className='stateLab'>
        <div className='basicState'>
          <h3>Converter with Functional Component</h3>
          <SuperConverter></SuperConverter>
          <hr />
          <h3>Converter with Class Component</h3>
          <ClassSuperConverter></ClassSuperConverter>
        </div>
        <div className='asynchronousState'>
          <h3>Counter setState with Functional Component</h3>
          <Counter hi='hi' />
          <h3>Counter setState with Class Component</h3>
          <ClassCounter hi='hi' />
        </div>
      </div>
      <hr />
      <div className='propsLab'>
        <h3>Button with functional Component</h3>
        <Button text={value1} id='1' changeValue={changeValue} fontSize={15} />
        <Button text='other' fontSize={changeValue} />
        <hr />
        <h3>Button with class Component</h3>
        <ClassButton text={value2} id='2' changeValue={changeValue} />
        <ClassButton text='other' />
      </div>
    </div>
  );
}

export default App;
