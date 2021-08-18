import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import transitions from '@material-ui/core/styles/transitions';


const dummy = ""

const useStyles = makeStyles({
    root : {
        display :'flex',
        flexDirection : 'row',
        '&:hover' : {
            cursor : 'pointer'
        }
    },
    image : {
        width:'290px',
        height:'200px',
        transition: "0.3s ease-in-out",
        '&:hover' : {
            filter: 'brightness(80%)',
          
            transition: "0.3s ease-in-out"
        }
    },
    
    main : {
       padding : '10px'
    },
  
    title : {
        fontFamily : "poppins",
        fontWeight : 300,

    }
})

function SearchCard({ title }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.main}>
                <img className={classes.image} src='/image.jpg'></img>
                <Typography variant="subtitle2" className={classes.title}>{title}</Typography>
                <Typography variant="subtitle2" className={classes.title}>rp.500.000</Typography>
            </div>
        
        </div>
    )
}

export default SearchCard;

