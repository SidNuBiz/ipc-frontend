import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { profileReducer, userReducer, allUsersReducer } from './reducers/userReducer';
import {cartReducer} from './reducers/cartReducer';
import {  myOrdersReducer, newOrderReducer, orderDetailsReducer, allOrdersReducer} from './reducers/orderReducer';
import {productsReducer ,productDetailsReducer,newProductReducer} from './reducers/productReducer'




const reducer = combineReducers({
  
    user: userReducer,
    allUsers:allUsersReducer,
    profile:profileReducer,
    cart:cartReducer,
    newOrder:newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    allOrders: allOrdersReducer,
    products: productsReducer,
    productDetails: productDetailsReducer,
    newProduct: newProductReducer

})

let initialState = {
    cart:{
        cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
        
    }
};

const middleware = [thunk];
const store = createStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;