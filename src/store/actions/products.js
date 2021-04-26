import axios from "../../axios-product";

export const SET_PRODUCTS = "SET_PRODUCTS";

export const initProducts = (dispatch) => {
  axios
    .get("/product")
    .then((response) => {
      setTimeout(() => {
        dispatch({
          type: SET_PRODUCTS,
          products: response.data.products,
        });
      }, 1000);
    })
    .catch((error) => {
      console.log(error);
    });
};
