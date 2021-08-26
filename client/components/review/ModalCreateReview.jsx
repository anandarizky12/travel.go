import React from 'react';
import {  withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { useDispatch,useSelector } from 'react-redux';
import { createProductReview } from '../../actions/trip';
import Alert from '@material-ui/lab/Alert';




const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor : '#757575',
    color : 'white',
    
  },
  text : {
    fontFamily : 'Poppins',
    fontWeight : 300,
   
  },
  closeButton: {
    position: 'absolute',
    color : 'white',
    right: theme.spacing(1),
    top: theme.spacing(1)
  },
});



const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography className={classes.text} variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


const TheRating = withStyles((theme) => ({
  root: {
    color : '#757575',
    marginLeft : '14px'
  },
}))(Rating);



export default function ModalCreateReview({item, open, setOpen }) {
  const dispatch = useDispatch();
  const reviewTrip = useSelector(state => state.reviewTrip)
  const userLogin = useSelector(state => state.userLogin)
  const [value, setValue] = React.useState({ comment : "" , rating : 0 })
  const { userInfo } = userLogin;
 
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {

    const {name, value} = e.target;

    setValue((prev)=>({
      ...prev,
      [name] : value
    }))

  }

  const saveReview = () => {
      dispatch(createProductReview(item._id, value));
      handleClose();
  };


  if(reviewTrip.message) return <Alert style={{marginTop : '10px'}} severity="info">{reviewTrip.message}</Alert>
 
  return (
    <div >
      <Dialog fullWidth onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        
        <DialogTitle  id="customized-dialog-title" onClose={handleClose}>
            Review By {userInfo.userData.username}
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            id="outlined-multiline-flexible"
            label="Your Comment Here"
            multiline
            name='comment'
            fullWidth
            maxRows={4}
            // value={value}
            onChange={(e)=>handleChange(e)}
            variant="outlined"
        />
        </DialogContent>
            <TheRating
                defaultValue={parseInt(value.rating)}
                name = "rating"
                onChange={(e)=>handleChange(e)}
                // className={classes.rating}
                size = 'large'
             />
             
        <DialogActions>
          <Button autoFocus onClick={saveReview} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}