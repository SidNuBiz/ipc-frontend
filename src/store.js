import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { profileReducer, userReducer, allUsersReducer ,forgotPasswordReducer} from './reducers/userReducer';
import {  myOrdersReducer, newOrderReducer, orderDetailsReducer, allOrdersReducer} from './reducers/orderReducer';
import {newServiceReducer,servicesReducer,serviceReducer} from './reducers/serviceReducer'
import {mySampleReducer,sampleSubmissionReducer,mySampleResultReducer,} from './reducers/limsReducer'
import { sampleSubmitFormReducer } from './reducers/sampleSubmitReducer';
import {newAnalysisReducer, analysesReducer, analysisReducer} from './reducers/analysisReducer'
import {newPackageReducer, packagesReducer, packageReducer} from './reducers/packageReducer'


const reducer = combineReducers({
  
    user: userReducer,
    allUsers: allUsersReducer,
    forgotPassword: forgotPasswordReducer,
    profile: profileReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    allOrders: allOrdersReducer,
    services: servicesReducer,
    newService: newServiceReducer,
    service:serviceReducer,
    mySample: mySampleReducer,
    sampleSubmit: sampleSubmissionReducer,
    sampleFormSubmit: sampleSubmitFormReducer,
    mySampleResult: mySampleResultReducer,
    newAnalysis: newAnalysisReducer,
    analyses: analysesReducer,
    analysis: analysisReducer,
    newPackage: newPackageReducer,
    packages: packagesReducer,
    package: packageReducer

})


const middleware = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store;