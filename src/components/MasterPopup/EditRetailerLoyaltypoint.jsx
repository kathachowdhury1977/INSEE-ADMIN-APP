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

export default function EditRetailerLoyaltypoint(props) {
    const location = useLocation();
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [activity, setActivity] = React.useState('');
    const [dealerId, setDealerId] = React.useState('');
    const [dealerName, setDealerName] = React.useState('');
    const [billingNo, setBillingNo] = React.useState('');
    const [billingDate, setBillingDate] = React.useState('');
    const [productNo, setProductNo] = React.useState('');
    const [productName, setProductName] = React.useState('');
    const [quantity, setQuantity] = React.useState('');
    const [point , setPoint] = React.useState('');
    const [createdate, setCreateDate] = React.useState('');
    const [expirationDate, setExpirationDate] = React.useState('');
    const [remark, setRemark] = React.useState('');
    const { retailerCode } = location.state;

    const dispatch = useDispatch();
    const myActionDetails = props.groupDetail;
    const updateLoyalty = useSelector((state) => state.updateretailerloyaltypoint);
    console.log("MyLIST", myActionDetails);


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
            "activityType": activity,
            "adminAllocated": true,
            "autoAllocated": "string",
            "billingCreationDate": "string",
            "billingDate": billingDate,
            "billingNumber": billingNo,
            "createDate": createdate,
            "createdBy": "string",
            "creationDate": "2021-10-28T13:10:22.591Z",
            "customerId": dealerId,
            "customerName": dealerName,
            "customerNameInLocal": "string",
            "deleted": true,
            "expiryDate": expirationDate,
            "expiryDateObj": "2021-10-28T13:10:22.591Z",
            "expiryPoints": "string",
            "id": "string",
            "lastCreditedDate": "string",
            "lastCreditedPoints": "string",
            "lastModifiedBy": "string",
            "lastModifiedDate": "2021-10-28T13:10:22.591Z",
            "manualAllocated": "string",
            "productCode": productNo,
            "productName": productName,
            "quantity": quantity,
            "redeemedPoints": "string",
            "referenceDocNumber": "string",
            "remainingQuantity": "string",
            "remark": remark,
            "subDealer": "string",
            "subDealerExist": true,
            "subDealerName": "string",
            "sumAllocated": "string",
            "totalPoints": point,
            "version": 0
          }

        dispatch(eventActions.updateRetailerLoyaltyPoint({'data':data, 'id':myActionDetails.id,} ));
        setActivity(""); 
        setDealerId("");
        setDealerName("");
        setBillingNo("");
        setBillingDate("");
        setProductNo("");
        setProductName("");
        setQuantity("");
        setPoint("");
        setCreateDate("");
        setExpirationDate("");
        setRemark("");
        props.setOpen(false);
    }

    
    useEffect(() => {
        if (updateLoyalty && !updateLoyalty.loading &&
            (updateLoyalty.updateretailerloyaltypoint)) {
                dispatch(eventActions.getRetailerLoyaltyList(retailerCode));
                dispatch(eventActions.getRetailerLoyaltySearch("",retailerCode));
                toast.success('Loyalty Point updated', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
            
        }
    }, [updateLoyalty]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.updateRetailerLoyaltyPoint())
            dispatch(eventActions.getRetailerLoyaltySearch());
            dispatch(eventActions.getRetailerLoyaltyList());
        }
    }, [])




    return (
        <div className="guideline_popup edit-date">
            <Button onClick={handleClickOpen}>
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen} className="edit-page">
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update Loyalty Point
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            <div class="form-group">
                                <label for="customer_group">Activity Type</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="end activity type"  
                                    defaultValue={myActionDetails && myActionDetails.activityType}
                                    onChange={(event) => setActivity(event.target.value)}
                                    disabled
                                />
                            </div>
                            <div class="form-group">
                                <label for="customer_group">Dealer Id</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="enter dealer id" 
                                    defaultValue={myActionDetails && myActionDetails.customerId}
                                    onChange={(event) => setDealerId(event.target.value)} 
                                    disabled

                                />
                               
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Dealer Name</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="enter dealer name" 
                                    defaultValue={myActionDetails && myActionDetails.customerName}
                                    onChange={(event) => setDealerName(event.target.value)} 
                                    disabled
                                />
                               
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Billing Number</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="Billing Number" 
                                    defaultValue={myActionDetails && myActionDetails.billingNumber}
                                    onChange={(event) => setBillingNo(event.target.value)} 
                                    disabled
                                />
                               
                            </div>


                            <div class="form-group">
                                <label for="customer_group">Billing Date</label>
                                <input type="date"
                                    class="form-control"
                                    placeholder="Billing Date"  
                                    defaultValue={myActionDetails && myActionDetails.billingDate}
                                    onChange ={(event) => setBillingDate(event.target.value)}
                                    disabled
                                />
                               
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Prouduct Number</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="Product number"  
                                    defaultValue={myActionDetails && myActionDetails.productCode}
                                    onChange={(event) => setProductNo(event.target.value)}
                                    disabled
                                />
                               
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Prouduct Name</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="Product name"
                                    defaultValue={myActionDetails && myActionDetails.productName}
                                    onChange={(event) => setProductName(event.target.value)} 
                                    disabled 
                                />
                               
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Quantity (Unit) </label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="quantity unit" 
                                    defaultValue={myActionDetails && myActionDetails.quantity}
                                    onChange = {(event) => setQuantity(event.target.value)} 
                                />
                               
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Point Received </label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="Point received"
                                    defaultValue={myActionDetails && myActionDetails.totalPoints}  
                                    onChange={(event) => setPoint(event.target.value)}
                                />
                               
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Create Date </label>
                                <input type="date"
                                    class="form-control"
                                    placeholder="create date" 
                                    defaultValue={myActionDetails && myActionDetails.createDate}
                                    onChange={(event) => setCreateDate(event.target.value)}
                                    disabled

                                />
                               
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Expiration Date </label>
                                <input type="date"
                                    class="form-control"
                                    placeholder="Expiration date" 
                                    defaultValue={myActionDetails && myActionDetails.expiryDate}
                                    onChange={(event) => setExpirationDate(event.target.value)} 
                                    disabled
                                />
                               
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Remark </label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="Remark"  
                                    defaultValue={myActionDetails && myActionDetails.remark}
                                    onChange={(event) => setRemark(event.target.value)}
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
