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
    hideAsChild: false,
  };

  setLeftMove = () => {
    console.log("setLeftMove");
    this.setState({
      ...this.state,
      left: true,
      // right: false
    });
  };

  setHideChildren = () => {
    console.log("setHideChildren");
    this.setState({
      ...this.state,
      hideAsChild: true,
      // hideFather: true
    });
    console.log('state', this.state);
  };

  render() {
    console.log('render NavItems');
    let classesNavItems = [classes.NavItems];
    let backArrow = null;
    if (this.props.isChild) {
      classesNavItems = [classes.NavItems, classes.Children];
      backArrow = (
        <BackArrow clicked={this.setHideChildren}>
          {this.props.grandParentName}
        </BackArrow>
      );
    }
    if (this.props.showAsChild) {
      classesNavItems = [classes.NavItems, classes.ChildrenVisible];
    }
    if (this.state.hideAsChild) {
      console.log('render NavItems hide');
      classesNavItems = [classes.NavItems, classes.Children];
    }
    if (this.state.left) {
      classesNavItems = [classes.NavItems, classes.Left];
    }
    // if (this.state.right) {
    //   classesNavItems = [classes.NavItems, classes.Right];
    // }
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
  hideAsChild: PropTypes.bool,
  parentName: PropTypes.string,
  grandParentName: PropTypes.string,
};

export default NavItems;
