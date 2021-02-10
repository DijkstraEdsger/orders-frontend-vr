import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionProduct from "../../store/actions/products";
import Products from "../../components/Products/Products";

class ProductsList extends Component {
  componentDidMount() {
    this.props.onInitProducts();
  }
  render() {
    return (
      <div>
        <p>ProductsList</p>
        <Products products={this.props.products} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitProducts: () => dispatch({type: actionProduct.SET_PRODUCTS}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
