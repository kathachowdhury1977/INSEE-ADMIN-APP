import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { eventActions } from "../../_actions";
import { useHistory } from "react-router-dom";
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
import Loader from "../Loader/Loader";
import Pagination from '@material-ui/lab/Pagination';
import SoldToManagmentSearch from "../SearchBox/SoldToManagmentSearch";
import SoldtoButton from "../../containers/Dashboard/SoldToManagement/SoldtoButton";
import moment from 'moment';






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
    { id: 'markForDelete', numeric: false, disablePadding: false, label: 'Mark Delete' },
    { id: 'accountgroup', numeric: true, disablePadding: false, label: 'Account Group' },
    { id: 'soldtonumber', numeric: true, disablePadding: false, label: 'Sold To Number' },
    { id: 'name', numeric: false, disablePadding: true, label: 'Account Name (EN)' },
    { id: 'accountname', numeric: true, disablePadding: false, label: 'Account Name (TH)' },
    { id: 'accountnamelocal', numeric: true, disablePadding: false, label: 'Account Name Local' },
    { id: 'customergroup', numeric: true, disablePadding: false, label: 'Customer Group Code' },
    { id: 'taxnumber', numeric: true, disablePadding: false, label: 'Tax Number' },
    { id: 'customerterstatus', numeric: true, disablePadding: false, label: 'Customer Tier Status' },
    { id: 'addressnumber', numeric: true, disablePadding: false, label: 'Address Number' },
    { id: 'street', numeric: true, disablePadding: false, label: 'Street' },
    { id: 'salesdistrictvalue', numeric: true, disablePadding: false, label: 'Sub District' },
    { id: 'district', numeric: true, disablePadding: false, label: 'District' },
    { id: 'Region', numeric: true, disablePadding: false, label: 'Region' },
    { id: 'postalcodevalue', numeric: true, disablePadding: false, label: 'Postal Code' },
    { id: 'soldtoprovince', numeric: true, disablePadding: false, label: 'Sold To province' },
    { id: 'soldToProvinceSalesDistrict', numeric: true, disablePadding: false, label: 'Sales District' },
    { id: 'transporationzone', numeric: true, disablePadding: false, label: 'Transportation Zone' },
    { id: 'transporationzonecode', numeric: true, disablePadding: false, label: 'Transportation Zone Description' },
    { id: 'soldtocountrycode', numeric: true, disablePadding: false, label: ' Country Code' },
    { id: 'soldtocountrycode', numeric: true, disablePadding: false, label: ' Country Code Description' },
    { id: 'customerlatitude', numeric: true, disablePadding: false, label: ' Latitude' },
    { id: 'customerlognitude', numeric: true, disablePadding: false, label: 'Longitude' },
    { id: 'soldtoemail', numeric: true, disablePadding: false, label: 'Email' },
    { id: 'phonenumber', numeric: true, disablePadding: false, label: 'Phone Number' },
    { id: 'mobilenumber', numeric: true, disablePadding: false, label: 'Mobile Number' },
    { id: 'customerimage', numeric: true, disablePadding: false, label: 'Customer Image' },
    { id: 'customerlogo', numeric: true, disablePadding: false, label: 'Customer Logo' },
    { id: 'pdpaSigned', numeric: true, disablePadding: false, label: 'PDPA Signed' },
    { id: 'pdpasingedDateTime', numeric: true, disablePadding: false, label: 'PDPA Signed Date / Time' },
    { id: 'salesarealist', numeric: true, disablePadding: false, label: 'Sales Area List' },
    { id: 'companylist', numeric: true, disablePadding: false, label: 'Company List' },
    { id: 'productgroup', numeric: true, disablePadding: false, label: 'Product Group' },

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
        maxHeight: "calc(90vh - 135px)",
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

