import React, { Component, useState } from "react";
import classes from "./NavItem.module.css";
import PropTypes from "prop-types";
import NavItems from "../NavItems";

class NavItem extends Component {
  state = {
    move: null,
    // refactoring
    parent: this.props.parent,
    child: this.props.child
  };

  moveForwardHandler = () => {
    this.setState({
      move: -80,
    });
    this.props.move(-80);
  };

  moveBackwardHandler = () => {
    this.props.move(80);
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
    let childrenItems = null;

    if (this.props.childrenItems) {
      item = (
        <a
          className={this.props.active ? classes.active : null}
          onClick={this.moveForwardHandler}
        >
          <div>{this.props.children}</div>
          <div>
            {this.props.childrenItems ? (
              <i
                className={[classes.RightArrow, "fa fa-chevron-right"].join(
                  " "
                )}
              ></i>
            ) : null}
          </div>
        </a>
      );
      childrenItems = (
        <NavItems
          items={this.props.childrenItems}
          isChild={true}
          parentName={this.props.children}
          grandParentName={this.props.parentName}
          steps={this.state.move}
          backward={this.moveBackwardHandler}
        />
      );
    }
    return (
      <li className={classes.NavItem}>
        {item}
        {childrenItems}
      </li>
    );
  }
}

NavItem.propTypes = {
  active: PropTypes.bool,
  link: PropTypes.string,
  childrenItems: PropTypes.array,
  left: PropTypes.func,
  parentName: PropTypes.string,
};

export default NavItem;
