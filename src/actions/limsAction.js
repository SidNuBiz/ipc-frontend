import axios from "axios";
import Cookies from 'js-cookie'

// Create Sample
export const createSamples = (samples) => async (dispatch) => {
    console.log(samples)
    try {
    //   dispatch({ type: CREATE_ORDER_REQUEST });
      const token = Cookies.get('token')
      const config = {
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}` 
        },
      };
      // const { data } = await axios.post("http://localhost:8080/api/v1/order/create", order, config);
      const { data } = await axios.post("http://localhost:8080/api/v1/lims/sample-entry-blank-template-sample",samples,config);
  
    //   dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
    //   dispatch({
    //     type:'REMOVE_ALL_CART_ITEMS'
    //   })
    //   localStorage.removeItem("cartItems");
    } catch (error) {
    //   dispatch({
    //     type: CREATE_ORDER_FAIL,
    //     payload: error.response.data.error,
    //   });
        console.log(error)
    }
  };