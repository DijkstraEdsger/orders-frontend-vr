import React, { Component, useState } from "react";
import NavItem from "./NavItem.js/NavItem";
import classes from "./NavItems.module.css";
import PropTypes from "prop-types";

class NavItems extends Component {
  state = {
    showAsChild: this.props.showChildren,
    left: false,
  };

  setLeftMove = () => {
    console.log('setLeftMove');
    this.setState({
      ...this.state,
      left: true,
    });
  };

  render() {
    let classesNavItems = [classes.NavItems];
    if (this.props.isChild) {
      classesNavItems = [classes.NavItems, classes.Children];
    }
    if (this.props.showAsChild) {
      classesNavItems = [classes.NavItems, classes.ChildrenVisible];
    }
    if (this.state.left) {
      classesNavItems = [classes.NavItems, classes.Left];
    }
    let items = null;
    if (this.props.items) {
      items = this.props.items.map((item) => {
        return (
          <NavItem
            link={item.link}
            key={item.name}
            childrenItems={item.childrenItems}
            left={this.setLeftMove}
          >
            {item.name}
          </NavItem>
        );
      });
    }

    return <ul className={classesNavItems.join(" ")}>{items}</ul>;
  }
}

NavItems.propTypes = {
  items: PropTypes.array,
  isChild: PropTypes.bool,
  showAsChild: PropTypes.bool,
};

export default NavItems;
