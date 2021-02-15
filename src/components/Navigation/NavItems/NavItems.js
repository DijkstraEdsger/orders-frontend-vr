import React, { Component } from "react";
import NavItem from "./NavItem/NavItem";
import classes from "./NavItems.module.css";
import PropTypes from "prop-types";
import BackArrow from "../BackArrow/BackArrow";
import HeadItem from "../SideDrawer/HeadItem/HeadItem";

class NavItems extends Component {
  constructor(props) {
    super(props);
    this.elementRef = React.createRef();
  }

  state = {
    positionX: 0,
    steps: 0,
  };

  componentDidMount() {
    // if (this.props.isChild) {
    //   this.elementRef.current.style.left = "80vw";
    // } else {
    //   this.elementRef.current.style.left = "0vw";
    // }
  }

  componentDidUpdate() {
    // let left = parseInt(this.elementRef.current.style.left) + this.props.steps;
    // this.elementRef.current.style.left = left.toString() + "vw";
  }

  setPositionXHandler = (steps) => {
    // let left = parseInt(this.elementRef.current.style.left) + steps;
    // this.elementRef.current.style.left = left.toString() + "vw";
  };

  backwardHandler = (steps) => {
    // let left = parseInt(this.elementRef.current.style.left) + steps;
    // this.elementRef.current.style.left = left.toString() + "vw";
    // this.props.backward();
  };

  render() {
    let backArrow = null;

    if (this.props.isChild) {
      backArrow = (
        <BackArrow clicked={() => this.backwardHandler(80)}>
          {this.props.grandParentName}
        </BackArrow>
      );
    }

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
      <ul className={classes.NavItems} style={{left: this.props.posX}}>
        {/* {backArrow} */}
        {/* <HeadItem>{this.props.parentName}</HeadItem> */}
        {/* {items} */}
        {this.props.children}
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
