import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";

class Layout extends Component {
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
  render() {
    return (
      <div>
        <Navigation navItems={this.navItems()} />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
