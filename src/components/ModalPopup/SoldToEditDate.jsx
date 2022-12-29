import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
import moment from "moment";

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

export default function SoldToEditDate(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const { accountName } = location.state;
  const soldtoUpdateDate = useSelector(
    (state) => state.assignsoldtoproductupdatedate
  );
  const soldtoProductList = useSelector(
    (state) => state.soldtoproductgrouplist
  );
  const [startdate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const GetSoldto = useSelector(
    (state) => state.getassignsoldtobyid.getassignsoldtobyid
  );

  useEffect(() => {
    props.myproductId &&
      dispatch(
        eventActions.getdateAssignSoldTobyId(props.myproductId, accountName)
      );
  }, [props.myproductId, accountName, soldtoProductList]);

  let myStartDate =
    GetSoldto && moment(GetSoldto.startDate, "DD-MM-YYYY").format("YYYY-MM-DD");
  let myEndDate =
    GetSoldto && moment(GetSoldto.endDate, "DD-MM-YYYY").format("YYYY-MM-DD");

  useEffect(() => {
    if (props.popupopen) {
      setOpen(true);
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleSubmit = () => {
    const requestData = {
      productList: [
        {
          endDate: enddate || (!!GetSoldto && GetSoldto.endDate),
          productGroupId: props.myproductId,
          productId: "string",
          soldToNumber: accountName,
          startDate: startdate || (!!GetSoldto && GetSoldto.startDate),
        },
      ],
    };
    dispatch(eventActions.assignSoldToProductUpdateDate(requestData));
    props.setOpen(false);
    setStartDate("");
    setEndDate("");
  };

  useEffect(() => {
    if (
      !!soldtoUpdateDate &&
      !!soldtoUpdateDate.assignsoldtoproductupdatedate &&
      soldtoUpdateDate.assignsoldtoproductupdatedate !== undefined
    ) {
      dispatch(eventActions.soldtoProductGroupList(accountName));
    }
  }, [soldtoUpdateDate]);

  useEffect(() => {
    return () => {
      dispatch(eventActions.assignSoldToProductUpdateDate());
    };
  }, []);

  return (
    <div className="guideline_popup">
      <Button className="button-popup-desi" onClick={handleClickOpen}>
        {props.title}
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.popupopen}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Update Start Date & End Date
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <form>
              <div class="form-group">
                <label for="upload">Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  onChange={(event) =>
                    setStartDate(
                      moment(event.target.value).format("DD-MM-YYYY")
                    )
                  }
                  defaultValue={myStartDate || ""}
                />
              </div>
              <div class="form-group">
                <label for="upload">End Date</label>
                <input
                  type="date"
                  className="form-control"
                  onChange={(event) =>
                    setEndDate(moment(event.target.value).format("DD-MM-YYYY"))
                  }
                  defaultValue={myEndDate || ""}
                />
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
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}