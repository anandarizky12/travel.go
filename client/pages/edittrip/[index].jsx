import React from 'react'
import { useRouter } from "next/router";
import FormInput from '../../components/editTrip/formInput';
import MyAlert from '../../components/alert/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { readOneTrip as getTrip } from '../../actions/trip';
import { CircularProgress } from '@material-ui/core';

function index() {

    const router = useRouter();
    const id = router.query.index;
    const dispatch = useDispatch();
    const readOneTrip = useSelector(state => state.readOneTrip);
    const { trip } = readOneTrip;


    React.useEffect(()=>{
        dispatch(getTrip(id));
    },[id]);

    return (
    <div style={{ minHeight: "81.9vh", marginTop : '70px' }} >
        {trip 
        ? 
             <div >
                 <MyAlert/>
                 <FormInput data={trip.data} />
             </div>
        :
        <CircularProgress/>
        }
       
    </div>
    )
}

export default index