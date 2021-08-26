import { 
  GET_TRIP, 
  GET_TRIP_FAILED, 
  GET_TRIP_SUCCESS,
 
  READ_ONE_TRIP, 
  READ_ONE_TRIP_FAILED, 
  READ_ONE_TRIP_SUCCESS,

  CREATE_TRIP,
  CREATE_TRIP_SUCCESS,
  CREATE_TRIP_FAILED,
  
  EDIT_TRIP,
  EDIT_TRIP_SUCCESS,
  EDIT_TRIP_FAILED,
 
  DELETE_TRIP,
  DELETE_TRIP_SUCCESS,
  DELETE_TRIP_FAILED,
  
  REVIEW_TRIP,
  REVIEW_TRIP_SUCCESS,
  REVIEW_TRIP_FAILED,


} from "../../actions/actions_type/actions_type_trip"

export const getTrip = (state = {}, action) => {
    switch (action.type) {
      case GET_TRIP:
        return { loading: true }
      case GET_TRIP_SUCCESS:
        return { loading: false, trip: action.payload }
      case GET_TRIP_FAILED:
        return { loading: false, error: action.payload }
      default:
        return state;
    }
};

export const createTrip = (state = {}, action) => {
  switch (action.type) {
    case CREATE_TRIP:
      return { loading: true }
    case CREATE_TRIP_SUCCESS:
      return { loading: false, trip: action.payload }
    case CREATE_TRIP_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}
export const editTrip = (state = {}, action) => {
  switch (action.type) {
    case EDIT_TRIP:
      return { loading: true }
    case EDIT_TRIP_SUCCESS:
      return { loading: false, trip: action.payload }
    case EDIT_TRIP_FAILED:
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

  
export const readOneTrip = (state = {}, action) => {
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

  
export const reviewTrip = (state = {}, action) => {
  switch (action.type) {
    case REVIEW_TRIP:
      return { loading: true }
    case REVIEW_TRIP_SUCCESS:
      return { loading: false, message: action.payload }
    case REVIEW_TRIP_FAILED:
      return { loading: false, message: action.payload }
    default:
      return state;
  }
};





  