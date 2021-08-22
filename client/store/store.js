  
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userUpdateReducer,
} from './reducers/user'
import Alert from './reducers/alert'
import { getTrip, createTrip, readOneTrip, deleteTrip, editTrip } from './reducers/trip'
import { createOrder, getAllOrder  } from './reducers/order'



const reducer = combineReducers({

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userUpdate: userUpdateReducer,
  getTrip,
  createTrip,
  deleteTrip,
  readOneTrip,
  editTrip,
  createOrder,
  alert : Alert

})





let userInfoFromStorage;
if (typeof window !== 'undefined'){

      userInfoFromStorage = localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo')) 
      : null;
    
 
}





const initialState = {

  userLogin: { userInfo:userInfoFromStorage},

}



const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;