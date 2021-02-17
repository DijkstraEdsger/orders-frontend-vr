import React, { Component, useState } from "react";
import classes from "./NavItem.module.css";
import PropTypes from "prop-types";

class NavItem extends Component {
  state = {
    parent: this.props.parent,
    child: this.props.child,
  };

  moveForwardHandler = () => {
    this.props.clicked(this.state.parent, this.state.child);
  };

  render() {
    let item = (
      <a
        className={this.props.active ? classes.active : null}
        href={this.props.link}
      >
        <div>{this.props.children}</div>
      </a>
    );

    if (this.props.child !== -1) {
      item = (
        <a
          className={this.props.active ? classes.active : null}
          onClick={this.moveForwardHandler}
        >
          <div>{this.props.children}</div>
          <div>
            {this.props.child !== -1 ? (
              <i
                className={[classes.RightArrow, "fa fa-chevron-right"].join(
                  " "
                )}
              ></i>
            ) : null}
          </div>
        </a>
      );
    }
    return <li className={classes.NavItem}>{item}</li>;
  }
}

NavItem.propTypes = {
  active: PropTypes.bool,
  link: PropTypes.string,
  child: PropTypes.number,
  parent: PropTypes.number,
  clicked: PropTypes.func,
};

export default NavItem;
