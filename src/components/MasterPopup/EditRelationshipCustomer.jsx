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

export default function EditRelationshipCustomer(props) {
    const [open, setOpen] = React.useState(false);
    const [beatCode, setBeatCode] = React.useState("");
    const [customerName, setCustomerName] = React.useState("");
    const [salesRep, setSalesRepId] = React.useState("");
    const [oragnization, setOragnization] = React.useState("");
    const [customerid, setCustomerId] = React.useState("");
    const dispatch = useDispatch();
    const myActionDetails = props.relationship;
    console.log("myActionDetails", myActionDetails);
    const updateRelation = useSelector((state) => state.updaterelationcustomer);


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
        // let data = {
            
        //         "beatCode": beatCode ? beatCode : myActionDetails.beatCode,
        //         "customerId": customerid ? [customerid] : myActionDetails.customerId,
        //         "isAdded": true,
        //         "salesOrganization": oragnization ? [oragnization] : myActionDetails.salesOrganization,
        //         "salesRepId": salesRep ? [salesRep] :myActionDetails.salesRepId      
           
        //   }
        dispatch(eventActions.updateRelationCustomerMaster({'id': myActionDetails.id, 'customerIdList':customerid ? customerid:myActionDetails.customerId }));
        setBeatCode('');
        setCustomerName('');
        setSalesRepId('');
        setOragnization('');
        setCustomerId('');
        props.setOpen(false);
    }

    useEffect(() => {
        if (updateRelation && !updateRelation.loading &&
            (updateRelation.updaterelationcustomer)) {
                dispatch(eventActions.getRelationwithCustomerList());
            toast.success('Relationship updated successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }, [updateRelation]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.updateRelationCustomerMaster())
        }
    }, [])



    return (
        <div className="guideline_popup edit-date">
           
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen} className="edit-page">
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update Relationship Customer
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>

                            <div class="form-group">
                                <label for="customer_group">Beat Code</label>
                              
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={myActionDetails.beatCode}
                                    onChange={event => setBeatCode(event.target.value)}
                                />
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Customer Id</label>
                                <textarea name="" id=""  class="form-control" defaultValue={myActionDetails.customerId}  onChange={event => setCustomerId(event.target.value)} cols="30" rows="5"></textarea>
                                {/* <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={myActionDetails.customerId}
                                    onChange={event => setCustomerId(event.target.value)}
                                /> */}
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Sold To / Sub - Dealer</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={myActionDetails.customerName}
                                    onChange={event => setCustomerName(event.target.value)}
                                />
                            </div>

                           
                            <div class="form-group">
                                <label for="customer_group">Sales Rep Id</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={myActionDetails.salesRepId}
                                    onChange={event => setSalesRepId(event.target.value)}
                                />
                            </div>
                            <div class="form-group">
                                <label for="customer_group">Sales Oraganization</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={myActionDetails.salesOrganization}
                                    onChange={event => setOragnization(event.target.value)}
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
