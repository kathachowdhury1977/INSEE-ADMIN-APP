import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
// import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { eventActions } from "../../_actions";
import { useLocation } from "react-router-dom";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function UpdateTruckPopup(props) {
  const [open, setOpen] = React.useState(false);
//   const { t } = useTranslation();
  const dispatch = useDispatch();
  const ownership = useSelector((state) => state.getownership.getownership);
  const vechilestatus = useSelector(
    (state) => state.vechilestatuslist.vechilestatuslist
  );
  const vechileTypeList = useSelector(
    (state) => state.vechiletypelist.vechiletypelist
  );
  const vechileIdList = useSelector(
    (state) => state.vechicleidlist.vechicleidlist
  );
  const updateTruckmaster = useSelector((state) => state.updatetruckmaster);

  const myidis = props.vechileId;
  const location = useLocation();
  const { accountName } = location.state;
  useEffect(() => {
    dispatch(eventActions.getWithVechileIdList(myidis));
  }, [myidis]);

  const [country, setCountry] = React.useState(
    vechileIdList && vechileIdList.countryCode
  );
  const [capacity, setCapacity] = React.useState(
    vechileIdList && vechileIdList.capacity
  );
  const [docdate, setDocDate] = React.useState(
    vechileIdList && vechileIdList.documentDate
  );
  const [expdate, setExpDate] = React.useState(
    vechileIdList && vechileIdList.expireDate
  );
  const [licence, setLicenceNumber] = React.useState(
    vechileIdList && vechileIdList.licenseNumber
  );
  const [note, setNote] = React.useState(vechileIdList && vechileIdList.notes);
  const [ownershp, setOwnerShip] = React.useState(
    vechileIdList && vechileIdList.ownership
  );
  const [vechilest, setVechicleStatus] = React.useState(
    vechileIdList && vechileIdList.vehicleStatus
  );
  const [vechicletp, setVechicleType] = React.useState(
    vechileIdList && vechileIdList.vehicleType
  );
  const [retailer, setRetailer] = React.useState(
    vechileIdList && vechileIdList.retailerName
  );
  const [soldton, setSoldTo] = React.useState("");

  let userName = localStorage.getItem("userData");
  userName = JSON.parse(userName);

  useEffect(() => {
    if (props.popupopen) {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    dispatch(eventActions.getOwnerShip());
    dispatch(eventActions.vechileStatusList());
    dispatch(eventActions.vechileTypeList(userName.countryCode));
  }, []);

//   useEffect(() => {
//     dispatch(eventActions.vechileStatusList());
//   }, []);

//   useEffect(() => {
//     dispatch(eventActions.vechileTypeList(userName.countryCode));
//   }, []);

  const handleClose = () => {
    props.setOpen(false);
    setVechicleStatus(null);
  };

  const handleSubmit = () => {
    let data = {
      capacity: capacity || (vechileIdList && vechileIdList.capacity),
      countryCode: country || (!!vechileIdList && vechileIdList.countryCode),
      documentDate: docdate || (vechileIdList && vechileIdList.documentDate),
      expireDate: expdate || (vechileIdList && vechileIdList.expireDate),
      licenseNumber: licence || (vechileIdList && vechileIdList.licenseNumber),
      notes: note || (vechileIdList && vechileIdList.notes),
      ownership: ownershp || (!!vechileIdList && vechileIdList.ownership),
      retailerName: retailer || (vechileIdList && vechileIdList.retailerName),
      soldToNumber: accountName,
      vehicleId: myidis,
      vehicleStatus:
        vechilest || (!!vechileIdList && vechileIdList.vehicleStatus),
      vehicleType: vechicletp || (!!vechileIdList && vechileIdList.vehicleType),
    };

    dispatch(eventActions.updateTruckMaster(data, myidis));
    props.setOpen(false);
    props.setSeachValue("");
  };

  useEffect(() => {
    if (
      updateTruckmaster &&
      updateTruckmaster.updatetruckmaster !== undefined
    ) {
      dispatch(eventActions.TruckMasterList(accountName));
    }
  }, [updateTruckmaster]);

  useEffect(() => {
    return () => {
      dispatch(eventActions.updateTruckMaster());
    };
  }, []);

  return (
    <div className="guideline_popup">
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.popupopen}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          update Truck List
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <form>
              <div className="form-group">
                <label for="Role">SoldTo Number</label>
                <input
                  type="num"
                  onChange={(event) => setSoldTo({ accountName })}
                  class="form-control"
                  placeholder="sold to number"
                  value={accountName}
                />
              </div>
              <div className="form-group disble-content">
                <label for="Role">Country Code</label>
                <select
                  name=""
                  value={
                    country ||
                    (!!vechileIdList && vechileIdList.countryCode) ||
                    ""
                  }
                  id=""
                  onChange={(event) => setCountry(event.target.value)}
                >
                  <option value="">Select Country</option>
                  <option value="TH">TH</option>
                  <option value="VN">VN</option>
                  <option value="LK">LK</option>
                </select>
              </div>
              <div className="form-group">
                <label for="Role">Retailer Name</label>
                <input
                  type="text"
                  defaultValue={vechileIdList && vechileIdList.retailerName}
                  onChange={(event) => setRetailer(event.target.value)}
                  class="form-control"
                  placeholder="Retailer Name"
                />
              </div>

              <div className="form-group">
                <label for="Role">Capacity</label>
                <input
                  type="text"
                  defaultValue={vechileIdList && vechileIdList.capacity}
                  onChange={(event) => setCapacity(event.target.value)}
                  class="form-control"
                  placeholder="Capacity"
                />
              </div>

              <div className="form-group">
                <label for="Role">Document Date</label>
                <input
                  type="date"
                  defaultValue={vechileIdList && vechileIdList.documentDate}
                  onChange={(event) => setDocDate(event.target.value)}
                  class="form-control"
                  placeholder="Add Role"
                />
              </div>
              <div className="form-group">
                <label for="Role">Expire Date</label>
                <input
                  type="date"
                  defaultValue={vechileIdList && vechileIdList.expireDate}
                  onChange={(event) => setExpDate(event.target.value)}
                  class="form-control"
                  placeholder="Add Role"
                />
              </div>
              <div className="form-group">
                <label for="Role">Licence Number</label>
                <input
                  type="text"
                  defaultValue={vechileIdList && vechileIdList.licenseNumber}
                  onChange={(event) => setLicenceNumber(event.target.value)}
                  class="form-control"
                  placeholder="Licence number"
                />
              </div>
              <div className="form-group">
                <label for="Role">Note</label>
                <input
                  type="text"
                  defaultValue={vechileIdList && vechileIdList.notes}
                  onChange={(event) => setNote(event.target.value)}
                  class="form-control"
                  placeholder="note"
                />
              </div>
              <div className="form-group disble-content">
                <label for="Role">OwnerShip</label>
                <select
                  name=""
                  id=""
                  value={
                    ownershp ||
                    (!!vechileIdList && vechileIdList.ownership) ||
                    ""
                  }
                  onChange={(event) => setOwnerShip(event.target.value)}
                >
                  <option value="">Select Ownership</option>
                  {ownership
                    ? ownership.map((item) => {
                        return <option value={item.key}>{item.key}</option>;
                      })
                    : null}
                </select>
              </div>

              <div className="form-group">
                <label for="Role">Vehicle Status</label>
                <select
                  name=""
                  value={
                    vechilest ||
                    (!!vechileIdList && vechileIdList.vehicleStatus) ||
                    ""
                  }
                  id=""
                  onChange={(event) => setVechicleStatus(event.target.value)}
                >
                  <option value="">Select Status</option>
                  {vechilestatus
                    ? vechilestatus.map((item) => {
                        return <option value={item.key}>{item.key}</option>;
                      })
                    : null}
                </select>
              </div>
              <div className="form-group">
                <label for="Role">Vehicle type</label>
                <select
                  name=""
                  value={
                    vechicletp ||
                    (!!vechileIdList && vechileIdList.vehicleType) ||
                    ""
                  }
                  id=""
                  onChange={(event) => setVechicleType(event.target.value)}
                >
                  <option value="">select type</option>
                  {vechileTypeList
                    ? vechileTypeList.map((item) => {
                        return <option value={item.key}>{item.key}</option>;
                      })
                    : null}
                </select>
              </div>
            </form>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}