import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from '@material-ui/icons/Person';
import { Button } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import ModalCreateReview from './ModalCreateReview';
import CardReview from './CardReview';

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
        flexDirection : 'column',
        marginTop : '20px'
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
        color : '#757575',
        height : '50px',
        border : "1px solid #bdbdbd"
    },
    review : {
      display : 'flex',
      width : '100%',
      marginTop : '25px',
      justifyContent : 'space-between'
    }
  
  }));

export default function Reviews({ item }) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Grid className={classes.root}>
        <Typography variant='h4'>Reviews</Typography>
       
        <Grid className={classes.review}>
            <Grid className={classes.main}>
                <Typography className={classes.ratingValue} variant="h2">{Math.round(item.rating)}.0</Typography>
                <Rating
                name="simple-controlled"
                value={item.rating}
                className={classes.rating}
                readOnly 
                size = 'normal'
                />
                <Typography variant="subtitle2" className={classes.total} >Total &nbsp; <PersonIcon className={classes.icon}/> {item.numReviews} </Typography>
            </Grid>
            <Button onClick={handleClickOpen} className={classes.button} ><CreateIcon className={classes.icon}/>Create Review</Button>
        </Grid>
      <ModalCreateReview item={item} open={open} setOpen={setOpen} />
      
      {item ? 
        item.reviews.map((n,i)=>{
            return  <CardReview key={i} name={n.name} rating={n.rating} date={n.createdAt} comment={n.comment} />
        })
        :
        <p>Loading . . . </p>
      }
      
      </Grid>
    </div>
  );
}