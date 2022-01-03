import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from 'react-redux';
import { editTrip } from '../../actions/trip';
import Router  from "next/router";

const useStyles = makeStyles((theme) => ({
  submit: {
    backgroundColor: "757575",
    textTransform: "none",
    fontWeight: 300,
    fontSize: 18,
    width: 250,
    height: 40,
    marginBottom: 50,
    marginTop: 50,
    color : '#757575',
    fontFamily: "Poppins",
  },
}));

export default function SubmitButton({
  form,
  setValues,
  setPreviewImage,
  values,
}) {
  const classes = useStyles();
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjEzMTA4ODk4fQ.Dm7l-Uz4UJMPqk6BiTtMrRzURN_GfwMUNBgY5JrHDS4";
  
  const userLogin = useSelector((state) => state.userLogin)
  const createTrip = useSelector((state) => state.createTrip)

 
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);
  const [alert, setAlert] = React.useState({
    type: "success",
    body: "",
    color: "springgreen",
  });
  const initialValues = {
    title: "",
    countryId: "",
    accomodation: "",
    transportation: "",
    eat: "",
    day: "",
    dateTrip: "",
    quota: "",
    price: "",
    description: "",
  };
  const initialImage = {
    image: "",
    screen1: "",
    screen2: "",
    screen3: "",
  };  


const fileUpload = async () => {
     
    const id = values._id;
    const data = new FormData();
  
    data.append('image', values.imageTrip)
    data.append("title", values.title);
    data.append("countryId", parseInt(values.countryId));
    data.append("accomodation", values.accomodation);
    data.append("transportation", values.transportation);
    data.append("eat", values.eat);
    data.append("day", parseInt(values.day));
    data.append("night", parseInt(values.night));
    data.append("dateTrip", values.dateTrip);
    data.append("quota", parseInt(values.quota));
    data.append("price", parseInt(values.price));
    data.append("description", values.description);
    data.append("imageTrip", values.imageTrip);
    data.append("screen1", values.screen1);
    data.append("screen2", values.screen2);
    data.append("screen3", values.screen3);

    setIsLoading(true);
    dispatch(editTrip(id, data));
    setIsLoading(false);
    
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fileUpload(); 
    
  };

  return (
    <>
      <Grid item xs={11} sm={10} align="center">
        {Object.keys(alert.body).length > 0 && (
          <Alert
            severity={alert.type}
            style={{ border: `1px solid ${alert.color}`, marginTop: 10 }}
            onClose={() => setAlert({ body: "" })}
          >
            {alert.body}
          </Alert>
        )}
        <Button
          className={classes.submit}
          onClick={()=>{Router.push('/trip')}}
        >
          Back To Trip
        </Button>
        <Button
          type="submit"
          className={classes.submit}
          onClick={(e)=>{onSubmit(e)}}
        >
          {isLoading ? (
            <CircularProgress size={23} style={{ color: "white" }} />
          ) : (
              "Update"
          )}
        </Button>
      </Grid>
    </>
  );
}