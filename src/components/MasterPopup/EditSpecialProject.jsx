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

export default function EditSpecialProject(props) {
    const [open, setOpen] = React.useState(false);
    const [specialName, setSpecialProjectName] = React.useState("");
    const dispatch = useDispatch();
    const myActionDetails = props.specialProjectI;
    console.log("specialProjectI", myActionDetails);
    const updatepecialproject = useSelector((state) => state.updatespecialprojectdelivery);


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
            "productCode": myActionDetails.productCode,
            "productDescription": myActionDetails.productDescription,
            "salesDistrictOfShipTo": myActionDetails.salesDistrictOfShipTo,
            "shippingType": myActionDetails.shippingType,
            "value": specialName || myActionDetails.value

        }

        dispatch(eventActions.updateSpecialProjectDelivey({ 'country': userName.countryCode, 'data': data }));
        setSpecialProjectName("");
        props.setOpen(false);
    }

  

    useEffect(() => {
        if (updatepecialproject && !updatepecialproject.loading &&
            (updatepecialproject.updatespecialprojectdelivery)) {
            toast.success('Special Project updated successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            dispatch(eventActions.resetAddSpecialProjectReducer());
            dispatch(eventActions.getSpecialProject(userName.countryCode));
        }
    }, [updatepecialproject]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.updateSpecialProjectDelivey())
        }
    }, [])



    return (
        <div className="guideline_popup edit-date">
            <Button onClick={handleClickOpen}>
                <i className="fa fa-pencil"></i>
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen} className="edit-page">
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update Special Project Delivery
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            <div class="form-group">
                                <label for="customer_group">Special Project Name</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="category"
                                    defaultValue={myActionDetails.value}
                                    onChange={(event) => setSpecialProjectName(event.target.value)}
                                />
                            </div>
                            <div class="form-group">
                                <label for="customer_group">Project Code</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    disabled
                                    defaultValue={myActionDetails.productCode} />
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Project Description</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    disabled
                                    defaultValue={myActionDetails.productDescription} />
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Sales Description of ship to</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    disabled
                                    defaultValue={myActionDetails.salesDistrictOfShipTo} />
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Shipping Type</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    disabled
                                    defaultValue={myActionDetails.shippingType} />
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
