import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    CLEAR_ERRORS
} from "../constants/userConstatns"
import Cookies from 'js-cookie'
import axios from "axios";
const options = {
    expires:new Date(
        Date.now() + 5 * 24*60*60*1000
    ),
}

export const login = (userData) => async (dispatch) => {
    try{
        dispatch({type:LOGIN_REQUEST})
        const config = {headers : {"Content-Type":"application/json"}};
        const {data} = await axios.post(`http://54.190.127.181:8080/api/v1/login`,userData,config)
        // const {data} = await axios.post(`http://localhost:8080/api/v1/login`,userData,config)
        Cookies.set('token', data.token,options) 

        dispatch({type:LOGIN_SUCCESS,payload:data.user})
    }catch(error){
        dispatch({type:LOGIN_FAIL,payload:error.response.data.error})
    }
}

// Register
export const register = (userData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });

      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await axios.post(`http://54.190.127.181:8080/api/v1/register`, userData, config);
      // const { data } = await axios.post(`http://localhost:8080/api/v1/register`, userData, config);
      Cookies.set('token', data.token,options) 
  
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.error,
      });
    }
  };

// Load User
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });
    
        const token = Cookies.get('token')

        const config = { headers:{'Authorization': `Bearer ${token}` }}
        const { data } = await axios.get(`http://54.190.127.181:8080/api/v1/me`,config);
        // const { data } = await axios.get(`http://localhost:8080/api/v1/me`,config);
    
        dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.error }); 
    }
    };

//Logout
export const logout = () => async (dispatch) => {
    try {
      Cookies.remove("token")
      // await axios.get(`http://localhost:8080/api/v1/logout`);
      await axios.get(`http://54.190.127.181:8080/api/v1/logout`);
  
      dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
      dispatch({ type: LOGOUT_FAIL, payload: error.response.data.error });
    }
  };


// Update Profile 
export const updateProfile = (userData,isAddress) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST }); 
    const token = Cookies.get('token')
    const config = { headers:{"Content-Type":"multipart/form-data" ,  'Authorization': `Bearer ${token}` }}
    let UD
    if (isAddress) {
      // const { data } = await axios.put(`http://localhost:8080/api/v1/me/address/update`,{...userData}, config);
      const { data } = await axios.put(`http://54.190.127.181:8080/api/v1/me/address/update`,{...userData}, config);
      UD = data
    }else{
      // const { data } = await axios.put(`http://localhost:8080/api/v1/me/update`,{...userData}, config);
      const { data } = await axios.put(`http://54.190.127.181:8080/api/v1/me/update`,{...userData}, config);
      UD = data
    }
    
    // const { data } = await axios.put(`http://3.85.137.174/api/v1/me/update`,{...userData}, config)

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: UD.success });
    dispatch({ type: LOAD_USER_SUCCESS, payload: UD.user });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.UD.error,
    });
  }
};

//Add Image
export const addImage = (file) => async (dispatch) => {
  try{
    let fileData = new FormData()
    fileData.append('image',file)
    const token = Cookies.get('token')
    const config = { headers:{"Content-Type":"multipart/form-data" ,  'Authorization': `Bearer ${token}` }}
    const {data} = await axios.post('http://54.190.127.181:8080/api/v1/profile/image',fileData,config)
    // const {data} = await axios.post('http://localhost:8080/api/v1/profile/image',fileData,config)
    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  }catch (error) {
    console.log(error)
  }
   
}

// get All Users
export const getAllUsers = () => async (dispatch) => {
  try {
    console.log("game")
    dispatch({ type: ALL_USERS_REQUEST });
    const { data } = await axios.get(`http://localhost:8080/api/v1/users/all`);
    dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
  } catch (error) {
    console.log(error)
    dispatch({ type: ALL_USERS_FAIL, payload: error.response.data.error });
  }
};

// Forgot Password
export const forgotPasswordRecover = (email) => async (dispatch) => {

  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`http://localhost:8080/api/v1/password/forgot`, {email}, config);

    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.error });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.error,
    });
  }
};

// Reset Password
export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `http://localhost:8080/api/v1/password/reset/${token}`,
      passwords,
      config
    );

    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response.data.error,
    });
  }
};