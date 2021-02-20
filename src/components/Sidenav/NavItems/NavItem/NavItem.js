import React, { Component } from "react";
import classes from "./NavItem.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class NavItem extends Component {
  state = {
    parent: this.props.parent,
    child: this.props.child,
  };

  moveForwardHandler = () => {
    this.props.clicked(this.state.parent, this.state.child);
  };

  onClickedLinkHandler = () => {
    this.props.clickedLink();
  };

  render() {
    let item = (
      <Link
        to=""
        {...this.props.linkOptions}
        onClick={this.onClickedLinkHandler}
      >
        <div>{this.props.children}</div>
      </Link>
    );

    if (this.props.child !== -1) {
      item = (
        <a
          className={this.props.active ? classes.active : null}
          onClick={this.moveForwardHandler}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {this.props.icon && this.props.icon.class ? (
              <i className={[classes.Icon, this.props.icon.class].join(" ")}>
                {this.props.icon.content}
              </i>
            ) : null}
            {this.props.children}
          </div>
          <div>
            {this.props.child !== -1 ? (
              <i
                className={[classes.RightArrow, "fa fa-chevron-right"].join(
                  " "
                )}
              ></i>
            ) : null}
          </div>
        </a>
      );
    }
    return <li className={classes.NavItem}>{item}</li>;
  }
}

NavItem.propTypes = {
  active: PropTypes.bool,
  link: PropTypes.string,
  child: PropTypes.number,
  parent: PropTypes.number,
  clicked: PropTypes.func,
  linkOptions: PropTypes.object,
  clickedLink: PropTypes.func,
  icon: PropTypes.string,
};

export default NavItem;
