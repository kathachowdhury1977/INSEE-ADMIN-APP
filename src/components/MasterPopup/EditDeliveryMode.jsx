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

export default function EditDeliveryMode(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const [deliverName, setDeliveryName] = React.useState("");
    const [status, setStatus] = React.useState("");
    const myActionDetails = props.deliveryMode;
    console.log("myActionDetails", myActionDetails);
    const Updatedeliverymode = useSelector((state) => state.updatedeliverymode);

   


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
            "id": myActionDetails.id,
            "name": deliverName || myActionDetails.name,
            "status": status || myActionDetails.satus
          }
        dispatch(eventActions.UpdateDeliverMode({ 'country': userName.countryCode, 'data':data}));
        setDeliveryName("");
        setStatus("");
        props.setOpen(false);
    }

    useEffect(() => {
        if (Updatedeliverymode && !Updatedeliverymode.loading &&
            (Updatedeliverymode.updatedeliverymode)) {
                dispatch(eventActions.getDeliveryMode(userName.countryCode));
                toast.success('Delivery Mode has been updated successfully', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
        }
    }, [Updatedeliverymode]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.UpdateDeliverMode())
        }
    }, [])



    return (
        <div className="guideline_popup edit-date">
            <Button onClick={handleClickOpen}>
                <i className="fa fa-pencil"></i>
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen} className="edit-page">
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update Delivery Mode
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            <div class="form-group">
                                <label for="customer_group">Delivey Mode Name</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="category"
                                    defaultValue={myActionDetails.name}
                                    onChange={event => setDeliveryName(event.target.value)}
                                />
                            </div>
                            <div class="form-group">
                                <label for="customer_group">Status</label>
                                <select name="" id="" value={ status || (myActionDetails && myActionDetails.satus) || ''}  onChange={event => setStatus(event.target.value)}>
                                    <option value="Active">Active</option>
                                    <option value="InActive">InActive</option>
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
