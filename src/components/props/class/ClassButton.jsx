import React from "react";
import PropTypes from "prop-types";

class ClassButton extends React.Component {
  render() {
    console.log(`${this.props.text} rendered!`);
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

ClassButton.propTypes = {
  id: PropTypes.string,
  hello: PropTypes.string.isRequired,
};

export default ClassButton;
