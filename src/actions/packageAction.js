import {
    ALL_PACKAGE_FAIL,
    ALL_PACKAGE_REQUEST,
    ALL_PACKAGE_SUCCESS,
    NEW_PACKAGE_REQUEST,
    NEW_PACKAGE_SUCCESS,
    NEW_PACKAGE_FAIL,
    UPDATE_PACKAGE_REQUEST,
    UPDATE_PACKAGE_SUCCESS,
    UPDATE_PACKAGE_FAIL,
    DELETE_PACKAGE_REQUEST,
    DELETE_PACKAGE_SUCCESS,
    DELETE_PACKAGE_FAIL,
    CLEAR_ERRORS,
  } from "../constants/packageConstants";
  import Cookies from "js-cookie";
  import axios from "axios";
  // const api = 'http://54.190.127.181:8080'
  const api = 'http://localhost:8080'
  
  //Get All Package
  export const getPackages = ()=>async (dispatch)=>{  
    try{
        dispatch({type:ALL_PACKAGE_REQUEST})
     
        const {data} = await axios.get(`${api}/api/v1/package/all`)

        data.packages = data.packages.map(data => {
          if(data.type !== undefined){
            let editType =data.type.split(", ")
            data.type = editType
          }
      
          if(data.matrixForm !== undefined){
            let editMatrixForm =data.matrixForm.split(",")
            data.matrixForm = editMatrixForm
          }
      
          if(data.subMatrixForm !== undefined){
            let editSubMatrixForm = data.subMatrixForm.split(",")
            data.subMatrixForm = editSubMatrixForm
          }
        
          return data
        
        })

  
        dispatch({type:ALL_PACKAGE_SUCCESS,payload:data})
    }catch(error){
        dispatch({
            type:ALL_PACKAGE_FAIL,
            payload:error.response.data.error
        })
    }
  }
  
  
  // Create Package
  export const createPackage = (packageData,) => async (dispatch) => {
  
      try {
        dispatch({ type: NEW_PACKAGE_REQUEST });
        const token = Cookies.get('token')

        const config = {
            headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
        }
       
        const {data} = await axios.post(`${api}/api/v1/package/create`,packageData,config)
        
        dispatch({
          type: NEW_PACKAGE_SUCCESS,
          payload: data
        })
        
    
      } catch (error) {
        dispatch({
          type: NEW_PACKAGE_FAIL,
          payload: error
        });
      }
  };
  
  // Update Package
  export const updatePackage = (packageData,id) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_PACKAGE_REQUEST });
      const token = Cookies.get('token')
  
   
      const config = {
          headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
      }
     
     
      const {data} = await axios.put(`${api}/api/v1/package/update/${id}`,packageData,config)
    
      dispatch(getPackages())
      dispatch({
        type: UPDATE_PACKAGE_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_PACKAGE_FAIL,
        payload: error
      });
    }
  };
  
  // Delete Package
  export const deletePackage = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_PACKAGE_REQUEST });
      const token = Cookies.get('token')
      const config = {
        headers: { 'Authorization': `Bearer ${token}` },
      };
      const { data } = await axios.delete(`${api}/api/v1/package/delete/${id}`,config);
  
      dispatch({
        type: DELETE_PACKAGE_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_PACKAGE_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  