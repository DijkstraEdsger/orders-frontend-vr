import React, { Component } from "react";
import Sidenav from "../Sidenav/Sidenav";
import Toolbar from "../Toolbar/Toolbar";
import MenuHead from "../MenuHead/MenuHead";

class Layout extends Component {
  state = {
    openSidenav: false,
    navItems: null,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        navItems: this.navItems(),
      });
    }, 5000);
  }
  navItems = () => {
    return [
      {
        name: "Versions Humberto Lazaro Martinez Morales programador",
        childrenItems: [
          {
            name: "1",
            childrenItems: [
              { name: "1.1", link: { to: "/" } },
              {
                name: "1.2",
                childrenItems: [
                  { name: "1.2.1", link: { to: "/" } },
                  { name: "1.2.2", link: { to: "/" } },
                ],
              },
            ],
          },
          { name: "2", link: { to: "/" } },
          {
            name: "3",
            childrenItems: [{ name: "3.1", link: { to: "/" } }],
          },
          { name: "4", link: { to: "/" } },
        ],
      },
      {
        name: "Other Humberto Lazaro Martinez Morales programador",
        link: { to: "/" },
      },
      {
        name: "Cars Humberto Lazaro Martinez Morales programador",
        icon: {
          class: "fa fa-car",
          content: "",
        },
        childrenItems: [
          { name: "Audi", link: { to: "/" } },
          {
            name: "Ferrari",
            childrenItems: [
              {
                name: "Ferrari 1",
                childrenItems: [
                  { name: "Ferrari 1.1", link: { to: "/products" } },
                  { name: "Ferrari 1.2", link: { to: "/" } },
                ],
              },
              {
                name: "Ferrari 2",
                childrenItems: [
                  { name: "Ferrari 2.1", link: { to: "/" } },
                  { name: "Ferrari 2.2", link: { to: "/" } },
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
          navItems={this.state.navItems}
          open={this.state.openSidenav}
          onClose={this.closeSidenavHandler}
          mainHeaderText={
            "Main menu Humberto Lazaro Martinez Morales programador"
          }
        >
          <MenuHead />
        </Sidenav>
        <Toolbar clickedToggle={this.sidenavTogglerHandler} />
        {this.props.children}
        <button onClick={this.openSidenavHandler}>Open sidenav</button>
      </div>
    );
  }
}

export default Layout;
