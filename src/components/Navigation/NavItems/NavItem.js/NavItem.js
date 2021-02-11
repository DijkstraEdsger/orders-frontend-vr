import React from "react";
import classes from "./NavItem.module.css";
import PropTypes from "prop-types";

const navItem = (props) => {
  return (
    <li className={classes.NavItem}>
      <a className={props.active ? classes.active : null} href={props.link}>
        {props.children}
      </a>
    </li>
  );
};

navItem.propTypes = {
  active: PropTypes.bool,
};

export default navItem;
