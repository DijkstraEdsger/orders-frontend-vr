import React, { Component } from "react";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";
import PropTypes from "prop-types";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.positions = [];
  }
  state = {
    showSideDrawer: false,
  };

  dfs = (navItem, currentNavItemsIndex, tree, parent, parentName) => {
    if (navItem.childrenItems) {
      let navItemsChildren = [];
      tree.push(currentNavItemsIndex);
      this.positions.push(currentNavItemsIndex === 0 ? "0vw" : "80vw");

      navItem.childrenItems.forEach((navItemChild) => {
        let child = -1;
        if (navItemChild.childrenItems) {
          child = tree.length;
        }
        navItemsChildren.push({
          child: child,
          parent: currentNavItemsIndex,
          name: navItemChild.name,
        });
        this.dfs(
          navItemChild,
          tree.length,
          tree,
          currentNavItemsIndex,
          navItem.name
        );
      });

      tree[currentNavItemsIndex] = {
        parent: parent,
        current: currentNavItemsIndex,
        parentName: parentName,
        headName: navItem.name,
        posXIndex: currentNavItemsIndex,
        navItemsChildren: navItemsChildren,
      };
    }
  };

  preProcessNavItems = (tree) => {
    let navItem = {};
    navItem.name = "Main";
    navItem.childrenItems = this.props.navItems;
    this.dfs(navItem, 0, tree, -1, "");
  };

  sideDrawerTogglerHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
      };
    });
  };

  sideDrawerClose = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  render() {
    let preProcessedNavItems = [];
    this.positions = [];
    this.preProcessNavItems(preProcessedNavItems);

    return (
      <div>
        <Backdrop
          clicked={this.sideDrawerClose}
          show={this.state.showSideDrawer}
        />
        <Toolbar clickedToggle={this.sideDrawerTogglerHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          navItems={preProcessedNavItems}
          positions={this.positions}
        />
      </div>
    );
  }
}

Navigation.propTypes = {
  navItems: PropTypes.array,
};

export default Navigation;