export default function MaterialTable() {
    const classes = useStyles();
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const dispatch = useDispatch();
    const [searchValue, setSeachValue] = React.useState('');
    const [selectValue, setSelectValue] = React.useState('');
    const ExternalManagmentSoldTo = useSelector((state) => state.soldtomanagment);
    const soldtoProductList = useSelector((state) => state.soldtoproductgrouplist);
    const searchaccountlist = useSelector((state) => state.soldtomanagmentsearch);
    const SelectDropdown = useSelector((state) => state.soldtodropdowncountry.soldtodropdowncountry);
    console.log("SelectDropdown", SelectDropdown && SelectDropdown);
    let history = useHistory();

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);
    const [selectCounry, setSelectedCountry] = React.useState('');



    console.log("searchaccountlist", searchaccountlist);


    const selectedItem = selected.length;
    useEffect(() => {
        dispatch(eventActions.AssignProduct(selectedItem));
    }, [selectedItem]);

    // let startIndex = SelectDropdown.soldtodropdowncountry && SelectDropdown.soldtodropdowncountry.startIndex;
    // let endIndex = SelectDropdown.soldtodropdowncountry && SelectDropdown.soldtodropdowncountry.endIndex;

    let startIndex = searchaccountlist.soldtomanagmentsearch && searchaccountlist.soldtomanagmentsearch.startIndex;
    let endIndex = searchaccountlist.soldtomanagmentsearch && searchaccountlist.soldtomanagmentsearch.endIndex;


    let rows = [];

    // useEffect(() => {
    //     dispatch(eventActions.SoldToDropdownContry(selectCounry, 50, 1));
    // }, [selectCounry])


    // useEffect(() => {
    //     dispatch(eventActions.soldToManagmentList(50, 1));
    // }, []);

    const handleRequestSort = (event, property) => {
        // const isAsc = orderBy === property && order === 'asc';
        // setOrder(isAsc ? 'desc' : 'asc');
        // setOrderBy(property);
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

    const handleChangePage = (event, value) => {
        if (value === 1) {
            startIndex = 1;
            endIndex = 49;

        }
        else {
            startIndex = ((value - 1) * 49) + 1;
            endIndex = value * 49;
        }
        setPage(value);
        // setPage(newPage);
        console.log("endIndex, startIndex", endIndex, startIndex)
        dispatch(eventActions.SoldToManagmentSearch(userName.countryCode, endIndex, "", startIndex));
    };

    const handleChangeRowsPerPage = (event) => {
        // setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
        
    };

    const isSelected = (soldtoNumber) => selected.indexOf(soldtoNumber) !== -1;


    //   const [selectValue, setSelectValue] = React.useState('');

    // SelectDropdown && SelectDropdown ? SelectDropdown && SelectDropdown.results

    rows =  !!searchaccountlist.soldtomanagmentsearch ? searchaccountlist.soldtomanagmentsearch.results  : [];

    useEffect(() => {
        dispatch(eventActions.SoldToManagmentSearch(userName.countryCode, 50, searchValue, 1));
    }, [searchValue])


    // let dataArr = rows && rows.map(item => {
    //     return [item.soldtoNumber, item]
    // });

    // let maparr = new Map(dataArr);
    // let result = [...maparr.values()];



    if (rows !== undefined && rows !== null && rows.length !== undefined) {

    } else {
        rows = []
    }

    console.log("rows", rows);

    const SoldtoChange = (event) => {
        debugger
        var table = document.getElementById("SoldToManagementTable");
        const soldtonumber = [];
        console.log("mysoldtolist", soldtonumber);
        var rows = table.getElementsByTagName('tr');
        for (var i = 0; i < rows.length; i++) {
            var cols = rows[i].getElementsByTagName('td');
            if (cols.length > 1) {
                if (cols[0].getElementsByTagName('input')[0].checked) {
                    soldtonumber.push(cols[0].getElementsByTagName('input')[0].name);
                    console.log('check box value', cols[0].getElementsByTagName('input')[0].name);
                }
            }
        }

        dispatch(eventActions.SoldtoManagmentItemId(soldtonumber));
    }

    const soldToDetail = (event, soldtoNumber, accountName) => {
        history.push("/ExternalMangamentDetailList", { soldtoNumber: soldtoNumber, accountName: accountName });
    }


    const productGroupClick = (event, productGroups, soldtoNumber, accountName) => {
        console.log("my sold productid", soldtoNumber);
        // let UpdateData = {
        //     "productGroupList": productGroups
        // }

        history.push("/SoldToassignProductGroupList", { productGroups: productGroups, soldtoNumber: soldtoNumber, accountName: accountName });
    }

    const salesAreaClick = (event, salesAreaList, soldtoNumber, accountName) => {
        history.push("/SalesAreaList", { salesAreaList: salesAreaList, soldtoNumber: soldtoNumber, accountName: accountName });
    }


    const companyListClick = (event, companyList, soldtoNumber, accountName) => {
        history.push("/CompanyList", { companyList: companyList, soldtoNumber: soldtoNumber, accountName: accountName });
    }


    console.log("my loader", ExternalManagmentSoldTo);




    return (
        <>
            <div className="row">
                <div className="col-xl-4 col-lg-3 col-md-12 col-sm-12 col-xs-12">

                    <SoldToManagmentSearch handleSearchValue={setSeachValue} />

                    {/* <div className="select-country">
                    <select name="" id="" onChange={(event) => setSelectedCountry(event.target.value)} >
                        <option value="TH">TH</option>
                        <option value="LK">LK</option>
                        <option value="VN">VN</option>
                    </select>
                </div> */}

                </div>

                <div className="col-xl-8 col-lg-9 col-md-12 col-sm-12 col-xs-12 pl-0">
                    <SoldtoButton />
                </div>
            </div>



            <div className={classes.root}>






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
                                {searchaccountlist && searchaccountlist.loading ? <Loader /> :

                                    stableSort(rows, getComparator())
                                        .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                                        : stableSort(rows, getComparator())
                                            .slice()
                                            .map((row, index) => {
                                                const isItemSelected = isSelected(row.soldtoNumber);
                                                const labelId = `enhanced-table-checkbox-${index}`;
                                                const soldtoNumber = row.soldtoNumber;

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
                                                        <TableCell padding="checkbox">
                                                            <Checkbox
                                                                checked={isItemSelected}
                                                                inputProps={{ 'aria-labelledby': soldtoNumber }}
                                                                onChange={SoldtoChange}
                                                                name={row.soldtoNumber}
                                                            />
                                                        </TableCell>
                                                        <TableCell align="center">                                                           
                                                            <Checkbox
                                                                checked={row.markForDelete===true ? true : false}
                                                                inputProps={{ readOnly: true, }}                                                                
                                                                name="markDelete"
                                                            />
                                                        </TableCell>
                                                        <TableCell align="right">{row.accountGroup}</TableCell>

                                                        <TableCell align="right">{row.soldtoNumber}</TableCell>
                                                        <TableCell component="th" id={soldtoNumber} scope="row" padding="none">
                                                            <span className="detail_pg" onClick={(event) => soldToDetail(event, row.accountName, row.soldtoNumber)} className="link_url">
                                                                {row.accountName}
                                                            </span>
                                                        </TableCell>
                                                        <TableCell align="right">{row.accountNameTH}</TableCell>
                                                        <TableCell align="right">{row.accountNameLocal}</TableCell>
                                                        <TableCell align="right">{row.customerGroupCode}</TableCell>
                                                        <TableCell align="right">{row.taxNumber}</TableCell>
                                                        <TableCell align="right">{row.customerTierStatus}</TableCell>
                                                        <TableCell align="right">{row.addressNumber}</TableCell>
                                                        <TableCell align="right">{row.street}</TableCell>
                                                        <TableCell align="right">{row.salesDistrictValue}</TableCell>
                                                        <TableCell align="right">{row.districtValue}</TableCell>
                                                        <TableCell align="right">{row.provinceValue}</TableCell>
                                                        <TableCell align="right">{row.postalCodeValue}</TableCell>
                                                        <TableCell align="right">{row.soldToProvince}</TableCell>
                                                        <TableCell align="right">{row.soldToProvinceSalesDistrict}</TableCell>
                                                        <TableCell align="right">{row.transPortationZone}</TableCell>
                                                        <TableCell align="right">{row.transportationZoneCode === "null" ? "" : row.transportationZoneCode}</TableCell>
                                                        <TableCell align="right">{row.soldtoCountryCode}</TableCell>
                                                        <TableCell align="right"></TableCell>
                                                        <TableCell align="right">{row.customerLatitude}</TableCell>
                                                        <TableCell align="right">{row.customerLongitde}</TableCell>
                                                        <TableCell align="right">{row.soldtoEmail}</TableCell>
                                                        <TableCell align="right">{row.phoneNumber}</TableCell>
                                                        <TableCell align="right"></TableCell>
                                                        <TableCell align="right">{row.customerImage}</TableCell>
                                                        <TableCell align="right">{row.customerLogo}</TableCell>
                                                        <TableCell align="right">{row.pdpConfirmed}</TableCell>
                                                        <TableCell align="right"> {row.confirmedDate} </TableCell>
                                                        <TableCell align="right">
                                                            <span className="product_group"
                                                                onClick={(event) => salesAreaClick(event, row.salesAreaList, row.accountName, row.soldtoNumber)}> <i class="fa fa-eye" aria-hidden="true"></i> View</span></TableCell>

                                                        <TableCell align="right">
                                                            <span className="product_group"
                                                                onClick={(event) => companyListClick(event, row.companyList, row.accountName, row.soldtoNumber)}
                                                            ><i class="fa fa-eye" aria-hidden="true"></i> View</span></TableCell>
                                                        <TableCell align="right">
                                                            <span className="product_group"
                                                                onClick={(event) => productGroupClick(event, row.productGroups, row.accountName, row.soldtoNumber)}><i class="fa fa-eye" aria-hidden="true"></i> View</span></TableCell>

                                                    </TableRow>

                                                );
                                            })

                                }

                            </TableBody>
                        </Table>
                    </TableContainer>

                </Paper>
                <div className="pagination_sec">
                    <Pagination count={Math.ceil(searchaccountlist.soldtomanagmentsearch && searchaccountlist.soldtomanagmentsearch.totalCount / 49)} page={page} onChange={handleChangePage} variant="outlined" color="secondary" />
                </div>

            </div>
        </>
    );
}
