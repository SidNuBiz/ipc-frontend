import axios from "axios";
import Cookies from 'js-cookie'
import {
  ALL_SERVICE_FAIL,
  ALL_SERVICE_REQUEST,
  ALL_SERVICE_SUCCESS,
  ADMIN_SERVICE_REQUEST,
  ADMIN_SERVICE_SUCCESS,
  ADMIN_SERVICE_FAIL,
  NEW_SERVICE_REQUEST,
  NEW_SERVICE_SUCCESS,
  NEW_SERVICE_FAIL,
  UPDATE_SERVICE_REQUEST,
  UPDATE_SERVICE_SUCCESS,
  UPDATE_SERVICE_FAIL,
  DELETE_SERVICE_REQUEST,
  DELETE_SERVICE_SUCCESS,
  DELETE_SERVICE_FAIL,
//   SERVICE_DETAILS_REQUEST,
//   PRODUCT_DETAILS_FAIL,
//   PRODUCT_DETAILS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/serviceConstants";
import Cookies from "js-cookie";
// const api = 'http://54.190.127.181:8080'
const api = 'http://localhost:8080'

//Get All Service
export const getService = ()=>async (dispatch)=>{  
  try{
      dispatch({type:ALL_SERVICE_REQUEST})
   
      const {data} = await axios.get(`${api}/api/v1/service/all`)

      dispatch({type:ALL_SERVICE_SUCCESS,payload:data})
  }catch(error){
      dispatch({
          type:ALL_SERVICE_FAIL,
          payload:error.response.data.error
      })
  }
}


// Create Service
export const createService = (serviceData,mainImage,icon,imageGallery) => async (dispatch) => {

    try {
      dispatch({ type: NEW_SERVICE_REQUEST });
      const token = Cookies.get('token')

      const config = {
        headers: { "Content-Type":"multipart/form-data",'Authorization': `Bearer ${token}` },
      };
      
      const config2 = {
          headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
      }
      let fileData = new FormData()

      fileData.append('mainImage',mainImage)
      fileData.append('icon',icon)
      imageGallery.forEach(image => {
        fileData.append('imageGallery',image)
      })
     
     
      const {data} = await axios.post(`${api}/api/v1/service/create`,serviceData,config2)
      const {data:newServiceData} = await axios.post(`${api}/api/v1/service/image/${data.service._id}`,fileData,config)
      dispatch({
        type: NEW_SERVICE_SUCCESS,
        payload: newServiceData 
      })
      
  
    } catch (error) {
      dispatch({
        type: NEW_SERVICE_FAIL,
        payload: error
      });
    }
};

// Update Service
export const updateService = (serviceData,mainImage,icon,imageGallery, id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SERVICE_REQUEST });
    const token = Cookies.get('token')
    const config = {
      headers: { "Content-Type":"multipart/form-data",'Authorization': `Bearer ${token}` },
    };
 
    const config2 = {
        headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
    }
    let fileData = new FormData()

    fileData.append('mainImage',mainImage)
    fileData.append('icon',icon)
    imageGallery.forEach(image => {
      fileData.append('imageGallery',image)
    })
   
   
    const {data} = await axios.put(`${api}/api/v1/service/update/${id}`,serviceData,config2)
    const {data:newServiceData} = await axios.post(`${api}/api/v1/service/image/${data.service._id}`,fileData,config)
    dispatch(getService())
    dispatch({
      type: UPDATE_SERVICE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SERVICE_FAIL,
      payload: error
    });
  }
};

// Delete Service
export const deleteService = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_SERVICE_REQUEST });
    const token = Cookies.get('token')
    const config = {
      headers: { 'Authorization': `Bearer ${token}` },
    };
    const { data } = await axios.delete(`${api}/api/v1/service/delete/${id}`,config);

    dispatch({
      type: DELETE_SERVICE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_SERVICE_FAIL,
      payload: error.response.data.message,
    });
  }
};

