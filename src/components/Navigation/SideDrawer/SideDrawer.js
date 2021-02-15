import React, { Component } from "react";
import classes from "./SideDrawer.module.css";
import PropTypes from "prop-types";
import NavItems from "../NavItems/NavItems";
import NavItem from "../NavItems/NavItem/NavItem";
import BackArrow from "../BackArrow/BackArrow";
import HeadItem from "../SideDrawer/HeadItem/HeadItem";

class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.preProcessedNavItems = [];
    this.navItem = {};
  }

  state = {
    menus: ["0vw", "80vw", "80vw", "80vw", "80vw"],
    navItems: null,
  };

  componentDidMount() {
    console.log("menus  length", this.preProcessedNavItems);
    this.preProcessNavItems();
    console.log("menus length", this.preProcessedNavItems.length);
    setTimeout(() => {
      console.log("menus length", this.preProcessedNavItems.length);
    }, 3000);
  }

  dfs = (navItem, currentNavItemsIndex) => {
    if (navItem.childrenItems) {
      let navItemsChildren = [];
      this.preProcessedNavItems.push(currentNavItemsIndex);
      navItem.childrenItems.forEach((navItemChild) => {
        let child = -1;
        if (navItemChild.childrenItems) {
          child = this.preProcessedNavItems.length;
        }
        navItemsChildren.push(
          <NavItem
            key={navItemChild.name}
            child={child}
            parent={currentNavItemsIndex}
            clicked={(parent, child) => this.slideForwardHandler(parent, child)}
          >
            {navItemChild.name}
          </NavItem>
        );
        this.dfs(navItemChild, this.preProcessedNavItems.length);        
      });
      let navItems = (
        <NavItems
          parent={-1}
          posX={this.state.menus[currentNavItemsIndex]}
          key={currentNavItemsIndex}
        >
          {navItemsChildren}
        </NavItems>
      );
      this.preProcessedNavItems[currentNavItemsIndex] = navItems;
    }
    // return;
  };

  preProcessNavItems = () => {
    this.navItem.name = "Main";
    this.navItem.childrenItems = this.props.navItems;
    this.dfs(this.navItem, 0);
    // let navItemsChildren = [];
    // let currentNavItemsIndex = 0;
    // this.preProcessedNavItems.push(currentNavItemsIndex);
    // this.state.navItems.forEach((navItem) => {
    //   this.dfs(navItem, currentNavItemsIndex + 1);
    //   let child = -1;
    //   if (navItem.childrenItems) {
    //     child = this.preProcessedNavItems.length + 1;
    //   }
    //   navItemsChildren.push(
    //     <NavItem
    //       key={navItem.name}
    //       child={child}
    //       parent={currentNavItemsIndex}
    //       clicked={(parent, child) => this.slideForwardHandler(parent, child)}
    //     >
    //       {navItem.name}
    //     </NavItem>
    //   );
    // });
    // let navItems = (
    //   <NavItems parent={-1} posX={this.state.menus[0]}>
    //     {navItemsChildren}
    //   </NavItems>
    // );
    // this.preProcessedNavItems[currentNavItemsIndex] = navItems;
  };

  slideForwardHandler = (parent, child) => {
    console.log('slideForwardHandler');
    // this.navItemsRef = this.state.menus[parent];
    // console.log('navItemsRef', this.navItemsRef);
    let m = [...this.state.menus];
    m[parent] = "-80vw";
    m[child] = "0vw";
    this.setState({
      menus: m,
    });
  };

  slideBackwardHandler = (parent, current) => {
    // this.navItemsRef = this.state.menus[parent];
    // console.log('navItemsRef', this.navItemsRef);
    let m = [...this.state.menus];
    m[parent] = "0vw";
    m[current] = "80vw";
    this.setState({
      menus: m,
    });
  };

  render() {
    // console.log('navItemsRef', this.navItemsReferences[0]);
    let classesSideDrawer = [classes.SideDrawer, classes.Close];
    if (this.props.open) {
      classesSideDrawer = [classes.SideDrawer, classes.Open];
    }
    return (
      <div className={classesSideDrawer.join(" ")}>
        {/* <NavItems parent={-1} posX={this.state.menus[0]}>
          <NavItem
            key={"Cars"}
            child={1}
            parent={0}
            clicked={(parent, child) => this.slideForwardHandler(parent, child)}
          >
            {"Cars"}
          </NavItem>
          <NavItem
            key={"Computers"}
            child={3}
            parent={0}
            clicked={(parent, child) => this.slideForwardHandler(parent, child)}
          >
            {"Computers"}
          </NavItem>
        </NavItems>
        <NavItems parent={0} posX={this.state.menus[1]}>
          <BackArrow
            parent={0}
            current={1}
            clicked={(parent, child) =>
              this.slideBackwardHandler(parent, child)
            }
          >
            {"Main menu"}
          </BackArrow>
          <HeadItem>{"Cars"}</HeadItem>
          <NavItem
            link={"/Ferrari"}
            key={"Ferrari"}
            child={2}
            parent={1}
            clicked={(parent, child) => this.slideForwardHandler(parent, child)}
          >
            {"Ferrari"}
          </NavItem>
        </NavItems>
        <NavItems parent={1} posX={this.state.menus[2]}>
          <BackArrow
            parent={1}
            current={2}
            clicked={(parent, child) =>
              this.slideBackwardHandler(parent, child)
            }
          >
            {"Cars"}
          </BackArrow>
          <HeadItem>{"Ferrari"}</HeadItem>
          <NavItem link={"/Ferrari1"} key={"Ferrari1"} child={-1} parent={2}>
            {"Ferrari 1"}
          </NavItem>
        </NavItems>
        <NavItems parent={0} posX={this.state.menus[3]}>
          <BackArrow
            parent={0}
            current={3}
            clicked={(parent, child) =>
              this.slideBackwardHandler(parent, child)
            }
          >
            {"Main menu"}
          </BackArrow>
          <HeadItem>{"Computers"}</HeadItem>
          <NavItem link={"/Macbook"} key={"Macbook"} child={-1}>
            {"Macbook Pro"}
          </NavItem>
        </NavItems> */}
        {this.preProcessedNavItems}
      </div>
    );
  }
}

SideDrawer.propTypes = {
  open: PropTypes.bool,
  navItems: PropTypes.array,
};

export default SideDrawer;
