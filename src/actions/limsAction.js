import {
  SAMPLE_SUBMIT_SUCCESS,
  SAMPLE_SUBMIT_REQUEST,
  SAMPLE_SUBMIT_FAIL,
  MY_SAMPLE_REQUEST,
  MY_SAMPLE_SUCCESS,
  MY_SAMPLE_FAIL,
  MY_SAMPLE_RESULT_REQUEST,
  MY_SAMPLE_RESULT_SUCCESS,
  MY_SAMPLE_RESULT_FAIL,
  CLEAR_ERRORS

} from "../constants/limsConstants";

import axios from "axios";
import Cookies from 'js-cookie'

const api = 'http://34.202.67.106:8080'
// const api = 'http://localhost:8080'

// Create Sample
export const createSamples = (samples) => async (dispatch) => {
    console.log(samples)
    try {
      dispatch({ type: SAMPLE_SUBMIT_REQUEST });
      const token = Cookies.get('token')
      const config = {
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}` 
        },
      };
 
      const { data } = await axios.post(`${api}/api/v1/lims/sample-entry-blank-template-sample`,samples,config);
  
      dispatch({ type: SAMPLE_SUBMIT_SUCCESS, payload: data.message });

    } catch (error) {
      console.log(error)
      dispatch({
        type: SAMPLE_SUBMIT_FAIL,
        payload: error.response.data.error,
      });
       
    }
  };


// My Sample
export const mySample = () => async (dispatch) => {
  try {
    dispatch({ type: MY_SAMPLE_REQUEST });
    const token = Cookies.get('token')
    const config = {
      headers: {
        'Authorization': `Bearer ${token}` 
      },
    };
    
    const { data } = await axios.get(`${api}/api/v1/lims/samples`,config);
    dispatch({ type: MY_SAMPLE_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: MY_SAMPLE_FAIL,
      payload: error.response.data.error,
    });
  }
};

export const mySampleResult = (sampleId) => async (dispatch) => {
  try {
    dispatch({ type: MY_SAMPLE_RESULT_REQUEST });
    const token = Cookies.get('token')
    const config = {
      headers: {
        'Authorization': `Bearer ${token}` 
      },
    };
    
    const { data } = await axios.get(`${api}/api/v1/lims/sample/result/${sampleId}`,config);
    dispatch({ type: MY_SAMPLE_RESULT_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: MY_SAMPLE_RESULT_FAIL,
      payload: error.response.data.error,
    });
  }
}

//Cearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({type:CLEAR_ERRORS});
}