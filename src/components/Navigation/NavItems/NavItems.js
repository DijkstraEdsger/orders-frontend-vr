import React from "react";
import NavItem from "./NavItem.js/NavItem";
import classes from "./NavItems.module.css";

const navItems = (props) => {
  return (
    <ul className={classes.NavItems}>
      <NavItem>Categories</NavItem>
      <NavItem>Other 1</NavItem>
      <NavItem>Other 2</NavItem>
      <NavItem>Other 3</NavItem>
      <NavItem>Other 4</NavItem>
      <NavItem>Other 1</NavItem>
      <NavItem>Other 2</NavItem>
      <NavItem>Other 3</NavItem>
      <NavItem>Other 4</NavItem>
      <NavItem>Other 1</NavItem>
      <NavItem>Other 2</NavItem>
      <NavItem>Other 3</NavItem>
      <NavItem>Other 4</NavItem>
      <NavItem>Other 1</NavItem>
      <NavItem>Other 2</NavItem>
      <NavItem>Other 3</NavItem>
      <NavItem>Other 4</NavItem>
      <NavItem>Other 1</NavItem>
      <NavItem>Other 2</NavItem>
      <NavItem>Other 3</NavItem>
      <NavItem>Other 99</NavItem>
    </ul>
  );
};

export default navItems;
