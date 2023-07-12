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
//   UPDATE_PRODUCT_REQUEST,
//   UPDATE_PRODUCT_SUCCESS,
//   UPDATE_PRODUCT_FAIL,
//   DELETE_PRODUCT_REQUEST,
//   DELETE_PRODUCT_SUCCESS,
//   DELETE_PRODUCT_FAIL,
//   PRODUCT_DETAILS_REQUEST,
//   PRODUCT_DETAILS_FAIL,
//   PRODUCT_DETAILS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/serviceConstants";

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


// Create Product
export const createService = (serviceData,mainImage,icon,imageGallery) => async (dispatch) => {

    try {
      dispatch({ type: NEW_SERVICE_REQUEST });

      console.log(mainImage)
      const config = {
        headers: { "Content-Type":"multipart/form-data" },
      };
      const config2 = {
        headers:{"Content-Type":"application/json"}
      }
      let fileData = new FormData()

      fileData.append('mainImage',mainImage)
      fileData.append('icon',icon)
      imageGallery.forEach(image => {
        fileData.append('imageGallery',image)
      })
     
    
     console.log(serviceData)
     
      const {data} = await axios.post(`${api}/api/v1/service/create`,serviceData,config2)
      console.log(data)
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

