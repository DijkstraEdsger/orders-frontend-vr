import axios from "../../axios-product";

export const SELECTED_PRODUCT = "SELECTED_PRODUCT";

export const selectProduct = (dispatch, id) => {
  axios
    .get("/product/" + id)
    .then((response) => {
      setTimeout(() => {
        dispatch({
          type: SELECTED_PRODUCT,
          product: response.data.product,
        });
      }, 1000);
    })
    .catch((error) => {
      console.log(error);
    });
};
