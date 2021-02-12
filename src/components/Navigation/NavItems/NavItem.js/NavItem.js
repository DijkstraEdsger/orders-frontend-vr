import React, { Component, useState } from "react";
import classes from "./NavItem.module.css";
import PropTypes from "prop-types";
import NavItems from "../NavItems";

class NavItem extends Component {
  state = {
    showChildren: false,
    // hideFather: false
  };

  setShowChildren = () => {
    console.log("setShowChildren");
    this.setState({
      showChildren: true,
      // hideFather: true
    });
    this.props.left();
  };

  render() {
    if (this.state.showChildren) {
      console.log("render NavItem");
    }

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
          onClick={this.setShowChildren}
          // onClick={this.props.left}
        >
          <div>{this.props.children}</div>
          <div>
            {this.props.childrenItems ? (
              <i className={[classes.RightArrow, "fa fa-chevron-right"].join(" ")}></i>
            ) : null}
          </div>
        </a>
      );
      childrenItems = (
        <NavItems
          items={this.props.childrenItems}
          isChild={true}
          showAsChild={this.state.showChildren}
          parentName={this.props.children}
          grandParentName={this.props.parent}
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
  parent: PropTypes.string
};

export default NavItem;
