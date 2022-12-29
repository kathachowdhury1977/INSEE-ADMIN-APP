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

export default function EditActivityTarget(props) {
    const [open, setOpen] = React.useState(false);
    const [teritory, setTerritorynumber] = React.useState("");
    const [salesRepId, setSalesRepId] = React.useState("");
    const [beatId, setBeatId] = React.useState("");
    const [responsible, setResposible] = React.useState("");
    const [visitMonth, setVisitMonth] = React.useState("");
    const [existingCustomer, setExistingCustomer] = React.useState("");
    const [nonInactive, setNonInActiveCustomer] = React.useState("");
    const [defaultLocation, setDefaultLocation] = React.useState("");
    const dispatch = useDispatch();
    const myActionDetails = props.activityTargetEdit;
    console.log("ActivityTarget", myActionDetails);
    const updateActivityTarget = useSelector((state) => state.updateactivitytarget);


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

                "defaultStartAndFinishLocation": defaultLocation ? defaultLocation : myActionDetails.defaultStartAndFinishLocation, 
                "salesRepId": salesRepId ? salesRepId : myActionDetails.salesRepId,         
                "visitsPerMonth": visitMonth ? visitMonth : myActionDetails.visitsPerMonth  
        }

        dispatch(eventActions.updateActivityTarget({'data' :data, 'id': myActionDetails.id}));
        
        setVisitMonth("");
        setDefaultLocation("");
        props.setOpen(false);
    }

  

    useEffect(() => {
        if (updateActivityTarget && !updateActivityTarget.loading &&
            (updateActivityTarget.updateactivitytarget)) {
                dispatch(eventActions.getActivityTarget());
            toast.success('Activity Target updated successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
           
        }
    }, [updateActivityTarget]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.updateActivityTarget())
        }
    }, [])



    return (
        <div className="guideline_popup edit-date">
            <Button onClick={handleClickOpen}>
                <i className="fa fa-pencil"></i>
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen} className="edit-page">
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update Activity Target
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            <div class="form-group">
                                <label for="customer_group">Sales Rep Id</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="category"
                                    onChange={(event) => setSalesRepId(event.target.value)}
                                    defaultValue={myActionDetails.salesRepId}
                                    
                                />
                            </div>
                           

                           
                            

                            <div class="form-group">
                                <label for="customer_group">Visit Per Month</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={myActionDetails.visitsPerMonth}
                                    onChange={(event) => setVisitMonth(event.target.value)} />
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Default Start & Finish Location</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    
                                    defaultValue={myActionDetails.defaultStartAndFinishLocation} 
                                    onChange={(event) => setDefaultLocation(event.target.value)}/>
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
