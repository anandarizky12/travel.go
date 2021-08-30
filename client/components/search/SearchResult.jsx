import React, { useEffect } from 'react';
import { useRouter } from "next/router";
import {useDispatch, useSelector} from 'react-redux';
import { getTrip as Trip } from '../../actions/trip';
import { filterData } from '../../src/FilterData';
import { useState } from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import NotFoundData from './NotFoundData';
import { makeStyles } from '@material-ui/core/styles';
import MediaCard from '../card/Card';

const useStyles = makeStyles({
    
    root:{
       marginTop:"50px",
       minHeight : 400,
       marginLeft : '50px',
       marginRight : '50px',
     
    },
    text1 : {
        fontSize : '42px',
        padding : '12px'
    },
    value : {
        fontFamily : 'poppins',
        padding : '12px',
    },
    content : {
        display : 'flex',
        flexWrap : 'wrap',
        justifyContent : "space-around",
        marginTop : '30px'
    },
    result : {
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
    }
  
});

function SearchResult() {

    const classes = useStyles();
    const router = useRouter();
    const [data, setdata] = useState([]);
    const value = router.query.q;
    const [loading, setloading] = useState(false);
    const dispatch = useDispatch();
    const getTrip = useSelector((state) => state.getTrip)

    useEffect(() => {
        dispatch(Trip());
    }, [value]);


    useEffect(() => {
        if(getTrip){
            setdata(filterData( getTrip.trip, value ));
            setloading(true);
            setTimeout(() => {
                setloading(false);
              }, 1500);
        }
    }, [getTrip]);

    console.log(data)
  
    return (
        
        <div className={classes.root} >
            <Typography variant="h6" className={classes.value}>Search Resut For "{value}"</Typography>
            <div className={classes.result}>
                    {data.length > 0 && !loading &&
                        data.map((e,i)=>{ return  <MediaCard key={i} id={e._id} image={e.image} name={e.title} desc={e.description} price={e.price}/> }
                        )
                    }
            </div>
        
            {loading && <CircularProgress/>}
            {data.length < 1 && !loading && 
                <NotFoundData value={value}/>
            }
        </div>
    )
}

export default SearchResult
