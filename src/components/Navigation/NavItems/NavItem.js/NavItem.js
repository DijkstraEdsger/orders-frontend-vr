import React from "react";
import classes from "./NavItem.module.css";
import PropTypes from "prop-types";

const navItem = (props) => {
  let childrenItems = null;
  if (props.childrenItems) {
    childrenItems = <p>Children</p>;
  }
  return (
    <li className={classes.NavItem}>
      <a className={props.active ? classes.active : null} href={props.link}>
        <div>{props.children}</div>
        <div>{props.childrenItems ? <p>--</p> : null}</div>
      </a>
    </li>
  );
};

navItem.propTypes = {
  active: PropTypes.bool,
  link: PropTypes.string,
  childrenItems: PropTypes.array,
};

export default navItem;
