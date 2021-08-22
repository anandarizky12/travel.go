import {
    GET_ALL_ORDER,
    GET_ALL_ORDER_SUCCESS,
    GET_ALL_ORDER_FAILED,
  
    CREATE_ORDER,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAILED
} from './actions_type/actions_type_order';
import axios from 'axios';
import { sendAlert } from './AlertActions';

export const getAllOrder = () => async(dispatch) =>{

    try {
        dispatch({
            type : GET_ALL_ORDER
        });

        const { data } = await axios.get('http://127.0.0.1:5000/api/order');
        
        dispatch({
            type :  GET_ALL_ORDER_SUCCESS,
            payload : data
        })
    } catch (error) {
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
        
        console.log('called')
        dispatch({
            type :  CREATE_ORDER_SUCCESS,
            payload : data
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