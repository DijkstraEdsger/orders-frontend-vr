import React, { Component } from "react";
import Product from "./Product/Product";
import PropTypes from "prop-types";

class Products extends Component {
  render() {
    // console.log("products list", this.props.products);
    let products = this.props.products.map((product) => {
      return (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      );
    });
    return <div>{products}</div>;
  }
}

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;
