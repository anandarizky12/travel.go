import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TableAdmin from "./TableAdmin";
import TableAdminSkeleton from "../skeleton/TableAdminSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder as fetchOrder } from "../../actions/order";

const useStyles = makeStyles((theme) => ({
  body: {
    margin: 10,
    padding: 130,
    paddingTop: 60,
    [theme.breakpoints.down("xs")]: {
      padding: 15,
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
  const getAllOrder = useSelector((state) => state.getAllOrder);

  React.useEffect(() => {
    dispatch(fetchOrder());
  }, []);

  return (
    <div className={classes.body}>
      <Typography variant="h3" className={classes.title}>
        Incoming Transaction
      </Typography>
      {getAllOrder && !getAllOrder.allorder ? (
        <TableAdminSkeleton />
      ) : (
        <TableAdmin rows={getAllOrder.allorder.data} dispatch={dispatch} />
      )}
    </div>
  );
}
