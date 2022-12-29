import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { eventActions } from "../../../_actions";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import "../../../components/MaterialTable/MaterialTable.scss";
import Loader from "../../../components/Loader/Loader";
import { useLocation } from 'react-router-dom';
import ConfirmationBox from '../../../components/MaterialTable/ConfirmationBox';
import EditRetailerLoyaltypoint from "../../../components/MasterPopup/EditRetailerLoyaltypoint";
import { ToastContainer, toast } from 'react-toastify';
import Checkbox from '@material-ui/core/Checkbox';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import moment from 'moment';
import Pagination from '@material-ui/lab/Pagination';






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
    const stabilizedThis = array && array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { id: 'sno', numeric: true, disablePadding: false, label: 'No' },
    { id: 'markDelete', numeric: true, disablePadding: false, label: 'Mark Delete' },
    // { id: 'action', numeric: true, disablePadding: false, label: 'Action' },
    { id: 'activitytype', numeric: true, disablePadding: false, label: 'Activity Type' },
    { id: 'dealerId', numeric: true, disablePadding: false, label: 'Dealer Id' },
    { id: 'dealerName', numeric: true, disablePadding: false, label: 'Dealer Name' },
    { id: 'billingnumber', numeric: true, disablePadding: false, label: 'Billing Number' },
    { id: 'billingdate', numeric: true, disablePadding: false, label: 'Billing Date' },
    { id: 'productNumber', numeric: true, disablePadding: false, label: 'Product Number' },
    { id: 'productName', numeric: true, disablePadding: false, label: 'Product Name' },
    { id: 'quantiy', numeric: true, disablePadding: false, label: 'Quantity(Unit)' },
    { id: 'pointreceived', numeric: true, disablePadding: false, label: 'Point Received' },
    { id: 'createdate', numeric: true, disablePadding: false, label: 'Create Date' },
    { id: 'expiredate', numeric: true, disablePadding: false, label: 'Expiration Date' },
    { id: 'remark', numeric: true, disablePadding: false, label: 'Remark' },



];

function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {/* <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell> */}

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
        // flex: '1 1 100%',
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
        maxHeight: "calc(90vh - 240px)",
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

