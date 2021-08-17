import {
    GET_TRIP_SUCCESS, 
    GET_TRIP_FAILED,  
    GET_TRIP, 
    READ_ONE_TRIP_SUCCESS, 
    READ_ONE_TRIP_FAILED,  
    READ_ONE_TRIP, 
    CREATE_TRIP, 
    CREATE_TRIP_SUCCESS, 
    CREATE_TRIP_FAILED, 
    DELETE_TRIP
} from './actions_type/actions_type_trip';
import axios from 'axios';
import { sendAlert } from './AlertActions';



export const getTrip = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_TRIP,
      });

      const { data } = await axios.get(
        'http://127.0.0.1:5000/api/trip'
      )
  
      dispatch({
        type: GET_TRIP_SUCCESS,
        payload: data,
      });
  
     
      
    } catch (error) {
      dispatch({
        type: GET_TRIP_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
};


export const readOneTrip = (id) => async (dispatch, getState) => {

  try {
      dispatch({
        type: READ_ONE_TRIP,
      });
      
      
    const {
      userLogin: { userInfo },
    } = getState();


      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get(`http://127.0.0.1:5000/api/trip/${id}`, config)
  
      dispatch({
        type: READ_ONE_TRIP_SUCCESS,
        payload: data,
      });
  
     
      
    } catch (error) {
      dispatch({
        type: READ_ONE_TRIP_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
};

export const createTrip = (trip) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATE_TRIP,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`http://localhost:5000/api/trip`, trip, config)
 
    dispatch({
      type: CREATE_TRIP_SUCCESS,
      payload: data,
    });
    dispatch(sendAlert('Create Trip Successfull', 1))
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: CREATE_TRIP_FAILED,
      payload: message,
    });
    dispatch(sendAlert(error.response ? error.response.data.message : "Network Error", 3))
  }
}