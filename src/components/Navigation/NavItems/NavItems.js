import React, { Component, useState } from "react";
import NavItem from "./NavItem.js/NavItem";
import classes from "./NavItems.module.css";
import PropTypes from "prop-types";
import BackArrow from "../BackArrow/BackArrow";
import HeadItem from "../SideDrawer/HeadItem/HeadItem";

class NavItems extends Component {
  state = {
    showAsChild: this.props.showChildren,
    left: false,
  };

  setLeftMove = () => {
    console.log("setLeftMove");
    this.setState({
      ...this.state,
      left: true,
    });
  };

  render() {
    let classesNavItems = [classes.NavItems];
    let backArrow = null;
    if (this.props.isChild) {
      classesNavItems = [classes.NavItems, classes.Children];
      backArrow = <BackArrow>{this.props.grandParentName}</BackArrow>;
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
            parent={this.props.parentName}
          >
            {item.name}
          </NavItem>
        );
      });
    }

    return (
      <ul className={classesNavItems.join(" ")}>
        {backArrow}
        <HeadItem>{this.props.parentName}</HeadItem>
        {items}
      </ul>
    );
  }
}

NavItems.propTypes = {
  items: PropTypes.array,
  isChild: PropTypes.bool,
  showAsChild: PropTypes.bool,
  parentName: PropTypes.string,
  grandParentName: PropTypes.string
};

export default NavItems;
