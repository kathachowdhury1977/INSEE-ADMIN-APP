import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { eventActions } from "../../../_actions";
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
import Loader from "../../../components/Loader/Loader";
import Pagination from '@material-ui/lab/Pagination';
import moment from 'moment';
import EditForcaseInseePopup from "../../../components/ModalPopup/EditForcaseInseePopup";




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
    if (array !== undefined && array.length !== undefined) {
        const stabilizedThis = array && array.map((el, index) => [el, index]);

        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }
}

const headCells = [
    { id: 'Action', numeric: true, disablePadding: false, label: 'Action' },
    { id: 'soldto', numeric: false, disablePadding: true, label: 'Sold To Number' },
    { id: 'division', numeric: true, disablePadding: false, label: 'Division' },
    { id: 'productBrand', numeric: true, disablePadding: false, label: 'Product Brand' },
    { id: 'january', numeric: true, disablePadding: false, label: 'January' },
    { id: 'february', numeric: true, disablePadding: false, label: 'February' },
    { id: 'march', numeric: true, disablePadding: false, label: 'March' },
    { id: 'april', numeric: true, disablePadding: false, label: 'April' },
    { id: 'may', numeric: true, disablePadding: false, label: 'May' },
    { id: 'june', numeric: true, disablePadding: false, label: 'June' },
    { id: 'july', numeric: true, disablePadding: false, label: 'July' },
    { id: 'august', numeric: true, disablePadding: false, label: 'August' },
    { id: 'september', numeric: true, disablePadding: false, label: 'September' },
    { id: 'october', numeric: true, disablePadding: false, label: 'October' },
    { id: 'november', numeric: true, disablePadding: false, label: 'November' },
    { id: 'december', numeric: true, disablePadding: false, label: 'December' },
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

export default function DistributorForcastTable(props) {
    const classes = useStyles();
    const [groupDetail, setGroupDetail] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const dispatch = useDispatch();
    const TotalVolumeList = useSelector((state) => state.gettotalinseevolumelist);



    const selectedItem = selected.length;

    // let startIndex = customerTierlist.customertierlist && customerTierlist.customertierlist.startIndex;
    // let endIndex = customerTierlist.customertierlist && customerTierlist.customertierlist.endIndex;

    let rows = [];



    useEffect(() => {
        dispatch(eventActions.getTotalInseeVolumeList("forcast"));
    }, []);



    const handleRequestSort = (event, property) => {
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.countryCode);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, countryCode) => {
        const selectedIndex = selected.indexOf(countryCode);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, countryCode);
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
        // if (value === 1) {
        //     startIndex = 1;
        //     endIndex = 49
        // }
        // else {
        //     startIndex = ((value - 1) * 49) + 1;
        //     endIndex = value * 49;
        // }
        // setPage(value);
        // setPage(newPage);
        // console.log("endIndex, startIndex", endIndex, startIndex)
        // dispatch(eventActions.getCustomerTierList(endIndex, '', startIndex));


    };

    const handleChangeRowsPerPage = (event) => {
        // setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (countryCode) => selected.indexOf(countryCode) !== -1;

    rows = TotalVolumeList.gettotalinseevolumelist ? TotalVolumeList.gettotalinseevolumelist : [];

    if (rows !== undefined && rows !== null && rows.length !== undefined) {

    } else {
        rows = []
    }

    const handleForcastInsee = (event,soldTo,division,productBrand,jan,feb,mar,apr,may,june,july,august,sep,oct,nov,dec,year,type,id) => {
        setGroupDetail({ 'soldTo': soldTo, 'division':division, 'productBrand':productBrand, 'jan':jan,'feb':feb,'mar':mar,'apr':apr,
        'may':may, 'june':june,'july':july,'august':august,'sep':sep,'oct':oct,'nov':nov,'dec':dec, 'year':year,'type':type,'id':id});
        setPopupopen(true);
    } 


    console.log("total list", rows);


    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
                <TableContainer className={classes.container} >
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        stickyHeader aria-label="sticky table"
                    >
                        {rows !== undefined && rows !== null && rows.length !== undefined ?

                            <EnhancedTableHead
                                classes={classes}
                                numSelected={selected.length}
                                // order={order}
                                // orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                            />
                            : <EnhancedTableHead
                                classes={classes}
                                // numSelected={selected.length}
                                // order={order}
                                // orderBy={orderBy}
                                // onSelectAllClick={handleSelectAllClick}
                                // onRequestSort={handleRequestSort}
                                rowCount={0}
                            />

                        }
                        <TableBody>
                            {TotalVolumeList && TotalVolumeList.loading ? <Loader /> :
                                stableSort(rows, getComparator())
                                    .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                                    : stableSort(rows, getComparator())
                                        .slice()


                                        .map((row, index) => {
                                            const isItemSelected = isSelected(row.countryCode);
                                            const labelId = `enhanced-table-checkbox-${index}`;


                                            return (
                                                <TableRow
                                                    hover
                                                    onClick={(event) => handleClick(event, row.countryCode)}
                                                    role="checkbox"
                                                    aria-checked={isItemSelected}
                                                    tabIndex={-1}
                                                    key={row.countryCode}
                                                    selected={isItemSelected}
                                                >
                                                    <TableCell align="right">
                                                        <span className="product_group-edit"
                                                            onClick={(event) => handleForcastInsee(event,
                                                                row.soldTo,
                                                                row.division,row.productBrand, row.jan, row.feb, row.mar, row.apr, row.may, row.june,
                                                                row.july, row.august, row.sep, row.oct, row.nov, row.dec,row.year,row.type,row.id

                                                            )}>Edit</span>
                                                    </TableCell>

                                                    <TableCell component="th" id={labelId} scope="row" padding="none">
                                                        {row.soldTo}
                                                    </TableCell>
                                                    <TableCell align="right">{row.division}</TableCell>
                                                    <TableCell align="right">{row.productBrand}</TableCell>
                                                    {/* {moment(row.createdDateInStringFormat).format('DD-MM-yyyy')} */}
                                                    <TableCell align="right">{row.jan}</TableCell>
                                                    <TableCell align="right">{row.feb}</TableCell>
                                                    <TableCell align="right">{row.mar}</TableCell>
                                                    <TableCell align="right">{row.apr}</TableCell>
                                                    <TableCell align="right">{row.may}</TableCell>
                                                    <TableCell align="right">{row.june}</TableCell>
                                                    <TableCell align="right">{row.july}</TableCell>
                                                    <TableCell align="right">{row.august}</TableCell>
                                                    <TableCell align="right">{row.sep}</TableCell>
                                                    <TableCell align="right">{row.oct}</TableCell>
                                                    <TableCell align="right">{row.nov}</TableCell>
                                                    <TableCell align="right">{row.dec}</TableCell>

                                                </TableRow>

                                            );
                                        })}

                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper>
            <div>
                <EditForcaseInseePopup groupDetail={groupDetail} popupopen={popupopen} setOpen={setPopupopen} />
            </div>
            {/* <div className="pagination_sec">
                <Pagination count={parseInt(customerTierlist.customertierlist && customerTierlist.customertierlist.totalCount / 49)} page={page} onChange={handleChangePage} />
            </div> */}

        </div>
    );
}
