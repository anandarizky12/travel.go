import React, {useEffect} from 'react';
import MediaCard from '../card/Card';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getTrip as fetchTrip } from '../../actions/trip';

const useStyles = makeStyles({
    
    root:{
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        margin : '50px',
        height : 'auto'
    },
    text1 : {
        fontSize : '42px',
        padding : '12px'
    },
    content : {
        display : 'flex',
        flexWrap : 'wrap',
        justifyContent : "space-around",
        marginTop : '30px'
    },
  
});



function Content() {

    const classes = useStyles();
    const dispatch = useDispatch();
    
    const getTrip = useSelector((state) => state.getTrip)
    useEffect(() => {
        dispatch(fetchTrip())
    }, [])

    return (
        <div className= {classes.root}>
            <Typography className={classes.text1}>Our Tour</Typography>
            <Grid className={classes.content}>            
                {getTrip.trip 
                ?
                getTrip.trip.map((e,i)=>{
                    return <MediaCard key={i} id={e._id} image={e.image} name={e.title} desc={e.description} price={e.price}/>
                })
                : <p>NO trip found</p>
            }
            </Grid>
        </div>
    )
}

export default Content
