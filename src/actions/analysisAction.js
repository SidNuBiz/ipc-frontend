import {
    ALL_ANALYSIS_FAIL,
    ALL_ANALYSIS_REQUEST,
    ALL_ANALYSIS_SUCCESS,
    NEW_ANALYSIS_REQUEST,
    NEW_ANALYSIS_SUCCESS,
    NEW_ANALYSIS_FAIL,
    UPDATE_ANALYSIS_REQUEST,
    UPDATE_ANALYSIS_SUCCESS,
    UPDATE_ANALYSIS_FAIL,
    DELETE_ANALYSIS_REQUEST,
    DELETE_ANALYSIS_SUCCESS,
    DELETE_ANALYSIS_FAIL,
    CLEAR_ERRORS,
  } from "../constants/analysisConstants";
  import Cookies from "js-cookie";
  import axios from "axios";
  const api = 'http://34.202.67.106:8080'
  // const api = 'http://localhost:8080'
  
  //Get All Analysis
  export const getAnalyses = ()=>async (dispatch)=>{  
    try{
        dispatch({type:ALL_ANALYSIS_REQUEST})
     
        const {data} = await axios.get(`${api}/api/v1/analysis/all`)

        data.analyses = data.analyses.map(data => {
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
  
        dispatch({type:ALL_ANALYSIS_SUCCESS,payload:data})

    }catch(error){
        dispatch({
            type:ALL_ANALYSIS_FAIL,
            payload:error.response.data.error
        })
    }
  }
  
  
  // Create Analysis
  export const createAnalysis = (analysisData,) => async (dispatch) => {
  
      try {
        dispatch({ type: NEW_ANALYSIS_REQUEST });
        const token = Cookies.get('token')

        const config = {
            headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
        }
       
        const {data} = await axios.post(`${api}/api/v1/analysis/create`,analysisData,config)
        
        dispatch({
          type: NEW_ANALYSIS_SUCCESS,
          payload: data
        })
        
    
      } catch (error) {
        dispatch({
          type: NEW_ANALYSIS_FAIL,
          payload: error
        });
      }
  };
  
  // Update Analysis
  export const updateAnalysis = (analysisData,id) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_ANALYSIS_REQUEST });
      const token = Cookies.get('token')
  
   
      const config = {
          headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
      }
     
     
      const {data} = await axios.put(`${api}/api/v1/analysis/update/${id}`,analysisData,config)
    
      dispatch(getAnalyses())
      dispatch({
        type: UPDATE_ANALYSIS_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_ANALYSIS_FAIL,
        payload: error
      });
    }
  };
  
  // Delete Analysis
  export const deleteAnalysis = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_ANALYSIS_REQUEST });
      const token = Cookies.get('token')
      const config = {
        headers: { 'Authorization': `Bearer ${token}` },
      };
      const { data } = await axios.delete(`${api}/api/v1/analysis/delete/${id}`,config);
  
      dispatch({
        type: DELETE_ANALYSIS_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: DELETE_ANALYSIS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  