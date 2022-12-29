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
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import { ToastContainer, toast } from 'react-toastify';
import SoldToEditDate from "../../../components/ModalPopup/SoldToEditDate";



const headCells = [
  { id: 'Action', numeric: true, disablePadding: false, label: 'Action' },
  { id: 'ProductGroupID', numeric: false, disablePadding: true, label: 'Product Group ID' },
  { id: 'ProductGroupName', numeric: false, disablePadding: true, label: 'Product Group Name' },
  { id: 'StartDate', numeric: true, disablePadding: false, label: 'Start Date' },
  { id: 'EndDate', numeric: true, disablePadding: false, label: 'End Date' },
  { id: 'Status', numeric: true, disablePadding: false, label: 'Status' },
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
    maxHeight: "calc(90vh - 147px)",
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

export default function AssignSoldTo(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [dense, setDense] = React.useState(false);
  const dispatch = useDispatch();
  const assignproductgroupdetail = useSelector((state) => state.assignproductgroupidlist);
  const deleteAssign = useSelector((state) => state.deleteassignproduct);
  let history = useHistory();
  const location = useLocation();
  const { productGroups } = location.state;
  const { accountName } = location.state;
  const { soldtoNumber } = location.state;
  const [open, setOpen] = React.useState(false);
  const [soldtoId, setSoldtoId] = React.useState('');


  const { groupId } = location.state;
  const soldtoProductList = useSelector((state) => state.soldtoproductgrouplist);
  const deletesoldtoproduct = useSelector((state) => state.deletesoldtoproductgroup);

  useEffect(() => {
    dispatch(eventActions.soldtoProductGroupList(accountName));
}, []);

  let rows = [];

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };





  rows = soldtoProductList.soldtoproductgrouplist ? soldtoProductList.soldtoproductgrouplist : [];


  const removeProduct = (event, productGroupId, accountName) => {
    console.log("my soldto",productGroupId, accountName)
    setOpen(true);
      
      setSoldtoId({"productGroupId" :productGroupId, "accountName": accountName});
     
    // dispatch(eventActions.deleteSoldToProductGroupList(data)); 
    
}

console.log("soldtoId",soldtoId);



useEffect(()=>{ 
    if(!!deletesoldtoproduct && !!deletesoldtoproduct.deletesoldtoproductgroup && deletesoldtoproduct.deletesoldtoproductgroup !== undefined)
    {
       dispatch(eventActions.soldtoProductGroupList(accountName));

        toast.success('Assign Product Group is deleted successfully', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      })
    }  
 },[deletesoldtoproduct])


 useEffect(() => {
  return () => {
    dispatch(eventActions.deleteSoldToProductGroupList())
  }
}, [])


 const productGroupDetail = (event, productGroupId, productGroupName, accountName, soldtoNumber) => {
    history.push("/SoldToProductGroupMasterDetailList", {productGroupId: productGroupId, productGroupName:productGroupName,accountName:accountName, soldtoNumber:soldtoNumber });
}

const [myproductId, setMyProductId] = React.useState("");
const [popupopen, setPopupopen] = React.useState(false);

const handlsoldto = (event) => {
  setMyProductId(event);
  setPopupopen(true);
}


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
              {soldtoProductList && soldtoProductList.loading ? <Loader /> :
              (rows)
                .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                : (rows)
                  .slice()
                  .map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <TableRow>
                        <TableCell align="right">
                          <span onClick={(event) => removeProduct(event, row.productGroupId, accountName)} className="product_group-edit">Delete</span>
                          <span onClick={() => handlsoldto(row.productGroupId)} className="product_group-edit">Edit</span>
                          </TableCell>
                          <TableCell align="left">{row.productGroupId}</TableCell>
                        <TableCell id={labelId}  align="left" className="url_link"
                          onClick={(event) => productGroupDetail(event, row.productGroupId, row.productGroupName, accountName, soldtoNumber)}>
                          {row.productGroupName}
                        </TableCell>
                        <TableCell align="right">{row.startDate}</TableCell>
                        <TableCell align="right">{row.endDate}</TableCell>
                        <TableCell align="right">{row.status}</TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <div>
        <SoldToEditDate myproductId={myproductId} popupopen={popupopen} setOpen={setPopupopen} />
      </div>
      <div>
      {soldtoId && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteSoldToProductGroupList(soldtoId)} open={open} setOpen={setOpen} />}
      </div>
    </div>
  );
}
