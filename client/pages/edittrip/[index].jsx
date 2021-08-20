import React from 'react'
import { useRouter } from "next/router";
import FormInput from '../../components/editTrip/formInput';
import MyAlert from '../../components/alert/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { readOneTrip as getTrip } from '../../actions/trip';

function index() {

    const router = useRouter();
    const id = router.query.index;
    const dispatch = useDispatch();
    const readOneTrip = useSelector(state => state.readOneTrip);
    const { trip } = readOneTrip;


    React.useEffect(()=>{
        dispatch(getTrip(id));
    },[id]);


    console.log(readOneTrip, id)
    return (
        <div style={{ minHeight: "81.9vh", marginTop : '70px' }}>
            <MyAlert/>
            <FormInput/>
        </div>
    )
}

export default index