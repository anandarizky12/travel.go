import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const image = 'https://images.unsplash.com/photo-1624104416015-f0ef71c7800a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80';
const image2 = 'https://images.unsplash.com/photo-1496131567027-f594499b5c8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80'
const useStyles = makeStyles({

  

    root : {
        backgroundImage : `url(${image2})`,
        height : '70vh',
        width : '100%',
        backgroundPosition : 'center',
        backgroundSize : 'cover',
     

    },
    content : {
        display : 'flex',
        flexDirection : 'column',
        width : '40%',
        alignItems  : 'center'
    },
    text1 : {
        color : 'white',
        fontFamily: "Poppins",
        fontWeight : 'semibold'
    },
    text2 : {
        color : 'white',
        fontFamily: "Poppins",
        fontWeight : 600
    },
    gradient : {
        width : '100%',
        height : '100%',
        background:'linear-gradient(180deg, rgba(22, 22, 22, 0.23),rgba(0, 0, 0, 0.300),  rgba(0, 0, 0, 0.466))',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center'
    },
    button : {
        background : 'none',
        border : '1px solid white',
        fontFamily: "Poppins",
        color : 'white',
        width : '20%',
        marginTop : '15px',
        paddingTop : '4px',
        paddingBottom : '4px',
        fontWeight : 'bold',
        fontSize : '20px',
        '&:hover': {
            backgroundColor: 'white',
            color: 'black',
            cursor : 'pointer',
            transitia
          }
    }
})

function Jumbotron() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.gradient}>
                <div className={classes.content} >
                    <Typography className={classes.text1} variant='h6'>
                            Welcome To Travel Go
                    </Typography>
                    <Typography className = {classes.text2} variant='h4'>
                        Find Great Place With Us
                    </Typography>
                    <button className = {classes.button}>Go</button>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron
