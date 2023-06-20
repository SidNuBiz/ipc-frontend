import axios from "axios";
import Cookies from 'js-cookie'
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_REQUEST,
  ADMIN_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_FAIL,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/productConstants";

// const api = 'http://54.190.127.181:8080'
const api = 'http://localhost:8080'

export const getProduct = ()=>async (dispatch)=>{
    try{
        dispatch({type:ALL_PRODUCT_REQUEST})
     
        const {data} = await axios.get(`${api}/api/v1/product/all`)

        dispatch({type:ALL_PRODUCT_SUCCESS,payload:data})
    }catch(error){
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload:error.response.data.error
        })
    }
}

// Get All Products For Admin
export const getAdminProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PRODUCT_REQUEST });
    
    const { data } = await axios.get(`${api}/api/v1/admin/products`);
    dispatch({
      type: ADMIN_PRODUCT_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Product
export const createProduct = (productData,image) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PRODUCT_REQUEST });
    console.log(image)
    const config = {
      headers: { "Content-Type":"multipart/form-data" },
    };
    let fileData = new FormData()
    fileData.append('image',image)


    // const {data} = await axios.post('http://54.190.127.181:8080/api/v1/product/image',fileData,config)
   
    if(image){
      const {data} = await axios.post(`${api}/api/v1/product/create`,productData,config)
      const {data:newProductData} = await axios.post(`${api}/api/v1/product/image/${data.result._id}`,fileData,config)
      dispatch({
        type: NEW_PRODUCT_SUCCESS,
        payload: newProductData 
      })
    }else{
      const {data} = await axios.post(`${api}/api/v1/product/create`,productData,config)
      dispatch({
        type: NEW_PRODUCT_SUCCESS,
        payload:  data,
      })
    }

  } catch (error) {
    dispatch({
      type: NEW_PRODUCT_FAIL,
      payload: error
    });
  }
};

// Update Product
export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `${api}/api/v1/product/update/${id}`,
      productData,
      config
    );

    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.delete(`${api}/api/v1/product/delete/${id}`,id,config);

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Get Products Details
export const getProductDetails = (id) => async (dispatch) => {
    try {

      dispatch({ type: PRODUCT_DETAILS_REQUEST });

      const { data } = await axios.get(`${api}/api/v1/product/details/${id}`);

      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: error.response.data.error,
      });
    }
  };

//Add Image
export const addImage = (file,id) => async (dispatch) => {
  try{
    let fileData = new FormData()
    fileData.append('image',file)
    const token = Cookies.get('token')
    const config = { headers:{"Content-Type":"multipart/form-data" ,  'Authorization': `Bearer ${token}` }}
    // const {data} = await axios.post('http://54.190.127.181:8080/api/v1/product/image',fileData,config)
    const {data} = await axios.post(`${api}/api/v1/product/image/${id}`,fileData,config)
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  }catch (error) {
    console.log(error)
  }
   
}


//Clearing Errors
export const clearErrors = ()=> async(dispatch)=>{
    dispatch({type:CLEAR_ERRORS})
}