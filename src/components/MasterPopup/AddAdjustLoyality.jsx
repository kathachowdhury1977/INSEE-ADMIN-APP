import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
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
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
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

export default function AddAdjustLoyality(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const [country, setCountry] = React.useState("TH");
    const [upload, setUpload] = React.useState("");

    const [activityType, setActivityType] = React.useState("");
    const [addPoint, setAddPoint] = React.useState("");
    const [customerId, setCustomerId] = React.useState("");

    const [deductPoints, setDeductPoints] = React.useState("");
    const [remarks, setRemarks] = React.useState("");
    const [customerType, setCustomerType] = React.useState("");

    const [pointDedDisbale, setpointDedDisbale] = React.useState(false);
    const [addpointDedDisbale, setAddpointDedDisbale] = React.useState(false);


    const [customerName, setCustomerName] = React.useState("");
    const customerList = useSelector((state) => state.loyaltycustomerlist.loyaltycustomerlist);
    const AdjustLoyalityAdmin = useSelector((state) => state.addadjustloyalityadmin);
    const DealerCustomerName = useSelector((state) => state.dealercustomername.dealercustomername);
    const SubDealerCustomerName = useSelector((state) => state.retailercontactlist.retailercontactlist);


    useEffect(() => {
        dispatch(eventActions.loyaltyCustomerTypeList());
    }, []);

    useEffect(() => {
        dispatch(eventActions.DealerCustomerName(customerId));
    }, [customerId]);

    useEffect(() => {
        dispatch(eventActions.RetailerContactList(customerId));
    }, [customerId]);

    console.log("DealerCustomerName", DealerCustomerName && DealerCustomerName.accountName);
    console.log("SubDealerCustomerName", SubDealerCustomerName && SubDealerCustomerName.retailerName);

    const deductPointsHandler = (event) => {
        if (!isNaN(event.target.value)) {
            setDeductPoints(event.target.value);
        }
    }

    const addPointHandler = (event) => {
        if (!isNaN(event.target.value)) {
            setAddPoint(event.target.value);
        }
    }

    const myCustomerList = (event) => {
        setCustomerType(event.target.value);
        setCustomerId();
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    const uploadXl = (event) => {
        setUpload(event.target.files[0]);
    };


    console.log("customerName", customerName);
    const handleSubmit = () => {
        debugger
        const data = {
            "activityType": activityType,
            "addPoints": addPoint,
            "customerId": customerId,
            "customerName": DealerCustomerName && DealerCustomerName.accountName || SubDealerCustomerName && SubDealerCustomerName.retailerName,
            "customerNameInLocal": "string",
            "customerType": customerType,
            "deductPoints": deductPoints,
            "remarks": remarks
        }
        console.log("myadject", data);
        dispatch(eventActions.addAdjustLoyalityAdmin(data));

    }



    useEffect(() => {
        if (!!AdjustLoyalityAdmin && !!AdjustLoyalityAdmin.addadjustloyalityadmin && !!AdjustLoyalityAdmin.addadjustloyalityadmin !== undefined) {
            dispatch(eventActions.getAdjuctLoyalityAdmin(1, 30));
            toast.success('Adjust admin added successfully', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setActivityType("");
            setAddPoint("");
            setCustomerId("");
            setCustomerName("");
            setDeductPoints("");
            setCustomerType("");
            setRemarks("");
            setpointDedDisbale(false);
            setAddpointDedDisbale(false);
            setOpen(false);
        }
        else if (!!AdjustLoyalityAdmin && AdjustLoyalityAdmin.error) {
            toast.success(AdjustLoyalityAdmin.error, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }, [AdjustLoyalityAdmin])

    useEffect(() => {
        return () => {
            dispatch(eventActions.addAdjustLoyalityAdmin())
        }
    }, [])

    const handleActivityType = (event) => {
        debugger
        setActivityType(event.target.value)
        if (event.target.value === "Bonus") {
            setpointDedDisbale(true)
            setAddpointDedDisbale(false)
        }
        if (event.target.value === "Point Deduction") {
            setpointDedDisbale(false)
            setAddpointDedDisbale(true)
        }

    }


    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen} title="Upload adjust loyality">
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Adjust Loyality
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>

                            <div class="form-group">
                                <label for="country">Activity Type <span className="remark">*</span></label>
                                <select name="" id="" onChange={(event) => handleActivityType(event)}>
                                    <option selected disabled value="">Please select</option>
                                    <option value="Bonus">Bonus</option>
                                    <option value="Point Deduction">Point Deduction</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="customer_group">Add Points
                                    {activityType === "Bonus" ? <span className="remark"> * </span> : ""}
                                </label>
                                <input type="text" class="form-control" value={addPoint} disabled={addpointDedDisbale} onChange={(event) => addPointHandler(event)} placeholder="Please enter add points" />
                            </div>

                            <div className="form-group">
                                <label for="segment">Customer Type  <span className="remark">*</span></label>
                                <select name="" id="" onChange={myCustomerList}>
                                    <option value="">Select Customer Type</option>
                                    {customerList
                                        ? customerList.map((list) => {
                                            return (
                                                <option value={list.value}>{list.key}</option>
                                            );
                                        })
                                        : null
                                    }

                                </select>
                            </div>


                            {customerType === "Dealer" ?
                                <div className="form-group">
                                    <label for="customer_group">Customer Id <span className="remark"> * </span></label>
                                    <input type="text" class="form-control" onChange={event => setCustomerId(event.target.value)} placeholder="Please enter customer id" />
                                </div> : ''}


                            {customerType === "Sub Dealer" ?
                                <div className="form-group">
                                    <label for="customer_group">Customer Id <span className="remark"> * </span></label>
                                    <input type="text" class="form-control" onChange={event => setCustomerId(event.target.value)} placeholder="Please enter customer id" />
                                </div> : ''}



                            {customerType === "Dealer" && customerId ?
                                <div className="form-group">
                                    <label for="customer_group">Customer Name</label>

                                    <input type="text" class="form-control" value={DealerCustomerName && DealerCustomerName.accountName} onChange={event => setCustomerName(DealerCustomerName && DealerCustomerName.accountName)} placeholder="Please enter customer name" />
                                </div> : ""
                            }


                            {customerType === "Sub Dealer" && customerId ?
                                <div className="form-group">
                                    <label for="customer_group">Customer Name</label>
                                    <input type="text" class="form-control" value={SubDealerCustomerName && SubDealerCustomerName.retailerName} onChange={event => setCustomerName(SubDealerCustomerName && SubDealerCustomerName.retailerName)} placeholder="Please enter customer name" />
                                </div>
                                : ""
                            }

                            <div className="form-group">
                                <label for="customer_group">Deduct Points
                                    {activityType === "Point Deduction" ? <span className="remark"> * </span> : ""}
                                </label>
                                <input type="text" class="form-control" value={deductPoints} disabled={pointDedDisbale} onChange={(event) => deductPointsHandler(event)} placeholder="Please enter deduct points" />
                            </div>
                            <div className="form-group">
                                <label for="customer_group">Remarks  <span className="remark">*</span></label>
                                <input type="text" class="form-control" onChange={event => setRemarks(event.target.value)} placeholder="Please enter remarks" />
                            </div>


                        </form>

                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmit} color="primary">
                        Submit
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
