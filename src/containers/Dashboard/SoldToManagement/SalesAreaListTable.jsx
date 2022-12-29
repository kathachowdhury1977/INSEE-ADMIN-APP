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
  { id: 'SalesAreaID', numeric: true, disablePadding: false, label: 'Sales Area ID' },
  { id: 'SalesOrganization', numeric: false, disablePadding: true, label: 'Sales Organization' },
  { id: 'DistributionChannel', numeric: true, disablePadding: false, label: 'Distribution Channel' },
  { id: 'Division', numeric: true, disablePadding: false, label: 'Division' },
  { id: 'SalesDistrict', numeric: true, disablePadding: false, label: 'Sales District' },
  { id: 'SalesDistrictDescription', numeric: true, disablePadding: false, label: 'Sales District Description' },
  { id: 'SalesOffice', numeric: true, disablePadding: false, label: 'Sales Office' },
  { id: 'SalesOfficeDescription', numeric: true, disablePadding: false, label: 'Sales Office Description' },
  { id: 'SalesGroup', numeric: true, disablePadding: false, label: 'Sales Group' },
  { id: 'SalesGroupDescription', numeric: true, disablePadding: false, label: 'Sales Group Description' },
  { id: 'CustomerGroup', numeric: true, disablePadding: false, label: 'Customer Group' },
  { id: 'CustomerGroupDescription', numeric: true, disablePadding: false, label: 'Customer Group Description' },
  { id: 'CustomerGroup2(Loyality)', numeric: true, disablePadding: false, label: 'Customer Group2' },
  { id: 'CustomerGroup2Description(Loyality)', numeric: true, disablePadding: false, label: 'Customer Group2 Description' },
  { id: 'CustomerGroup3(Ship To Group)', numeric: true, disablePadding: false, label: 'Customer Group3' },
  { id: 'CustomerGroup3Description (Ship To Group)', numeric: true, disablePadding: false, label: 'Customer Group 3 Description' },
  { id: 'PaymentTerm', numeric: true, disablePadding: false, label: 'Payment Term' },
  { id: 'PaymentTermDescription', numeric: true, disablePadding: false, label: 'Payment Term DescriptionEN' },
  // { id: 'PaymentTermDescription', numeric: true, disablePadding: false, label: 'Payment Term DescriptionTH' },
  { id: 'SalesRepresentativeId', numeric: true, disablePadding: false, label: 'Sales Representative Id' },
  { id: 'SalesRepName', numeric: true, disablePadding: false, label: 'Sales Rep Name' },
  { id: 'SalesRepPhone', numeric: true, disablePadding: false, label: 'Sales Rep Phone' },
  { id: 'SalesRepEmail', numeric: true, disablePadding: false, label: 'Sales Rep Email' },
  { id: 'CustomerBlock', numeric: true, disablePadding: false, label: 'Customer Block' },
];

// comment

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

export default function SalesAreaListTable(props) {
  const classes = useStyles();

  const [dense, setDense] = React.useState(false);
  const dispatch = useDispatch();

  let history = useHistory();
  const location = useLocation();
  const { accountName } = location.state;
  const salesAreaList = useSelector((state) => state.salessoldtoarealist);

  console.log("salesAreaList++",salesAreaList);


  useEffect(() => {
    dispatch(eventActions.salesSoldtoAreaList(accountName));
  }, [accountName]);

  let rows = [];


  rows = salesAreaList.salessoldtoarealist ? salesAreaList.salessoldtoarealist : [];


  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer className={classes.container}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            stickyHeader aria-label="sticky table"
          >
            <EnhancedTableHead
              rowCount={rows.length}
            />
            <TableBody>
              {salesAreaList && salesAreaList.loading ? <Loader /> :
              (rows)
                .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                : (rows)
                  .slice()
                  .map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <TableRow>
                        
                        <TableCell align="right">{row.salesAreaExtId}</TableCell>
                        <TableCell align="right">{row.salesOrganization}</TableCell>
                        <TableCell align="right">{row.distributionChannel}</TableCell>
                        <TableCell align="right">{row.division}</TableCell>
                        <TableCell align="right">{row.salesDistrict}</TableCell>
                        <TableCell align="right">{row.salesDistrictDescription}</TableCell>
                        <TableCell align="right">{row.salesOffice}</TableCell>
                        <TableCell align="right">{row.salesOfficeDescription}</TableCell>
                        <TableCell align="right">{row.salesGroup}</TableCell>
                        <TableCell align="right">{row.salesGroupDescription}</TableCell>
                        <TableCell align="right">{row.customerSegmentation}</TableCell>
                        <TableCell align="right">{row.customerGroupDescription}</TableCell>
                        <TableCell align="right">{row.loyalty}</TableCell>
                        <TableCell align="right">{}</TableCell>
                        <TableCell align="right">{row.shipToGroup}</TableCell>
                        <TableCell align="right">{}</TableCell>
                        <TableCell align="right">{row.paymentTerm}</TableCell>
                        <TableCell align="right">{row.paymentTermDescriptionEN}</TableCell>
                        {/* <TableCell align="right">{row.paymentTermDescriptionTH}</TableCell> */}
                        <TableCell align="right">{row.salesRepresentativeId}</TableCell>
                        <TableCell align="right">{row.salesRepName}</TableCell>
                        <TableCell align="right">{row.salesRepPhone}</TableCell>
                        <TableCell align="right">{row.salesRepEmail}</TableCell>
                        <TableCell align="right">{row.customerBlock}</TableCell>
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
