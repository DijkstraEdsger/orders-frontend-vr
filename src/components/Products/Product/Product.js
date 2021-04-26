import React, { Component } from "react";
import PropTypes from "prop-types";
import { apiUrl } from "../../../config-base";
import classes from "./Product.module.css";

class Product extends Component {
  render() {
    return (
      <div className={classes.Product} onClick={this.props.clicked}>
        <img src={apiUrl + this.props.image} />
        <h4>{this.props.name}</h4>
        <p>{this.props.price}</p>
      </div>
    );
  }
}

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  clicked: PropTypes.func,
};

export default Product;
