import React, { useState, useEffect } from 'react';
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

export default function EditCustomerTier(props) {
    const [open, setOpen] = React.useState(false);
    const details = props.groupDetail;
    const dispatch = useDispatch();
    console.log("details", details);

    const getautocustomer = useSelector((state) => state.getautocustomertier.getautocustomertier);
    const updateCustomerTier = useSelector((state) => state.updatecustomertier);
    const customerTierlist = useSelector((state) => state.customertierlist.customertierlist);

    useEffect(() => {
        props.groupDetail.id && dispatch(eventActions.getautoCustomerTier(props.groupDetail.id));
    }, [props.groupDetail.id, customerTierlist])



    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    const [soldtonumber, setSoldtoNumber] = useState("");
    const [currenttier, setCurrentTier] = React.useState('');
    const [createon, setCreateOn] = React.useState('')


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
            "createdOn": createon || !!getautocustomer && getautocustomer.createdDateInStringFormat,
            "customerTierStatus": currenttier || !!getautocustomer && getautocustomer.customerTierStatus,
            "soldToNumber": soldtonumber || !!getautocustomer && getautocustomer.soldToNumber
        }
        console.log("my console", data);
        dispatch(eventActions.updateCustomerTier(data, props.groupDetail.id));
        props.setOpen(false);

        setSoldtoNumber("");
        setCurrentTier('');
        setCreateOn('');
    };


    useEffect(() => {
        if (!!updateCustomerTier && !!updateCustomerTier.updatecustomertier && updateCustomerTier.updatecustomertier !== undefined) {
            dispatch(eventActions.getCustomerTierList(49, '', 1));
        }
    }, [updateCustomerTier])

    return (
        <div className="guideline_popup">
            <Button className="button-popup-desi" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update Customer Tier
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>

                            {/* defaultValue={!!dashboardimageDetails && dashboardimageDetails.startDate || ''} */}
                            <div className="form-group">
                                <label for="sdate">Sold to Number</label>
                                <input type="text"
                                    onChange={event => setSoldtoNumber(event.target.value)}
                                    class="form-control"
                                    disabled
                                    defaultValue={!!getautocustomer && getautocustomer.soldToNumber || ''} />
                            </div>
                            <div className="form-group">
                                <label for="sdate">Current Tier Status</label>
                                <input type="text"
                                    onChange={event => setCurrentTier(event.target.value)}
                                    class="form-control"
                                    defaultValue={!!getautocustomer && getautocustomer.customerTierStatus || ''} />
                            </div>

                            <div className="form-group">
                                <label for="sdate">Create On</label>
                                <input type="date"
                                    onChange={event => setCreateOn(event.target.value)}
                                    class="form-control"
                                    defaultValue={!!getautocustomer && getautocustomer.createdDateInStringFormat || ''} />
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
