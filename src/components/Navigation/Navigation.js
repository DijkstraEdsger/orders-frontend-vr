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
          { name: "Bar", link: "/bar" },
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
