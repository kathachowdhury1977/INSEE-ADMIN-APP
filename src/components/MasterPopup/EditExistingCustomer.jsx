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

export default function EditExistingCustomer(props) {
    const [open, setOpen] = React.useState(false);
    const [customertype, setCustomerType] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [visittype, setVisitType] = React.useState("");
    const [visitCadence, setVisitCadence] = React.useState("");
    const dispatch = useDispatch();
    const myActionDetails = props.exsitingCustomer;
    console.log("exsitingCustomer", customertype);
    const updateExisting = useSelector((state) => state.updateexistingcustomer);

   
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
                "cadence": visitCadence ? visitCadence : myActionDetails.cadence,
                "category": category ? category : myActionDetails.category,
                "customerId": myActionDetails.customerId,
                "customerType": customertype ? customertype : myActionDetails.customerType     
        }

        console.log("datta",data);

        dispatch(eventActions.updateExistingCustomer({ "data":data, 'id':myActionDetails.id}));
        setCustomerType("");
        setCategory("");
        setVisitCadence("");
        props.setOpen(false);
    }

  

    useEffect(() => {
        if (updateExisting && !updateExisting.loading &&
            (updateExisting.updateexistingcustomer)) {
                dispatch(eventActions.getexistingCustomerCadence());
            toast.success('Existing Customer updated successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            
        }
    }, [updateExisting]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.updateExistingCustomer())
        }
    }, [])



    return (
        <div className="guideline_popup edit-date">
            <Button onClick={handleClickOpen}>
                <i className="fa fa-pencil"></i>
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen} className="edit-page">
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update Existing Customer
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            <div class="form-group">
                                <label for="customer_group">Customer Id</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="category"
                                    defaultValue={myActionDetails.customerId}
                                    disabled
                                   
                                />
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Customer Name</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="customer name"
                                    defaultValue={myActionDetails.customerName}
                                    disabled
                                   
                                />
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Type Customer</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    
                                    defaultValue={myActionDetails.customerType}
                                    onChange={(event) => setCustomerType(event.target.value)}
                                    disabled />
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Category</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    
                                    defaultValue={myActionDetails.category}
                                    onChange={(event) => setCategory(event.target.value)}
                                    disabled
                                     />
                            </div>

                           

                            <div class="form-group">
                                <label for="customer_group">Visit Cadence</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    
                                    defaultValue={myActionDetails.cadence} 
                                    onChange={(event) => setVisitCadence(event.target.value)}
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
