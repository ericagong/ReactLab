import React from "react";
import ClassConverter from "./ClassConverter";

class ClassSuperConverter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "0",
      flipped: false,
    };
    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다. CRA에서는 자동 동작
    this.selectHandler = this.selectHandler.bind(this);
  }

  selectHandler = (event) => {
    // console.log(event.target.value);
    this.setState({ selected: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Super Converter</h1>
        <select value={this.state.selected} onChange={this.selectHandler}>
          <option value='0'>Select Converter!</option>
          <option value='1'>Hour - Minutes Converter</option>
          <option value='2'>Kilometer - Meter Converter</option>
        </select>
        <hr />
        {this.state.selected === "0" ? (
          <h3>Please Select Converter type!</h3>
        ) : null}
        {this.state.selected === "1" ? (
          <ClassConverter from='Hour' to='Minutes' />
        ) : null}
        {this.state.selected === "2" ? (
          <ClassConverter from='Kilometer' to='Meter' />
        ) : null}
      </div>
    );
  }
}

export default ClassSuperConverter;
