import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import UserOrderTable from './UserOrder';
import CardProfile from './CardProfile';

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
  container1 : {
    width : '100%',
    height : '100%',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    margin : '6px'
},
  title : {
      fontFamily : 'Poppins',
      fontWeight : 300,
      marginBottom : '30px'
  },
  subtitle : {
      display : 'flex',
      justifyContent : 'center',
      flexDirection : 'column',
      alignItems : 'center'
  }
}));

export default function Profile({ user }) {
  const classes = useStyles();

  return (
    <div className={classes.main}>
        <div className={classes.container1}>
            <CardProfile user={user} />
        </div>
        <div className={classes.container}>
            <Typography className={classes.title} variant="h4">Your Order</Typography>
            <UserOrderTable />
        </div>
    </div>
  );
}