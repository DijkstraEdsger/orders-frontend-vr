import * as actionProduct from "../actions/selectedProduct";

const initialState = {
  product: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionProduct.SELECTED_PRODUCT:
      return {
        ...state,
        product: action.product,
      };

    default:
      return state;
      break;
  }
};

export default reducer;
