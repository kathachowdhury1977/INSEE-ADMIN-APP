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
import { useLocation } from 'react-router-dom';



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

export default function EditRetailersubDealerPopup(props) {
    const [open, setOpen] = React.useState(false);
    const details = props.groupDetail;
    const [markDelete, setMartDelete] = React.useState();
    const dispatch = useDispatch();
    const location = useLocation();
    const { retailerCode } = location.state;
    console.log("details", details);
    const updateRetailer = useSelector((state) => state.updateretailersoldto);



   console.log("markDeletemarkDelete",markDelete);

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
        dispatch(eventActions.updateRetailerSoldTo(
            {"markDelete":markDelete ? markDelete : details && details.markDelete, 
            "retailerCode":retailerCode, 
            "soldtonumber":details && details.soldtoNumber}));
        setMartDelete();
        props.setOpen(false);
        props.setRetailerSearch("");

    };

    
    useEffect(() => {
        if (updateRetailer && !updateRetailer.loading &&
            (updateRetailer.updateretailersoldto)) {
                dispatch(eventActions.retailerDetailList(retailerCode));
                toast.success('sub dealer sold to Mark is updated', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
            
        }
    }, [updateRetailer]);
    
    
    useEffect(() => {
        return () => {
            dispatch(eventActions.updateRetailerSoldTo())
        }
    }, [])

 
    console.log("detailsKK",details);


    return (
        <div className="guideline_popup">
            <Button className="button-popup-desi" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update  Sold To
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>

                            {/* defaultValue={!!dashboardimageDetails && dashboardimageDetails.startDate || ''} */}
                            <div className="form-group">
                                <label for="sdcode">Sold To Number</label>
                                <input type="text"
                                    class="form-control"
                                    defaultValue={details && details.soldtoNumber}
                                    disabled />
                            </div>
                            <div className="form-group">
                                <label for="en">Account Name(EN)</label>
                                <input type="text"
                                    class="form-control"
                                    defaultValue={details && details.accountName}
                                    disabled />
                            </div>

                            <div className="form-group">
                                <label for="th">Account Name(TH)</label>
                                <input type="text"
                                    class="form-control"
                                    defaultValue={details && details.accountNameTH} 
                                    disabled/>
                            </div>

                            <div className="form-group">
                                <label for="th">Relationship With Sold To</label>
                               <select name="" id="" value ={!!markDelete ?  markDelete : (!!details && details.markDelete) || ''}
                               onChange={(event) => setMartDelete(event.target.value)}>
                                   <option value="false">Active</option>
                                   <option value="true">InActive</option>
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
