import React, { Component } from "react";
import NavItem from "./NavItem.js/NavItem";
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
    // showAsChild: this.props.showChildren,
    // left: false,
    // hideAsChild: false,
    // refactor
    // positionX: this.props.isChild ? "80vw" : this.props.positionX,
    positionX: 0,
    steps: 0
    // isChild:
  };

  componentDidMount() {
    // this.setState({
    //   positionX: this.props.positionX,
    //   steps: this.props.steps
    // });
    if (this.props.isChild) {
      this.elementRef.current.style.left = "80vw";
    console.log('componentDidMount left', this.elementRef.current.style.left);
    } else {
      this.elementRef.current.style.left = "0vw";
    }
    
  }

  componentDidUpdate() {
    // this.setState({
    //   positionX: this.props.positionX + this.props.steps,
    //   steps: this.props.steps,
    // });
    // if (this.state.steps !== this.props.steps) {
      
    // }
    let left = parseInt(this.elementRef.current.style.left) + this.props.steps;
    this.elementRef.current.style.left = left.toString() + "vw";
    console.log('this.elementRef.current.style.left', this.elementRef.current.style.left);
  }

  setPositionXHandler = (steps) => {
    // this.setState({
    //   positionX: this.state.positionX + steps,
    // });
    let left = parseInt(this.elementRef.current.style.left) + steps;
    this.elementRef.current.style.left = left.toString() + "vw";
    console.log('left style setPositionXHandler', left);
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
    console.log('render');
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
        // style={{ left: this.state.positionX.toString() + "vw" }}
        ref={this.elementRef}
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
