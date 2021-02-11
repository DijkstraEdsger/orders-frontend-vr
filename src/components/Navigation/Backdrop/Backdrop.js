import React from "react";
import classes from "./Backdrop.module.css";
import PropTypes from "prop-types";

const backDrop = (props) => {
  return <div className={classes.Backdrop} onClick={props.clicked}></div>;
};

backDrop.propTypes = {
  clicked: PropTypes.func,
};

export default backDrop;
