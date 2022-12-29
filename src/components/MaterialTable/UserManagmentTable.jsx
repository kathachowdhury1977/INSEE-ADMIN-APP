import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import "./MaterialTable.scss";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import ConfirmationBox from "../MaterialTable/ConfirmationBox";
import EditUserManagment from "../ModalPopup/EditUserManagment";
import { ToastContainer, toast } from 'react-toastify';
import DOMPurify from "dompurify";




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
    { id: 'name', numeric: true, disablePadding: true, label: 'Name' },
    { id: 'UserId', numeric: true, disablePadding: false, label: 'UserId' },
    { id: 'Password', numeric: true, disablePadding: false, label: 'Password' },
    { id: 'Email', numeric: true, disablePadding: false, label: 'Email' },
    { id: 'Role', numeric: true, disablePadding: false, label: 'Role' },
    { id: 'Segment', numeric: true, disablePadding: false, label: 'Segment' },
    { id: 'Manager', numeric: true, disablePadding: false, label: 'Manager ID' },
    { id: 'Division', numeric: true, disablePadding: false, label: 'Division' },
    { id: 'Region', numeric: true, disablePadding: false, label: 'Region' },
    { id: 'Province', numeric: true, disablePadding: false, label: 'Province' },
    { id: 'District', numeric: true, disablePadding: false, label: 'District' },
    { id: 'Sub-District', numeric: true, disablePadding: false, label: 'Sub-District' },
    { id: 'Country', numeric: true, disablePadding: false, label: 'Country' },
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
                <TableCell padding="checkbox" className="text-center">
                    {/* <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />  */}

                    <strong >Action</strong>
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
        maxHeight: "calc(90vh - 300px)",
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

export default function UserManagmentTable(props) {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    // const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    // const [rowsPerPage, setRowsPerPage] = React.useState(5000);
    const dispatch = useDispatch();
    const [userId, setUserId] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');
    const [popupopen, setPopupopen] = React.useState(false);
    const [userManagment, setUserManagement] = React.useState("");
    const userlist = useSelector((state) => state.getalluser);
    const roleselectvalue = useSelector((state) => state.roleselect.roleselect);
    const searchusermanagment = useSelector((state) => state.internalmanagmentsearch.internalmanagmentsearch);
    const deleteandUpdateStatus = useSelector((state) => state.deleteusermanagment);
    console.log("searchusermanagment", searchusermanagment);
  


    useEffect(() => {
        dispatch(eventActions.getAllUser());
    }, []);

    const handleCheck = (event) => {
        setUserId(event.target.name);
        dispatch(eventActions.SelectCustomerUserId(event.target.name));
    }

    let rows = [];

  

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.userId);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, userId) => {
        const selectedIndex = selected.indexOf(userId);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, userId);
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

    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    // };

    // const handleChangeRowsPerPage = (event) => {
    //      setRowsPerPage(parseInt(event.target.value, 10));
    //     setPage(0);
    // };

    // const handleChangeDense = (event) => {
    //     setDense(event.target.checked);
    // };

     const isSelected = (userId) => selected.indexOf(userId) !== -1;
    //  searchusermanagment && searchusermanagment ? searchusermanagment && searchusermanagment :
    rows =  searchusermanagment != undefined && searchusermanagment.length > 0 && searchusermanagment && searchusermanagment ? searchusermanagment && searchusermanagment : userlist.getalluser ? userlist.getalluser : [];
    // let dataArr = rows.map(item => {
    //     return [item.firstName, item]
    // });

    // let maparr = new Map(dataArr);
    // let result = [...maparr.values()];
    // rows = reverse();

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    console.log("usermanagment rows", rows);

    const handleDelete = (event, userId) => {
        setOpen(true);
        setCategoryDelete({'userId':userId, 'status': 3, 'updatedby':userName.userId})
    }

    useEffect(() => {
        if (deleteandUpdateStatus && !deleteandUpdateStatus.loading &&
            (deleteandUpdateStatus.deleteusermanagment)) {
                dispatch(eventActions.getAllUser())
            toast.success('Customer has been deleted successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }, [deleteandUpdateStatus]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.deleteUsermanagmentCustomer());
            
        }
    }, [])


    const handleEdit = (event, id, firstName, userId, password, employeeEmail, roles, segment, managerId, division, region, province, district, subDistrict, country, employeeStatus) => {
        setPopupopen(true);
        setUserManagement({'id':id, 'firstName': firstName, 'userId': userId, 'password': password, 'employeeEmail': employeeEmail, 'roles': roles, 'segment': segment, 'managerId': managerId, 'division': division, 'region': region, 'province': province, 'district': district, 'subDistrict': subDistrict, 'country': country, 'employeeStatus':employeeStatus });
    }


    return (
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
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {userlist && userlist.loading ? <Loader /> :
                                 rows && rows
                                 .slice().length === 0 ? (<div className="no_record">No Record Found</div>)
                                 : rows && rows
                                   .slice()
                                   .reverse().map((row, index) => {
                                            const isItemSelected = isSelected(row.userId);
                                            const labelId = `enhanced-table-checkbox-${index}`;

                                            return (
                                                <TableRow
                                                    hover
                                                    onClick={(event) => handleClick(event, row.userId)}
                                                    role="checkbox"
                                                    aria-checked={isItemSelected}
                                                    tabIndex={-1}
                                                    key={row.userId}
                                                    selected={isItemSelected}
                                                >
                                                    <TableCell padding="checkbox">
                                                        <Checkbox
                                                            checked={isItemSelected}
                                                            inputProps={{ 'aria-labelledby': labelId }}
                                                            onChange={handleCheck}
                                                            name={row.userId}


                                                        />
                                                        <span className="product_group-edit" onClick={(event) => handleEdit(event, row.id,
                                                            row.firstName, row.userId, row.password, row.employeeEmail, row.roles && row.roles[0].name,
                                                            row.segment, row.managerId, row.division, row.region, row.province, row.district, row.subDistrict,
                                                            row.country, row.employeeStatus)}>Edit</span>
                                                        <span className="product_group-edit" onClick={(event) => handleDelete(event, row.userId)}>Delete</span>
                                                    </TableCell>
                                                    <TableCell component="th" id={labelId} scope="row" padding="none">
                                                        <Link className="user_list" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.firstName)}}>
                                                           
                                                        </Link>

                                                    </TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.userId)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.password)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.employeeEmail)}}></TableCell>
                                                    <TableCell align="right">{row && row.roles && row.roles[0].name}</TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.segment)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.managerId)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.division)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.region)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.province)}}></TableCell>
                                                    <TableCell align="right"  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.district)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.subDistrict)}}></TableCell>
                                                    <TableCell align="right">{row.country}</TableCell>
                                                    <TableCell align="right" className="text-uppercase">
                                                       {/* {row.status} */}
                                                        {row.status === 1 ?
                                                        <span>Active</span>: <span>InActive</span>}
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}

                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper>
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteUsermanagmentCustomer(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>
            <EditUserManagment userManagment={userManagment} popupopen={popupopen} setOpen={setPopupopen} />
        </div>
    );
}