import React, { Component } from "react";
import classes from "./NavItems.module.css";
import PropTypes from "prop-types";

class NavItems extends Component {
  render() {
    return (
      <ul className={classes.NavItems} style={{ left: this.props.posX }}>
        {this.props.children}
      </ul>
    );
  }
}

NavItems.propTypes = {
  posX: PropTypes.string,
};

export default NavItems;
