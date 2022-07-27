import React from "react";

class ClassConverter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      flipped: false,
      unitMultiplier: this.props.from === "Hour" ? 60 : 1000,
    };

    // this.changeHandler = this.changeHandler(this);
  }

  changeHandler = (event) => {
    // console.log(event.target.value);
    this.setState({ amount: event.target.value });
  };

  clickHandler = (event) => {
    // console.log(event.target.id);
    const id = event.target.id;
    if (id === "reset") {
      this.setState({ amount: 0 });
    } else {
      // this.setState({ amount: 0, flipped: !this.state.flipped }); //Not TODO
      this.setState((state) => ({ amount: 0, flipped: !state.flipped })); // TODO check!
    }
  };

  render() {
    return (
      <div>
        <h3>
          Convert {this.props.from} to {this.props.to}!
        </h3>
        <div>
          <label>{this.props.from}</label>
          <input
            type='number'
            id={this.props.from}
            value={
              !this.state.flipped
                ? this.state.amount
                : this.state.amount / this.state.unitMultiplier
            }
            onChange={this.changeHandler}
            disabled={this.state.flipped}
          />
        </div>
        <div>
          <label>{this.props.to}</label>
          <input
            type='number'
            id={this.props.to}
            value={
              !this.state.flipped
                ? this.state.amount * this.state.unitMultiplier
                : this.state.amount
            }
            onChange={this.changeHandler}
            disabled={!this.state.flipped}
          />
        </div>
        <button id='reset' onClick={this.clickHandler}>
          Reset
        </button>
        <button id='flip' onClick={this.clickHandler}>
          Flip
        </button>
      </div>
    );
  }
}

export default ClassConverter;
