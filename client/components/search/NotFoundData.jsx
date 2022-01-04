import React from 'react';

import {  Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
    value : {
        fontFamily : 'poppins',
        padding : '12px'
    },
    content : {
        display : 'flex',
        flexWrap : 'wrap',
        justifyContent : "space-around",
        marginTop : '30px'
    },
  
});

function NotFoundData({ value }) {
    const classes = useStyles();
    return (
        <div className= {classes.root}>
            <Typography className={classes.value}>Whoops! We didn &apos; t find any result for your search criteria</Typography>
        </div>
    )
}

export default NotFoundData
