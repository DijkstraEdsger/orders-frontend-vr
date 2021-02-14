import React, { Component, useState } from "react";
import classes from "./BackArrow.module.css";
import PropTypes from "prop-types";

class BackArrow extends Component {
  state = {
    showParent: false,
    // hideFather: false
    parent: this.props.parent,
    current: this.props.current
  };

  setShowParent = () => {
    console.log("setShowChildren");
    this.setState({
      showParent: true,
      // hideFather: true
    });
    this.props.right();
  };

  moveBackwardHandler = () => {
    console.log('clicked back');
    // this.setState({
    //   move: -80,
    // });
    // this.props.move(-80);
    this.props.clicked(this.state.parent, this.state.current);
  };

  render() {
    if (this.state.showParent) {
      console.log("render BackArrow");
    }

    let item = (
      <a href={this.props.link}>
        <div>{this.props.children}</div>
      </a>
    );

    item = (
      <a
        className={this.props.active ? classes.active : null}
        // onClick={this.setShowParent}
        onClick={this.moveBackwardHandler}
      >
        <div>
          <i
            className={[classes.LeftArrow, "fa fa-arrow-left"].join(" ")}
          ></i>
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
  left: PropTypes.func,
  clicked: PropTypes.func
};

export default BackArrow;
