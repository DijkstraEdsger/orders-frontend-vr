import React from "react";
import classes from "./Backdrop.module.css";
import PropTypes from "prop-types";

const backDrop = (props) => {
  let classesBackdrop = [classes.Backdrop, classes.Invisible];
  if (props.show) {
    classesBackdrop = [classes.Backdrop, classes.Visible];
  }
  return (
    <div className={classesBackdrop.join(" ")} onClick={props.clicked}></div>
  );
};

backDrop.propTypes = {
  clicked: PropTypes.func,
  show: PropTypes.bool,
};

export default backDrop;
