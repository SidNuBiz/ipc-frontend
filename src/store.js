import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { profileReducer, userReducer } from './reducers/userReducer';
import {cartReducer} from './reducers/cartReducer';
import {  myOrdersReducer, newOrderReducer, orderDetailsReducer} from './reducers/orderReducer';
import {productsReducer ,productDetailsReducer} from './reducers/productReducer'




const reducer = combineReducers({
  
    user: userReducer,
    profile:profileReducer,
    cart:cartReducer,
    newOrder:newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    products: productsReducer,
    productDetails: productDetailsReducer

})

let initialState = {
    cart:{
        cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
        
    }
};

const middleware = [thunk];
const store = createStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;