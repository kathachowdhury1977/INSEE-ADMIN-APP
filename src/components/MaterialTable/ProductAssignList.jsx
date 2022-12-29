import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { eventActions } from "../../_actions";
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
import Loader from "../Loader/Loader";
import { useLocation } from 'react-router-dom';
import ConfirmationBox from "./ConfirmationBox";
import Checkbox from '@material-ui/core/Checkbox';
import EditDate from "../ModalPopup/EditDate";
import Pagination from '@material-ui/lab/Pagination';
import AssignedProductSearch from "../SearchBox/AssignedProductSearch";
import AddDate from "../ModalPopup/AddDate";


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}


function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  // { id: 'Action', numeric: true, disablePadding: false, label: 'Action' },
  { id: 'productid', numeric: true, disablePadding: false, label: 'Product Id' },
  { id: 'name', numeric: false, disablePadding: true, label: 'Product Name' },
  { id: 'division', numeric: true, disablePadding: false, label: 'Division' },
  { id: 'sdate', numeric: true, disablePadding: false, label: 'Start Date' },
  { id: 'edate', numeric: true, disablePadding: false, label: 'End Date' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Product Visibilty Status' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
          <span style={{ fontWeight: "600", fontFamily: "system-ui", marginLeft: "7px" }}>Action</span>
        </TableCell>
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

export default function ProductAssignList(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const dispatch = useDispatch();
  const assignproductgroupdetail = useSelector((state) => state.productassignlistsearch);
  const assigncheck = useSelector((state) => state.assignproduct.assignproduct);
  const deleteAssign = useSelector((state) => state.deleteassignproduct);
  let history = useHistory();
  const location = useLocation();
  const [open, setOpen] = React.useState(false)
  const [productObj, setProductObj] = React.useState('');
  const [searchValue, setSeachValue] = React.useState('');

  const { productGroupId } = location.state;

  const selectedItem = selected.length;

  useEffect(() => {
    dispatch(eventActions.AssignProduct(selectedItem));
  }, [selectedItem]);

  let startIndex = assignproductgroupdetail.productassignlistsearch && assignproductgroupdetail.productassignlistsearch.startIndex;
  let endIndex = assignproductgroupdetail.productassignlistsearch && assignproductgroupdetail.productassignlistsearch.endIndex;

  useEffect(() => {
    dispatch(eventActions.productAssignListSearch(30, productGroupId, searchValue, 1));
  }, [searchValue]);


  const handleChangePage = (event, value) => {
    if (value === 1) {
      startIndex = 1;
      endIndex = 29;

    }
    else {
      startIndex = ((value - 1) * 29) + 1;
      endIndex = value * 29;
    }
    setPage(value);
    // setPage(newPage);
    console.log("endIndex, startIndex", endIndex, startIndex)
    dispatch(eventActions.productAssignListSearch(endIndex, productGroupId, '', startIndex));
  };

  console.log("assignproductgroupdetail", assignproductgroupdetail);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.productId);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, productId) => {
    const selectedIndex = selected.indexOf(productId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, productId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };


  const productChange = (event) => {
    // const value = event.target.name
    //     !!value && setProductId(previousValue => [...previousValue, value]);
    //     console.log("ProductIDS",value);

    var table = document.getElementById("ProductAssignTable");
    const productId = [];
    console.log("assigned Id", productId);
    var rows = table.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
      var cols = rows[i].getElementsByTagName('td');
      if (cols.length > 1) {
        if (cols[0].getElementsByTagName('input')[0].checked) {
          productId.push(cols[0].getElementsByTagName('input')[0].name);
          console.log('check box Product', cols[0].getElementsByTagName('input')[0].name);
        }
      }
    }
    dispatch(eventActions.assignProductItemId(productId));
  }

  //   useEffect(() => {
  //     dispatch(eventActions.assignProductItemId(productId));
  // }, [productId])


  const isSelected = (productId) => selected.indexOf(productId) !== -1;


  let rows = [];


  rows = assignproductgroupdetail.productassignlistsearch ? assignproductgroupdetail.productassignlistsearch.results : [];





  console.log("rowsdesi", rows);
  const removeProduct = (event, productId) => {
    setOpen(true)

    ///alert(event);
    let data = {
      "endDate": "string",
      "productGroupId": productGroupId,
      "productGroupList": [
        "string"
      ],
      "productGroupName": "string",
      "productList": [
        productId
      ],
      "startDate": "string",
      "status": "string"
    }
    setProductObj(data);



  }

  useEffect(() => {
    if (!!deleteAssign.deleteassignproduct && deleteAssign.deleteassignproduct !== undefined) {
      dispatch(eventActions.AssignProductGroupDetailList(productGroupId));
    }
  }, [deleteAssign])

  useEffect(() => {
    return () => {
      dispatch(eventActions.deleteAssignProductList())
    }
  }, [])

  const [myproductId, setMyProductId] = React.useState("");
  const [popupopen, setPopupopen] = React.useState(false);

  const handlepen = (event) => {
    setMyProductId(event);
    setPopupopen(true);
  }

  console.log("myproductIdmyproductId", myproductId)

  return (
    <>
      <div className="product-width">
        <AssignedProductSearch handleSearchValue={setSeachValue} />
        <AddDate title="Add Date" assigncheck={assigncheck} />
      </div>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <TableContainer id="ProductAssignTable" className={classes.container}>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              aria-label="enhanced table"

              stickyHeader aria-label="sticky table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {assignproductgroupdetail && assignproductgroupdetail.loading ? <Loader /> :
                  (rows)
                    .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                    : (rows)
                      .slice()
                      .map((row, index) => {
                        // const isItemSelected = isSelected(row.productId);
                        const labelId = `enhanced-table-checkbox-${index}`;
                        const productId = row.productId;
                        return (
                          <TableRow
                            onClick={(event) => handleClick(event, row.productId)}
                            role="checkbox"
                            tabIndex={-1}
                            key={row.productId}
                          >


                            <TableCell align="checkbox">
                              <Checkbox

                                inputProps={{ 'aria-labelledby': productId }}
                                onChange={productChange}
                                name={row.productId}

                              />

                              <span onClick={(event) => removeProduct(event, row.productId)} className="product_group-edit">Delete</span>
                              <span onClick={() => handlepen(row.productId)} className="product_group-edit">Edit</span>
                            </TableCell>
                            <TableCell align="right">{row.productId}</TableCell>
                            <TableCell component="th" id={labelId} scope="row" padding="none">
                              {row.productName}
                            </TableCell>
                            <TableCell align="right">{row.division}</TableCell>
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
        <div className="pagination_sec">
        <Pagination count={Math.ceil(assignproductgroupdetail.productassignlistsearch && assignproductgroupdetail.productassignlistsearch.totalCount / 29)} page={page} onChange={handleChangePage} variant="outlined" color="secondary" />
      </div>

        <div>

          {productObj && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteAssignProductList(productObj)} open={open} setOpen={setOpen} />}

        </div>
        <div>
          <EditDate myproductId={myproductId} popupopen={popupopen} setOpen={setPopupopen} />
        </div>
      </div>
    </>
  );
}
