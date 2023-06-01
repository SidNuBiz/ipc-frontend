
import {

    MY_SAMPLE_REQUEST,
    MY_SAMPLE_SUCCESS,
    MY_SAMPLE_FAIL,
    CLEAR_ERRORS

  } from "../constants/limsConstants";


export const mySampleReducer = (state = { sample: [] }, action) => {
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