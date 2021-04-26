import React, { Component } from "react";
import Product from "./Product/Product";
import PropTypes from "prop-types";
import classes from "./Products.module.css";
import { Route } from "react-router-dom";
import ProductDetails from "../../containers/ProductDetails/ProductDetails";

class Products extends Component {
  productSelectedHandler = (id) => {
    this.props.history.push("/products/" + id);
  };
  render() {
    console.log("Products");
    let products = <p>Loading...</p>;
    if (this.props.products) {
      products = this.props.products.map((product) => {
        return (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            clicked={() => this.productSelectedHandler(product.id)}
          />
        );
      });
    }
    // console.log("products list", this.props.products);

    return <div className={classes.Products}>{products}</div>;
  }
}

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;
