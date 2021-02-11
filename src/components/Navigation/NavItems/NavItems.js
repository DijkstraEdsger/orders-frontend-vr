import React from "react";
import NavItem from "./NavItem.js/NavItem";
import classes from "./NavItems.module.css";
import PropTypes from "prop-types";

const navItems = (props) => {
  console.log("items", props.items);
  let items = null;
  if (props.items) {
    items = props.items.map((item) => {
      return (
        <NavItem link={item.link} key={item.name} childrenItems={item.childrenItems}>
          {item.name}
        </NavItem>
      );
    });
  }

  return <ul className={classes.NavItems}>{items}</ul>;
};

navItems.propTypes = {
  items: PropTypes.array,
};

export default navItems;
