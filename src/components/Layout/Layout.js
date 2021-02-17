import React, { Component } from "react";
import Sidenav from "../Sidenav/Sidenav";
import Toolbar from '../Toolbar/Toolbar';

class Layout extends Component {
  state = {
    openSidenav: false,
  };
  navItems = () => {
    return [
      {
        name: "Versions",
        link: "/versions",
        childrenItems: [
          {
            name: "1",
            link: "/version1",
            childrenItems: [
              { name: "1.1", link: "/version1.1" },
              {
                name: "1.2",
                link: "/version1.2",
                childrenItems: [
                  { name: "1.2.1", link: "/version1.2.1" },
                  { name: "1.2.2", link: "/version1.2.2" },
                ],
              },
            ],
          },
          { name: "2", link: "/version2", childrenItems: [] },
          {
            name: "3",
            link: "/version3",
            childrenItems: [{ name: "3.1", link: "/version3.1" }],
          },
          { name: "4", link: "/version4", childrenItems: [] },
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
    ];
  };

  openSidenavHandler = () => {
    this.setState({
      openSidenav: true,
    });
  };

  closeSidenavHandler = () => {
    this.setState({
      openSidenav: false,
    });
  };

  sidenavTogglerHandler = () => {
    this.setState((prevState) => {
      return {
        openSidenav: !prevState.openSidenav,
      };
    });
  };

  render() {
    return (
      <div>
        <Sidenav
          navItems={this.navItems()}
          open={this.state.openSidenav}
          onClose={this.closeSidenavHandler}
        />
        <Toolbar clickedToggle={this.sidenavTogglerHandler} />
        {this.props.children}
        <button onClick={this.openSidenavHandler}>Open sidenav</button>
      </div>
    );
  }
}

export default Layout;
