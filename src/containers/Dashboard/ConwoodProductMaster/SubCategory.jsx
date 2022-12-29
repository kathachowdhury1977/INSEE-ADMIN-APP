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
    { id: 'ParentCategoryId', numeric: true, disablePadding: false, label: 'Parent Category Id' },
    { id: 'ParentCategoryName', numeric: true, disablePadding: false, label: 'Parent Category Name' },
    { id: 'CategoryId', numeric: false, disablePadding: true, label: 'Category Id' },
    { id: 'CategoryName', numeric: true, disablePadding: false, label: 'Category Name' },
    { id: 'SubCategoryId', numeric: true, disablePadding: false, label: 'Sub Category Id' },
    { id: 'SubCategoryName', numeric: true, disablePadding: false, label: 'Sub Category Name' },

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

export default function SubCategory(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const subCategoryList = useSelector((state) => state.getconwoodcategory);

    let rows = [];

    useEffect(() => {
        dispatch(eventActions.getConwoodAllCategoryList(3));
    }, [3]);


    const handleRequestSort = (event, property) => {
    };

    const handleSelectAllClick = (event) => {

    };



    rows = subCategoryList.getconwoodcategory ? subCategoryList.getconwoodcategory : [];

    if (rows !== undefined && rows !== null && rows.length !== undefined) {

    } else {
        rows = []
    }





    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
                <TableContainer className={classes.container} >
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"

                        stickyHeader aria-label="sticky table"
                    >
                        {rows !== undefined && rows !== null && rows.length !== undefined ?

                            <EnhancedTableHead
                                classes={classes}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                            />
                            : <EnhancedTableHead
                                classes={classes}
                               
                                rowCount={0}
                            />

                        }
                        <TableBody>
                            {subCategoryList && subCategoryList.loading ? <Loader /> :
                                stableSort(rows, getComparator())
                                    .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                                    : stableSort(rows, getComparator())
                                        .slice()
                                        .reverse()

                                        .map((row, index) => {

                                            const labelId = `enhanced-table-checkbox-${index}`;


                                            return (
                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                >

                                             
                                                    <TableCell id={labelId}  align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.parentCategoryId)}}>
                                                       
                                                    </TableCell>
                                                    <TableCell component="th" padding="none" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.patentCategoryName)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.categoryId)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.categoryName)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.subCategoryId)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.subCategoryName)}}></TableCell>

                                                </TableRow>

                                            );
                                        })}

                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper>

        </div>
    );
}
