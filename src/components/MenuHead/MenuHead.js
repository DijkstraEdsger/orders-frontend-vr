import React from "react";
import classes from "./MenuHead.module.css";

const menuHead = (props) => {
  return (
    <div className={classes.MenuHead}>
      <i className="fa fa-heart"></i>
      <b>My App</b>
    </div>
  );
};

export default menuHead;
