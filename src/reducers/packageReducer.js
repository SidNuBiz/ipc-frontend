import {
    ALL_PACKAGE_FAIL,
    ALL_PACKAGE_REQUEST,
    ALL_PACKAGE_SUCCESS,
    ADMIN_PACKAGE_REQUEST,
    ADMIN_PACKAGE_SUCCESS,
    ADMIN_PACKAGE_FAIL,
    NEW_PACKAGE_REQUEST,
    NEW_PACKAGE_SUCCESS,
    NEW_PACKAGE_FAIL,
    UPDATE_PACKAGE_REQUEST,
    UPDATE_PACKAGE_SUCCESS,
    UPDATE_PACKAGE_FAIL,
    UPDATE_PACKAGE_RESET,
    DELETE_PACKAGE_REQUEST,
    DELETE_PACKAGE_SUCCESS,
    DELETE_PACKAGE_FAIL,

    CLEAR_ERRORS,
  } from "../constants/packageConstants";
  
  export const packagesReducer = (state = { packages: [] }, action) => {
    switch (action.type) {
      case ALL_PACKAGE_REQUEST:
      case ADMIN_PACKAGE_REQUEST:
        return {
          loading: true,
          packages: [],
        };
      case ALL_PACKAGE_SUCCESS:
        return {
          loading: false,
          packages: action.payload.packages,
          
        };
  
      case ADMIN_PACKAGE_SUCCESS:
        return {
          loading: false,
          packages: action.payload,
        };
      case ALL_PACKAGE_FAIL:
      case ADMIN_PACKAGE_FAIL:
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
  
  export const newPackageReducer = (state = { package: {} }, action) => {
    switch (action.type) {
      case NEW_PACKAGE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_PACKAGE_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          package: action.payload.package,
        };
      case NEW_PACKAGE_FAIL:
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
  
  export const packageReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_PACKAGE_REQUEST:
      case UPDATE_PACKAGE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_PACKAGE_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
      case UPDATE_PACKAGE_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_PACKAGE_FAIL:
      case UPDATE_PACKAGE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case UPDATE_PACKAGE_RESET:
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
  
  