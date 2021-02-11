import React from "react";
import PropTypes from "prop-types";

const drawerToggle = (props) => {
  return (
    <div onClick={props.clicked}>
      <p>Toggle</p>
    </div>
  );
};

drawerToggle.propTypes = {
  clicked: PropTypes.func,
};

export default drawerToggle;
