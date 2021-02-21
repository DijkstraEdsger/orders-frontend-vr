import React, { Component } from "react";
import classes from "./SideDrawer.module.css";
import PropTypes from "prop-types";
import NavItems from "../NavItems/NavItems";
import NavItem from "../NavItems/NavItem/NavItem";
import BackArrow from "../BackArrow/BackArrow";
import HeadItem from "../SideDrawer/HeadItem/HeadItem";

class SideDrawer extends Component {
  state = {
    positions: [],
    navItems: [],
  };

  componentDidUpdate() {
    if (this.props.navItems && this.props.navItems !== this.state.navItems) {
      this.setState({
        navItems: this.props.navItems,
        positions: this.props.positions,
      });
    }

    if (
      this.props.open === false &&
      this.state.positions &&
      this.state.positions.length > 0 &&
      this.state.positions[0] !== this.props.positions[0]
    ) {
      this.setState({
        positions: this.props.positions,
      });
    }
  }

  slideForwardHandler = (parent, child) => {
    let m = [...this.state.positions];
    m[parent] = "-100%";
    m[child] = "0";
    this.setState({
      positions: m,
    });
  };

  slideBackwardHandler = (parent, current) => {
    let m = [...this.state.positions];
    m[parent] = "0";
    m[current] = "100%";
    this.setState({
      positions: m,
    });
  };

  render() {
    let preProcessedNavItems = this.state.navItems.map((navItems, index) => {
      return this.state.positions && this.state.positions.length > 0 ? (
        <NavItems posX={this.state.positions[navItems.posXIndex]} key={index}>
          {navItems.current ? (
            <BackArrow
              parent={navItems.parent}
              current={navItems.current}
              clicked={(parent, child) =>
                this.slideBackwardHandler(parent, child)
              }
            >
              {navItems.parentName}
            </BackArrow>
          ) : null}
          {index !== 0 ? <HeadItem>{navItems.headName}</HeadItem> : null}
          {navItems.navItemsChildren.map((navItem) => {
            return (
              <NavItem
                key={navItem.name}
                child={navItem.child}
                parent={index}
                clicked={(parent, child) =>
                  this.slideForwardHandler(parent, child)
                }
                linkOptions={navItem.link}
                clickedLink={() => this.props.clickedLink()}
                icon={navItem.icon}
              >
                {navItem.name}
              </NavItem>
            );
          })}
        </NavItems>
      ) : null;
    });

    let classesSideDrawer = [classes.SideDrawer, classes.Close];
    if (this.props.open) {
      classesSideDrawer = [classes.SideDrawer, classes.Open];
    }
    return (
      <div className={classesSideDrawer.join(" ")}>
        {this.props.menuHead ? this.props.menuHead : null}
        {preProcessedNavItems}
      </div>
    );
  }
}

SideDrawer.propTypes = {
  open: PropTypes.bool,
  navItems: PropTypes.array,
  positions: PropTypes.array,
  clickedLink: PropTypes.func,
  menuHead: PropTypes.object,
};

export default SideDrawer;
