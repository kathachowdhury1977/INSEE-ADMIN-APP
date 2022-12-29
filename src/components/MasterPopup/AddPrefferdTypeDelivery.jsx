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
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


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

export default function AddPrefferdTypeDelivery(props) {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [upload, setUpload] = React.useState("");
    const [materialGroup, setMaterialGroup] = React.useState("");
    const [salesDistrict, setSalesDistrict] = React.useState("");
    const [shippingType, setShippingType] = React.useState("");
    const [value, setValue] = React.useState("");

    const addpreferredtruckDelivery = useSelector((state) => state.addprefferedtruckdelivery);


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

   


    const handleSubmit = () => {

        let data = {
            "id": "string",
            "materialGroupCode": materialGroup,
            "salesDistrictOfShipTo": salesDistrict,
            "shippingType": shippingType,
            "value": value
        }

        dispatch(eventActions.postPrefferedTruckDelivery(userName.countryCode,data));
        setOpen(false);
    }

    useEffect(() => {
        if (addpreferredtruckDelivery && !addpreferredtruckDelivery.loading &&
            (addpreferredtruckDelivery.addprefferedtruckdelivery)) {
                dispatch(eventActions.getPrefferedTruckDelivery(userName.countryCode));
            toast.success('Preferred truck Delivery added successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            
        }
    }, [addpreferredtruckDelivery]);

    useEffect(() => {
        return () => {
            dispatch(eventActions.postPrefferedTruckDelivery())
        }
    }, [])

    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Preferred Truck Type Delivery
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>

                            <div className="form-group">
                                <label for="group_code"> Material Group Code </label>
                                <input type="text" className="form-control" onChange={(event) => setMaterialGroup(event.target.value)} />
                            </div>
                            <div className="form-group">
                                <label for="group_code"> Sales District Ship To </label>
                                <input type="text" className="form-control" onChange={(event) => setSalesDistrict(event.target.value)} />
                            </div>

                            <div className="form-group">
                                <label for="group_code">  Shipping Type</label>
                                <input type="text" className="form-control" onChange={(event) => setShippingType(event.target.value)} />
                            </div>
                            <div className="form-group">
                                <label for="group_code"> Value</label>
                                <input type="text" className="form-control" onChange={(event) => setValue(event.target.value)} />
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
