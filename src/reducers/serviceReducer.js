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
    UPDATE_SERVICE_RESET,
    DELETE_SERVICE_REQUEST,
    DELETE_SERVICE_SUCCESS,
    DELETE_SERVICE_FAIL,
   
    // PRODUCT_DETAILS_REQUEST,
    // PRODUCT_DETAILS_FAIL,
    // PRODUCT_DETAILS_SUCCESS,
    CLEAR_ERRORS,
  } from "../constants/serviceConstants";
  
  export const servicesReducer = (state = { services: [] }, action) => {
    switch (action.type) {
      case ALL_SERVICE_REQUEST:
      case ADMIN_SERVICE_REQUEST:
        return {
          loading: true,
          services: [],
        };
      case ALL_SERVICE_SUCCESS:
        return {
          loading: false,
          services: action.payload.services,
          
        };
  
      case ADMIN_SERVICE_SUCCESS:
        return {
          loading: false,
          services: action.payload,
        };
      case ALL_SERVICE_FAIL:
      case ADMIN_SERVICE_FAIL:
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
  
  export const newServiceReducer = (state = { service: {} }, action) => {
    switch (action.type) {
      case NEW_SERVICE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_SERVICE_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          service: action.payload.service,
        };
      case NEW_SERVICE_FAIL:
        return {
          ...state,
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
  
  export const serviceReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_SERVICE_REQUEST:
      case UPDATE_SERVICE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_SERVICE_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
      case UPDATE_SERVICE_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_SERVICE_FAIL:
      case UPDATE_SERVICE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case UPDATE_SERVICE_RESET:
        return {
          ...state,
          isUpdated: false,
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
  
  