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
import Shiptosearch from "../../../components/SearchBox/Shiptosearch";



const headCells = [
  { id: 'markdelete', numeric: true, disablePadding: false, label: 'Mark Delete' },
  { id: 'ShipToCode', numeric: false, disablePadding: true, label: 'Ship To Code' },
  // { id: 'ShipToId', numeric: false, disablePadding: true, label: 'Ship To Id' },
  { id: 'ShipToName', numeric: false, disablePadding: true, label: 'Ship To Name' },
  { id: 'ShipToNameInLocal', numeric: false, disablePadding: true, label: 'Ship To Name In Local' },
  { id: 'address', numeric: true, disablePadding: false, label: 'address' },
  { id: 'street', numeric: true, disablePadding: false, label: 'street' },
  { id: 'subDistrictId', numeric: true, disablePadding: false, label: 'sub District Id' },
  { id: 'districtId', numeric: true, disablePadding: false, label: 'district Id' },
  { id: 'provinceId', numeric: true, disablePadding: false, label: 'province Id' },
  // { id: 'regionId', numeric: true, disablePadding: false, label: 'region Id' },
  { id: 'PostalCode', numeric: true, disablePadding: false, label: 'Postal Code' },
  { id: 'countryCode', numeric: true, disablePadding: false, label: 'country Code' },

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

  container: {
    maxHeight: "calc(90vh - 200px)",
  },

  paper: {
    width: '100%',
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

export default function SoldToShipTable(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [dense, setDense] = React.useState(false);
  const dispatch = useDispatch();

  let history = useHistory();
  const location = useLocation();
  const { accountName } = location.state;
  const shipToList = useSelector((state) => state.shiptolist);
  const ShipToSearch = useSelector((state) => state.shiptosearch);
  const [searchValue, setSeachValue] = React.useState('');

  useEffect(() => {
    dispatch(eventActions.ShipToList(accountName));
  }, []);

  let rows = [];

  rows = !!searchValue ? !!ShipToSearch && !!ShipToSearch.shiptosearch && ShipToSearch.shiptosearch.map(list => {
    return {
      shipToCode: list.shipToNumber, shipToId: list.shipToNumber, shipToName: list.accountName, shipToNameInLocal: list.accountNameLocal,
      address: { address: list.addressNumber, street: list.street, subDistrictId: list.salesDistrictValue, districtId: list.districtValue, provinceId: list.provinceValue, regionId: list.region, postalCode: list.postalCodeValue, countryId: list.soldtoCountryCode }
    }
  }) : shipToList.shiptolist ? shipToList.shiptolist : [];

  useEffect(() => {
    dispatch(eventActions.ShipToSearch(accountName, searchValue));
  }, [searchValue])


  return (
    <div className={classes.root}>
      <div className="row mt-2 mb-2">
        <div className="col-7"></div>
        <div className="col-5">
          <Shiptosearch handleSearchValue={setSeachValue} />
        </div>

      </div>
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
              {shipToList && shipToList.loading ? <Loader /> :
                    rows && rows
                    .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                    : rows && rows
                      .slice()
                      .reverse()
                    .map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;
                      
                      return (
                        <TableRow>
                           <TableCell align="right">{row.markAsDeleteInString}</TableCell>
                          <TableCell id={labelId} align="left"> {row.shipToCode} </TableCell>
                          {/* <TableCell id={labelId} align="left"> {row.shipToId} </TableCell> */}
                          <TableCell id={labelId} align="left"> {row.shipToName} </TableCell>
                          <TableCell id={labelId} align="left"> {row.shipToNameInLocal} </TableCell>
                          <TableCell align="right">{row.address.address}</TableCell>
                          <TableCell align="right">{row.address.street}</TableCell>
                          <TableCell align="right">{row.address.subDistrictId}</TableCell>
                          <TableCell align="right">{row.address.districtId}</TableCell>
                          <TableCell align="right">{row.address.provinceId}</TableCell>
                          {/* <TableCell align="right">{row.address.regionId}</TableCell> */}
                          <TableCell align="right">{row.address.postalCode}</TableCell>
                          <TableCell align="right">{row.address.countryId}</TableCell>
                         
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
