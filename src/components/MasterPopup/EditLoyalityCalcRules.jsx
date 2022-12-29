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

export default function EditLoyalityCalcRules(props) {
    const [open, setOpen] = React.useState(false);
    const [loyalityPoint, setLoyalityPoint] = React.useState('');
    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const dispatch = useDispatch();
    const myActionDetails = props.calcRules;
    const updateLoyality = useSelector((state) => state.updateloyaltypointform);
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

    // ||

    const handleSubmit = () => {
       
        let data = {
            "endDate": endDate || myActionDetails.endDate,
            "groupCode": myActionDetails.groupCode,
            "materialGroup1": myActionDetails.materialGroup,
            "points": loyalityPoint || myActionDetails.points,
            "startDate": startDate || myActionDetails.startDate,
            "typeOfCustomer": myActionDetails.customerType
        }

         console.log("myCalcRules",data);

        dispatch(eventActions.updateloyaltyPointForm(data));
        setLoyalityPoint("");
        setStartDate("");
        setEndDate("");
        props.setOpen(false);
    }

    useEffect(() => {
        if (updateLoyality && !updateLoyality.loading &&
            (updateLoyality.updateloyaltypointform)) {
                dispatch(eventActions.getLoyalityCalcRules(userName.countryCode, 1, 100000));
            toast.success('Loyality calcRules updated successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }, [updateLoyality]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.updateloyaltyPointForm())
        }
    }, [])




    return (
        <div className="guideline_popup edit-date">
            <Button onClick={handleClickOpen}>
                <i className="fa fa-pencil"></i>
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen} className="edit-page">
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update Loyality Calc Rules
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            <div class="form-group">
                                <label for="customer_group"></label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="category"
                                    disabled
                                    defaultValue={myActionDetails.groupCode}

                                />
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Material Group</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="category"
                                    disabled
                                    defaultValue={myActionDetails.materialGroup}

                                />
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Customer Type</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="category"
                                    disabled
                                  defaultValue={myActionDetails.customerType}

                                />
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Loyality Point</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="category"
                                    // loyality.dealerPoints ? loyality.dealerPoints:loyality.subDealerPoints
                                    defaultValue={myActionDetails.points}
                                    onChange={(event) => setLoyalityPoint(event.target.value)}

                                />
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Start Date</label>
                                <input type="date"
                                    class="form-control"
                                    placeholder="category"
                                    // loyality.dstartDate ? loyality.dstartDate : loyality.sdStartDate
                                    defaultValue={myActionDetails.startDate}
                                    onChange={(event) => setStartDate(event.target.value)}

                                />
                            </div>

                            <div class="form-group">
                                <label for="customer_group"> End Date</label>
                                <input type="date"
                                    class="form-control"
                                    placeholder="category"
                                    // loyality.dendDate ? loyality.dendDate : loyality.sdEndDate
                                    defaultValue={myActionDetails.endDate}
                                    onChange={(event) => setEndDate(event.target.value)}

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
