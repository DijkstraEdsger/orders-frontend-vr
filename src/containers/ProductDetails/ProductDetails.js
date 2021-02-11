import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionSelectedProduct from "../../store/actions/selectedProduct";
import { apiUrl } from "../../config-base";

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
        <div>
          <img src={apiUrl + this.props.product.image} />
          <h4>{this.props.product.name}</h4>
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
