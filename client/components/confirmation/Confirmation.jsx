import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { deleteTrip } from "../../actions/trip";

export default function Confirmation({ dispatch, open, setOpen, Id, setId }) {
  

  const handleClose = () => {
    setOpen(false);
    setId('');
  };

  
  const handleCloseOk = (Id) => {

    setOpen(false);
    dispatch(deleteTrip(Id));
    location.reload();
    setId('');
    
  };

  return (
    <div>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Warning!
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are You Sure Want To Delete The Trip ? 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>handleCloseOk(Id)} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}