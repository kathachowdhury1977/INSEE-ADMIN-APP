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
import EditRetailersubDealerPopup from "../../../components/MasterPopup/EditRetailersubDealerPopup";
import AddSoldRetailer from "../../../components/ModalPopup/AddSoldRetailer";
import { ToastContainer, toast } from 'react-toastify';
import DOMPurify from "dompurify";
import SoldtoRetailerSearch from "../../../components/SearchBox/SoldtoRetailerSearch";






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
    { id: 'sno.', numeric: true, disablePadding: false, label: 'No.' },
    { id: 'action', numeric: true, disablePadding: false, label: 'Action' },
    { id: 'soldtonumber', numeric: true, disablePadding: false, label: 'Sold To Number' },
    { id: 'name', numeric: true, disablePadding: false, label: 'Account Name (EN)' },
    { id: 'accountname', numeric: true, disablePadding: false, label: 'Account Name (TH)' },
    { id: 'markdelete', numeric: true, disablePadding: false, label: 'Relationship With Sold To' },


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
        maxHeight: "calc(90vh - 147px)",
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

export default function RetailerDetailTable(props) {
    const classes = useStyles();

    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const[retailerSearch, setRetailerSearch] = React.useState("");

    const dispatch = useDispatch();
    const location = useLocation();
    const { retailerCode } = location.state;
    const retaillist = useSelector((state) => state.retailerdetaillist);
    const soldtoProductList = useSelector((state) => state.soldtoproductgrouplist);
    const deleteRetailerSoldto = useSelector((state) => state.deleteretailersoldto);
    const searchaccountlist = useSelector((state) => state.soldtomanagmentsearch.soldtomanagmentsearch);
    console.log("soldtoProductList", soldtoProductList.soldtoproductgrouplist);

    const [open, setOpen] = React.useState(false);
    const [groupDetail, setGroupDetail] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [subDealerDelete, setSubDealerDelete] = React.useState('');

    let history = useHistory();



   
    

    const selectedItem = selected.length;
    useEffect(() => {
        dispatch(eventActions.AssignProduct(selectedItem));
    }, [selectedItem]);



    let rows = [];





    useEffect(() => {
        dispatch(eventActions.retailerDetailList(retailerCode,  retailerSearch ? retailerSearch: ''));
    }, [ retailerSearch]);

    const handleRequestSort = (event, property) => {

    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.soldtoNumber);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, soldtoNumber) => {
        const selectedIndex = selected.indexOf(soldtoNumber);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, soldtoNumber);
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






    const isSelected = (soldtoNumber) => selected.indexOf(soldtoNumber) !== -1;




    rows = retaillist.retailerdetaillist ? retaillist.retailerdetaillist : [];

    let dataArr = rows && rows.map(item => {
        return [item.soldtoNumber, item]
    });

    let maparr = new Map(dataArr);
    let result = [...maparr.values()];

    if (rows !== undefined && rows !== null && rows.length !== undefined) {

    } else {
        rows = []
    }

    console.log("rows", rows);


    const deleteContactpop = (event,  retailerCode, soldToNumber) => {
        setOpen(true)
        setSubDealerDelete({"retailerCode":retailerCode, "soldtoNumber":soldToNumber})
        setRetailerSearch("");
        
    }

    const handleEdit = (event,soldtoNumber, accountName, accountNameTH, markDelete) => {
        setGroupDetail({"soldtoNumber":soldtoNumber, "accountName":accountName, "accountNameTH":accountNameTH, "markDelete":markDelete});
        setPopupopen(true);
       
    }


    useEffect(() => {
        if (deleteRetailerSoldto && !deleteRetailerSoldto.loading &&
            (deleteRetailerSoldto.deleteretailersoldto)) {
                dispatch(eventActions.retailerDetailList(retailerCode));
                toast.success('sub dealer  sold to is deleted', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
            
        }
    }, [deleteRetailerSoldto]);


    
    useEffect(() => {
        return () => {
            dispatch(eventActions.deleteRetailerSoldTo())
        }
    }, [])



    return (

        <div className={classes.root}>
            <div className="row">
                <div className="col-5"></div>
            
            <div className="col-7 button_popup mb-2 pr-0">
                <SoldtoRetailerSearch handleSearchValue={setRetailerSearch} defaultValue={retailerSearch}/>
                {/* <AddSoldRetailer title="Add Sold To" setRetailerSearch={setRetailerSearch} /> */}
            </div>
            </div>
            <Paper className={classes.paper}>
                {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
                <TableContainer id="SoldToManagementTable" className={classes.container} >
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        stickyHeader aria-label="sticky table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}

                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />

                        <TableBody>
                            {retaillist && retaillist.loading ? <Loader /> : 
                                (rows)
                                .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                                : (rows)
                                  .slice()
                                        .reverse()
                                        .map((row, index) => {
                                            const isItemSelected = isSelected(row.soldtoNumber);
                                            

                                            return (
                                                <TableRow
                                                    hover
                                                    onClick={(event) => handleClick(event, row.soldtoNumber)}
                                                    role="checkbox"
                                                    aria-checked={isItemSelected}
                                                    tabIndex={-1}
                                                    key={row.soldtoNumber}
                                                    selected={isItemSelected}
                                                 >
                                                    <TableCell align="right">{index + 1}</TableCell>
                                                    <TableCell align="right">
                                                        <span class="product_group-edit" onClick={(event) => handleEdit(event,row.soldToNumber,row.accountNameEN,row.accountNameTH,row.markDelete)}>Edit</span>
                                                        <span class="product_group-edit" onClick={(event) => deleteContactpop(event, retailerCode, row.soldToNumber)}>Delete</span>
                                                    </TableCell>

                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.soldToNumber)}}></TableCell>
                                                    <TableCell component="th" align="right">
                                                        <span className="detail_pg"> {row.accountNameEN} </span>
                                                    </TableCell>
                                                    <TableCell align="right">{row.accountNameTH}</TableCell>
                                                    <TableCell align="right" style={{textTransform: "capitalize"}}>{row.markDelete === false ? 'active': 'Inactive'}</TableCell>

                                                </TableRow>

                                            );
                                        })

                            }

                        </TableBody>
                    </Table>
                </TableContainer>


            </Paper>
            <div>
                {!!subDealerDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteRetailerSoldTo(subDealerDelete)} open={open} setOpen={setOpen} />}
            </div>
            <div>
                <EditRetailersubDealerPopup setRetailerSearch={setRetailerSearch} groupDetail={groupDetail} popupopen={popupopen} setOpen={setPopupopen} />
            </div>
        </div>
    );
}
