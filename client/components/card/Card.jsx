import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

export default function MediaCard({name, desc, price}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title={name}
        />

        <div className={classes.content}>
            <Typography variant="h6" >
                {name}
            </Typography>

            <div className={classes.rating}>
                <div className={classes.ratingContent}>
                    4.5/5.0
                </div>
                <Typography color="secondary" variant="subtitle2">
                    from 150 user
                </Typography>
            </div>

            <div className={classes.price}>
                <Typography>
                    from &nbsp;
                </Typography>
                <Typography size="small" color="secondary" >
                89.000.000
                </Typography>
            </div>
       </div>
      </CardActionArea>
     
    </div>
  );
}
