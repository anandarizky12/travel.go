import { Avatar, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Rating } from '@material-ui/lab';

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
        flexDirection : 'row',
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
    },
    daterating : {
        display : 'flex',
        flexDirection : 'row',
        color : 'gray',
        fontSize : 'bold',
        marginTop : '2px'
    }
  
  }));

function CardReview() {

    const classes = useStyles();
    const [value, setvalue] = React.useState(3)

    return (
        <Grid className={classes.root}>
            <Avatar/>
            <Grid style={{marginLeft : '12px'}}>
                 <Typography variant="subtitle1" >Your Name Here</Typography>
                <div className={classes.daterating}>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        readOnly 
                        size = 'normal'
                    />
                    <Typography variant="caption" display="block" gutterBottom>17 agustus 1945</Typography>
                </div>
                    <Typography style={{marginTop : '2px' ,textAlign : 'justify'}}>This movie☺😊😭i cried when we were at the movies with ma fam watching this last nov 28 2019 when the scene that olaf dissapered (the spelling :( ) and like he died. i cried while eating popcorn lol. i miss that so much , 
                        this movie is not bad the best movie i've ever watch i wish there is a frozen</Typography>
            </Grid>
           
        </Grid>
    )
}

export default CardReview
