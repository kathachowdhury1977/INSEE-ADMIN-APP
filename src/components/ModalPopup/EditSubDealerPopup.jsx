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

export default function EditSubDealerPopup(props) {
    const location = useLocation();
    const { accountName } = location.state;
    const [open, setOpen] = React.useState(false);
    const [markDelate, setMarkDelete] = React.useState();
    const updateSubDealer = useSelector((state) => state.updatesubdealersoldto);

    const details = props.groupDetail;
    const dispatch = useDispatch();

    console.log("markDelate", markDelate);

     console.log("markDelatemarkDelate",details)


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


    const handleSubmit = (event) => {
         dispatch(eventActions.updateSubDealerSoldTo({'markDelete':markDelate ? markDelate : details.markdelete, 'retailerCode':details.retailerCode, 'soldtonumber':details.accountName}));
         setMarkDelete();
         props.setOpen(false);
         props.setSearchValue("");

    };


    useEffect(() => {
        if (updateSubDealer && !updateSubDealer.loading &&
            (updateSubDealer.updatesubdealersoldto)) {
                dispatch(eventActions.subDealerData(1, true, '', accountName, 20));
                toast.success('sub dealer Mark is updated', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
            
        }
    }, [updateSubDealer]);
    
    
    useEffect(() => {
        return () => {
            dispatch(eventActions.updateSubDealerSoldTo())
        }
    }, [])


  console.log("details",details);



    return (
        <div className="guideline_popup">
            <Button className="button-popup-desi" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update  Sub Dealer
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>

                            {/* defaultValue={!!dashboardimageDetails && dashboardimageDetails.startDate || ''} */}
                            <div className="form-group">
                                <label for="sdcode">Sub Dealer Code</label>
                                <input type="text"
                                    class="form-control"
                                    disabled
                                    defaultValue={details && details.retailerCode} />
                            </div>
                            <div className="form-group">
                                <label for="en">Sub Dealer Name(EN)</label>
                                <input type="text"
                                    class="form-control"
                                    disabled
                                    defaultValue={details && details.retailerName} />
                            </div>
                            <div className="form-group">
                                <label for="th">Sub Dealer Name(TH)</label>
                                <input type="text"
                                    class="form-control"
                                    disabled
                                    defaultValue={details && details.retailerNameInLocal} />
                            </div>
                            <div className="form-group">
                                <label for="th">Mark Delete</label>
                               <select name="markDelate" id="" onChange={event => setMarkDelete(event.target.value)} value ={!!markDelate ? markDelate : (!!details && details.markdelete) || ''}>
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
