import { Grid } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function CreateReview() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userLogin);
    const {userInfo} = user;

    console.log(userInfo)
    return (
        <Grid>
            
        </Grid>
    )
}

export default CreateReview
