import React from 'react'
import { useRouter } from "next/router";
import FormInput from '../../components/editTrip/formInput';
import MyAlert from '../../components/alert/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { readOneTrip as getTrip } from '../../actions/trip';
import { CircularProgress } from '@material-ui/core';
import { readOneTrip  as fetchTrip } from '../../actions/trip';

function Index() {

    const router = useRouter();
    const id = router.query.index;
    const dispatch = useDispatch();
    const readOneTrip = useSelector(state => state.readOneTrip);
    const { trip } = readOneTrip;


    React.useEffect(()=>{
        dispatch(fetchTrip(id));
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

export default Index