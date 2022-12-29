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
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';



const headCells = [
  { id: 'contractId', numeric: false, disablePadding: true, label: 'Contract Id' },
  { id: 'contractName', numeric: true, disablePadding: false, label: 'Contract Name' },
  { id: 'ContractType', numeric: true, disablePadding: false, label: 'Contract Type' },
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
    maxHeight: "calc(90vh - 236px)",
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

export default function ContractList(props) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const dispatch = useDispatch();

  let history = useHistory();
  const location = useLocation();
  const { accountName } = location.state;
  const { soldtoNumber } = location.state;
  const contractList = useSelector((state) => state.soldtocontractlist);
  const searchedContractList = useSelector((state) => state.contractListBySearchValue)

  useEffect(() => {
    dispatch(eventActions.SoldToContractList(accountName));
  }, []);

  useEffect(() => {
    !!searchValue && dispatch(eventActions.ContractListBySearchValue(accountName, searchValue))
  }, [searchValue])

  let rows = [];

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
  }



  rows = !!searchValue ? !!searchedContractList.contractList && !!searchedContractList.contractList.length > 0 && searchedContractList.contractList : contractList.soldtocontractlist ? contractList.soldtocontractlist : [];

  const contractToDetail = (event, contractId, accountName, soldtoNumber) => {
    history.push("/ContractMaster", { contractId: contractId, accountName: accountName, soldtoNumber });
  }


  return (
    <div className={classes.root}>
      <div className="row mt-2">
        <div className="col-7"></div>
        <div className="col-5">
          <div className="button_popup mb-2">
            {/* <input type="text" placeholder="Search here" onChange={handleSearchChange} /> */}

            <div className="search new_search">
              <Paper component="form" className={classes.root}>
                <InputBase
                  className={classes.input}
                  placeholder="Search By Contract Id & Contract name"
                  inputProps={{ 'aria-label': '' }}
                  onChange={handleSearchChange}
                />
                <IconButton className={classes.iconButton} aria-label="search" style={{ marginRight: '-1px !important' }}>
                  <SearchIcon />
                </IconButton>
              </Paper>
            </div>

          </div>
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
              {contractList && contractList.loading ? <Loader /> :
                  rows && rows
                  .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                  : rows && rows
                    .slice()
                    .reverse().map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;
                      return (
                        <TableRow>
                          <TableCell id={labelId} align="left"> <span className="contractid" onClick={(event) => contractToDetail(event, row.contractId, accountName, soldtoNumber)}>{row.contractId}</span> </TableCell>
                          <TableCell align="right">{row.contractName}</TableCell>
                          <TableCell align="right">{row.contractType}</TableCell>

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
