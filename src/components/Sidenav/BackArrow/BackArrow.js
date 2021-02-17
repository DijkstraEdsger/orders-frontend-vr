import React, { Component, useState } from "react";
import classes from "./BackArrow.module.css";
import PropTypes from "prop-types";

class BackArrow extends Component {
  state = {
    parent: this.props.parent,
    current: this.props.current,
  };

  moveBackwardHandler = () => {
    this.props.clicked(this.state.parent, this.state.current);
  };

  render() {
    let item = (
      <a href={this.props.link}>
        <div>{this.props.children}</div>
      </a>
    );

    item = (
      <a
        className={this.props.active ? classes.active : null}
        onClick={this.moveBackwardHandler}
      >
        <div>
          <i className={[classes.LeftArrow, "fa fa-arrow-left"].join(" ")}></i>
        </div>
        <div>{this.props.children}</div>
      </a>
    );
    return <li className={classes.BackArrow}>{item}</li>;
  }
}

BackArrow.propTypes = {
  active: PropTypes.bool,
  link: PropTypes.string,
  clicked: PropTypes.func,
  parent: PropTypes.number,
  current: PropTypes.number,
  clicked: PropTypes.func,
};

export default BackArrow;
