import { 
    GET_ALL_ORDER, 
    GET_ALL_ORDER_FAILED, 
    GET_ALL_ORDER_SUCCESS,
   
    GET_MY_ORDER, 
    GET_MY_ORDER_FAILED, 
    GET_MY_ORDER_SUCCESS,
   
    CREATE_ORDER,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAILED,
  
    UPDATE_ORDER,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_FAILED,
  
  } from "../../actions/actions_type/actions_type_order"
  
  export const getAllOrder = (state = {}, action) => {
      switch (action.type) {
        case GET_ALL_ORDER:
          return { loading: true }
        case GET_ALL_ORDER_SUCCESS:
          return { loading: false, allorder: action.payload }
        case GET_ALL_ORDER_FAILED:
          return { loading: false, error: action.payload }
        default:
          return state;
      }
  };
  
  export const createOrder = (state = {}, action) => {
    switch (action.type) {
      case CREATE_ORDER:
        return { loading: true }
      case CREATE_ORDER_SUCCESS:
        return { loading: false, ORDER: action.payload }
      case CREATE_ORDER_FAILED:
        return { loading: false, error: action.payload }
      default:
        return state;
    }
  }
  
  export const deleteTrip = (state = {}, action) => {
    switch (action.type) {
      case DELETE_TRIP:
        return { loading: true }
      case DELETE_TRIP_SUCCESS:
        return { loading: false, trip: action.payload }
      case DELETE_TRIP_FAILED:
        return { loading: false, error: action.payload }
      default:
        return state;
    }
  }
  
    
  export const readOneOrder = (state = {}, action) => {
    switch (action.type) {
      case READ_ONE_TRIP:
        return { loading: true }
      case READ_ONE_TRIP_SUCCESS:
        return { loading: false, trip: action.payload }
      case READ_ONE_TRIP_FAILED:
        return { loading: false, error: action.payload }
      default:
        return state;
    }
  }
  
    
  export const updateOrder = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_ORDER:
        return { loading: true }
      case UPDATE_ORDER_SUCCESS:
        return { loading: false, order: action.payload }
      case UPDATE_ORDER_FAILED:
        return { loading: false, error: action.payload }
      default:
        return state;
    }
  }


  export const myOrder = (state = {}, action) => {
    switch (action.type) {
      case GET_MY_ORDER:
        return { loading: true }
      case GET_MY_ORDER_SUCCESS:
        return { loading: false, order: action.payload }
      case GET_MY_ORDER_FAILED:
        return { loading: false, error: action.payload }
      default:
        return state;
    }
  }
  
    