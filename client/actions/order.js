import {
    GET_ALL_ORDER,
    GET_ALL_ORDER_SUCCESS,
    GET_ALL_ORDER_FAILED,
  
    GET_MY_ORDER,
    GET_MY_ORDER_SUCCESS,
    GET_MY_ORDER_FAILED,
  
    CREATE_ORDER,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAILED,

    UPDATE_ORDER,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_FAILED
} from './actions_type/actions_type_order';
import axios from 'axios';
import { sendAlert } from './AlertActions';



export const getAllOrder = () => async(dispatch,getState) =>{

    try {
        dispatch({
            type : GET_ALL_ORDER
        });

        const {
            userLogin: { userInfo },
          } = getState()
      
          const config = {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }

        const { data } = await axios.get('http://127.0.0.1:5000/api/order', config);
      
        dispatch({
            type :  GET_ALL_ORDER_SUCCESS,
            payload : data
        });
        
        
    } catch (error) {
        console.log(error)
        dispatch({
            type : GET_ALL_ORDER_FAILED,
            payload : 
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const createOrder = (order) => async(dispatch, getState) =>{

    try {
        dispatch({
            type : CREATE_ORDER
        });

        const {
            userLogin: { userInfo },
          } = getState()
      
          const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
  
        const { data } = await axios.post('http://127.0.0.1:5000/api/order', order, config);
        
 
        dispatch({
            type :  CREATE_ORDER_SUCCESS,
            payload : data,
        });
        
        dispatch(sendAlert('Order Created', 1))
    } catch (error) {
        dispatch({
            type : CREATE_ORDER_FAILED,
            payload : 
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
        dispatch(sendAlert('Create Order Failed', 3))
    }
}

export const getMyOrder = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_MY_ORDER,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`http://localhost:5000/api/myorders`, config)

    dispatch({
      type: GET_MY_ORDER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    console.log(error)
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: GET_MY_ORDER_FAILED,
      payload: message,
    })
  }
}

export const updateOrder = (status, id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: UPDATE_ORDER,
      })

      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
  
      const { data } = await axios.put(`http://localhost:5000/api/order/${id}`,  JSON.stringify({ status }), config)
    
      dispatch({
        type: UPDATE_ORDER_SUCCESS,
        payload: data,
      });
      dispatch(sendAlert('UPDATE ORDER Successfull', 1))
    } catch (error) {
      
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
  
      dispatch({
        type: UPDATE_ORDER_FAILED,
        payload: message,
      });
      dispatch(sendAlert(error.response ? error.response.data.message : "Network Error", 3))
    }
  }