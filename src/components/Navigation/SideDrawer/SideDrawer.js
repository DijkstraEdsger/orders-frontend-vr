import React from "react";
import classes from "./SideDrawer.module.css";
import PropTypes from "prop-types";
import NavItems from "../NavItems/NavItems";

const sideDrawer = (props) => {
  let classesSideDrawer = [classes.SideDrawer, classes.Close];
  if (props.open) {
    classesSideDrawer = [classes.SideDrawer, classes.Open];
  }
  return (
    <div className={classesSideDrawer.join(" ")}>
      <NavItems items={props.navItems} isChild={false} positionX={0}/>
    </div>
  );
};

sideDrawer.propTypes = {
  open: PropTypes.bool,
  navItems: PropTypes.array,
};

export default sideDrawer;
