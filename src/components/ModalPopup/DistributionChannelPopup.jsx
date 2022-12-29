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
import { useDispatch, useSelector } from "react-redux";
import { eventActions } from '../../_actions';
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

export default function DistributionChannelPopup(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const [code, setCode] = React.useState("");
    const [distribution, setDistribution] = React.useState("");
    const [country, setCountry] = React.useState("");

    const adddistributionchannelReducer = useSelector((state) => state.adddistributionchannel);


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (adddistributionchannelReducer && !adddistributionchannelReducer.loading &&
            (adddistributionchannelReducer.adddistributionchannel)) {
                toast.success('Distribution channel added successfully', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
            dispatch(eventActions.resetAddDistributionChannelReducer());
            dispatch(eventActions.getDistributionChannel(userName.countryCode));
        }
    }, [adddistributionchannelReducer]);

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    const handleSubmit = () => {
        let data = {
            "countryCode": country,
            "id": "string",
            "key": code,
            "value": distribution
        }
        dispatch(eventActions.addDistributionChannel(country,data));
        setOpen(false);
    };

    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Distribution channel
        </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            <div className="form-group">
                                <label for="group_code">Distribution channel Code</label>
                                <input type="text" class="form-control" onChange={event => setCode(event.target.value)} placeholder="enter distribution code" />
                            </div>

                            <div className="form-group">
                                <label for="group_code">Distribution channel Name</label>
                                <input type="text" class="form-control" onChange={event => setDistribution(event.target.value)} placeholder="enter distribution name" />
                            </div>

                            <div className="form-group">
                                <label for="segment">Country</label>
                                <select name="" id="" onChange={event => setCountry(event.target.value)}>
                                    <option value="">Country Code</option>
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
