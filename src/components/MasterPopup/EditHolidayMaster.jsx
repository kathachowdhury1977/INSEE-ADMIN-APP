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
import moment from 'moment'


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

export default function EditHolidayMaster(props) {
    const [open, setOpen] = React.useState(false);
    const [day, setDay] = React.useState("");
    const [date, setDate] = React.useState("");
    const [holidayName, setHolidayName] = React.useState("");
    const dispatch = useDispatch();
    const myActionDetails = props.actionCategory;
    console.log("myActionDetails", myActionDetails);
    const updateHolidayMaster = useSelector((state) => state.updateholidaymaster);


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
            "date": date || myActionDetails.date,
            "occasion": holidayName || myActionDetails.occasion
        }
        dispatch(eventActions.updateAddHolidayMaster({ 'id': myActionDetails.id, 'data': data }));
        setDate('');
        setHolidayName('');
        props.setOpen(false);
    }

    useEffect(() => {
        if (updateHolidayMaster && !updateHolidayMaster.loading &&
            (updateHolidayMaster.updateholidaymaster)) {
            dispatch(eventActions.getAllHolidayMasterList());
            toast.success('Holiday has been updated successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }, [updateHolidayMaster]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.updateAddHolidayMaster())
        }
    }, [])



    return (
        <div className="guideline_popup edit-date">
           
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen} className="edit-page">
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update Holiday Master
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>

                            <div class="form-group">
                                <label for="customer_group">Date</label>
                                <input type="date"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={myActionDetails.date}
                                    onChange={event => setDate(event.target.value)}
                                />
                            </div>
                            <div class="form-group">
                                <label for="customer_group">Holiday Name</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={myActionDetails.occasion}
                                    onChange={event => setHolidayName(event.target.value)}
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
