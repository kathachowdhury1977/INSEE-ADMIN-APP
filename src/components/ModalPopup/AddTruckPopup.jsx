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
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { eventActions } from "../../_actions";
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

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

export default function AddTruckPopup(props) {
    const [open, setOpen] = React.useState(false);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const ownership = useSelector((state) => state.getownership.getownership);
    const vechilestatus = useSelector((state) => state.vechilestatuslist.vechilestatuslist);
    const vechileTypeList = useSelector((state) => state.vechiletypelist.vechiletypelist);
    const addTruck = useSelector((state) => state.addtruckmaster);
    const location = useLocation();
    const { accountName } = location.state;

    const [country, setCountry] = React.useState("");
    const [capacity, setCapacity] = React.useState("");
    const [docdate, setDocDate] = React.useState("");
    const [expdate, setExpDate] = React.useState("");
    const [licence, setLicenceNumber] = React.useState("");
    const [note, setNote] = React.useState("");
    const [ownershp, setOwnerShip] = React.useState("");
    const [vechilest, setVechicleStatus] = React.useState("");
    const [vechicletp, setVechicleType] = React.useState("");
    const [retailer, setRetailer] = React.useState("");
    const [soldton, setSoldTo] = React.useState({ accountName });




    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);


    useEffect(() => {
        dispatch(eventActions.getOwnerShip());
    }, []);

    useEffect(() => {
        dispatch(eventActions.vechileStatusList());
    }, []);

    useEffect(() => {
        dispatch(eventActions.vechileTypeList(userName.countryCode));
    }, []);

    console.log("vechileTypeList", vechileTypeList);
    // console.log("vechileType", vechileType);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {

        let data = {

            "capacity": capacity,
            "countryCode": country,
            "documentDate": docdate,
            "expireDate": expdate,
            "licenseNumber": licence,
            "notes": note,
            "ownership": ownershp,
            "retailerName": retailer,
            "soldToNumber": accountName,
            "vehicleId": "string",
            "vehicleStatus": vechilest,
            "vehicleType": vechicletp

        }

        dispatch(eventActions.AddTruckMaster(data));
        props.setSeachValue("");


    }

    useEffect(() => {
        if (!!addTruck && !!addTruck.addtruckmaster && addTruck.addtruckmaster !== undefined) {
            dispatch(eventActions.TruckMasterList(accountName));
            toast.success('Truck has been added successfully', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setOpen(false);
        }
        else if (!!addTruck && addTruck.error) {
            toast.success(addTruck.error, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }, [addTruck])


    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Truck
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            <div className="form-group">
                                <label for="Role">SoldTo Number</label>
                                <input type="num" disabled onChange={event => setSoldTo({ accountName })} class="form-control" placeholder="ex. 011000039" value={accountName} />
                            </div>
                            <div className="form-group">
                                <label for="Role">Country Code</label>
                                <select name="" id="" onChange={event => setCountry(event.target.value)}>
                                    <option value="">Select Country</option>
                                    <option value="TH">TH</option>
                                    <option value="VN">VN</option>
                                    <option value="LK">LK</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="Role">Retailer Name</label>
                                <input type="text" onChange={event => setRetailer(event.target.value)} class="form-control" placeholder="Retailer Name" />
                            </div>



                            <div className="form-group">
                                <label for="Role">Capacity</label>
                                <input type="text" onChange={event => setCapacity(event.target.value)} class="form-control" placeholder="2345.12" />
                            </div>

                            <div className="form-group">
                                <label for="Role">Document Date</label>
                                <input type="date" onChange={event => setDocDate(event.target.value)} class="form-control" placeholder="Add Role" />
                            </div>
                            <div className="form-group">
                                <label for="Role">Expire Date</label>
                                <input type="date" onChange={event => setExpDate(event.target.value)} class="form-control" placeholder="Add Role" />
                            </div>
                            <div className="form-group">
                                <label for="Role">Licence Number</label>
                                <input type="text" onChange={event => setLicenceNumber(event.target.value)} class="form-control" placeholder="Licence no. ex. TH12-1234" />
                            </div>
                            <div className="form-group">
                                <label for="Role">Note</label>
                                <input type="text" onChange={event => setNote(event.target.value)} class="form-control" placeholder="note" />
                            </div>
                            <div className="form-group">
                                <label for="Role">OwnerShip</label>
                                <select name="" id="" onChange={event => setOwnerShip(event.target.value)}>
                                    <option value="">Select Ownership</option>
                                    {ownership
                                        ? ownership.map((item) => {
                                            return (
                                                <option value={item.key}>{item.key}</option>
                                            );
                                        })
                                        : null
                                    }
                                </select>
                            </div>

                            <div className="form-group">
                                <label for="Role">Vehicle Status</label>
                                <select name="" id="" onChange={event => setVechicleStatus(event.target.value)}>
                                    <option value="">Select Status</option>
                                    {vechilestatus
                                        ? vechilestatus.map((item) => {
                                            return (
                                                <option value={item.key}>{item.key}</option>
                                            );
                                        })
                                        : null
                                    }

                                </select>

                            </div>
                            <div className="form-group">
                                <label for="Role">Vechile type</label>
                                <select name="" id="" onChange={event => setVechicleType(event.target.value)}>
                                    <option value="">select type</option>
                                    {vechileTypeList
                                        ? vechileTypeList.map((item) => {
                                            return (
                                                <option value={item.key}>{item.key}</option>
                                            );
                                        })
                                        : null
                                    }

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
