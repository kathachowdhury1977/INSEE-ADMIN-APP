import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { eventActions } from "../../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
import Checkbox from '@material-ui/core/Checkbox';
// import "./MaterialTable.scss";
import { Link } from 'react-router-dom';
import MultiTableSearch from "./MultiTableSearch";
import Pagination from '@material-ui/lab/Pagination';
import Loader from "../../../components/Loader/Loader";
import moment from 'moment';
import Header from "../../../components/Header/Header";
import UploadAdjustLoyality from "../../../components/MasterPopup/UploadAdjustLoyality";
import AddAdjustLoyality from '../../../components/MasterPopup/AddAdjustLoyality';
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import EditAdujectLoyalityAdmin from "../../../components/MasterPopup/EditAdujectLoyalityAdmin";
import { toast } from 'react-toastify'



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
    stabilizedThis && stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis && stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { id: 'Action', numeric: true, disablePadding: true, label: 'Action' },
    { id: 'Type Of Customer', numeric: true, disablePadding: true, label: 'Type Of Customer' },
    { id: 'Customer ID', numeric: true, disablePadding: false, label: 'Customer ID' },
    { id: 'Customer Name', numeric: true, disablePadding: false, label: 'Customer Name' },
    { id: 'Activity Type', numeric: true, disablePadding: false, label: 'Activity Type' },
    { id: 'Value', numeric: true, disablePadding: false, label: 'Value' },
    { id: 'Creation Date', numeric: true, disablePadding: false, label: 'Creation Date' },
    { id: 'Expiry Date', numeric: true, disablePadding: false, label: 'Expiry Date' },
    { id: 'Remarks', numeric: true, disablePadding: false, label: 'Remarks' },

];

function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <>

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


        </>
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
        maxHeight: "calc(100vh - 210px)",
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

