import React, { Component } from "react";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";

class Navigation extends Component {
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
          navItems={this.state.navItems}
        />
      </div>
    );
  }
}

export default Navigation;
