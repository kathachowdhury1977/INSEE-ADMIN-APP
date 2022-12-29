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
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Loader from "../Loader/Loader";
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ConfirmationBox from "../MaterialTable/ConfirmationBox";
import Checkbox from '@material-ui/core/Checkbox';
import AssignEditDate from "../../components/ModalPopup/AssignEditDate";



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
    { id: 'productid', numeric: true, disablePadding: false, label: 'Product Id' },
    { id: 'name', numeric: false, disablePadding: true, label: 'Product Name' },
    { id: 'division', numeric: true, disablePadding: false, label: 'Division' },
    { id: 'sdate', numeric: true, disablePadding: false, label: 'Start Date' },
    { id: 'edate', numeric: true, disablePadding: false, label: 'End Date' },
    // { id: 'status', numeric: true, disablePadding: false, label: 'Product Status' },
    { id: 'status', numeric: true, disablePadding: false, label: 'Product Visibility Status' },
];

function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox" className="text-center">
                    <span className="action_product">Action</span>
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={'asc'}
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

export default function SoldToAssignProductList(props) {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('startDate', 'endDate');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    let history = useHistory();
    const [productId, setProductId] = React.useState("");
    const soldtoProductAssign = useSelector((state) => state.getassignproductlistforsoldto);
    const deleteAssign = useSelector((state) => state.deleteproductdateinsoldto);
    const location = useLocation();
    const [assignsoldtoId, setAssignSoldtoId] = React.useState('');
    const [myproductId, setMyProductId] = React.useState("");
    const productIdList = useSelector((state) => state.soldtoassignproduct);
    const { accountName } = location.state;
    const { productGroupId } = location.state;


    
    const { Mygroupid } = location.state;



    useEffect(() => {
        dispatch(eventActions.getAssignedProductListForSoldTo(productGroupId,accountName));
    }, [productGroupId,accountName]);
    
    console.log("soldtoProductAssign",soldtoProductAssign);


    const selectedItem = selected.length;

    useEffect(() => {
        dispatch(eventActions.AssignProduct(selectedItem));
    }, [selectedItem]);


    const handleCheck = (event) => {
        
        const value = event.target.name
        !!value && setProductId(previousValue => [...previousValue, value]);
        console.log("my tripid",value);
    }

    useEffect(() => {
        dispatch(eventActions.SoldToAssignProduct(productId));
    }, [productId]);
    


    let rows = [];



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

    const handleChangePage = (event, value) => {
      
        setPage(value);
        // setPage(newPage);
        


    };

    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setPage(0);
    // };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    
    rows = soldtoProductAssign.getassignproductlistforsoldto ? soldtoProductAssign.getassignproductlistforsoldto : [];
    // let dataArr = rows.map(item => {
    //     return [item.productGroupId, item]
    // });

    // let maparr = new Map(dataArr);
    // let result = [...maparr.values()];
    // rows = result.reverse();

     console.log("row----------++", rows);



    const [mysetID, setProductGroupId] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);

    const handlepen = (event) => {
        setProductGroupId(event);
        setPopupopen(true);
    }

    const removeProduct = (event, productGroupId, productId, accountName) => {
        setOpen(true);
        setAssignSoldtoId({"productGroupId": productGroupId, "productId":productId, "accountName":accountName});
        // dispatch(eventActions.deleteAssignProductList(data));
      }

      console.log("assignsoldtoId",assignsoldtoId)
    
      useEffect(() => {
        if (!!deleteAssign && !!deleteAssign.deleteproductdateinsoldto && deleteAssign.deleteproductdateinsoldto !== undefined) {
            dispatch(eventActions.getAssignedProductListForSoldTo(productGroupId,accountName));
    
          toast.success('Assign Product is deleted successfully', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        }
      }, [deleteAssign])
    
     
      useEffect(() => {
        return () => {
          dispatch(eventActions.deleteProductDateInSoldTo())
        }
      }, [])
    
  

    return (
        <>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
                    <TableContainer className={classes.container}>
                        <Table
                            className={classes.table}
                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                            stickyHeader aria-label="sticky table"
                        >
                            <EnhancedTableHead
                                classes={classes}
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={rows && rows.length}
                            />
                            <TableBody>
                                {soldtoProductAssign && soldtoProductAssign.loading ? <Loader /> :
                                    stableSort(rows, getComparator(order, orderBy))
                                        .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                                        : stableSort(rows, getComparator(order, orderBy))
                                            .slice()
                                            .reverse()
                                            .map((row, index) => {
                                                
                                                const labelId = `enhanced-table-checkbox-${index}`;
                                                console.log("my dates", row);
                                                return (
                                                    <TableRow
                                                        hover
                                                        onClick={(event) => handleClick(event, row.productId)}
                                                        role="checkbox"
                                                        
                                                        tabIndex={-1}
                                                        key={row.productId}
                                                       
                                                    >
                                                        <TableCell padding="checkbox">
                                                            <Checkbox
                                                               
                                                                inputProps={{ 'aria-labelledby': labelId }}
                                                                onChange={handleCheck}
                                                                name={row.productId}

                                                            />
                                                            <span onClick={(event) => removeProduct(event, productGroupId, row.productId,accountName)} className="product_group-edit">Delete</span>
                                                            <span onClick={() => handlepen(row.productId)} className="product_group-edit">Edit</span>

                                                        </TableCell>
                                                        <TableCell align="right">{row.productId}</TableCell>
                                                        <TableCell component="th" id={labelId} scope="row" padding="none">
                                                            {row.productName}
                                                        </TableCell>
                                                        <TableCell align="right">{row.division}</TableCell>

                                                        <TableCell align="right">{row.startDate}</TableCell>
                                                        <TableCell align="right">{row.endDate}</TableCell>

                                                        {/* <TableCell align="right">{row.status}</TableCell> */}
                                                        <TableCell align="right">{row.status}</TableCell>
                                                    </TableRow>
                                                );
                                            })}

                            </TableBody>
                        </Table>
                    </TableContainer>

                </Paper>
              
            </div>
            <div>
        {assignsoldtoId && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductDateInSoldTo(assignsoldtoId)} open={open} setOpen={setOpen} />}
      </div>
            <div>
                <AssignEditDate mysetID={mysetID} popupopen={popupopen} setOpen={setPopupopen} />
            </div>
        </>
    );
}
