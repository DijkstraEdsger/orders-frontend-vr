import React from "react";
import PropTypes from "prop-types";
// import NavItems from "../NavItems/NavItems";
import DrawerToggle from "./DrawerToggle/DrawerToggle";
import classes from "./Toolbar.module.css";

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.ToolbarLeft}>
        <DrawerToggle clicked={props.clickedToggle} />
        <p>MyShop</p>
      </div>
      <nav>{/* <NavItems /> */}</nav>
    </header>
  );
};

toolbar.propTypes = {
  clickedToggle: PropTypes.func,
};

export default toolbar;
