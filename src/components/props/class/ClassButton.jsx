import React from "react";

class ClassButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.changeValue} id={this.props.id}>
          {/* TODO event occrus at most inner element! */}
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default ClassButton;
