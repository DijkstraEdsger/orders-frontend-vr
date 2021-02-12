import React, { Component } from "react";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";

class Navigation extends Component {
  state = {
    showSideDrawer: false,
    navItems: [
      { name: "Categories", link: "/categories" },
      { name: "Other", link: "/other" },
      {
        name: "Foobar",
        link: "",
        childrenItems: [
          { name: "Foo", link: "/foo" },
          {
            name: "Bar",
            link: "/bar",
            childrenItems: [
              {
                name: "Foo2",
                link: "/foo2",
                childrenItems: [
                  { name: "Foo21", link: "/foo21" },
                  { name: "Bar21", link: "/bar21" },
                ],
              },
              {
                name: "Bar2",
                link: "/bar2",
                childrenItems: [
                  { name: "Foo22", link: "/foo22" },
                  { name: "Bar22", link: "/bar22" },
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