export default function AdjustLoyalityAdmin(props) {
    const classes = useStyles();

    const [selected, setSelected] = React.useState([]);
    const [dense, setDense] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const dispatch = useDispatch();
    let history = useHistory();

    const [adjuctAdmin, setAdjuctAdmin] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');
    const [searchcustomerid, setSearchCustomerId] = React.useState("");
    const [searchcustomerName, setSearchCustomerName] = React.useState("");
    const [selectcustomerTpye, setCustomerType] = React.useState("");
    const [activityType, setActivityType] = React.useState("");
    const [searchcrediteddate, setSearchCreditedDate] = React.useState("");
    const [tocreditdate, setTocreditDate] = React.useState("");
    const [expirationdate, setSearchExpirationDate] = React.useState("");
    const [toexpirationDate, setToexpirationDate] = React.useState("");
    const AdjectLoyalityAdmin = useSelector((state) => state.getadjustloyalityadmin);
    const DeleteAjustLoyalty = useSelector((state) => state.adjustloyaltydeleteadmin);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);


    const adjustLoyaltyFilter = useSelector((state) => state.adjustloyaltyadminfilter);
    const downloadFile = useSelector((state) => state.downloadadjustloyaltyadmin.downloadadjustloyaltyadmin);





    let startIndex = AdjectLoyalityAdmin.getadjustloyalityadmin && AdjectLoyalityAdmin.getadjustloyalityadmin.startIndex;
    let endIndex = AdjectLoyalityAdmin.getadjustloyalityadmin && AdjectLoyalityAdmin.getadjustloyalityadmin.endIndex;

    useEffect(() => {
        dispatch(eventActions.downloadAdjustLoyaltyAdmin());
    }, []);




    useEffect(() => {
        dispatch(eventActions.getAdjuctLoyalityAdmin(1, 30));
    }, []);

    useEffect(() => {
        let filterData = [{ activityType: activityType }, { creationDateFrom: searchcrediteddate }, { creationDateTo: tocreditdate }, { customerId: searchcustomerid },
        { customerName: searchcustomerName }, { customerType: selectcustomerTpye }, { expiryDateFrom: expirationdate }, { expiryDateTo: toexpirationDate }]
        dispatch(eventActions.getAdjustLoyaltyAdminFilter(filterData));
    }, [activityType, searchcrediteddate, tocreditdate, searchcustomerid, searchcustomerName, selectcustomerTpye, expirationdate, toexpirationDate])







    let rows = [];



    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.productGroupId);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, productGroupId) => {
        const selectedIndex = selected.indexOf(productGroupId);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, productGroupId);
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
        dispatch(eventActions.getAdjuctLoyalityAdmin(startIndex, endIndex));


    };

    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setPage(0);
    // };



    const isSelected = (productGroupId) => selected.indexOf(productGroupId) !== -1;

    rows = adjustLoyaltyFilter.adjustloyaltyadminfilter ? adjustLoyaltyFilter.adjustloyaltyadminfilter.results : AdjectLoyalityAdmin.getadjustloyalityadmin ? AdjectLoyalityAdmin.getadjustloyalityadmin.results : [];
    console.log("rows____", rows);



    // let dataArr = rows.map(item => {
    //     return [item.productGroupId, item]
    // });

    // let maparr = new Map(dataArr);
    // let result = [...maparr.values()];
    // rows = result.reverse();

    // console.log("row----------", rows);




    const RefreshHandler = () => {
        dispatch(eventActions.getAdjuctLoyalityAdmin(1, 30));

        setSearchCustomerId("");
        setSearchCustomerName("");
        setCustomerType("");
        setActivityType("");
        setSearchCreditedDate("");
        setTocreditDate("");
        setSearchExpirationDate("");
        setToexpirationDate("");


    }

    const handleDelete = (event, id) => {
        setOpen(true);
        setCategoryDelete(id)
    }

    useEffect(() => {
        if (DeleteAjustLoyalty && !DeleteAjustLoyalty.loading &&
            (DeleteAjustLoyalty.adjustloyaltydeleteadmin)) {
            dispatch(eventActions.getAdjuctLoyalityAdmin(1, 30));
            toast.success('Adjust Loyalty admin has been deleted successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }, [DeleteAjustLoyalty]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.adjustLoyltydeleteAdmin())
        }
    }, [])










    return (
        <>
            <div className="content-wrapper">
                <Header title="Adjust Loyalty From Admin" />
                <div className={"row ipad_css " + MyNewClass}>
                    <div className=" table-responsive table_design retaiter-table col-12">
                        <div className='mainScroll'>
                        <div className="col-12 text-right mt-2 mb-2 pr-0">
                            <span className="refesh-icon" style={{ marginRight: "10px" }} onClick={RefreshHandler}> <i class="fa fa-refresh" aria-hidden="true"></i> Refresh List</span>
                            <div className="button_popup add-button" style={{ display: "inline-flex" }}>
                                <AddAdjustLoyality title="Add Adjust Loyalty" />
                                <UploadAdjustLoyality title="Upload" />
                                <a className="download-button" href={downloadFile && downloadFile} title="Download Template"><i class="fa fa-download button-upload" aria-hidden="true"></i> Download</a>
                            </div>
                        </div>

                        <div className={classes.root}>
                            <Paper className={classes.paper}>
                                {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
                                <div className='myFirstT'>
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

                                                onSelectAllClick={handleSelectAllClick}
                                                // onRequestSort={handleRequestSort}
                                                rowCount={rows && rows.length}
                                            />

                                            <TableBody>

                                                <TableRow className='myTableHead'>
                                                    <TableCell></TableCell>

                                                    <TableCell>
                                                        <div className="center-align">
                                                            <select style={{ height: "25px" }} onChange={(event) => setCustomerType(event.target.value)}>
                                                                {selectcustomerTpye && selectcustomerTpye.length > 0 ?
                                                                    <>
                                                                        <option value="">Customer Type</option>
                                                                        <option value="Dealer">Dealer</option>
                                                                        <option value="Sub Dealer">Sub Dealer</option></> :
                                                                    <>
                                                                        <option value="" selected>Customer Type</option>
                                                                        <option value="Dealer">Dealer</option>
                                                                        <option value="Sub Dealer">Sub Dealer</option>
                                                                    </>
                                                                }

                                                            </select>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="center-align">
                                                            <MultiTableSearch type="search" defaultValue={searchcustomerid} placeholder="Search id..." handleSearchValue={setSearchCustomerId} />
                                                        </div>
                                                    </TableCell>

                                                    <TableCell>
                                                        <div className="center-align">
                                                            <MultiTableSearch type="search" defaultValue={searchcustomerName} placeholder="Search Name..." handleSearchValue={setSearchCustomerName} />
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="center-align">
                                                            <select style={{ height: "25px" }} onChange={(event) => setActivityType(event.target.value)}>
                                                                {activityType && activityType.length > 0 ?
                                                                    <>
                                                                        <option value="">Activity Type</option>
                                                                        <option value="Bonus : คะแนนโบนัส">Bonus : คะแนนโบนัส</option>
                                                                        <option value="Point Deduction : คะแนนที่ถูกหัก">Point Deduction : คะแนนที่ถูกหัก </option>
                                                                    </>
                                                                    :
                                                                    <>
                                                                        <option value="" selected>Activity Type</option>
                                                                        <option value="Bonus : คะแนนโบนัส">Bonus : คะแนนโบนัส</option>
                                                                        <option value="Point Deduction : คะแนนที่ถูกหัก">Point Deduction : คะแนนที่ถูกหัก </option>
                                                                    </>
                                                                }

                                                            </select>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell>
                                                        <div className="main-date">
                                                            <div className="form-date">
                                                                <label>From</label>
                                                                <MultiTableSearch type="date" defaultValue={searchcrediteddate} placeholder="last credited date..." handleSearchValue={setSearchCreditedDate} />
                                                            </div>

                                                            <div className="to-date">
                                                                <label>To</label>
                                                                <MultiTableSearch type="date" defaultValue={tocreditdate} placeholder="Search billing date..." handleSearchValue={setTocreditDate} />
                                                            </div>

                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="main-date">
                                                            <div className="form-date">
                                                                <label>From</label>
                                                                <MultiTableSearch type="date" defaultValue={expirationdate} placeholder="expiration date..." handleSearchValue={setSearchExpirationDate} />
                                                            </div>

                                                            <div className="to-date">
                                                                <label>To</label>
                                                                <MultiTableSearch type="date" defaultValue={toexpirationDate} placeholder="Search billing date..." handleSearchValue={setToexpirationDate} />
                                                            </div>

                                                        </div>
                                                    </TableCell>

                                                    <TableCell></TableCell>















                                                </TableRow>


                                                {AdjectLoyalityAdmin && AdjectLoyalityAdmin.loading ? <Loader /> :
                                                    stableSort(rows && rows, getComparator()) === undefined ? (<div className="no_record">No Record Found</div>)
                                                        : (rows && rows)
                                                            .slice()
                                                            .map((row, index) => {
                                                                const isItemSelected = isSelected(row.productGroupId);
                                                                const labelId = `enhanced-table-checkbox-${index}`;
                                                                console.log("my dates", row);
                                                                return (
                                                                    <TableRow
                                                                        hover
                                                                        onClick={(event) => handleClick(event, row.productGroupId)}
                                                                        role="checkbox"
                                                                        aria-checked={isItemSelected}
                                                                        tabIndex={-1}
                                                                        key={row.productGroupId}
                                                                        selected={isItemSelected}
                                                                    >

                                                                        <TableCell>
                                                                            <div className="action">
                                                                                <span className="category_icon">
                                                                                    <i className="fa fa-trash" onClick={(event) => handleDelete(event, row.id)}></i>
                                                                                </span>
                                                                              
                                                                            </div>
                                                                        </TableCell>

                                                                        <TableCell align="center" >{row.customerType}</TableCell>
                                                                        <TableCell align="center" >{row.customerId}</TableCell>
                                                                        <TableCell align="left" >{row.customerName}</TableCell>
                                                                        <TableCell align="center" >{row.activityType ? row.activityType.split(':')[0] : ''}</TableCell>

                                                                        <TableCell align="left" >{row.points === null ? "" : parseFloat(row.points).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
                                                                        <TableCell align="center" >{row.crationDateObj === null ? "" : moment(row.crationDateObj).format('DD-MM-YYYY')}</TableCell>

                                                                        <TableCell align="center" >{row.expireDate === null ? "" : moment(row.expireDate).format('DD-MM-YYYY')}</TableCell>
                                                                        <TableCell>{row.remarks}</TableCell>
                                                                    </TableRow>
                                                                );
                                                            })}

                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>

                            </Paper>
                            <div className="pagination_sec mt-2">
                                <Pagination count={Math.ceil(adjustLoyaltyFilter.adjustloyaltyadminfilter ? adjustLoyaltyFilter.adjustloyaltyadminfilter.results : AdjectLoyalityAdmin.getadjustloyalityadmin && AdjectLoyalityAdmin.getadjustloyalityadmin.totalCount / 29)} page={page} onChange={handleChangePage} variant="outlined" color="secondary" />
                            </div>
                        </div>

                        {/* <EditAdujectLoyalityAdmin adjuctAdmin={adjuctAdmin} popupopen={popupopen} setOpen={setPopupopen} /> */}
                        <div>
                            {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.adjustLoyltydeleteAdmin(categoryDelete)} open={open} setOpen={setOpen} />}
                        </div>

                        <div className="button_popup float-left mt-2">
                            <Link className="add-button bg-dark p-2" to="/Master">Back</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </>
    );
}
