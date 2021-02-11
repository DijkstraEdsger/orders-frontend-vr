import React from "react";
import PropTypes from "prop-types";
import NavItems from "../NavItems/NavItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import classes from './Toolbar.module.css';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.clickedToggle} />
      <p>Logo</p>
      <nav>
        {/* <NavItems /> */}
      </nav>
    </header>
  );
};

toolbar.propTypes = {
  clickedToggle: PropTypes.func,
};

export default toolbar;
