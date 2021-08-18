import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from '@material-ui/icons/Person';
import { Button } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles((theme) => ({
    header: {
      marginTop: 50,
      fontSize: 28,
      fontWeight: 300,
      fontFamily: "poppins",
    },
    rating : {
        color : '#757575'
    },
    ratingValue : {
        fontWeight: 200,
        fontFamily: "poppins",
    },
    total : {
        fontFamily : 'poppins',
        display : 'flex',
        color : '#757575',
        display : 'flex',
        alignItems : 'center',
        marginTop : '10px',
        fontWeight : '300'
    },
    root : {
        display : 'flex',
        flexDirection : 'column'
    },
    main : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center'
    },
    icon : {
        fontSize : 17
    },
    button : {
        fontSize : 12,
        marginTop : '10px',
        color : '#757575'
    }
  
  }));

export default function Reviews() {

  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  return (
    <div>
      <Grid className={classes.root}>

        <Typography variant='h5'>Reviews</Typography>
       
        <Grid className={classes.main}>
           {/* <Typography className={classes.header} component="legend">Reviews</Typography> */}
            <Typography className={classes.ratingValue} variant="h2">4.0</Typography>
            <Rating
            name="simple-controlled"
            value={value}
            className={classes.rating}
            readOnly 
            size = 'normal'
            />
            <Typography variant="subtitle2" className={classes.total} >Total &nbsp; <PersonIcon className={classes.icon}/> 275 </Typography>
        </Grid>
        <Button className={classes.button} > <CreateIcon  className={classes.icon}/>  Create Review </Button>

      </Grid>
    </div>
  );
}