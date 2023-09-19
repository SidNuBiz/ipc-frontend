import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { profileReducer, userReducer, allUsersReducer ,forgotPasswordReducer} from './reducers/userReducer';
import {cartReducer} from './reducers/cartReducer';
import {  myOrdersReducer, newOrderReducer, orderDetailsReducer, allOrdersReducer} from './reducers/orderReducer';
import {productsReducer ,productDetailsReducer,newProductReducer} from './reducers/productReducer'
import {newServiceReducer,servicesReducer,serviceReducer} from './reducers/serviceReducer'
import {mySampleReducer,sampleSubmissionReducer,mySampleResultReducer,} from './reducers/limsReducer'
import { sampleSubmitFormReducer } from './reducers/sampleSubmitReducer';
import {newAnalysisReducer, analysesReducer, analysisReducer} from './reducers/analysisReducer'


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
    services: servicesReducer,
    productDetails: productDetailsReducer,
    newProduct: newProductReducer,
    newService: newServiceReducer,
    service:serviceReducer,
    mySample: mySampleReducer,
    sampleSubmit: sampleSubmissionReducer,
    sampleFormSubmit: sampleSubmitFormReducer,
    mySampleResult: mySampleResultReducer,
    newAnalysis: newAnalysisReducer,
    analyses: analysesReducer,
    analysis: analysisReducer

})

let initialState = {
    cart:{
        cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
        
    }
};

const middleware = [thunk];
const store = createStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;