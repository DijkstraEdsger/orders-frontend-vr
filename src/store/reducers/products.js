import * as actionProducts from "../actions/products";

const initialState = {
  products: null,
};

const setProducts = (state, action) => {
  return {
    ...state,
    products: action.products,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionProducts.SET_PRODUCTS:
      return setProducts(state, action);

    default:
      return state;
  }
};

export default reducer;
