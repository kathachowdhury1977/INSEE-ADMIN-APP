import React,{useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
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

export default function AddUnitPopup(props) {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const [type, setType] = React.useState("");
    const [country, setCountry] = React.useState("");

    const addunitReducer = useSelector((state) => state.addunitmaster);


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (addunitReducer && !addunitReducer.loading &&
            (addunitReducer.addunitmaster)) {
                toast.success('unit added successfully', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
            dispatch(eventActions.resetAddUnitMasterReducer());
            dispatch(eventActions.UnitMaster(userName.countryCode));
        }
    }, [addunitReducer]);

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    const handleSubmit = () => {
      let data = {
        "countryCode": country,  
        "name": name,
        "type": type
      }
      dispatch(eventActions.addUnitMaster(country,data));
      setOpen(false);
    } 

    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Unit Master
        </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>



                        <div className="form-group">
                                <label for="group_code">Unit Code</label>
                                <input type="text" onChange={event => setType(event.target.value)}  class="form-control" placeholder="unit code" />
                            </div>


                            <div className="form-group">
                                <label for="group_code">Unit Name (EN)</label>
                                <input type="text" onChange={event => setName(event.target.value)} class="form-control" placeholder="enter unit name" />
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
