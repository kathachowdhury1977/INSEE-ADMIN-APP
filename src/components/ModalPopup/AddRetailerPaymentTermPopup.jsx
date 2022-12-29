import React,{useEffect} from 'react';
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
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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

export default function AddRetailerPaymentTermPopup(props) {
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState("Active");
    const [country, setCountry] = React.useState("");
    const dispatch = useDispatch();
    const [name, setName] = React.useState("");

    const addretailerpaymentReducer = useSelector((state) => state.addretailerpaymenttermmaster);


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (addretailerpaymentReducer && !addretailerpaymentReducer.loading &&
            (addretailerpaymentReducer.addretailerpayment)) {
                toast.success('Retailer payment added successfully', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
            dispatch(eventActions.resetAddRetailerPaymentReducer());
            dispatch(eventActions.getRetailerPaymentTermMaster(userName.countryCode));
        }
    }, [addretailerpaymentReducer]);

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);


    const handleSubmit = () => {
        let data = 
            {
                "name": name,
                "retailerId": "string",
                "status": status
            }
        dispatch(eventActions.addRetailerPaymentTermMaster(country,data));
        setOpen(false);
      } 

    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Add Retailer Payment Term 
        </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>


                            
                            <div className="form-group">
                                <label for="group_code">Retailer Payment Term Name</label>
                                <input type="text" class="form-control" onChange={event => setName(event.target.value)}  placeholder="enter retailer payment name" />
                            </div>
                            <div className="form-group">
                                <label for="group_code">Retailer Payment Status</label>
                                <select name="" id="" value={status} onChange={event => setStatus(event.target.value)}>
                                    <option value="Active">Active</option>
                                    <option value="InActive">InActive</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="segment">Country</label>
                                <select name="" id="" onChange={event => setCountry(event.target.value)}>
                                    <option value="">Select Country Code</option>
                                    <option value="TH">TH</option>
                                    <option value="LK">LK</option>
                                    <option value="VN">VN</option>
                                </select>
                            </div>
                            {/* <div className="form-group">
                                <label for="group_code">Created Date</label>
                                <input type="date" class="form-control"/>
                            </div>
                            <div className="form-group">
                                <label for="group_code">Created By</label>
                                <input type="text" class="form-control" placeholder="created by" />
                            </div>
                            <div className="form-group">
                                <label for="group_code">Modified Date</label>
                                <input type="date" class="form-control" />
                            </div>

                            <div className="form-group">
                                <label for="group_code">Modified By</label>
                                <input type="text" class="form-control" placeholder="modified by" />
                            </div> */}

                        </form>

                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmit} color="primary">
                        Save
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
