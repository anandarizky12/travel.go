import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles({

  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  logo : {
    fontFamily: "Poppins",
  },
  searchIcon :{
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-between',
    width : '65%',
    color :'#757575',
    "&:hover": {
      color : '#bdbdbd',
      cursor : 'pointer'
    }
  },
  root : {
    padding : '30px',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center'
  },
  iconsx : {
    fontSize : 34,
    margin : '10px',
    '&:hover':{
        cursor : 'pointer',
        color : 'gray'
    }
  },
  textfield : {
    width : '40%',
    fontFamily: "Poppins",
  }
});

export default function SearchBar({openDrawer , setOpenDrawer}) {
  const classes = useStyles();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpenDrawer( open );

  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    
    >
    <form onSubmit={(e)=>e.preventDefault()} className={classes.root} noValidate autoComplete="off">
        <TextField className={classes.textfield} id="outlined-basic" label="Type To Search" variant="outlined" />
        <CloseIcon onClick={()=>setOpenDrawer(false)} className={classes.iconsx}/>
    </form>
      <Divider />
      
    </div>
  );

  return (
    <div>
    
        <React.Fragment >

          <div onClick={toggleDrawer('top', true)} className={classes.searchIcon}>
            <SearchIcon />
            <Typography  variant="subtitle2" className = {classes.logo} >Search</Typography>
          </div>
          <SwipeableDrawer
            anchor={'top'}
            open={openDrawer}
            onClose={toggleDrawer('top', false)}
            onOpen={toggleDrawer('top', true)}
          >
            {list('top')}
          </SwipeableDrawer>
      
        </React.Fragment>


 
    </div>
  );
}