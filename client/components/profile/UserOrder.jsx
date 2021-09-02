import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getMyOrder } from '../../actions/order';
import { CircularProgress } from '@material-ui/core';
import { formatDate, formatMoney } from '../../src/Formatter';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  main : {
      width : '95%'
  }
});

export default function UserOrderTable() {

  const dispatch = useDispatch();
  const myOrder = useSelector(state => state.myOrder)
  const classes = useStyles();


React.useEffect(()=>{

  dispatch(getMyOrder());

},[])

  console.log(myOrder)

  return (
    <TableContainer className={classes.main} component={Paper}>
        {myOrder.order  ?
           <Table className={classes.table} aria-label="customized table">
           <TableHead>
             <TableRow>
               <StyledTableCell  align="left">No</StyledTableCell>
               <StyledTableCell>Date</StyledTableCell>
               <StyledTableCell>Trip Name</StyledTableCell>
               <StyledTableCell align="right">Person</StyledTableCell>
               <StyledTableCell align="right">Transportation</StyledTableCell>
               <StyledTableCell align="right">Total Price (Rp)</StyledTableCell>
               <StyledTableCell align="right">Status Payment</StyledTableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             {myOrder.order.data.map((row,i) => (
               <StyledTableRow key={row.name}>
                 <StyledTableCell component="th" align="left">
                   {i+1}
                 </StyledTableCell>
                 <StyledTableCell component="th" scope="row">
                   {formatDate(row.createdAt)} 
                 </StyledTableCell>
                 <StyledTableCell component="th" scope="row">
                   {row.trip.title}
                 </StyledTableCell>
                 <StyledTableCell align="right">{row.counterQty}</StyledTableCell>
                 <StyledTableCell align="right">{row.trip.transportation}</StyledTableCell>
                 <StyledTableCell align="right">{formatMoney(row.total)}</StyledTableCell>
                 <StyledTableCell align="right">{row.status}</StyledTableCell>
               </StyledTableRow>
             ))}
           </TableBody>
         </Table>

         :
          
         <CircularProgress/>

        }
    </TableContainer>
  );
}