import React from "react";
import NavItem from "./NavItem.js/NavItem";
import classes from "./NavItems.module.css";

const navItems = (props) => {
  return (
    <ul className={classes.NavItems}>
      <NavItem>Categories</NavItem>
      <NavItem>Other</NavItem>
    </ul>
  );
};

export default navItems;
