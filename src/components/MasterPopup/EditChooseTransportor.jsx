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

export default function EditChooseTransportor(props) {
    const [open, setOpen] = React.useState(false);
    const [customerName, setCustomerName] = React.useState("");
    const [transportorName, setTransportorName] = React.useState("");
    const [country, setCountry] = React.useState("");
    const dispatch = useDispatch();
    const myActionDetails = props.chooseTransport;
    console.log("myActionDetails", myActionDetails);
    const updatechooseTransportor = useSelector((state) => state.updatechoosetransportorzone);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

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
        let data = {
            "countryCode": country || myActionDetails.countryCode,
            "customerCode": myActionDetails.customerCode,
            "customerName": customerName || myActionDetails.customerName,
            "id": myActionDetails.id,
            "transporterCode": myActionDetails.transporterCode,
            "transporterName": transportorName || myActionDetails.transporterName
        }
        dispatch(eventActions.updateChooseTransportorZone({'country':userName.countryCode, 'data':data}));
        setCustomerName("");
        setTransportorName("");
        setCountry("");
        props.setOpen(false);
    }



    useEffect(() => {
        if (updatechooseTransportor && !updatechooseTransportor.loading &&
            (updatechooseTransportor.updatechoosetransportorzone)) {
            dispatch(eventActions.getChooseTransportorZone(userName.countryCode));
            toast.success('transportor zone updated successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }, [updatechooseTransportor]);

    useEffect(() => {
        return () => {
            dispatch(eventActions.updateChooseTransportorZone())
        }
    }, [])



    return (
        <div className="guideline_popup edit-date">
            <Button onClick={handleClickOpen}>
                <i className="fa fa-pencil"></i>
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen} className="edit-page">
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update Choose Transportor Zone
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            <div class="form-group">
                                <label for="customer_group">Customer Code</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="category"
                                    defaultValue={myActionDetails.customerCode}
                                    disabled
                                />
                            </div>
                            <div class="form-group">
                                <label for="customer_group">Customer Name</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={myActionDetails.customerName}
                                    onChange={(event) => setCustomerName(event.target.value)}
                                     />
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Transportor Code</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    disabled
                                    defaultValue={myActionDetails.transporterCode} />
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Transportor Name</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={myActionDetails.transporterName}
                                    onChange={(event) => setTransportorName(event.target.value)}
                                     />
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Country</label>
                                    <select name="conutry" id="" value={country || (myActionDetails.countryCode) || ''}
                                     onChange={(event) => setCountry(event.target.value)}>
                                        <option value="TH">TH</option>
                                        <option value="LK">LK</option>
                                        <option value="VN">VN</option>
                                    </select>
                            </div>
                        </form>

                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmit} color="primary">
                        Update
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
