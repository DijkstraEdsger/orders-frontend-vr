import React, { Component, useState } from "react";
import NavItem from "./NavItem.js/NavItem";
import classes from "./NavItems.module.css";
import PropTypes from "prop-types";
import BackArrow from "../BackArrow/BackArrow";
import HeadItem from "../SideDrawer/HeadItem/HeadItem";

class NavItems extends Component {
  // constructor(props) {
  //   super(props);
  //   this.elementRef = React.createRef();
  // }

  state = {
    // showAsChild: this.props.showChildren,
    // left: false,
    // hideAsChild: false,
    // refactor
    // positionX: this.props.isChild ? "80vw" : this.props.positionX,
    positionX: this.props.positionX,
    // isChild:
  };

  // componentDidMount() {
  //   this.elementRef.current.style.left = (this.elementRef.current.style.left + this.state.positionX).toString() + "vw";
  //   // console.log('this.elementRef.current.style.left', this.elementRef.current.style.left);
  // }

  // componentDidUpdate() {
  //   this.elementRef.current.style.left = (this.elementRef.current.style.left + this.state.positionX).toString() + "vw";
  //   console.log('this.elementRef.current.style.left', this.elementRef.current.style.left);
  // }

  setPositionXHandler = (steps) => {
    console.log("setPositionXHandler", steps);
    // let stateCopy = {...this.state};
    this.setState({
      positionX: this.state.positionX + steps,
      // right: false
    });
  };

  // setHideChildren = () => {
  //   console.log("setHideChildren");
  //   this.setState({
  //     ...this.state,
  //     hideAsChild: true,
  //     // hideFather: true
  //   });
  //   console.log('state', this.state);
  // };

  render() {
    let backArrow = null;

    if (this.props.isChild) {
      backArrow = (
        <BackArrow clicked={this.setHideChildren}>
          {this.props.grandParentName}
        </BackArrow>
      );
    }
    // if (this.state.positionX === "center") {
    //   classesNavItems = [classes.NavItems, classes.Center];
    // }

    // if (this.state.positionX === "left") {
    //   classesNavItems = [classes.NavItems, classes.Left];
    // }

    let items = null;
    if (this.props.items) {
      items = this.props.items.map((item) => {
        return (
          <NavItem
            link={item.link}
            key={item.name}
            childrenItems={item.childrenItems}
            move={(steps) => this.setPositionXHandler(steps)}
            parent={this.props.parentName}
          >
            {item.name}
          </NavItem>
        );
      });
    }

    return (
      <ul
        className={classes.NavItems}
        style={{ left: this.state.positionX.toString() + "vw" }}
        // ref={this.elementRef}
      >
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
