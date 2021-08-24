import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import SubmitModal from "./SubmitModal";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useDispatch } from 'react-redux';
import { createOrder } from "../../actions/order";


const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#757575",
    width: 213,
    height: 50,
    color: "white",
    fontWeight: 900,
    position: "absolute",
    top: theme.spacing(75),
    right: "12%",
    fontSize: 18,
    [theme.breakpoints.down("md")]: {
      right: "8%",
    },
    [theme.breakpoints.down("sm")]: {
      top: "80%",
      right: "4%",
      width: 153,
      height: 30,
      fontSize: 16,
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      width: 70,
      left: "80%",
    },
  },
  circular: {
    color: "white",
  },
  alert: {
    position: "absolute",
    width: "75.5%",
    top: "18.5%",
    backgroundColor : "#ffcc80",
    left: "12.3%",
    [theme.breakpoints.down("sm")]: {
      width: "93.7%",
      left: "3.2%",
      top: "9.5%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "98%",
      left: 0,
    },
  },
}));

export default function SubmitButton({
  user,
  price,
  count,
  tripId,
  item,
  status,
  files,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const booking = true;
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState("");
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
   
   
  const [order, setorder] = React.useState({
    userId : user.id,
    tripId: tripId,
    counterQty : parseInt(count),
    total: parseInt(price),
    attachment: files,
    status: status ,

  });

  const postTransaction = () => {
    setIsLoading(true);
    if (!files) {
      setIsLoading(false);
      setErrors("please upload your payment proof image");
      return;
    };

    const formData = new FormData()
    formData.append('attachment', files)
    formData.append('counterQty', parseInt(count))
    formData.append('userId', user.id)
    formData.append('tripId',  tripId)
    formData.append('total', parseInt(price))
    formData.append('status', status)
  
    console.log(formData)
    return dispatch(createOrder(formData));
   
   
  
  };

  React.useEffect(()=>{

    setorder((prev) => ({ ...prev, attachment : files }));

  },[files])

  const onSubmit = (e) => {
  
    e.preventDefault();
    postTransaction();
  
  };

  return (
    <>
      {Object.keys(errors).length > 0 && (
        <Alert
          severity="warning"
          className={classes.alert}
          onClose={() => setErrors("")}
        >
          {errors}
        </Alert>
      )}
       
     
      {booking && (
        <Button
          variant="contained"
          className={classes.button}
          onClick={onSubmit}
        >
          {isLoading ? (
            <CircularProgress size={20} className={classes.circular} />
          ) : (
            "Pay"
          )}
        </Button>
      )}
      <SubmitModal open={open} setOpen={setOpen} rest="" />
    </>
  );
}