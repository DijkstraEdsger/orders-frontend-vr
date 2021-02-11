import React from "react";

const navItem = (props) => {
  return (
    <li>
      <a>{props.children}</a>
    </li>
  );
};

export default navItem;
