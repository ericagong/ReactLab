import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      hmm: 108,
    };
  }

  countHandler = () => {
    // Wrong way to use Asynchronous setState
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });

    // Correct way to use Asynchronous setState!
    this.setState((state, props) => {
      return {
        count: state.count + 1,
      };
    });

    this.setState(function (state, props) {
      return {
        count: state.count + 1,
      };
    });

    this.setState((s, _) => ({
      count: s.count + 1,
    }));
  };

  resetHandler = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <div>Count : {this.state.count}</div>
        <button onClick={this.countHandler}>count up!</button>
        <button onClick={this.resetHandler}>reset</button>
      </div>
    );
  }
}

export default ClassCounter;
