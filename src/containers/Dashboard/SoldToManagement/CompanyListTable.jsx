import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { eventActions } from "../../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Loader from "../../../components/Loader/Loader";
import { useLocation } from 'react-router-dom';



const headCells = [
  { id: 'CompanyCode', numeric: true, disablePadding: false, label: 'Company Code' },
  { id: 'CompanyExtId', numeric: false, disablePadding: true, label: 'Company ExtId' },
  { id: 'CreditControlArea', numeric: true, disablePadding: false, label: 'Credit Control Area' },
  { id: 'CreditLimit', numeric: true, disablePadding: false, label: 'Credit Limit' },
  { id: 'PaymentTerm', numeric: true, disablePadding: false, label: 'Payment Term' },
  { id: 'Unsecured', numeric: true, disablePadding: false, label: 'Unsecured' },
  { id: 'CustomerRating', numeric: true, disablePadding: false, label: 'Customer Rating' },
  { id: 'BusinessStartDate', numeric: true, disablePadding: false, label: 'Business Start Date' },
  { id: 'PreviousAccountNumber', numeric: true, disablePadding: false, label: 'Previous Account Number' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function CompanyListTable(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  let history = useHistory();
  const location = useLocation();
  const { companyList } = location.state;
  const { accountName } = location.state;
  const { soldtoNumber } = location.state;


  let rows = [];


  rows = companyList ? companyList : [];


  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer className={classes.container}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            stickyHeader aria-label="sticky table"
          >
            <EnhancedTableHead
              rowCount={rows.length}
            />
            <TableBody>
              {companyList && companyList.loading ? <Loader /> :
              (rows)
                .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                : (rows)
                  .slice()
                  .map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <TableRow>
                        <TableCell align="right">{row.companyCode}</TableCell>
                        <TableCell align="right">{row.companyExtId}</TableCell>
                        <TableCell align="right">{row.CreditControlArea}</TableCell>
                        <TableCell align="right">{row.creditLimit}</TableCell>
                        <TableCell align="right">{row.paymentTerm}</TableCell>
                        <TableCell align="right">{}</TableCell>
                        <TableCell align="right">{row.customerRating}</TableCell>
                        <TableCell align="right">{}</TableCell>
                        <TableCell align="right">{row.previousAccountNumber}</TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
