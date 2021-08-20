import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import { formatString } from "../../src/formatter";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { deleteTrip } from "../../actions/trip";
import {useDispatch, useSelector} from 'react-redux';
import Confirmation from "../confirmation/Confirmation";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.white,
    color: theme.palette.common.black,
    fontWeight: "light",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables({ dispatch, data, trip }) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState({});
  const [Id, setId] = React.useState('');

  const deletedTrip = useSelector(state => state.deleteTrip);
 

  const handleOpen = (row) => {
    setOpen(true);
    setItem(row);
  };


  const handleDelete = (id) => {

        setOpen(true);
        setId(id);
        // handleCloseOk(id);
  
  };

  return (
    <>

      <Confirmation dispatch={dispatch} open={open} setOpen={setOpen} Id={Id} setId={setId} />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">No</StyledTableCell>
              <StyledTableCell>Trip Name</StyledTableCell>
              <StyledTableCell align="left">Trip Id</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="left">Country Id</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((e, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell align="left">{i + 1}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {formatString(e.title, 25)}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {formatString(e._id, 25)}
                </StyledTableCell>
                <StyledTableCell align="left">
                   {/* <Link */}
                    {/* href={`${process.env.server}/images/${row.attachment}`}
                    target="_blank"
                  > */}
                    {formatString(e.description, 20)}
                  {/* </Link>  */}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {e.countryId}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton onClick={() => alert("click")}>
                    <EditIcon style={{ color: "#ffac33" }} />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(e._id)}>
                    <DeleteForeverIcon style={{ color: "#ff3d00" }} />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    
    </>
  );
}