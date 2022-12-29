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
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Pagination from '@material-ui/lab/Pagination';
import "./MaterialTable.scss";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import EditProductGroupPopup from "../ModalPopup/EditProductGroupPopup";
import ConfirmationBox from '../MaterialTable/ConfirmationBox';
import moment from 'moment';
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
    const stabilizedThis = array && array.map((el, index) => [el, index]);
    stabilizedThis && stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis && stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { id: 'ProductGroupId', numeric: false, disablePadding: true, label: 'Product Group Id' },
    { id: 'name', numeric: false, disablePadding: true, label: 'Product Group Name' },
    { id: 'startDate', numeric: true, disablePadding: false, label: 'Start Date' },
    { id: 'endDate', numeric: true, disablePadding: false, label: 'End Date' },
    { id: 'productstatus', numeric: true, disablePadding: false, label: 'Status' },
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
        maxHeight: "calc(90vh - 152px)",
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

export default function MaterialTable(props) {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('startDate', 'endDate');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    let history = useHistory();
    const [productId, setProductId] = React.useState([]);
    const productgroupmaster = useSelector((state) => state.productgroupmasterlist);
    const searchtablelist = useSelector((state) => state.productgroupsearch.productgroupsearch);
    const addProduct = useSelector((state) => state.addproductgroup);
    const updateproductgroup = useSelector((state) => state.modifiedproductgroup);
    const DeleteProduct = useSelector((state) => state.deleteproductgrouplist);
    const [productDelete, setPoductDelete] = React.useState('');
    const [sortedData, setSortedData] = React.useState([])


    let startIndex = productgroupmaster.productgroupmasterlist && productgroupmaster.productgroupmasterlist.startIndex;
    let endIndex = productgroupmaster.productgroupmasterlist && productgroupmaster.productgroupmasterlist.endIndex;


    const handleCheck = (event) => {
        const value = event.target.name
        !!value && setProductId(previousValue => [...previousValue, value]);
    }

    useEffect(() => {
        dispatch(eventActions.activeProduct(productId));
    }, [productId])

    let rows = [];

    useEffect(() => {
        dispatch(eventActions.productGroupmasterList(30, 1));
    }, [addProduct, updateproductgroup]);


    console.log("mysorted", sortedData);

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
        dispatch(eventActions.productGroupmasterList(endIndex, startIndex));


    };

    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setPage(0);
    // };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (productGroupId) => selected.indexOf(productGroupId) !== -1;
    rows = searchtablelist && searchtablelist ? searchtablelist && searchtablelist.results : productgroupmaster.productgroupmasterlist ? productgroupmaster.productgroupmasterlist.results : [];

    console.log("rows____", rows);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';


        rows = rows.sort(function (a, b) {
            if (isAsc == true) {
                return property === "endDate" ? moment(b.endDate, "DD-MM-YYYY").format('YYYYMMDD') - moment(a.endDate, "DD-MM-YYYY").format('YYYYMMDD') : moment(b.startDate, "DD-MM-YYYY").format('YYYYMMDD') - moment(a.startDate, "DD-MM-YYYY").format('YYYYMMDD');
            }
            if (isAsc == false) {
                return property === "endDate" ? moment(a.endDate, "DD-MM-YYYY").format('YYYYMMDD') - moment(b.endDate, "DD-MM-YYYY").format('YYYYMMDD') : moment(a.startDate, "DD-MM-YYYY").format('YYYYMMDD') - moment(b.startDate, "DD-MM-YYYY").format('YYYYMMDD');
            }

        });

        console.log("myextradate", property)
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
        setSortedData(rows)
    };


    // let dataArr = rows.map(item => {
    //     return [item.productGroupId, item]
    // });

    // let maparr = new Map(dataArr);
    // let result = [...maparr.values()];
    // rows = result.reverse();

    // console.log("row----------", rows);

    const productGroupDetail = (event, productGroupId, productGroupName) => {

        console.log("my name", productGroupName);

        history.push("/ProductGroupMasterDetailList", { productGroupName: productGroupName, productGroupId: productGroupId });
    }

    const [productGroupId, setProductGroupId] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);

    const handlepen = (event) => {
        setProductGroupId(event);
        setPopupopen(true);
    }

    const handleDelete = (event, productGroupId) => {
        setOpen(true);


        let data = {
            "endDate": "string",
            "productGroupId": productGroupId,
            "productGroupList": [
                "string"
            ],
            "productGroupName": "string",
            "productList": [
                "string"
            ],
            "startDate": "string",
            "status": "string"
        }
        setPoductDelete(data)
        // dispatch(eventActions.deleteProductGroupList(data));
    }

    useEffect(() => {
        if (!!DeleteProduct.deleteproductgrouplist && !!DeleteProduct.deleteproductgrouplist !== undefined) {
            dispatch(eventActions.productGroupmasterList(500000, 1));
        }
    }, [DeleteProduct])


    useEffect(() => {
        return () => {
            dispatch(eventActions.deleteProductGroupList())
        }
    }, [])


    useEffect(() => {
        return () => {
            dispatch(eventActions.productGroupmasterList(500000, 1));
        }
    }, [])

    console.log(productId, "productsID")

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
                                {productgroupmaster && productgroupmaster.loading ? <Loader /> :
                                    stableSort(rows, getComparator(order, orderBy))
                                        .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                                        : ((sortedData.length > 0 && sortedData) || rows)
                                            .slice()
                                            .reverse()
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
                                                        <TableCell padding="checkbox">
                                                            <Checkbox
                                                                checked={isItemSelected}
                                                                inputProps={{ 'aria-labelledby': labelId }}
                                                                onChange={handleCheck}
                                                                name={row.productGroupId}

                                                            />
                                                            
                                                            {/* <span className="product_group-edit"><EditProductGroupPopup title="Edit"/></span> */}
                                                            <span className="product_group-edit" onClick={() => handlepen(row.productGroupId)}>Edit</span>
                                                            <span className="product_group-edit" onClick={(event) => handleDelete(event, row.productGroupId)}>Delete</span>

                                                        </TableCell>
                                                        <TableCell align="left" >{row.productGroupId}</TableCell>

                                                        <TableCell component="th" id={labelId} scope="row" padding="none">
                                                            <span className="detail_pg" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.productGroupName) }} onClick={(event) => productGroupDetail(event, row.productGroupId, row.productGroupName)} className="link_url">

                                                            </span>
                                                        </TableCell>

                                                        <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.startDate) }}></TableCell>
                                                        <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.endDate) }}></TableCell>
                                                        <TableCell align="right"><span className="status_font" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.status) }}></span></TableCell>
                                                    </TableRow>
                                                );
                                            })}

                            </TableBody>
                        </Table>
                    </TableContainer>

                </Paper>
                <div className="pagination_sec">
                    <Pagination count={Math.ceil(productgroupmaster.productgroupmasterlist && productgroupmaster.productgroupmasterlist.totalCount / 29)} page={page} onChange={handleChangePage} variant="outlined" color="secondary" />
                </div>
            </div>
            <div>
                <EditProductGroupPopup productGroupId={productGroupId} popupopen={popupopen} setOpen={setPopupopen} />
            </div>
            <div>
                {productDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductGroupList(productDelete)} open={open} setOpen={setOpen} />}
            </div>
        </>
    );
}
