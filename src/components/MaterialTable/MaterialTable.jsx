import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import { eventActions } from "../../_actions";
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
import Toolbar from '@material-ui/core/Toolbar';
import Loader from "../Loader/Loader";
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import "./MaterialTable.scss";
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
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { id: 'skuid', numeric: true, disablePadding: false, label: 'Product Id' },
    { id: 'name', numeric: false, disablePadding: true, label: 'Product Name' },
    { id: 'division', numeric: true, disablePadding: false, label: 'Division' },
    { id: 'category', numeric: true, disablePadding: false, label: 'Category' },
    { id: 'subcategory', numeric: true, disablePadding: false, label: 'Sub-category' },
    { id: 'productstatus', numeric: true, disablePadding: false, label: 'Mark Delete' },
    // { id: 'country', numeric: true, disablePadding: false, label: 'Country' },
    
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
        // className={clsx(classes.root, {
        //     [classes.highlight]: numSelected > 0,
        // })}
        >
            {/* {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                    {numSelected} selected
                </Typography>
            ) : (
                    <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                        Nutrition
                    </Typography>
                )} */}

            {/* {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                    <Tooltip title="Filter list">
                        <IconButton aria-label="filter list">
                            <FilterListIcon />
                        </IconButton>
                    </Tooltip>
                )} */}
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
    paper: {
        width: '100%'
    },

    container: {
        maxHeight: "calc(90vh - 147px)",
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
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const dispatch = useDispatch();
    const ProductMasterList = useSelector((state) => state.productmasterlist);
    const searchproductmaster = useSelector((state) => state.productmastersearch.productmastersearch);
    const FilterData = useSelector((state) => state.filterproductmaster.filterproductmaster);




    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    let history = useHistory();

    const selectedItem = selected.length;
    useEffect(() => {
        dispatch(eventActions.AssignProduct(selectedItem));
    }, [selectedItem]);

    let startIndex = ProductMasterList.productmasterlist && ProductMasterList.productmasterlist.startIndex;
    let endIndex = ProductMasterList.productmasterlist && ProductMasterList.productmasterlist.endIndex;


    let rows = [];

    useEffect(() => {
        let filterData = [{searchKey : props.searchValue}, {division: props.selectDivision}]
        dispatch(eventActions.productmasterList(userName.countryCode, 30, filterData, 1));
    }, [userName.countryCode, props.searchValue,props.selectDivision]);



    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.productName);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, productName) => {
        const selectedIndex = selected.indexOf(productName);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, productName);
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

    const handleChangePage = async (event, value) => {

        let filterData = [{searchKey : props.searchValue}, {division: props.selectDivision}]

        if (value === 1) {
            startIndex = 1;
            endIndex = 29
        }
        else {
            startIndex = ((value - 1) * 29) + 1;
            endIndex = value * 29;
        }
        setPage(value);
        dispatch(eventActions.productmasterList(userName.countryCode, endIndex, filterData, startIndex));
    };

    const productDetail = (event, productId,category,subCategory) => {
        console.log("my product id", productId);
        dispatch(eventActions.productMasterDetail(productId));
        history.push("/ProductMasterDetail", { productId: productId, category:category, subCategory:subCategory });
    }





    const isSelected = (productName) => selected.indexOf(productName) !== -1;
    rows =FilterData && FilterData ? FilterData && FilterData : searchproductmaster && searchproductmaster ? searchproductmaster && searchproductmaster.results : ProductMasterList.productmasterlist ? ProductMasterList.productmasterlist.results : [];
    let dataArr = rows.map(item => {
        return [item.productId, item]
    });

    let maparr = new Map(dataArr);
    let result = [...maparr.values()];
    rows = result.reverse();

    // const [productsId, setProductId] = React.useState([]);
    // const productChange = (event) => {
    //     if (event.target.checked) {
    //         setProductId([...productsId, event.target.name])
    //     }
    //     dispatch(eventActions.productmasterItemId(productsId));
    //     console.log("Product master Id",event.target.name);
    // }
    // useEffect(() => {

    // }, [productsId]);

    const productChange = (event) => {

        var table = document.getElementById("ProductMasterTable");
        const productsId = [];
        var rows = table.getElementsByTagName('tr');
        for (var i = 0; i < rows.length; i++) {
            var cols = rows[i].getElementsByTagName('td');
            if (cols.length > 1) {
                if (cols[0].getElementsByTagName('input')[0].checked) {
                    productsId.push(cols[0].getElementsByTagName('input')[0].name);
                    console.log('check box value', cols[0].getElementsByTagName('input')[0].name);
                }

            }
        }

        dispatch(eventActions.productmasterItemId(productsId));

    }


    console.log("product rows", rows);
    console.log("searchproductmaster", searchproductmaster && searchproductmaster);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
                <TableContainer id="ProductMasterTable" className={classes.container}>
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
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {ProductMasterList && ProductMasterList.loading ? <Loader /> :
                                stableSort(rows, getComparator())
                                    .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                                    : stableSort(rows, getComparator())
                                        .slice()
                                        .map((row, index) => {
                                            const isItemSelected = isSelected(row.productId);
                                            const labelId = `enhanced-table-checkbox-${index}`;
                                            const productId = row.productId;

                                            return (

                                                <TableRow
                                                    hover
                                                    onClick={(event) => handleClick(event, row.productId)}
                                                    role="checkbox"
                                                    aria-checked={isItemSelected}
                                                    tabIndex={-1}
                                                    key={row.productId}
                                                    selected={isItemSelected}

                                                >

                                                    <TableCell padding="checkbox">
                                                        <Checkbox
                                                            checked={isItemSelected}
                                                            inputProps={{ 'aria-labelledby': productId }}
                                                            onChange={productChange}
                                                            name={row.productId}

                                                        />
                                                    </TableCell>
                                                    <TableCell align="right">{row.productId}</TableCell>
                                                    <TableCell component="th" id={productId} scope="row" padding="none">
                                                        <span className="detail_pg" onClick={(event) => productDetail(event, row.productId,row.category,row.subCategory)} className="link_url">
                                                            {row.productName}
                                                        </span>
                                                    </TableCell>

                                                    {/* <TableCell align="right">{row.country}</TableCell> */}
                                                    <TableCell align="right">{row.division}</TableCell>
                                                    <TableCell align="right">{row.category}</TableCell>
                                                    <TableCell align="right">{row.subCategory}</TableCell>
                                                    <TableCell align="right">{row.status}</TableCell>
                                                   
                                                </TableRow>
                                            );
                                        })}
                            {/* {emptyRows > 0 && (
                                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )} */}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* <TablePagination
                    rowsPerPageOptions={[19, 38, 45]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                /> */}
            </Paper>
            {/* <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="
                Dense padding"
            /> */}
            <div className="pagination_sec mt-2">
                <Pagination count={Math.ceil(ProductMasterList.productmasterlist && ProductMasterList.productmasterlist.totalCount / 29)} page={page} onChange={handleChangePage} variant="outlined" color="secondary" />
            </div>

        </div>
    );
}