export default function RetailerLoyalityPointList() {
    const dispatch = useDispatch();
    const location = useLocation();
    const classes = useStyles();

    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [myLoyalty, setMyLoyalty] = React.useState([]);
    const [searchselect, setSearch] = React.useState("");

    const { retailerCode } = location.state;
    const LoyaltyPointList = useSelector((state) => state.retailerloyaltylist);
    const deleteRetailerLoyalty = useSelector((state) => state.deleteretailerloyalty);
    const [open, setOpen] = React.useState(false);
    const [loyaltyDelete, setLoyaltyDelete] = React.useState('');
    const [groupDetail, setGroupDetail] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [productId, setProductId] = React.useState([]);

    const assigncheck = useSelector((state) => state.assignproduct.assignproduct);
    const searchList = useSelector((state) => state.retailerloyaltysearch);

    let history = useHistory();

    let startIndex = LoyaltyPointList.retailerloyaltylist && LoyaltyPointList.retailerloyaltylist.startIndex;
    let endIndex = LoyaltyPointList.retailerloyaltylist && LoyaltyPointList.retailerloyaltylist.endIndex;


  console.log("productId",searchList);


    const selectedItem = selected.length;
    useEffect(() => {
        dispatch(eventActions.AssignProduct(selectedItem));
    }, [selectedItem]);

    useEffect(() => {
        dispatch(eventActions.getRetailerLoyaltyList(retailerCode, 1, 30));
    }, []);


    useEffect(() => {
        dispatch(eventActions.getRetailerLoyaltySearch(searchselect ? searchselect : '',retailerCode, 1, 5000));
    }, [searchselect]);

    

    let rows = [];


    rows =  searchList.retailerloyaltysearch != undefined && searchList.retailerloyaltysearch.length > 0 ? searchList.retailerloyaltysearch.results : LoyaltyPointList.retailerloyaltylist ? LoyaltyPointList.retailerloyaltylist.results :[];



    if (rows !== undefined && rows !== null && rows.length !== undefined) {

    } else {
        rows = []
    }

    
    const handleRequestSort = (event, property) => {

    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
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






    const isSelected = (id) => selected.indexOf(id) !== -1;




  



    const loyaltyChange = (event) => {
        const value = event.target.name
        !!value && setProductId(previousValue => [...previousValue, value]);
    }

    useEffect(() => {
        dispatch(eventActions.activeProduct(productId));
    }, [productId])

    // const loyaltyChange = (event) => {
    //     debugger
    //     var table = document.getElementById("LoyaltyPointTable");
    //     const soldtonumber = [];
    //     console.log("mysoldtolist", soldtonumber);
    //     var rows = table.getElementsByTagName('tr');
    //     for (var i = 0; i < rows.length; i++) {
    //         var cols = rows[i].getElementsByTagName('td');
    //         if (cols.length > 1) {
    //             if (cols[0].getElementsByTagName('input')[0].checked) {
    //                 soldtonumber.push(cols[0].getElementsByTagName('input')[0].name);
    //                 console.log('check box value', cols[0].getElementsByTagName('input')[0].name);
    //             }
    //         }
    //     }

    //     dispatch(eventActions.SoldtoManagmentItemId(soldtonumber));
    // }

    const handleEdit = (event, id, activityType, 
        customerId, customerName, billingNumber, 
        billingDate, productCode, productName,
        quantity, totalPoints, createDate,
        expiryDate, remark) => {
            
        setGroupDetail({"id":id, "activityType":activityType, "customerId":customerId, "customerName":customerName, "billingNumber":billingNumber,
        "billingDate":billingDate, "productCode":productCode,"productName":productName,"quantity":quantity, "totalPoints":totalPoints,
        "createDate":createDate, "expiryDate":expiryDate, "remark":remark});
        console.log("event++++",id)
        setPopupopen(true);
    }

    console.log("myLoyalty", rows);


   
    const deleteHandler = (event) => {
        setOpen(true)
        setLoyaltyDelete(productId)
    }

    
    useEffect(() => {
        if (deleteRetailerLoyalty && !deleteRetailerLoyalty.loading &&
            (deleteRetailerLoyalty.deleteretailerloyalty)) {
                dispatch(eventActions.getRetailerLoyaltyList(retailerCode));
                dispatch(eventActions.getRetailerLoyaltySearch("",retailerCode));
                toast.success('retailer loyalty deleted', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            dispatch(eventActions.activeProduct());

        }
    }, [deleteRetailerLoyalty]);



    useEffect(() => {
        return () => {
            dispatch(eventActions.deleteRetailerLoyaltyList())
            dispatch(eventActions.getRetailerLoyaltyList());
            dispatch(eventActions.activeProduct());
            dispatch(eventActions.getRetailerLoyaltySearch());
        }
    }, [])


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
      
        dispatch(eventActions.getRetailerLoyaltyList(retailerCode, startIndex, endIndex));
    };


    return (
        <>
            <div className="row">
                <div className="col-5"></div>
                <div className="col-7">
                    <div className="button_popup mb-2">
                        <div className="search new_search" style={{ marginRight: '10px' }}>
                            <Paper component="form" className={classes.root}>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Search By activity type and dealer Id "
                                    inputProps={{ 'aria-label': '' }}
                                    onChange ={(event) => setSearch(event.target.value)}
                                />
                                <IconButton className={classes.iconButton} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                        </div>
                        <button disabled={assigncheck === 0 || assigncheck === undefined} onClick={(event) => deleteHandler(event)} className="add-button btn-color">Delete</button>
                    </div>
                   
                </div>
            </div>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
                    <TableContainer id="LoyaltyPointTable" className={classes.container} >
                        <Table
                            className={classes.table}
                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                            aria-label="enhanced table"
                            stickyHeader aria-label="sticky table"
                        >
                            <EnhancedTableHead
                                classes={classes}
                                numSelected={selected.length}
                                // order={order}
                                // orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                            />

                            <TableBody>
                                {LoyaltyPointList && LoyaltyPointList.loading ? <Loader /> :

                                    stableSort(rows, getComparator())
                                        .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                                        : stableSort(rows, getComparator())
                                            .slice()
                                            .map((row, index) => {
                                                const isItemSelected = isSelected(row.id);
                                                const labelId = `enhanced-table-checkbox-${index}`;
                                                const id = row.id;


                                                return (
                                                    <TableRow
                                                        hover
                                                        onClick={(event) => handleClick(event, row.id)}
                                                        role="checkbox"
                                                        aria-checked={isItemSelected}
                                                        tabIndex={-1}
                                                        key={row.id}
                                                        selected={isItemSelected}
                                                    >
                                                        <TableCell align="right">{index + 1}</TableCell>

                                                        <TableCell  align="right" padding="checkbox">
                                                        <Checkbox
                                                            checked={isItemSelected}
                                                            inputProps={{ 'aria-labelledby': id }}
                                                            onChange={loyaltyChange}
                                                            name={row.id}

                                                        />
                                                    </TableCell>

                                                        
                                                        {/* <TableCell align="right" id={id} style={{ paddingTop: "5px" }}>
                                                            <span class="product_group-edit" onClick={(event) => handleEdit(event,
                                                                row.id, 
                                                                row.activityType, 
                                                                row.customerId, 
                                                                row.customerName, row.billingNumber, row.billingDate, row.productCode,
                                                                row.productName, row.quantity, row.totalPoints, row.createDate,row.expiryDate,
                                                                row.remark)}>Edit</span>
                                                        </TableCell> */}

                                                        <TableCell align="right">{row.activityType}</TableCell>
                                                        <TableCell align="right">{row.customerId === "default" ? "" :row.customerId}</TableCell>
                                                        <TableCell component="th" align="right">
                                                            <span className="detail_pg"> {row.customerName === "default" ? "" : row.customerName} </span>
                                                        </TableCell>
                                                        <TableCell align="right">{row.billingNumber}</TableCell>
                                                        <TableCell align="right">{row.billingDate}</TableCell>
                                                        <TableCell>{row.productCode === null ? "" : parseInt(row.productCode)}</TableCell>
                                                        <TableCell>{row.productName}</TableCell>
                                                        <TableCell className="text-right">
                                                        {row.quantity === null ? "" : parseFloat(row.quantity).toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                            {/* {row.quantity} */}
                                                            </TableCell>
                                                        <TableCell className="text-right">
                                                        {row.totalPoints === null ? "" : parseFloat(row.totalPoints).toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                            {/* {row.totalPoints} */}
                                                            </TableCell>
                                                        <TableCell>
                                                       
                                                        {row.createDate === null ? "" : moment(row.createDate).format('DD-MM-yyyy')}</TableCell>
                                                        <TableCell>
                                                       { row.expiryDate === null ? "" : moment(row.expiryDate).format('DD-MM-yyyy')}</TableCell>
                                                        <TableCell>{row.remark}</TableCell>


                                                    </TableRow>

                                                );
                                            })

                                }

                            </TableBody>
                        </Table>
                    </TableContainer>


                </Paper>
                <div className="pagination_sec">
                    <Pagination count={Math.ceil(LoyaltyPointList.retailerloyaltylist && LoyaltyPointList.retailerloyaltylist.totalCount / 29)} page={page} onChange={handleChangePage} variant="outlined" color="secondary" />
                </div>
                <div>
                    {!!loyaltyDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteRetailerLoyaltyList(loyaltyDelete)} open={open} setOpen={setOpen} />}
                </div>
                <div>
                    <EditRetailerLoyaltypoint groupDetail={groupDetail} popupopen={popupopen} setOpen={setPopupopen} />
                </div>
            </div>
        </>
    );
}
