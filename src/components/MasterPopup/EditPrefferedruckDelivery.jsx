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

export default function EditPrefferedruckDelivery(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const [materialGroup, setMaterialGroup] = React.useState("");
    const [salesDistrict, setSalesDistrict] = React.useState("");
    const [shippingType, setShippingType] = React.useState("");
    const [valueItem, setValue] = React.useState("");
    const myActionDetails = props.truckType;
    const updatepreferredtruckDelivery = useSelector((state) => state.updateprefferedtruckdelivery);
    console.log("myActionDetails", myActionDetails);


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
            
               "value" : valueItem || myActionDetails.value,
               "shippingType" : shippingType || myActionDetails.shippingType,
               "salesDistrictOfShipTo" : salesDistrict || myActionDetails.salesDistrictOfShipTo,
               "materialGroupCode" : materialGroup || myActionDetails.materialGroupCode    
            
        }

        dispatch(eventActions.updatePrefferedTruckDelivery({'country':userName.countryCode,'data':data}));
        setMaterialGroup("");
        setSalesDistrict("");
        setShippingType("");
        setValue("");
        props.setOpen(false);
    }

    useEffect(() => {
        if (updatepreferredtruckDelivery && !updatepreferredtruckDelivery.loading &&
            (updatepreferredtruckDelivery.updateprefferedtruckdelivery)) {
                dispatch(eventActions.getPrefferedTruckDelivery(userName.countryCode));
            toast.success('Preferred truck Delivery updated successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            
        }
    }, [updatepreferredtruckDelivery]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.postPrefferedTruckDelivery())
        }
    }, [])


    return (
        <div className="guideline_popup edit-date">
            <Button onClick={handleClickOpen}>
                <i className="fa fa-pencil"></i>
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen} className="edit-page">
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update Prefferd Truck Type Delivery
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>

                            <div className="form-group">
                                <label for="group_code"> Material Group Code </label>
                                <input type="text" 
                                className="form-control" 
                                disabled
                                defaultValue={myActionDetails.materialGroupCode}
                                onChange={(event) => setMaterialGroup(event.target.value)} />
                            </div>
                            <div className="form-group">
                                <label for="group_code"> Sales District Ship To </label>
                                <input type="text"
                                 className="form-control" 
                                 disabled
                                 defaultValue={myActionDetails.salesDistrictOfShipTo}
                                 onChange={(event) => setSalesDistrict(event.target.value)} />
                            </div>

                            <div className="form-group">
                                <label for="group_code">Shipping Type</label>
                                <input type="text" 
                                className="form-control" 
                                disabled
                                defaultValue={myActionDetails.shippingType}
                                onChange={(event) => setShippingType(event.target.value)} />
                            </div>
                            <div className="form-group">
                                <label for="group_code"> Value </label>
                                <input type="text" 
                                className="form-control"
                                
                                defaultValue={myActionDetails.value} 
                                onChange={(event) => setValue(event.target.value)} />
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
