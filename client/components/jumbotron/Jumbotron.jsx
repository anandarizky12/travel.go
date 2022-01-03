import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AOS from "aos";

const image2 = 'https://images.unsplash.com/photo-1496131567027-f594499b5c8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80'
const useStyles = makeStyles((theme)=>({

    root : {
        backgroundImage : `url(${image2})`,
        height : '70vh',
        width : '100%',
        backgroundPosition : 'center',
        backgroundSize : 'cover',
        backgroundAttachment : 'fixed'
    },
    content : {
        display : 'flex',
        flexDirection : 'column',
        width : '85%',
        alignItems  : 'center'
    },
    text1 : {
        color : 'white',
        fontFamily: "Poppins",
        fontWeight : 'semibold',
        [theme.breakpoints.down("xs")]: {
                fontSize : 22,
                fontWeight : 200,
          }
    },
    text2 : {
        color : 'white',
        fontFamily: "Montserrat",
        fontWeight : 500,
        [theme.breakpoints.down("xs")]: {
            fontSize : 25,
            fontWeight : 400,
            textAlign : 'center'
      }
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
        color : 'white',
        fontFamily: "Poppins",
        fontWeight : 'semibold',
        fontWeight : 500,
        color : 'white',
        width : '20%',
        marginTop : '15px',
        paddingTop : '4px',
        paddingBottom : '4px',
        fontSize : '20px',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        '&:hover': {
            backgroundColor: 'white',
            color: 'black',
            cursor : 'pointer'
          }
    }
}));

function Jumbotron() {

    React.useEffect(()=>{
        AOS.init({
            duration : 1000
        })
    }
    ,[])

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.gradient}>
                <div   data-aos="fade-in" className={classes.content} >
                    <Typography className={classes.text1} variant='h6'>
                        Welcome To Travel Go
                    </Typography>
                    <Typography className = {classes.text2} variant='h4'>
                        Find Great Place With Us
                    </Typography>
                    {/* <div className = {classes.button}>Go</div> */}
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;
