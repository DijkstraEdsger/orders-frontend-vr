import React, { Component } from "react";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";

class Navigation extends Component {
  state = {
    showSideDrawer: false,
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
    return (
      <div>
        {this.state.showSideDrawer ? (
          <Backdrop clicked={this.sideDrawerClose} />
        ) : null}
        <Toolbar clickedToggle={this.sideDrawerTogglerHandler} />
        <SideDrawer open={this.state.showSideDrawer} />
      </div>
    );
  }
}

export default Navigation;
