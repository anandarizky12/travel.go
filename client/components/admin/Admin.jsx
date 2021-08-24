import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import TableAdmin from "./TableAdmin";
import TableAdminSkeleton from "../skeleton/TableAdminSkeleton";
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrder as fetchOrder } from '../../actions/order';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#E5E5E5",
    padding: "50px 13vh 100px 13vh",
    minHeight: "81.9vh",
    [theme.breakpoints.down("md")]: {
      minHeight: "82.99vh",
      padding: "50px 3vh 100px 3vh",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "87.1vh",
      padding: "30px 1vh 70px 1vh",
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
  title: {
    fontFamily: "Nunito",
    fontSize: 36,
    fontWeight: 900,
    marginBottom: 17,
    [theme.breakpoints.down("xs")]: {
      fontSize: 24,
    },
  },
}));

export default function Admin() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const getAllOrder = useSelector(state => state.getAllOrder);

  React.useEffect(() => {
    
    dispatch(fetchOrder());

  }, []);

  console.log(getAllOrder);
  if(!getAllOrder.allorder) return <p>Loading . . .</p>
  return (
    <Box variant="div" className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Incoming Transaction
      </Typography>
      {getAllOrder.loading ? (
        <TableAdminSkeleton />
      ) : (
        <TableAdmin rows={getAllOrder.allorder.data} dispatch={dispatch} />
      )}
    </Box>
  );
}