import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionProduct from "../../store/actions/products";
import Products from "../../components/Products/Products";

class ProductsList extends Component {
  componentDidMount() {
    this.props.onInitProducts();
  }
  render() {
    console.log("[ProductsList] products", this.props.products);
    return (
      <div>
        <p>ProductsList</p>
        <Products
          products={this.props.products}
          url={this.props.match.url}
          history={this.props.history}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productsList.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitProducts: () => actionProduct.initProducts(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
