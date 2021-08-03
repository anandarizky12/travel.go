import React from 'react';
import MediaCard from '../card/Card';
import { CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles({
    root:{
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        margin : '50px',
        height : 'auto'
    },
    text1 : {
        fontSize : '42px',
        padding : '12px'
    },
    content : {
        display : 'flex',
        flexWrap : 'wrap',
        justifyContent : "space-around",
        marginTop : '30px'
    },
  

});


const dummy = [

    {
        name : 'Raja Ampat',
        desc  : "Berlibur dengan keluarga merupakan hal yang menggembirakan dan mengasyikkan, jangan lewatkan akhir pekan anda, mari tour dengan dewe tour",
        price : '23,0000,000'

    },
    {
        name : 'Ibiza',
        desc  : "Berlibur dengan keluarga merupakan hal yang menggembirakan dan mengasyikkan",
        price : '23,0000,000'
        
    },
    {
        name : 'Labuan Bajo',
        desc  : "Berlibur dengan keluarga merupakan hal yang menggembirakan dan mengasyikkan, jangan lewatkan akhir pekan anda, mari tour dengan dewe tour",
        price : '23,0000,000'
        
    },
    {
        name : 'Death Valley',
        desc  : "Berlibur dengan keluarga merupakan hal yang menggembirakan dan mengasyikkan,",
        price : '23,0000,000'
        
    },
    {
        name :  'Cave of the death',
        desc  : "Berlibur dengan keluarga merupakan hal yang menggembirakan dan mengasyikkan, jangan lewatkan akhir pekan anda, mari tour dengan dewe tour",
        price : '23,0000,000'
        
    },
    {
        name : 'Narnia',
        desc  : "Berlibur dengan keluarga merupakan hal yang menggembirakan dan mengasyikkan,",
        price : '23,0000,000'
        
    },
    {
        name : 'Labuan Bajo',
        desc  : "Berlibur dengan keluarga merupakan hal yang menggembirakan dan mengasyikkan, jangan lewatkan akhir pekan anda, mari tour dengan dewe tour",
        price : '23,0000,000'
        
    },
    {
        name : 'Death Valley',
        desc  : "Berlibur dengan keluarga merupakan hal yang menggembirakan dan mengasyikkan,",
        price : '23,0000,000'
        
    },



]

function Content() {

    const classes = useStyles();
   
    return (
        <div className= {classes.root}>
            <Typography className={classes.text1}>Our Tour</Typography>
            <Grid className={classes.content}>            
               
                {dummy.map(e=>{
                    return <MediaCard name={e.name} desc={e.desc} price={e.price}/>
                })}
             
            </Grid>
        </div>
    )
}

export default Content
