import * as actionProducts from "../actions/products";

const initialState = {
  products: [],
};

const setProducts = (state, action) => {
  return {
    ...state,
    products: action.products,
  };
};

const reducer = (state = initialState, action) => {
  action.products = [
    { name: "Cafe", price: 2, image: "imageCafe" },
    { name: "Pollo", price: 5, image: "imagePollo" },
  ];
  switch (action.type) {
    case actionProducts.SET_PRODUCTS:
      return setProducts(state, action);

    default:
      return state;
  }
};

export default reducer;
