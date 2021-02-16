import React, { Component } from "react";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.positions = [];
    this.navItem = {};
  }
  state = {
    showSideDrawer: false,
    navItems: [
      {
        name: "Versions",
        link: "/versions",
        childrenItems: [
          {
            name: "1",
            link: "/version1",
            // childrenItems: [
            //   { name: "1.1", link: "/version1.1" },
            //   {
            //     name: "1.2",
            //     link: "/version1.2",
            //     childrenItems: [
            //       { name: "1.2.1", link: "/version1.2.1" },
            //       { name: "1.2.2", link: "/version1.2.2" },
            //     ],
            //   },
            // ],
          },
          // { name: "2", link: "/version2", childrenItems: [] },
          // {
          //   name: "3",
          //   link: "/version3",
          //   childrenItems: [{ name: "3.1", link: "/version3.1" }],
          // },
          // { name: "4", link: "/version4", childrenItems: [] },
        ],
      },
      { name: "Other", link: "/other" },
      {
        name: "Cars",
        link: "",
        childrenItems: [
          { name: "Audi", link: "/audi" },
          {
            name: "Ferrari",
            link: "/ferrari",
            childrenItems: [
              {
                name: "Ferrari 1",
                link: "/ferrari1",
                childrenItems: [
                  { name: "Ferrari 1.1", link: "/ferrari11" },
                  { name: "Ferrari 1.2", link: "/ferrari12" },
                ],
              },
              {
                name: "Ferrari 2",
                link: "/ferrari2",
                childrenItems: [
                  { name: "Ferrari 2.1", link: "/ferrari21" },
                  { name: "Ferrari 2.2", link: "/ferrari22" },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  dfs = (navItem, currentNavItemsIndex, tree, parent) => {
    if (navItem.childrenItems) {
      let navItemsChildren = [];
      tree.push(currentNavItemsIndex);
      let m = currentNavItemsIndex === 0 ? "0vw" : "80vw";
      this.positions.push(m);
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
        this.dfs(navItemChild, tree.length, tree, currentNavItemsIndex);
      });

      tree[currentNavItemsIndex] = {
        parent: parent,
        current: currentNavItemsIndex,
        posXIndex: currentNavItemsIndex,
        navItemsChildren: navItemsChildren,
      };
    }
  };

  preProcessNavItems = (tree) => {
    this.navItem.name = "Main";
    this.navItem.childrenItems = this.state.navItems;
    this.dfs(this.navItem, 0, tree);
  };

  sideDrawerTogglerHandler = () => {
    this.setState((prevState) => {
      return {
        ...this.state,
        showSideDrawer: !prevState.showSideDrawer,
      };
    });
  };

  sideDrawerClose = () => {
    this.setState({
      ...this.state,
      showSideDrawer: false,
    });
  };

  render() {
    let preProcessedNavItems = [];
    this.positions = [];
    this.preProcessNavItems(preProcessedNavItems);
    console.log("menus new", this.preProcessedNavItems);
    console.log("this.positions", this.positions);

    return (
      <div>
        {/* {this.state.showSideDrawer ? (
          <Backdrop clicked={this.sideDrawerClose} />
        ) : null} */}
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

export default Navigation;
