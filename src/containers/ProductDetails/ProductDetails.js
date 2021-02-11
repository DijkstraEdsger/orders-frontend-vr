import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionSelectedProduct from "../../store/actions/selectedProduct";
import { apiUrl } from "../../config-base";
import classes from './ProductDetails.module.css';

class ProductDetails extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    this.props.onSelectProduct(this.props.match.params.id);
  }
  render() {
      console.log('ProductDetails');
    let product = <p>Loading...</p>;
    if (this.props.product) {
      product = (
        <div className={classes.ProductDetails}>
          <h3>{this.props.product.name}</h3>
          <img src={apiUrl + this.props.product.image} />          
          <p>{this.props.product.price}</p>
          <p>{this.props.product.description}</p>
        </div>
      );
    }
    return <div>{product}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.productDetails.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectProduct: (id) => actionSelectedProduct.selectProduct(dispatch, id),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
