import React from "react";

class ClassForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      team: "",
      number: 0,
    };
  }

  componentDidMount() {
    console.log("Class :: First rendered!");
    console.log("Class :: team name rendered!");
    console.log("Class :: number rendered!");
    console.log("Class :: team name or number rendered!");
  }

  componentDidUpdate() {
    console.log("Class :: team name may be rendered!");
    console.log("Class :: number may be rendered!");
    console.log("Class :: team name or number must rendered!");
  }

  changeHandler = (event) => {
    // console.log(event.target);
    const id = event.target.id;
    this.setState({ [id]: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type='text'
          id='team'
          placeholder='Team Name'
          value={this.state.team}
          onChange={this.changeHandler}
        />
        <input
          type='number'
          id='number'
          value={this.state.number}
          onChange={this.changeHandler}
        />
        <div>Typed Team Name: {this.state.team}</div>
        <div>Typed Team Members: {this.state.number}</div>
      </div>
    );
  }
}

export default ClassForm;
