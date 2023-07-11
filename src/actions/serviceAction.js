import axios from "axios";
import Cookies from 'js-cookie'
import {
//   ALL_PRODUCT_FAIL,
//   ALL_PRODUCT_REQUEST,
//   ALL_PRODUCT_SUCCESS,
//   ADMIN_PRODUCT_REQUEST,
//   ADMIN_PRODUCT_SUCCESS,
  // ADMIN_PRODUCT_FAIL,
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


// Create Product
export const createService = (serviceData,mainImage,icon,imageGallery) => async (dispatch) => {

    try {
      dispatch({ type: NEW_SERVICE_REQUEST });
      console.log(mainImage)
      console.log(icon)
      console.log(imageGallery)
      // const config = {
      //   headers: { "Content-Type":"application/json" },
      // };
      const config = {
        headers: { "Content-Type":"multipart/form-data" },
      };
      let fileData = new FormData()
      fileData.append('mainImage',mainImage)
      // fileData.append('icon',icon)
      // imageGallery.forEach(image => {
      //   fileData.append('imageGallery',image)
      // })
      
      console.log(fileData)
  
      // const {data} = await axios.post('http://54.190.127.181:8080/api/v1/product/image',fileData,config)
     
      // if(mainImage || icon || imageGallery.length > 0){
      //   const {data} = await axios.post(`${api}/api/v1/product/create`,serviceData,config)
        const {data:newServiceData} = await axios.post(`${api}/api/v1/service/image`,fileData,config)
      //   dispatch({
      //     type: NEW_SERVICE_SUCCESS,
      //     payload: newServiceData 
      //   })
      // }else{
        // const {data} = await axios.post(`${api}/api/v1/service/create`,serviceData,config)
        // dispatch({
        //   type: NEW_SERVICE_SUCCESS,
        //   payload:  data,
        // })
      // }
  
    } catch (error) {
      dispatch({
        type: NEW_SERVICE_FAIL,
        payload: error
      });
    }
};