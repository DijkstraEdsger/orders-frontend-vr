import React, { Component } from "react";
import PropTypes from "prop-types";

class Product extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} />
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
};

export default Product;
