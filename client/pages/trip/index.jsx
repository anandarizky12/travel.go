import React from "react";
import Router  from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button, CircularProgress } from "@material-ui/core";
import {useDispatch, useSelector} from 'react-redux';
import MediaCard from "../../components/card/Card";
import { getTrip as fetchTrip } from "../../actions/trip";
import CustomizedTables  from '../../components/table/TripTable';
import MyAlert from "../../components/alert/Alert";



const useStyles = makeStyles((theme) => ({
  container : {
    marginTop : '90px',
    display : 'flex',
    justifyContent : 'center'
  },
  root: {
    width: "95%",
    display : 'flex',
    flexDirection : 'column',
    padding: "50px 6.7% 90px 6.7%",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0 20px 0",
    },
  },
  button: {
    height: 48,
    width: 150,
    backgroundColor: "#757575",
    color: "white",
    textTransform: "none",
    fontWeight: 300,
    fontSize: 18,
    fontFamily : 'poppins',
    "&:hover": {
      textDecoration: "none",
    },
    [theme.breakpoints.down("xs")]: {
      height: 30,
      width: 100,
      fontSize: 16,
    },
  },
  title: {
    fontSize: 36,
    fontWeight: 300,
    fontFamily : 'poppins',
    [theme.breakpoints.down("xs")]: { fontSize: 25 },
  },
  header : {
      display : 'flex',
      justifyContent : 'spaceBetween'
  },
  content : {
    display : 'flex',
    flexWrap : 'wrap',
    justifyContent : "space-around",
},
}));

export default function addtrip() {

  const classes = useStyles();
  const dispatch = useDispatch();
  const trip = useSelector(state => state.getTrip);
  const user = useSelector(state => state.userLogin);
  const { userInfo } = user;
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
      if (userInfo.userData.admin !== true) {
        Router.push("/");
      }
}, [user]);
  
  React.useEffect(() => {

    dispatch(fetchTrip());
  
  }, [dispatch]);

  return (
    <Grid className={classes.container}>
        <MyAlert/>
   
        {trip.loading ? 
        <CircularProgress size={90} />
        :
        <Grid className={classes.root} container spacing={0}>
            <Grid className={classes.header}>
                <Grid item xs={6} lg={6}>
                    <Typography variant="h3" className={classes.title}>
                        Income Trip
                    </Typography>
                </Grid>
                <Grid item xs={6} lg={6} align="right">
                    <Button
                        href="/addtrip"
                        variant="contained"
                        className={classes.button}
                    >
                    Add Trip
                </Button>
                </Grid>
            </Grid>
            <Grid className={classes.content}>
              {trip.trip && 
                <CustomizedTables dispatch={dispatch} data={trip.trip} trip={trip}/> 
              }
            </Grid>
        </Grid>

        }
      
    </Grid>
     

  );
}