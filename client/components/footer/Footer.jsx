import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyle = makeStyles((theme) => ({
    root : {
        width : '100%',
        height : 200,
        backgroundColor : "#212121",
        color : '#e0e0e0',
        display : 'flex',
        justifyContent : 'flex-start',
        justifySelf : 'space-between',
        alignItems : 'center',
        fontFamily: "Poppins",
        bottom : 0
    },
    text1:{
        marginBottom : '5px',
        [theme.breakpoints.down("sm")]: {
           marginTop : '5px',
          },
          [theme.breakpoints.down("xs")]: {
           marginTop : '5px',
          },
    },
    icons:{
        marginTop : '5px',
        display : 'flex',
        justifyContent : 'space-between',
        width : '40%'

    },
    content : {
        display : 'flex',
        justifyContent : 'space-between',
        width : '50%',
        flexWrap : 'wrap',
        marginLeft : '40px',
       
    },
    copyright : {
        fontFamily: "Poppins",
        color : '#e0e0e0',
        fontSize : '12px',
        position : 'absolute',
        right : 40,
        [theme.breakpoints.down("sm")]: {
            display : 'none',
          },
          [theme.breakpoints.down("xs")]: {
           display : 'none',
          },
    }
}))

function Footer() {
    const classes = useStyle();
    return (
        <Grid className = {classes.root}>
            <Grid className={classes.content}>
                <Grid>
                    <Typography className ={classes.text1}>
                        HELP
                    </Typography>
                    <Grid>
                        call +620923-92931-2932 <br/>
                        Email: travelgo@tarvel.com
                    </Grid>
                </Grid>
                <Grid>
                    <Typography className ={classes.text1}>
                        FOLLOW US ON
                    </Typography>
                    <Grid>
                        JL. Sunsa, sadna, 21 Kemad Ls asdas
                        <Grid className={classes.icons}>
                            <InstagramIcon/>
                            <FacebookIcon/>
                            <TwitterIcon/>
                        </Grid>
                    </Grid>
                </Grid>
              
            </Grid>
           <Typography className={classes.copyright}>@ {new Date().getFullYear()} Copyright Travel.go</Typography>
        </Grid>
    )
}

export default Footer
