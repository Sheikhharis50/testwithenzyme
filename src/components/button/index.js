import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  constructor(props) {
    super(props);
    this.submitEvent = this.submitEvent.bind(this);
  }

  submitEvent() {
    if (this.props.onClickEvent) {
      this.props.onClickEvent();
    }
  }

  render() {
    const { text, type } = this.props;

    return (
      <button
        onClick={this.submitEvent}
        type={type}
        data-test="buttonComponent"
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onClickEvent: PropTypes.func,
};

export default Button;
