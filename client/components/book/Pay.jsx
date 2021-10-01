import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
// import { AuthContext } from "../../src/Provider";
// import { QueryContext } from "../../src/Query";
import { useRouter } from "next/router";
import {useDispatch, useSelector } from "react-redux";
// import CardTransactionSkeleton from "../skeleton/CardTransactionSkeleton";
import CircularProgress from "@material-ui/core/CircularProgress";
import { CardTransaction } from "./CardTransaction";
import { readOneTrip } from "../../actions/trip";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#E5E5E5",
    padding: "9vh 13vh",
    // minHeight: "81.9vh",
    [theme.breakpoints.down("md")]: {
      minHeight: "82.99vh",
      padding: "50px 3vh",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "87.1vh",
      padding: "50px 1vh",
    },
  },
  button: {
    height: 48,
    width: 150,
    backgroundColor: "#ffaf00",
    color: "white",
    textTransform: "none",
    fontSize: 18,
    fontWeight: "bold",
  },
}));

export default function Pay() {
  const classes = useStyles();
  const router = useRouter();
  const price  = router.query.pid;
  const count  = router.query.cid;
  const tripId = router.query.tid;
  const [blank, setBlank] = React.useState(true);
  // const context = React.useContext(AuthContext);
  // const query   = React.useContext(QueryContext);
  // const { user } = context;
  
  const dispatch = useDispatch();
  const user = useSelector(state => state.userLogin);;
  const readTrip = useSelector((state) => state.readOneTrip);

  // const { state, getTrip, loading } = query;
  const [item, setItem] = React.useState({});


React.useEffect(() => {

  if(tripId){
    dispatch(readOneTrip(tripId))
  }
  }, [tripId]);



React.useEffect(() => {
  if (readTrip.trip) {
    setItem(readTrip.trip.data);
    setBlank(false);
  }
  }, [readTrip]);

  return (
    <Box variant="div" className={classes.root}>
      {blank ? (
       <CircularProgress/>
      )  
      : (
        // <p>wait</p>
        <CardTransaction
          user={user.userInfo.userData}
          price={price}
          count={count}
          item={item}
          string="string"
          status="Waiting payment"
          attachment=""
          admin=""
          zoom="zoom-in"
        />
      )}
    </Box>
  );
}