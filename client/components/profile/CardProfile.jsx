import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  useMediaQuery,
  TextField,
} from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from "../../actions/user";
import Router from 'next/router'

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "poppins",
    fontWeight: 300,
    fontSize: 36,
    marginBottom: 30,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  subtitle: {
    fontFamily: "poppins",
    fontSize: 14,
    fontWeight: 300,
  },
  label: {
    fontFamily: "poppins",
    fontSize: 12,
    color: "#8A8C90",
  },
  icon: { color: "grey", width: 30, height: 30, position: "relative", top: 3 },
  buttonImage: {
    width: 230,
    height: 255,
    backgroundColor: "#eee",
    [theme.breakpoints.down("xs")]: {
      width: 200,
      height: 200,
      borderRadius: "100%",
    },
  },
  button : {
    width : 230,
    height : 50,
    marginTop : '20px'

  },
  image: {
    width: 230,
    height: 255,
    borderRadius: 5,
    [theme.breakpoints.down("xs")]: {
      width: 200,
      height: 200,
      borderRadius: "100%",
    },
  },
  labelImage: {
    fontFamily: "poppins",
    width: 230,
    height: 45,
    backgroundColor: "#757575",
    paddingTop: 13,
    position: "absolute",
    bottom: -65,
    textTransform: "none",
    cursor: "pointer",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 13,
    "&:hover": {
      backgroundColor: "gray",
    },
    [theme.breakpoints.down("xs")]: {
      bottom: -70,
      width: 150,
      borderRadius: 23,
    },
  },
  textphoto: {
    fontFamily: "poppins",
    fontSize: 16,
    fontWeight: 300,
    color: "white",
  },
  card: {
    borderRadius: 5,
    padding  : '20px',
    [theme.breakpoints.down("xs")]: {
      minHeight: 500,
    },
  },
  grid1: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  grid2: { marginTop: 90, [theme.breakpoints.up("sm")]: { display: "none" } },
}));

export default function CardProfile({ user, login }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const [uservalue, setUserValues]= React.useState({
      Username : user.username , Email : user.email, Phone : user.phone, Address : user.address
  })
  const [files, setFiles] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [previewImage, setPreviewImage] = React.useState(null);
  const dispatch = useDispatch();
  const  userUpdate = useSelector(state => state.userUpdate);

  const onChange = (e) => {
    let file = e.target.files[0];
    setFiles(file);
  };

  const handleChange = (e) =>{
      const { name, value } = e.target;

      setUserValues((prev)=>({
          ...prev, [name] : value
      }))

  }

  const updatePhotoProfile = async () => {
    try{
      setLoading(true);
      const formData = new FormData();
      formData.append("profile", files);
      formData.append("id", user.id);
      formData.append("username", uservalue.Username);
      formData.append("email", uservalue.Email);
      formData.append("phone", uservalue.Phone);
      formData.append("address", uservalue.Address);
     
      dispatch(updateUserProfile(formData));
      setLoading(false);
      alert("data updated")
    }catch(err){
      alert(err)
    }
   
  };

  React.useEffect(() => {
    if(!user){
        Router.push('/login');
    }
  }, []);

  React.useEffect(() => {
    if (files) {
      updatePhotoProfile();
    }
  }, [files]);


  if(!uservalue) return <CircularProgress/>

  const arrayUser = [
    { id: 1, icon: AccountCircleIcon, value: uservalue.Username, label: "Username" },
    { id: 2, icon: EmailIcon, value: uservalue.Email, label: "Email" },
    { id: 3, icon: PhoneIcon, value: uservalue.Phone, label: "Phone" },
    { id: 1, icon: LocationOnIcon, value: uservalue.Address, label: "Address" },
  ];

  console.log(files);

  return (
    <Grid item xs={12} sm={11} lg={7}>
      <Card className={classes.card}>
        <CardContent>
          <Grid
            container
            spacing={1}
            justify={matches ? "center" : "flex-start"}
          >
            <Grid item sm={7} lg={7} className={classes.grid1}>
              <Typography variant="h3" className={classes.title}>
                Personal Info
              </Typography>
              <Grid container spacing={0}>
                {uservalue && arrayUser.map((item, i) => (
                  <React.Fragment key={i}>
                    <Grid item sm={2} lg={2}>
                      <item.icon className={classes.icon} />
                    </Grid>
                    <Grid item sm={10} lg={10} style={{ marginLeft: -11 }}>
                      
                      <TextField name={item.label} type="text" value={item.value} onChange={(e)=>handleChange(e)}  className={classes.subtitle} />
                      <Typography variant="body1" className={classes.label}>
                        {item.label}
                      </Typography>
                    
                      <br />
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
            <Grid
              item
              xs={10}
              sm={5}
              lg={5}
              align={matches ? "center" : "right"}
            >
              <Button
                variant="outlined"
                component="label"
                className={classes.buttonImage}
                onChange={onChange}
              >
                {loading ? (
                  <CircularProgress size={50} style={{ color: "white" }} />
                ) : user.image !== "image.png" ? (
                  <img
                    src={`http://localhost:5000/images/${user.profile}`}
                    className={classes.image}
                    alt=""
                  />
                ) : (
                  <PhotoCameraIcon
                    style={{ color: "#878787", width: 90, height: 90 }}
                  />
                )}
                <input
                  id="attachment"
                  name="attachmentImage"
                  type="file"
                  hidden
                />
             
              </Button>
              <Button onClick={()=>updatePhotoProfile()} className={classes.button} >
                    Update Profile
              </Button>
               
            </Grid>
            <Grid item xs={12} sm={7} lg={7} className={classes.grid2}>
              <Grid container spacing={0}>
                {arrayUser.map((item, i) => (
                  <React.Fragment key={i}>
                    <Grid item xs={2} sm={2} lg={2}>
                      <item.icon className={classes.icon} />
                    </Grid>
                    <Grid
                      item
                      xs={10}
                      sm={10}
                      lg={10}
                      style={{ marginLeft: matches ? 0 : -11 }}
                    >
                      <Typography variant="h6" className={classes.subtitle}>
                        {item.value}
                      </Typography>
                      <Typography variant="body1" className={classes.label}>
                        {item.label}
                      </Typography>
                      <br />
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}