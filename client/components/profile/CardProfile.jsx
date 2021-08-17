import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import UserOrderTable from './UserOrder';

const useStyles = makeStyles((theme) => ({
  main : {
      display : 'flex',
      justifyContent : 'center',
      flexDirection : 'column',
      padding : 20
  },
  large: {
    width:100,
    height: 100,
  },
  container : {
      width : '100%',
      display : 'flex',
      flexDirection : 'column',
      justifyContent : 'center',
      alignItems : 'center',
      margin : '6px'
  },
  title : {
      fontFamily : 'poppins'
  },
  subtitle : {
      display : 'flex',
      justifyContent : 'center',
      flexDirection : 'column',
      alignItems : 'center'
  }
}));

export default function CardProfile({ username, image, email, address, phone}) {
  const classes = useStyles();

  return (
    <div className={classes.main}>
        <div className={classes.container}>
            <Typography className={classes.title} variant="h4">User Profile</Typography>
            <Avatar className={classes.large}/>
            <div className={classes.subtitle}>
                <Typography variant='subtitle' >{username}</Typography>
                <Typography variant='subtitle' >{email}</Typography>
                <Typography variant='subtitle' >{phone}</Typography>
                <Typography variant='subtitle' >{address}</Typography>
            </div>
        </div>
        <div className={classes.container}>
            <UserOrderTable/>
        </div>
    </div>
  );
}