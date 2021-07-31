import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}



const useStyles = makeStyles({
 
    appBar: {

        height: 116,
    
    },
    top:{
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-around',
      
    },
    bottom:{
        display : 'flex',
        justifyContent : 'center',
        height : 4
    },
    ul:{
        display: 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        height : 30,
        width : '30%',
        fontWeight : 'light',
        color : '#757575',
      
    },
    searchIcon :{
      display : 'flex',
      flexDirection : 'row',
      justifyContent : 'space-between',
      width : '65%',
    
    },
    icons : {
      display : 'flex',
      flexDirection : 'row',
      position : 'absolute',
      right : 50,
      justifyContent : 'space-between',
      alignItems : 'center',
      width : '8%'
    },
    logo : {
      fontFamily: "Poppins",
    }

  });
  


HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Navbar(props) {

 const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className ={classes.appBar}>
          <Toolbar className={classes.top}>
              <Typography className={classes.logo} variant="h3">TRAVEL.go</Typography>
              <div className = {classes.icons}> 
                  <div className={classes.searchIcon}>
                      <SearchIcon color="secondary"/>
                      <Typography  variant="subtitle2" className = {classes.logo} color="secondary">Search</Typography>
                  </div>
                    <PersonOutlineIcon color="secondary"/>
              </div>
          </Toolbar>
          
          <Toolbar className={classes.bottom}>
                <div className={classes.ul}>
                    <Typography variant="subtitle1">Home</Typography>
                    <Typography variant="subtitle1">Trip</Typography>
                    <Typography variant="subtitle1">Transaction</Typography>
                    <Typography variant="subtitle1">Order</Typography>
                </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
     
    </React.Fragment>
  );
}