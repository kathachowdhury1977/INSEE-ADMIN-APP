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

export default function AddSalesDistrictPopup(props) {
    const dispatch = useDispatch();
    const [name, setName] = React.useState("");
    const [status, setStatus] = React.useState("");
    const [country, setCountry] = React.useState("TH");
    const [open, setOpen] = React.useState(false);

    const addsalesdistrictReducer = useSelector((state) => state.addsalesdistrictmaster);


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (addsalesdistrictReducer && !addsalesdistrictReducer.loading &&
            (addsalesdistrictReducer.addsalesdistrict)) {
                toast.success('Sales district added successfully', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
            dispatch(eventActions.resetAddSalesDistrictReducer());
            dispatch(eventActions.getSalesDistrict(userName.countryCode));
        }
    }, [addsalesdistrictReducer]);

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    const handleSubmit = () => {
        let data = 
            {
                    "code": country,
                    "name": name,
                    "status": status
            }
        dispatch(eventActions.addSalesDistrict(country,data));
        setOpen(false);
      } 

    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Sales District
        </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>


                        <div className="form-group">
                                <label for="segment">Sales District Code</label>
                                <select name="" id="" value={country} onChange={event => setCountry(event.target.value)}>
                                    <option value="TH">TH</option>
                                    <option value="LK">LK</option>
                                    <option value="VN">VN</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="group_code">Sales District Name</label>
                                <input type="text" class="form-control" onChange={event => setName(event.target.value)} placeholder="enter sales district name" />
                            </div>
                            <div className="form-group">
                                <label for="group_code">Sales District Name</label>
                                <input type="text" class="form-control" onChange={event => setStatus(event.target.value)} placeholder="enter sales district status" />
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
