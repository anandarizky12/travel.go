import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import PaymentIcon from '@material-ui/icons/Payment';
import PublicIcon from '@material-ui/icons/Public';
import CachedIcon from '@material-ui/icons/Cached';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

const useStyles = makeStyles({

    root:{
        display : 'flex',
        justifyContent : 'center',
        flexDirection :'column',
        alignItems : 'center',
        width : '100%',
        fontFamily: "Poppins",
        marginTop : '40px',
        marginBottom : '40px',
    },
    text1:{
        fontSize : '22px'
    },
    icon:{
        fontSize : '140px',
        color : '#757575'
    },
    card:{
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-around',
        width : '55%',
        marginTop : '20px'
    },
    title:{
        fontSize : '20px',
        fontWeight : 500
    }
})

function Branding() {

    const classes = useStyles();

    return (
        <Grid className={classes.root}>

            <Typography className={classes.text1}>Why Book With Travel.go?</Typography>

           <Grid className={classes.card}>
                <PaymentIcon className={classes.icon}/>
                <Grid>
                    <Typography className={classes.title}>
                        Best Price Guarantee
                    </Typography>
                    <Typography>
                        A small river named Duren flows by their place and supplies
                    </Typography>
                </Grid>
           </Grid>
           <Grid className={classes.card}>
                <Grid>
                    <Typography className={classes.title}>
                        Best In The Dream
                    </Typography>
                    <Typography>
                        A small river named Duren flows by their place and supplies
                    </Typography>
                </Grid>
                <PublicIcon className={classes.icon}/>
           </Grid>
           <Grid className={classes.card}>
                <CachedIcon className={classes.icon}/>
                <Grid>
                    <Typography className={classes.title}>
                        Just Rettle Around The World
                    </Typography>
                    <Typography>
                        A small river named Duren flows by their place and supplies
                    </Typography>
                </Grid>
           </Grid>
           <Grid className={classes.card}>
                <Grid>
                    <Typography className={classes.title}>
                        Enjoyable Trip Guarantee
                    </Typography>
                    <Typography>
                        A small river named Duren flows by their place and supplies
                    </Typography>
                </Grid>
                <EmojiEmotionsIcon className={classes.icon}/>
           </Grid>
          
        </Grid>
    )
}

export default Branding;
