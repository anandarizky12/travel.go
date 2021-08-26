import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import { readOneTrip } from '../../actions/trip';
import CircularProgress from "@material-ui/core/CircularProgress";
import Information from '../../components/trip/InformationTrip';
import Content from '../../components/trip/Content';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import Reviews from '../../components/review/Reviews';


function Book() {

    const router = useRouter(); 
    const query  = router.query.index;
    const dispatch = useDispatch();
    const readTrip = useSelector((state) => state.readOneTrip)
    // const { userInfo } = userLogin;

    const useStyles = makeStyles({
        container:{
            width : '75%'
          },
          main:{
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            marginTop : '65px',
            marginBottom : '45px'
          },
    });
    const classes = useStyles();
    useEffect(() => {
        dispatch(readOneTrip(query))
    }, [query])

   
    return (
    <Grid className={classes.main}>
        {readTrip.trip 
        ? 
        <Grid className={classes.container}>
            <Content item={readTrip.trip.data}/>
            <Information item={readTrip.trip.data}/>  
            <Reviews item={readTrip.trip.data}/>
        </Grid>
            : 
            <CircularProgress/>
        }
    </Grid>
    )
}

export default Book;
