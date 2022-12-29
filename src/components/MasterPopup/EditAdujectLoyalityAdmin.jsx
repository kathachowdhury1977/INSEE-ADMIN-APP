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

export default function EditAdujectLoyalityAdmin(props) {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [status, setStatus] = React.useState('');
    const dispatch = useDispatch();
    const myActionDetails = props.adjuctAdmin;
    const updateAreaType = useSelector((state) => state.updateareatype);
    console.log("myActionDetails", myActionDetails);

    const [deductPoints, setDeductPoints] = React.useState("");
    const [remarks, setRemarks] = React.useState("");
    const [addPoint, setAddPoint] = React.useState("");

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

    console.log(myActionDetails, 'myActionDetails')

    const handleSubmit = () => { debugger
        const data = {
            "activityType": myActionDetails.activityType,
            "addPoints": addPoint,
            "customerId": myActionDetails.customerId,
            "customerName": myActionDetails.customerName,
            "customerNameInLocal": "string",
            "deductPoints": deductPoints,
            "remarks": remarks
          }
        dispatch(eventActions.updateAdjustLoyalityAdmin(data));
        props.setOpen(false);
        dispatch(eventActions.getAdjuctLoyalityAdmin( 1, 100000));
    }

    useEffect(() => {
        if (updateAreaType && !updateAreaType.loading &&
            (updateAreaType.updateareatype)) {
                dispatch(eventActions.getAreaType(userName.countryCode));
            toast.success('Area Type has been updated successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
           
        }
    }, [updateAreaType]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.UpdateAreaType())
        }
    }, [])




    return (
        <div className="guideline_popup edit-date">
            <Button onClick={handleClickOpen}>
                <i className="fa fa-pencil"></i>
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen} className="edit-page">
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update Adjust Loyality
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                        <div class="form-group">
                                <label for="country">Activity Type</label>
                                <select name="" id=""  disabled>
                                    <option selected value={myActionDetails.activityType}>{myActionDetails.activityType}</option>                                  
                                </select>
                        </div>
                            <div className="form-group">
                                <label for="customer_group">Add Points</label>
                                <input type="text"  class="form-control"
                                 disabled={myActionDetails.activityType === "Point Deduction " ? true : false } 
                                  onChange={event => setAddPoint(event.target.value)} 
                                  defaultValue={myActionDetails.activityType === "Bonus " ? myActionDetails.addPoints : ''}
                                  />
                            </div>
                            <div class="form-group">
                                <label for="customer_group">customer Id</label>
                                <input type="text"
                                    disabled
                                    class="form-control"
                                    defaultValue={myActionDetails.customerId}
                                    
                                />
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Customer Name</label>
                                <input type="text"
                                    disabled
                                    class="form-control"                                   
                                    defaultValue={myActionDetails.customerName != null ? myActionDetails.customerName : ''}
                                   
                                />
                            </div>

                            <div className="form-group">
                            <label for="customer_group">Deduct Points</label>
                            <input type="text"  class="form-control" 
                            onChange={event => setDeductPoints(event.target.value)} 
                            defaultValue={myActionDetails.activityType === "Point Deduction " ? myActionDetails.addPoints : ''}
                            disabled={myActionDetails.activityType === "Bonus " ? true : false} 
                            
                           />
                            </div>
                            <div className="form-group">
                                <label for="customer_group">Remarks</label>
                                <input type="text"  class="form-control" 
                                onChange={event => setRemarks(event.target.value)} 
                                defaultValue={myActionDetails.remarks}
                                />
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
