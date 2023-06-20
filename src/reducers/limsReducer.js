
import {
    SAMPLE_SUBMIT_SUCCESS,
    SAMPLE_SUBMIT_REQUEST,
    SAMPLE_SUBMIT_FAIL,
    MY_SAMPLE_RESULT_REQUEST,
    MY_SAMPLE_RESULT_SUCCESS,
    MY_SAMPLE_RESULT_FAIL,
    MY_SAMPLE_REQUEST,
    MY_SAMPLE_SUCCESS,
    MY_SAMPLE_FAIL,
    CLEAR_ERRORS

  } from "../constants/limsConstants";


  export const sampleSubmissionReducer = (state = {}, action) => {
    switch (action.type) {
      case SAMPLE_SUBMIT_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case SAMPLE_SUBMIT_SUCCESS:
        return {
          loading: false,
          message: action.payload,
        };
  
      case SAMPLE_SUBMIT_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };

export const mySampleReducer = (state = { samples: [] }, action) => {
    switch (action.type) {
      case MY_SAMPLE_REQUEST:
        return {
          loading: true,
        };
  
      case MY_SAMPLE_SUCCESS:
        return {
          loading: false,
          samples: action.payload,
        };
  
      case MY_SAMPLE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };


  export const mySampleResultReducer = (state = { results: [] }, action) => {
    switch (action.type) {
      case MY_SAMPLE_RESULT_REQUEST:
        return {
          loading: true,
        };
  
      case MY_SAMPLE_RESULT_SUCCESS:
        return {
          loading: false,
          results: action.payload,
        };
  
      case MY_SAMPLE_RESULT_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };