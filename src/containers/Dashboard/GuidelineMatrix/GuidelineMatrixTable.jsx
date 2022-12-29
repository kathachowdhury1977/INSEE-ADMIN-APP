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
import Checkbox from '@material-ui/core/Checkbox';
import Loader from "../../../components/Loader/Loader";
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
    { id: 'number', numeric: false, disablePadding: true, label: 'Country' },
    { id: 'insee', numeric: true, disablePadding: false, label: 'Region Code' },
    { id: 'year', numeric: true, disablePadding: false, label: 'Province Code' },
    { id: 'coin-th', numeric: true, disablePadding: false, label: 'District Code' },
    { id: 'coln-en', numeric: true, disablePadding: false, label: 'Sub-District Code' },
    { id: 'remark-th', numeric: true, disablePadding: false, label: 'Focus' },
    { id: 'remart-en', numeric: true, disablePadding: false, label: 'Farming' },
    { id: 'create', numeric: true, disablePadding: false, label: 'Hunting' },
    { id: 'create', numeric: true, disablePadding: false, label: 'Small' },
    { id: 'create', numeric: true, disablePadding: false, label: 'Hot' },
    { id: 'create', numeric: true, disablePadding: false, label: 'Standard' },

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

export default function GuidelineMatrixTable(props) {
    const classes = useStyles();
    // const [order, setOrder] = React.useState('asc');
    // const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    // const [rowsPerPage, setRowsPerPage] = React.useState(19);
    const dispatch = useDispatch();
    const guidelineMatrix = useSelector((state) => state.guidelinematrix);

    

    const selectedItem = selected.length;

    let startIndex = guidelineMatrix.guidelinematrix && guidelineMatrix.guidelinematrix.startIndex;
    let endIndex = guidelineMatrix.guidelinematrix && guidelineMatrix.guidelinematrix.endIndex;

    console.log("guidelineMatrix", guidelineMatrix);
    let rows = [];



    useEffect(() => {
        dispatch(eventActions.GuideLinematrix(34, 1));
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
        if (value === 1) {
            startIndex = 1;
            endIndex = 34
        }
        else {
            startIndex = ((value - 1) * 34) + 1;
            endIndex = value * 34;
        }
        setPage(value);
        // setPage(newPage);
        console.log("endIndex, startIndex", endIndex, startIndex)
        dispatch(eventActions.GuideLinematrix(endIndex, startIndex));


    };

    const handleChangeRowsPerPage = (event) => {
        // setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (countryCode) => selected.indexOf(countryCode) !== -1;
    
    rows = guidelineMatrix.guidelinematrix ? guidelineMatrix.guidelinematrix.results : [];

  
    console.log("guideline master",rows);

  

   

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
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                       
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                        {guidelineMatrix.guidelinematrix && guidelineMatrix.guidelinematrix.loading?<Loader />:
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
                                              
                                                
                                                <TableCell align="right">{row.Country}</TableCell>
                                                <TableCell align="right">{row.regionCode}</TableCell>
                                                <TableCell align="right">{row.provinceCode}</TableCell>
                                                <TableCell align="right">{row.districtCode}</TableCell>
                                                <TableCell align="right">{row.subdistrictCode}</TableCell>
                                                <TableCell align="right">{row.Focus}</TableCell>
                                                <TableCell align="right">{row.Farming}</TableCell>
                                                <TableCell align="right">{row.Hunting}</TableCell>
                                                <TableCell align="right">{row.Small}</TableCell>
                                                <TableCell align="right">{row.Hot}</TableCell>
                                                <TableCell align="right">{row.Standard}</TableCell>
                                            </TableRow>

                                        );
                                    })}

                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper>
            <div className="pagination_sec">
                <Pagination count={parseInt(guidelineMatrix.guidelinematrix && guidelineMatrix.guidelinematrix.totalCount / 49)} page={page} onChange={handleChangePage} />
            </div>

        </div>
    );
}
