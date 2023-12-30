import {
    ALL_ANALYSIS_FAIL,
    ALL_ANALYSIS_REQUEST,
    ALL_ANALYSIS_SUCCESS,
    ADMIN_ANALYSIS_REQUEST,
    ADMIN_ANALYSIS_SUCCESS,
    ADMIN_ANALYSIS_FAIL,
    NEW_ANALYSIS_REQUEST,
    NEW_ANALYSIS_SUCCESS,
    NEW_ANALYSIS_FAIL,
    UPDATE_ANALYSIS_REQUEST,
    UPDATE_ANALYSIS_SUCCESS,
    UPDATE_ANALYSIS_FAIL,
    UPDATE_ANALYSIS_RESET,
    DELETE_ANALYSIS_REQUEST,
    DELETE_ANALYSIS_SUCCESS,
    DELETE_ANALYSIS_FAIL,

    CLEAR_ERRORS,
    DELETE_ANALYSIS_RESET,
    NEW_ANALYSIS_RESET,
  } from "../constants/analysisConstants";
  
  export const analysesReducer = (state = { analyses: [] }, action) => {
    switch (action.type) {
      case ALL_ANALYSIS_REQUEST:
      case ADMIN_ANALYSIS_REQUEST:
        return {
          loading: true,
          analyses: [],
        };
      case ALL_ANALYSIS_SUCCESS:
        return {
          loading: false,
          analyses: action.payload.analyses,
          
        };
  
      case ADMIN_ANALYSIS_SUCCESS:
        return {
          loading: false,
          analyses: action.payload,
        };
      case ALL_ANALYSIS_FAIL:
      case ADMIN_ANALYSIS_FAIL:
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
  
  export const newAnalysisReducer = (state = { analysis: {} }, action) => {
    switch (action.type) {
      case NEW_ANALYSIS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_ANALYSIS_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          analysis: action.payload.analysis,
        };
      case NEW_ANALYSIS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_ANALYSIS_RESET:
        return {
          ...state,
          success: false,
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
  
  export const analysisReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_ANALYSIS_REQUEST:
      case UPDATE_ANALYSIS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_ANALYSIS_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
      case UPDATE_ANALYSIS_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_ANALYSIS_FAIL:
      case UPDATE_ANALYSIS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case UPDATE_ANALYSIS_RESET:
        return {
          ...state,
          isUpdated: false,
        };
      case DELETE_ANALYSIS_RESET:
        return {
          ...state,
          isDeleted: false,
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
  
//   export const productDetailsReducer = (state = { product: {} }, action) => {
//     switch (action.type) {
//       case PRODUCT_DETAILS_REQUEST:
//         return {
//           ...state,
//           loading: true, 
//         };
//       case PRODUCT_DETAILS_SUCCESS:
//         return {
//           loading: false,
//           product: action.payload,
//         };
//       case PRODUCT_DETAILS_FAIL:
//         return {
//           loading: false,
//           error: action.payload,
//         };
  
//       case CLEAR_ERRORS:
//         return {
//           ...state,
//           error: null,
//         };
//       default:
//         return state;
//     }
//   };
  
  