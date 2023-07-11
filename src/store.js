import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { profileReducer, userReducer, allUsersReducer ,forgotPasswordReducer} from './reducers/userReducer';
import {cartReducer} from './reducers/cartReducer';
import {  myOrdersReducer, newOrderReducer, orderDetailsReducer, allOrdersReducer} from './reducers/orderReducer';
import {productsReducer ,productDetailsReducer,newProductReducer} from './reducers/productReducer'
import {newServiceReducer} from './reducers/serviceReducer'
import {mySampleReducer,sampleSubmissionReducer,mySampleResultReducer} from './reducers/limsReducer'
import { sampleSubmitFormReducer } from './reducers/sampleSubmitReducer';


const reducer = combineReducers({
  
    user: userReducer,
    allUsers:allUsersReducer,
    forgotPassword:forgotPasswordReducer,
    profile:profileReducer,
    cart:cartReducer,
    newOrder:newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    allOrders: allOrdersReducer,
    products: productsReducer,
    productDetails: productDetailsReducer,
    newProduct: newProductReducer,
    newService: newServiceReducer,
    mySample: mySampleReducer,
    sampleSubmit: sampleSubmissionReducer,
    sampleFormSubmit: sampleSubmitFormReducer,
    mySampleResult: mySampleResultReducer

})

let initialState = {
    cart:{
        cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
        
    }
};

const middleware = [thunk];
const store = createStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;