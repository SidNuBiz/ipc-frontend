import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
    REMOVE_ALL_CART_ITEMS,
  } from "../constants/cartConstants";
  import axios from "axios";
  
  // Add to Cart
  export const addItemsToCart = (data) => async (dispatch, getState) => {
    // const { data } = await axios.get(`/api/v1/product/${id}`);
  
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data.thisService.id,
        name: data.thisService.name,
        price: data.calculatedPrice,
        image: data.thisService.image.url,
        strainsType:data.strainsType,
        turnaroundType:data.turnaroundType
      },
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  
  // REMOVE FROM CART
  export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };

  //REMOVE ALL CART ITEMS
  export const removeAllCartItems = () => async (dispatch) => {
    dispatch({
      type:REMOVE_ALL_CART_ITEMS,
    })
    localStorage.removeItem("cartItems");
  }
  
  // SAVE SHIPPING INFO
  export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
      type: SAVE_SHIPPING_INFO,
      payload: data,
    });
  
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };