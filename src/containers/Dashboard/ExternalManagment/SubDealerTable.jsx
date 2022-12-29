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
import SubDealerSearch from "../../../components/SearchBox/SubDealerSearch";
import SubDealerToggle from "../../../components/SubDealerToggle/SubDealerToggle";
import ConfirmationBox from '../../../components/MaterialTable/ConfirmationBox';
import EditSubDealerPopup from '../../../components/ModalPopup/EditSubDealerPopup';
import { ToastContainer, toast } from 'react-toastify';
import AddSubDealerSoldTo from "../../../components/ModalPopup/AddSubDealerSoldTo";
import DOMPurify from "dompurify";
import Pagination from '@material-ui/lab/Pagination';


const headCells = [
  { id: 'action', numeric: true, disablePadding: false, label: 'Action' },
  { id: 'SubDealerCode', numeric: true, disablePadding: false, label: 'Sub Dealer Code' },
  { id: 'SubDealerNameEN', numeric: true, disablePadding: false, label: 'Sub Dealer Name (EN)' },
  { id: 'SubDealerNameTH', numeric: true, disablePadding: false, label: 'Sub Dealer Name (TH)' },
  { id: 'relationwithsubdealer', numeric: true, disablePadding: false, label: 'Relationship with sub dealer' },
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
    maxHeight: "calc(90vh - 260px)",
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

export default function SubDealerTable(props) {
  const classes = useStyles();

  const [dense, setDense] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('')
  const dispatch = useDispatch();
  let history = useHistory();
  const location = useLocation();
  const { accountName } = location.state;
  const [page, setPage] = React.useState(0);
  const subDealerTableData = useSelector((state) => state.subDealerData);
  const deleteSubDealer = useSelector((state) => state.deletesubdealersoldto);
  let searchedSubDealer = useSelector((state) => state.subdealersearch);
  const [open, setOpen] = React.useState(false);
  const [groupDetail, setGroupDetail] = React.useState("");
  const [popupopen, setPopupopen] = React.useState(false);
  const [subDealerDelete, setSubDealerDelete] = React.useState('');
  console.log("searchValue+++", searchValue);


  useEffect(() => {
    dispatch(eventActions.subDealerData(1, true, searchValue ? searchValue : "", accountName, 20));
  }, [searchValue]);

  let rows = [];

  let startIndex = subDealerTableData.subDealerData && subDealerTableData.subDealerData.startIndex;
    let endIndex = subDealerTableData.subDealerData && subDealerTableData.subDealerData.endIndex;

  rows = subDealerTableData.subDealerData && subDealerTableData.subDealerData ? subDealerTableData.subDealerData && subDealerTableData.subDealerData.results : [];


  const deleteContactpop = (event, retailerCode, accountName) => {
    console.log("mystatus", retailerCode, accountName)
    setOpen(true)
    setSubDealerDelete({ 'retailerCode': retailerCode, 'soldtonumber': accountName })
    

    
  }

  useEffect(() => {
    if (deleteSubDealer && !deleteSubDealer.loading &&
      (deleteSubDealer.deletesubdealersoldto)) {
      dispatch(eventActions.subDealerData(1, true, '', accountName, 20));
      toast.success('sub dealer is deleted', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

    }
  }, [deleteSubDealer]);


  useEffect(() => {
    return () => {
      dispatch(eventActions.deleteSubDealerSoldTo())
      dispatch(eventActions.subDealerData(1, true, "", accountName, 20));
    }
  }, [])


  const handleEdit = (event, markdelete, retailerName, retailerCode, accountName, retailerNameInLocal) => {
    setGroupDetail({ 'markdelete': markdelete, 'retailerName': retailerName, 'retailerCode': retailerCode, 'accountName': accountName, 'retailerNameInLocal': retailerNameInLocal });
    setPopupopen(true);
  }

  console.log("subDealerTableData", rows);

  const handleChangePage = (event, value) => {
    if (value === 1) {
        startIndex = 1;
        endIndex = 19;

    }
    else {
        startIndex = ((value - 1) * 19) + 1;
        endIndex = value * 19;
    }
    setPage(value);
    // setPage(newPage);
    dispatch(eventActions.subDealerData(startIndex, true, '', accountName, endIndex));
};

console.log("searchValue+++",searchValue);



  return (
    <div className={classes.root}>



      <div className="button_popup mt-2 mb-2">
        <SubDealerSearch defaultValue={searchValue} handleSearchValue={setSearchValue} />
        {/* <AddSubDealerSoldTo title="Add Sub Dealer" setSearchValue={setSearchValue} /> */}
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
              rowCount={rows && rows.length}
            />
            <TableBody>
              {subDealerTableData && subDealerTableData.loading ? <Loader /> :
                (rows)
                  .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                  : (rows)
                    .slice()
                    .reverse()
                    .map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;
                      console.log("row+++", row.markForDelete)
                      return (
                        <TableRow>
                          <TableCell align="center">
                            <span class="product_group-edit" onClick={(event) => handleEdit(event, row.markForDelete, row.retailerName, row.retailerCode, accountName, row.retailerNameInLocal)}>Edit</span>
                            <span class="product_group-edit" onClick={(event) => deleteContactpop(event, row.retailerCode, accountName)}>Delete</span>
                          </TableCell>
                          <TableCell id={labelId} align="center" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.retailerCode) }}></TableCell>
                          <TableCell align="center" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.retailerName) }}></TableCell>
                          <TableCell align="center" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.retailerNameInLocal) }}></TableCell>
                          <TableCell align="center">{row.markForDelete === false ? <span>Active</span> : <span>InActive</span>}</TableCell>
                        </TableRow>
                      );
                    })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <div className="pagination_sec mt-2">
        <Pagination count={Math.ceil(subDealerTableData.subDealerData && subDealerTableData.subDealerData.totalCount / 19)} page={page} onChange={handleChangePage} variant="outlined" color="secondary" />
      </div>

      <div>
        {!!subDealerDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteSubDealerSoldTo(subDealerDelete)} open={open} setOpen={setOpen} />}
      </div>
      <div>
        <EditSubDealerPopup setSearchValue={setSearchValue} groupDetail={groupDetail} popupopen={popupopen} setOpen={setPopupopen} />
      </div>
    </div>
  );
}
