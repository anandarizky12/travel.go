import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from 'react-redux';
import { createTrip as createTripProduct} from '../../actions/trip';

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
  const { userInfo } = userLogin;
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

    setIsLoading(true);
    dispatch(createTripProduct(values));
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