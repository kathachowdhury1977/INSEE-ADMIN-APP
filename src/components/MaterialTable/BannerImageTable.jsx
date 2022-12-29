import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { eventActions } from "../../_actions";
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
import Paper from '@material-ui/core/Paper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./MaterialTable.scss";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import EditAppTypePopup from "../ModalPopup/EditAppTypePopup";
import moment from 'moment'
import ConfirmationBox from '../MaterialTable/ConfirmationBox';
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
    { id: 'action', numeric: true, disablePadding: false, label: 'Action' },
    { id: 'name', numeric: false, disablePadding: true, label: 'App Type' },
    { id: 'Channel', numeric: true, disablePadding: false, label: 'Channel Type' },
    { id: 'startdate', numeric: true, disablePadding: false, label: 'Start Date' },
    { id: 'enddate', numeric: true, disablePadding: false, label: 'End Date' },
    { id: 'Attachment', numeric: true, disablePadding: false, label: 'Attachment' },
    { id: 'Country', numeric: true, disablePadding: false, label: 'Country' },
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
                    Actions
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

export default function BannerImageTable(props) {
    const classes = useStyles();

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5000);
    const [groupDetail, setGroupDetail] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [bannerImageId, setbannerImageId] = React.useState('');

    const dispatch = useDispatch();
    const [productId, setProductId] = React.useState("");
    const bannerImageList = useSelector((state) => state.getbannerimagelist);
    const deleteBanner = useSelector((state) => state.deletebannerlist);
    const editbannerlist = useSelector((state) => state.editbannerlist);
    
    console.log("bannerImageList",editbannerlist);
   
    let history = useHistory();


    const handleCheck = (event) => {
        setProductId(event.target.name);
        dispatch(eventActions.activeProduct(
            event.target.name
        ));
    }

    let rows = [];

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getBannerImageList(userName.countryCode));
    }, [editbannerlist]);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.productGroupName);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, productGroupName) => {
        const selectedIndex = selected.indexOf(productGroupName);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, productGroupName);
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

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (productGroupName) => selected.indexOf(productGroupName) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    rows = bannerImageList.getbannerimagelist ? bannerImageList.getbannerimagelist : [];

    const removeBanner = (event, id) => {
        setOpen(true)
        setbannerImageId(id)

    }
    useEffect(() => {
        if (!!deleteBanner.deletebannerlist && deleteBanner.deletebannerlist !== undefined) {
            dispatch(eventActions.getBannerImageList(userName.countryCode));
            toast.success('Banner is deleted successfully', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }, [deleteBanner])

    useEffect(() => {
        return () => {
            dispatch(eventActions.deleteBannerList())
        }
    }, [])

    const handlepen = (id) => {
        setGroupDetail({ 'id': id });
        setPopupopen(true);
    }

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
                                rowCount={rows.length}
                            />
                            <TableBody>
                                {bannerImageList && bannerImageList.loading ? <Loader /> :
                                    stableSort(rows, getComparator(order, orderBy))
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).length == 0 ? (<div className="no_record">No Record Found</div>)
                                        : stableSort(rows, getComparator(order, orderBy))
                                            .slice(0).reverse().map((row, index) => {
                                                const isItemSelected = isSelected(row.productGroupName);
                                                const labelId = `enhanced-table-checkbox-${index}`;

                                                return (
                                                    <TableRow
                                                        hover
                                                        onClick={(event) => handleClick(event, row.productGroupName)}
                                                        role="checkbox"
                                                        aria-checked={isItemSelected}
                                                        tabIndex={-1}
                                                        key={row.productGroupName}
                                                        selected={isItemSelected}
                                                    >
                                                        <TableCell padding="checkbox">
                                                            <span className="product_group-edit" onClick={() => handlepen(row.id)}>Edit</span>
                                                            <span className="product_group-edit" onClick={(event) => removeBanner(event, row.id)}>Delete</span>
                                                        </TableCell>

                                                        <TableCell component="th" id={labelId} scope="row" padding="none">
                                                            <span className="detail_pg" className="link_url" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.appType)}}>
                                                               
                                                            </span>
                                                        </TableCell>
                                                        <TableCell align="right"  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.channel)}}></TableCell>
                                                        <TableCell align="right">{moment(row.startDate).format('DD-MM-YYYY') === 'Invalid date' ? '' : moment(row.startDate).format('DD-MM-YYYY')}</TableCell>
                                                        <TableCell align="right">{moment(row.endDate).format('DD-MM-YYYY') === 'Invalid date' ? '' : moment(row.endDate).format('DD-MM-YYYY')}</TableCell>
                                                        {row.attachments ? row.attachments.map((attach) => {
                                                            return (
                                                                <TableCell align="right"><a href={attach.fileUrl} target="_blank" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(attach.fileName)}}></a></TableCell>

                                                            );
                                                        })
                                                            : null
                                                        }
                                                        <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.country)}}></TableCell>


                                                    </TableRow>

                                                );
                                            })}

                            </TableBody>
                        </Table>
                    </TableContainer>

                </Paper>
            </div>

            <div>
                <EditAppTypePopup groupDetail={groupDetail} popupopen={popupopen} setOpen={setPopupopen} />
                {bannerImageId && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteBannerList(bannerImageId)} open={open} setOpen={setOpen} />}

            </div>
        </>
    );
}
