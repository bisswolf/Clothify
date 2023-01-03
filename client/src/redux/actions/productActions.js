import axios from "axios";

export const getAllClothes = () => async (dispatch) => {
  try {
    const response = await axios.get("/products");

    dispatch({
      type: "GET_ALL_CLOTHES",
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/products/${id}`);
    dispatch({
      type: "GET_DETAILS",
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
