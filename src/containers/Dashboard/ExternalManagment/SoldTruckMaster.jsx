import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { eventActions } from "../../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import "../../../components/MaterialTable/MaterialTable.scss";
import { useLocation } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import Button from "@material-ui/core/Button";
import UpdateTruckPopup from "../../../components/ModalPopup/UpdateTruckPopup";
import moment from "moment";
import TruckMasterSearch from "../../../components/SearchBox/TruckMasterSearch";
import AddTruckPopup from "../../../components/ModalPopup/AddTruckPopup";
import { toast } from "react-toastify";
import DOMPurify from "dompurify";

const headCells = [
  { id: "edit", numeric: false, disablePadding: true, label: "Edit" },
  {
    id: "country",
    numeric: false,
    disablePadding: false,
    label: "Country Code",
  },
  {
    id: "VehicleType",
    numeric: true,
    disablePadding: false,
    label: "Vehicle Type",
  },
  {
    id: "LicenseNumber",
    numeric: true,
    disablePadding: false,
    label: "License Number",
  },
  { id: "Capacity", numeric: true, disablePadding: false, label: "Capacity" },
  {
    id: "DocumentDate",
    numeric: true,
    disablePadding: false,
    label: "Document Date",
  },
  {
    id: "ExpireDate",
    numeric: true,
    disablePadding: false,
    label: "Expire Date",
  },
  { id: "Ownership", numeric: true, disablePadding: false, label: "Ownership" },
  {
    id: "RetailerName",
    numeric: true,
    disablePadding: false,
    label: "Retailer Name",
  },
  {
    id: "VehicleStatus",
    numeric: true,
    disablePadding: false,
    label: "Vehicle Status",
  },
  { id: "Notes", numeric: true, disablePadding: false, label: "Notes" },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
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
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "default"}
              sortDirection={"asc"}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
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
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

// const useToolbarStyles = makeStyles((theme) => ({
//     root: {
//         paddingLeft: theme.spacing(2),
//         paddingRight: theme.spacing(1),
//     },
//     highlight:
//         theme.palette.type === 'light'
//             ? {
//                 color: theme.palette.secondary.main,
//                 backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//             }
//             : {
//                 color: theme.palette.text.primary,
//                 backgroundColor: theme.palette.secondary.dark,
//             },
//     title: {
//         flex: '1 1 100%',
//     },
// }));

// const EnhancedTableToolbar = (props) => {
//     const classes = useToolbarStyles();
//     const { numSelected } = props;

// };

// EnhancedTableToolbar.propTypes = {
//     numSelected: PropTypes.number.isRequired,
// };

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },

  container: {
    maxHeight: "calc(90vh - 274px)",
  },

  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function SoldTruckMaster(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  // const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5000);
  const location = useLocation();
  const { accountName } = location.state;
  const dispatch = useDispatch();
  const [vechileId, setVechileId] = React.useState("");
  const [popupopen, setPopupopen] = React.useState(false);
  const [searchValue, setSeachValue] = React.useState("");
  const truckList = useSelector((state) => state.truckmasterlist);
  let TruckSearch = useSelector((state) => state.truckmastersearch);
  const updateTruckmaster = useSelector((state) => state.updatetruckmaster);

  let rows = [];

  rows = searchValue
    ? !!TruckSearch &&
      !!TruckSearch.truckmastersearch &&
      TruckSearch.truckmastersearch.results
    : truckList.truckmasterlist
    ? truckList.truckmasterlist
    : [];

  useEffect(() => {
    dispatch(eventActions.TruckMasterSearch(accountName, 50, searchValue, 1));
  }, [searchValue]);

  useEffect(() => {
    if (
      !!updateTruckmaster &&
      !!updateTruckmaster.updatetruckmaster &&
      !!updateTruckmaster.updatetruckmaster !== undefined
    ) {
      dispatch(eventActions.TruckMasterList(accountName));
      toast.success("Truck has been updated successfully", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (!!updateTruckmaster && updateTruckmaster.error) {
      toast.success(updateTruckmaster.error, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [updateTruckmaster]);

  useEffect(() => {
    return () => {
      dispatch(eventActions.updateTruckMaster());
    };
  }, []);

  // let history = useHistory();

  const handlepen = (event) => {
    let eventId = event.vehicleId ? event.vehicleId : event.id;
    setVechileId(eventId);
    setPopupopen(true);
  };

  useEffect(() => {
    dispatch(eventActions.TruckMasterList(accountName));

    return () => {
      dispatch(eventActions.AddTruckMaster());
      dispatch(eventActions.updateTruckMaster());
    };
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.licenseNumber);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  return (
    <>
      <div className={classes.root}>
        <div className="row mt-2 mb-2">
          <div className="col-xl-6 col-lg-5 col-md-2 col-sm-0 col-xs-12"></div>
          <div className="col-xl-6 col-lg-7 col-md-10 col-sm-12 col-xs-12">
            <div className="truck-master">
              <TruckMasterSearch handleSearchValue={setSeachValue} />
              <div className="button_popup">
                <span>
                  <AddTruckPopup
                    title="Add Truck"
                    setSeachValue={setSeachValue}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <Paper className={classes.paper}>
          <TableContainer className={classes.container}>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
              stickyHeader
              aria-label="sticky table"
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
                {truckList && truckList.loading ? (
                  <Loader />
                ) : rows && rows.slice().length == 0 ? (
                  <div className="no_record">No Record Found</div>
                ) : (
                  rows &&
                  rows
                    .slice()
                    .reverse()
                    .map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow>
                          <TableCell align="right">
                            <Button
                              variant="outlined"
                              color="primary"
                              className="update_truck"
                              onClick={() => handlepen(row)}
                            >
                              <i className="fa fa-pencil"></i>
                            </Button>
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                          >
                            <span className="detail_pg link_url">
                              {row.countryCode}
                            </span>
                          </TableCell>
                          <TableCell
                            align="right"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(row.vehicleType),
                            }}
                          ></TableCell>
                          <TableCell
                            align="right"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(row.licenseNumber),
                            }}
                          ></TableCell>
                          <TableCell
                            align="right"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(row.capacity),
                            }}
                          ></TableCell>
                          <TableCell align="right">
                            {moment(row.documentDate).format("DD-MM-yyyy")}
                          </TableCell>
                          <TableCell align="right">
                            {moment(row.expireDate).format("DD-MM-yyyy")}
                          </TableCell>
                          <TableCell
                            align="right"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(row.ownership),
                            }}
                          ></TableCell>
                          <TableCell
                            align="right"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(row.retailerName),
                            }}
                          ></TableCell>
                          <TableCell
                            align="right"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(row.vehicleStatus),
                            }}
                          ></TableCell>
                          <TableCell
                            align="right"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(row.notes),
                            }}
                          ></TableCell>
                        </TableRow>
                      );
                    })
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>

      <div>
        <UpdateTruckPopup
          setSeachValue={setSeachValue}
          vechileId={vechileId}
          popupopen={popupopen}
          setOpen={setPopupopen}
        />
      </div>
    </>
  );
}