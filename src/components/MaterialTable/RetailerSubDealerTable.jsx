import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { eventActions } from "../../_actions";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clsx from 'clsx';
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

import Loader from "../Loader/Loader";
import Pagination from '@material-ui/lab/Pagination';
import EditRetailerPopup from "../ModalPopup/EditRetailerPopup";
import RetailerSubPopup from "../ModalPopup/RetailerSubPopup";
import RetailerSearch from "../SearchBox/RetailerSearch";
import UploadContactWithRetailer from "../MasterPopup/UploadContactWithRetailer";


const headCells = [
  // { id: 'Permissions', numeric: true, disablePadding: false, label: 'Permissions' },
  { id: 'action', numeric: true, disablePadding: false, label: 'Action' },
  { id: 'markdelete', numeric: true, disablePadding: false, label: 'Status' },
  { id: 'accountgroup', numeric: true, disablePadding: false, label: 'Account Group' },
  { id: 'groupcompany', numeric: true, disablePadding: false, label: 'Group Company' },
  { id: 'SubDealerCode', numeric: true, disablePadding: false, label: 'Sub Dealer Code' },
  { id: 'SubDealerNameEn', numeric: true, disablePadding: false, label: 'Sub Dealer Name (EN)' },
  { id: 'SubDealerNameTH', numeric: true, disablePadding: false, label: 'Sub Dealer Name (TH)' },
  { id: 'taxnumber', numeric: true, disablePadding: false, label: 'Tax Number' },
  { id: 'legalform', numeric: true, disablePadding: false, label: 'Legal Form' },
  { id: 'customertierstatus', numeric: true, disablePadding: false, label: 'Customer Tier Status' },
  { id: 'inseelifenumber', numeric: true, disablePadding: false, label: 'INSEE Life Number' },
  { id: 'inseelifepoint', numeric: true, disablePadding: false, label: 'INSEE Life Point' },
  { id: 'thaismartcard', numeric: true, disablePadding: false, label: 'Thai Smart Card' },
  { id: 'Addressnumber', numeric: true, disablePadding: false, label: 'Address Number' },
  { id: 'Region', numeric: true, disablePadding: false, label: 'Region' },
  { id: 'Provinceid', numeric: true, disablePadding: false, label: 'Province' },
  { id: 'district', numeric: true, disablePadding: false, label: 'District' },
  { id: 'SubDistrict', numeric: true, disablePadding: false, label: 'Sub District' },
  { id: 'street', numeric: true, disablePadding: false, label: 'Street' },
 


  { id: 'PostalCode', numeric: true, disablePadding: false, label: 'Postal Code' },
  { id: 'Latitude', numeric: true, disablePadding: false, label: 'Latitude' },
  { id: 'Longitude', numeric: true, disablePadding: false, label: 'Longitude' },
  { id: 'SalesDistrict', numeric: true, disablePadding: false, label: 'Sales District' },
  { id: 'pdpa', numeric: true, disablePadding: false, label: 'PDPA' },
  { id: 'pdpaConstant', numeric: true, disablePadding: false, label: 'PDPA Constant Date/Time' },
  { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'phoneNumber', numeric: true, disablePadding: false, label: 'Phone Number' },
  { id: 'mobile1', numeric: true, disablePadding: false, label: 'Mobile1' },
  { id: 'mobile2', numeric: true, disablePadding: false, label: 'Mobile2' },
  { id: 'Salesrepid', numeric: true, disablePadding: false, label: 'Sales rep id' },
  { id: 'Salesrepname', numeric: true, disablePadding: false, label: 'Sales rep Name' },
  { id: 'subdealerimage', numeric: true, disablePadding: false, label: 'Sales Dealer Image' },
  { id: 'subdealerlogo', numeric: true, disablePadding: false, label: 'Sales Dealer Logo' },
  // { id: 'username', numeric: true, disablePadding: false, label: 'User Name' },

  // { id: 'DivisionCode', numeric: true, disablePadding: false, label: 'Division Code' },
  // { id: 'subcategory', numeric: true, disablePadding: false, label: 'Distribution Channel Code' },
  // { id: 'DistributionChannelCode', numeric: true, disablePadding: false, label: 'Sales Organization Code' },
  // { id: 'paymentterm', numeric: true, disablePadding: false, label: 'payment term' },
  // { id: 'CreditControlArea', numeric: true, disablePadding: false, label: 'Credit Control Area' },
  // { id: 'CompanyCode', numeric: true, disablePadding: false, label: 'Company Code' },
  // { id: 'MonthlyPotential', numeric: true, disablePadding: false, label: 'Monthly Potential' },
  // { id: 'Regionid', numeric: true, disablePadding: false, label: 'Region id' },
  // { id: 'OwnerFirstname', numeric: true, disablePadding: false, label: 'Owner Firstname' },
  // { id: 'ownerprimaymobilenumber', numeric: true, disablePadding: false, label: 'owner primay mobile number' },
  // { id: 'owneralternatemobilenumber-1', numeric: true, disablePadding: false, label: 'owner alternate mobile number-1' },
  // { id: 'ownerphonenubmer-1', numeric: true, disablePadding: false, label: 'owner phone nubmer-1' },
  // { id: 'owneralternatemobile number-2', numeric: true, disablePadding: false, label: 'owner alternate mobile number-2' },
  // { id: 'ownerphonenubmer-2', numeric: true, disablePadding: false, label: 'owner phone nubmer-2' },
  // { id: 'ownerprimaryemail', numeric: true, disablePadding: false, label: 'owner primary email' },
  // { id: 'ownerbirthday', numeric: true, disablePadding: false, label: 'owner birthday' },
  // { id: 'contactfirstname', numeric: true, disablePadding: false, label: 'contact firstname' },
  // { id: 'contactlastname', numeric: true, disablePadding: false, label: 'contact lastname' },
  // { id: 'contact mobilenumber-1', numeric: true, disablePadding: false, label: 'contact  mobile number-1' },
  // { id: 'contactphonenubmer-1', numeric: true, disablePadding: false, label: 'contact phone nubmer-1' },
  // { id: 'contactmobilenumber-2', numeric: true, disablePadding: false, label: 'contact mobile number-2' },
  // { id: 'contactphonenubmer-2', numeric: true, disablePadding: false, label: 'contact phone nubmer-2' },
  // { id: 'contactprimaryemail', numeric: true, disablePadding: false, label: 'contact primary email' },
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
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
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
  container: {
    maxHeight: "calc(90vh - 167px)",
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

export default function RetailerSubDealerTable(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [dense, setDense] = React.useState(false);
  const [popupopen, setPopupopen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [retaierDetail, setRetailerDetail] = React.useState("");
  const [searchValue, setSearchValue] = React.useState('');
  const DowloadRetailerSubDealer = useSelector((state) => state.downloadretailersubdealer.downloadretailersubdealer);
  const uploadRetailerExcel = useSelector((state) => state.uploadretailersubdealerexcel);

  const retailerData = useSelector((state) => state.retailersubdealers);
  
  let startIndex = retailerData.retailersubdealers && retailerData.retailersubdealers.fromIndex;
  let endIndex = retailerData.retailersubdealers && retailerData.retailersubdealers.toIndex;

  useEffect(() => {
    let filterData = [{ searchText: '' }];
    dispatch(eventActions.retailerSubdealers(50, filterData && filterData, 1));
   },[]);

  useEffect(() => {
    let filterData = [{ searchText: searchValue }];
    console.log('filterData', filterData);
    if(searchValue.length > 4 || searchValue.length === 0) {
      dispatch(eventActions.retailerSubdealers(50, filterData && filterData, 1));
    }
    
  }, [searchValue]);


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
    console.log('abcd')
    dispatch(eventActions.retailerSubdealers(endIndex, '', startIndex));

  };


  let rows = [];

  // rows = searchValue ? !!retailerData && !!retailerData.retailersubdealers && retailerData.retailersubdealers.results : retailerData.retailersubdealers ?  retailerData.retailersubdealers.results : [];

  rows = retailerData.retailersubdealers ?  retailerData.retailersubdealers.results: [];
   console.log("myretailerlist",rows);

 

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.retailerName);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };






  const isSelected = (retailerName) => selected.indexOf(retailerName) !== -1;
  let history = useHistory();
  const retailerDetail = (event, retailerCode, retailerName, userName, contactPersonDetails) => {
    console.log("my send", retailerCode);
    history.push("/RetailerDetailList", { retailerCode: retailerCode, retailerName: retailerName, userId: userName, contactPersonDetails: contactPersonDetails });
  }

  const handleRetailerEdit = (event,id) => {
    history.push("/UpdateRetailerSubDealer", { id:id});
  }

  useEffect(() => {
    dispatch(eventActions.downloadRetailerSubDealer());
  }, []);

  const addSubDealerform = () => {
    history.push("/AddRetailerSubDealer");
  }


  return (
    <>
    <div className="col-12 p-0">
    <div className="row mt-1" style={{ alignItems: "center" }}>
        <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <RetailerSearch handleSearchValue={setSearchValue} />
        </div>
        <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-xs-12 pr-0">
          <div className="button_popup mr-2">
            <a className="add-button" title="Download Template" href={DowloadRetailerSubDealer && DowloadRetailerSubDealer} download> <i class="fa fa-download button-upload" aria-hidden="true"></i> Download</a>
            <UploadContactWithRetailer title ="Upload Contact"/>
            <RetailerSubPopup title="Retailer Managment" />
            {/* <button style={{width: "134px"}} onClick={(event) => addSubDealerform(event)} className="add-button new-btn"> <i className="fa fa-plus"></i> Create Sub Dealer</button> */}
          </div>
        </div>
      </div>
    </div>
     
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
                {retailerData && retailerData.loading ? <Loader /> :
                  (rows)
                    .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                    : (rows)
                      .slice()
                      .map((row, index) => {
                    const isItemSelected = isSelected(row.retailerCode);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <TableRow>
                        {/* <TableCell align="right" padding="none" scope="row"> {row.soldToNumber}</TableCell> */}
                        <TableCell align="center"><span className="product_group-edit" onClick={(event) => handleRetailerEdit(event,row.id)}>Edit</span></TableCell>
                         <TableCell align="right">{row.retailerInseeStatus}</TableCell> 
                        <TableCell align="right">{row.accountGroup}</TableCell>
                        <TableCell align="right">{row.groupCompanyList && row.groupCompanyList.map((list)=> {
                          return (
                            <span className="last-child">{list}<span className="comma">,</span></span>
                          )
                        })}</TableCell>
                        <TableCell align="right">{row.retailerCode}</TableCell>
                        <TableCell align="right">
                          <span className="detail_pg" onClick={(event) => retailerDetail(event, row.retailerCode, row.retailerName, row.userName, row.contactPersonDetails)} className="link_url">
                            {row.retailerName}
                          </span>
                        </TableCell>
                        <TableCell align="right">{row.retailerNameTH}</TableCell>
                        <TableCell align="right">{row.taxNumber}</TableCell>
                        <TableCell align="right">{row.legalForm}</TableCell>
                        <TableCell align="right">{row.customerTierStatus}</TableCell>
                        <TableCell align="right">{row.inseeLifeNumber}</TableCell>
                        <TableCell align="right">{row.inseeLifePoints}</TableCell>
                        <TableCell align="right">{row.thaiSmartCard}</TableCell>
                        <TableCell align="right">{row.address}</TableCell>
                        <TableCell align="right">{row.region}</TableCell>
                        <TableCell align="right">{row.province}</TableCell>
                        <TableCell align="right">{row.district}</TableCell>
                        <TableCell align="right">{row.subDistrict}</TableCell>
                        <TableCell align="right">{row.street}</TableCell>
                      
                        <TableCell align="right">{row.postalCode}</TableCell>
                        <TableCell align="right">{row.latitude}</TableCell>
                        <TableCell align="right">{row.longitude}</TableCell>
                        <TableCell align="right">{row.salesDistrict}</TableCell>
                        <TableCell align="right">{row.pdpa}</TableCell>
                        <TableCell align="right">{row.pdpaConsentDate}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">{row.phoneNumber}</TableCell>
                        <TableCell align="right">{row.mobile1}</TableCell>
                        <TableCell align="right">{row.mobile2}</TableCell>
                        <TableCell align="right">{row.salesRepId}</TableCell>
                        <TableCell align="right">{row.salesRepName}</TableCell>
                        <TableCell align="right">{row.subDealerImage}</TableCell>
                        <TableCell align="right">{row.subDealerLogo}</TableCell>
                        {/* <TableCell align="right">{row.userName}</TableCell> */}


                        {/* <TableCell align="right">{row.userName}</TableCell>
                      <TableCell align="right">{row.divisionCode}</TableCell>
                      <TableCell align="right">{row.distributionChannelCode}</TableCell>
                      <TableCell align="right">{row.salesOrganizationCode}</TableCell>
                      <TableCell align="right">{row.paymentTerm}</TableCell>
                      <TableCell align="right">{row.creditControlArea}</TableCell>
                      <TableCell align="right">{row.companyCode}</TableCell>          
                      <TableCell align="right">{row.monthlyPotential}</TableCell>
                      <TableCell align="right">{row.region}</TableCell>
                      <TableCell align="right">{row.ownerDetails.firstName}</TableCell>
                      <TableCell align="right">{row.ownerDetails.primaryMobileNumber}</TableCell>
                      <TableCell align="right">{row.ownerDetails.alternateMobileNumber[0]}</TableCell>
                      <TableCell align="right">{row.ownerDetails.phoneNumber[0]}</TableCell>
                      <TableCell align="right">{row.ownerDetails.alternateMobileNumber[1]}</TableCell>
                      <TableCell align="right">{row.ownerDetails.phoneNumber[2]}</TableCell>
                      <TableCell align="right">{row.ownerDetails.primaryEmail}</TableCell>
                      <TableCell align="right">{row.ownerDetails.birthday}</TableCell>
                      <TableCell align="right">{row.contactPersonDetails.firstName}</TableCell>
                      <TableCell align="right">{row.contactPersonDetails.lastName}</TableCell>
                      <TableCell align="right">{row.contactPersonDetails.mobileNumber[0]}</TableCell>
                      <TableCell align="right">{row.contactPersonDetails.phoneNumber[0]}</TableCell>
                      <TableCell align="right">{row.contactPersonDetails.mobileNumber[1]}</TableCell>
                      <TableCell align="right">{row.contactPersonDetails.phoneNumber[1]}</TableCell>
                      <TableCell align="right">{row.contactPersonDetails.email}</TableCell> */}
                      </TableRow>
                    );
                  })
                  
                }
              </TableBody>
            </Table>
          </TableContainer>

        </Paper>
        <div className="pagination_sec">
          <Pagination count={Math.ceil(retailerData.retailersubdealers && retailerData.retailersubdealers.totalCount / 49)} page={page} onChange={handleChangePage} variant="outlined" color="secondary" />
        </div>

        <div>
          <EditRetailerPopup retaierDetail={retaierDetail} popupopen={popupopen} setOpen={setPopupopen} />
        </div>
      </div>
    </>
  );
}
