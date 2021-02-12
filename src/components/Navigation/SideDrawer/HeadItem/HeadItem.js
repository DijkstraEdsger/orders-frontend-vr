import React, { Component } from "react";
import classes from "./HeadItem.module.css";

class HeadItem extends Component {
  render() {
    return (
      <li className={classes.HeadItem}>
        <div>{this.props.children}</div>
      </li>
    );
  }
}

export default HeadItem;
