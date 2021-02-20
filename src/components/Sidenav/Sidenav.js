import React, { Component } from "react";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";
import PropTypes from "prop-types";

class Sidenav extends Component {
  constructor(props) {
    super(props);
    this.positions = [];
  }

  dfs = (navItem, currentNavItemsIndex, tree, parent, parentName) => {
    if (navItem.childrenItems) {
      let navItemsChildren = [];
      tree.push(currentNavItemsIndex);
      this.positions.push(currentNavItemsIndex === 0 ? "0" : "100%");

      navItem.childrenItems.forEach((navItemChild) => {
        let child = -1;
        if (navItemChild.childrenItems) {
          child = tree.length;
        }
        navItemsChildren.push({
          child: child,
          parent: currentNavItemsIndex,
          name: navItemChild.name,
          link: !navItemChild.navItemsChildren ? navItemChild.link : null,
          icon: navItemChild.icon
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

  render() {
    let preProcessedNavItems = [];
    this.positions = [];
    this.preProcessNavItems(preProcessedNavItems);

    return (
      <div>
        <Backdrop clicked={() => this.props.onClose()} show={this.props.open} />
        <SideDrawer
          open={this.props.open}
          navItems={preProcessedNavItems}
          positions={this.positions}
          clickedLink={() => this.props.onClose()}
        />
      </div>
    );
  }
}

Sidenav.propTypes = {
  navItems: PropTypes.array,
  open: PropTypes.bool,
};

export default Sidenav;
