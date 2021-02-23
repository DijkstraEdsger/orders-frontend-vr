import React, { Component } from "react";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";
import PropTypes from "prop-types";

class Sidenav extends Component {
  constructor(props) {
    super(props);
    this.positions = [];
  }

  state = {
    positions: [],
    navItems: [],
    preProcessedNavItems: [],
  };

  componentDidUpdate() {
    if (this.props.navItems && this.props.navItems !== this.state.navItems) {
      this.positions = [];
      let preProcessedNavItems = [];
      this.preProcessNavItems(preProcessedNavItems);

      this.setState({
        navItems: this.props.navItems,
        positions: this.positions,
        preProcessedNavItems: [...preProcessedNavItems],
      });
    }
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
          icon: navItemChild.icon,
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
    navItem.name = this.props.mainHeaderText;
    navItem.childrenItems = this.props.navItems;
    this.dfs(navItem, 0, tree, -1, "");
  };

  render() {
    return (
      <div>
        <Backdrop clicked={() => this.props.onClose()} show={this.props.open} />
        <SideDrawer
          open={this.props.open}
          navItems={this.state.preProcessedNavItems}
          positions={this.state.positions}
          clickedLink={() => this.props.onClose()}
          menuHead={this.props.children}
          side={this.props.side}
        />
      </div>
    );
  }
}

Sidenav.propTypes = {
  navItems: PropTypes.array,
  open: PropTypes.bool,
  mainHeaderText: PropTypes.string,
  menuHead: PropTypes.object,
  side: PropTypes.string,
};

export default Sidenav;
