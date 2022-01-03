import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useRouter } from "next/router";
import { formatMoney } from '../../src/Formatter';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom : '30px'
  },
  media: {
    height: 200,
    width : 300,
    borderRadius : '5px'
  },
  price : {
      display : 'flex',
      flexDirection : 'row',
      width : '100%',
      justifyContent : 'flex-end'
  },
  content : {
      marginBottom : '10px',
      marginTop : '10px',
  },
  ratingContent : {
      background : '#01579b',
      padding : '5px',
      borderRadius : '2px',
      display : 'flex',
      justifyContent : 'center',
      width : '18%',
      color : 'white',
      fontSize : '12px',
      marginRight : '5px'
  },
  rating : {
      display : 'flex',
      justifyContent : 'flex-start',
      alignItems : 'center'
  }
});

export default function MediaCard({id, name, Totalreviews, desc, reviews ,price, image}) {
  
  const router = useRouter();
  const classes = useStyles();
 
  const ratingVal = reviews.reduce((a,b)=>{
      return a+b.rating
  },0);

  const rating =  ratingVal/reviews.length;


  return (
    <div  onClick={()=>  router.push(`/trip/${id}`)} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`http://localhost:5000/images/${image}`}
          title={name}
        />

        <div className={classes.content}>
            <Typography variant="h6" >
                {name}
            </Typography>

            <div className={classes.rating}>
              {Totalreviews > 0
              ?
              <div className={classes.ratingContent}>
                {rating.toFixed(1)}/5.0
              </div>
              :
              <div className={classes.ratingContent}>
               - /5.0
              </div>
              }
               
                <Typography color="secondary" variant="subtitle2">
                    from {Totalreviews} user
                </Typography>
            </div>

            <div className={classes.price}>
                <Typography>
                    from &nbsp;
                </Typography>
                <Typography size="small" color="secondary" >
                  IDR. {formatMoney(price)}
                  
                </Typography>
            </div>
       </div>
      </CardActionArea>
     
    </div>
  );
}
