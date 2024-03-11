import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    MY_ORDERS_REQUEST,
    MY_ORDERS_SUCCESS,
    MY_ORDERS_FAIL,
    ALL_ORDERS_REQUEST,
    ALL_ORDERS_SUCCESS,
    ALL_ORDERS_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    CLEAR_ERRORS,
  } from "../constants/orderConstants";
  import Cookies from 'js-cookie'
  import axios from "axios";

  import api from '../utils/baseApi'
  
  // Create Order
  export const createOrder = (order) => async (dispatch) => {

    try {
      dispatch({ type: CREATE_ORDER_REQUEST });
      const token = Cookies.get('token')
      const config = {
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}` 
        },
      };
   
      const { data } = await axios.post(`${api}/api/v1/order/create`, order, config);
  
      dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
      dispatch({
        type:'REMOVE_ALL_CART_ITEMS'
      })
      
    } catch (error) {
  
      dispatch({
        type: CREATE_ORDER_FAIL,
        payload: error.response.data.error,
      });
    }
  };


  
  // My Orders
  export const myOrders = () => async (dispatch) => {
    try {
      dispatch({ type: MY_ORDERS_REQUEST });
      const token = Cookies.get('token')
      const config = {
        headers: {
          'Authorization': `Bearer ${token}` 
        },
      };
    
      const { data } = await axios.get(`${api}/api/v1/orders/me`,config);
      dispatch({ type: MY_ORDERS_SUCCESS, payload: data.orders });
    } catch (error) {
      dispatch({
        type: MY_ORDERS_FAIL,
        payload: error.response.data.error,
      });
    }
  };
  
  // Get All Orders (admin)
  export const getAllOrders = (page,searchKey = "") => async (dispatch) => {
    try {
      dispatch({ type: ALL_ORDERS_REQUEST });

      const token = Cookies.get('token')
      const config = {
        headers: {
          'Authorization': `Bearer ${token}` 
        },
      };
  
     
      const { data } = await axios.get(`${api}/api/v1/admin/orders?page=${page}&searchKey=${searchKey}`,config);
      dispatch({ type: ALL_ORDERS_SUCCESS, payload: {orders:data.orders,totalOrder:data.totalOrder} });
    } catch (error) {
      dispatch({
        type: ALL_ORDERS_FAIL,
        payload: error.response.data.error,
      });
    }
  };
  
  // Get Order Details
  export const getOrderDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: ORDER_DETAILS_REQUEST });
      const token = Cookies.get('token')
      const config = {
        headers: {
          'Authorization': `Bearer ${token}` 
        },
      };
  
      // const { data } = await axios.get(`/api/v1/order/${id}`);
      const { data } = await axios.get(`${api}/api/v1/admin/order/${id}`,config);
      dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data.order });
    } catch (error) {
      dispatch({
        type: ORDER_DETAILS_FAIL,
        payload: error.response.data.error,
      });
    }
  };


  // Clearing Errors
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };