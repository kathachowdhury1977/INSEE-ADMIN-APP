import React,{useEffect} from 'react';
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
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

export default function AddTransportorZone(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const [transportzone, setTransportZone] = React.useState("");
    const [districtcode, setDistrictCode] = React.useState("");
    const [district, setDistrict] = React.useState("");
    const [provincecode, setProvinceCode] = React.useState("");
    const [province, setProvince] = React.useState("");
    const [country, setCountry] = React.useState("");

    const addtransportorzoneReducer = useSelector((state) => state.addtransportorzone);



    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (addtransportorzoneReducer && !addtransportorzoneReducer.loading &&
            (addtransportorzoneReducer.addtransportorzone)) {
                toast.success('Transportation zone added successfully', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
            dispatch(eventActions.resetTransportorZoneReducer());
            dispatch(eventActions.transportorZone(userName.countryCode));
        }
    }, [addtransportorzoneReducer]);

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    const handleSubmit = () => {

        let data ={
            "countryCode": country,
            "disctrictCode": districtcode,
            "district": district,
            "id": "string",
            "province": province,
            "provinceCode": provincecode,
            "transporterZone": transportzone
          }
          dispatch(eventActions.addTransportorZone(country,data));
          setOpen(false);
    }

    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Transportation Zone
            </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            <div className="form-group">
                                <label for="group_code">Transportation Zone Code</label>
                                <input type="text" onChange = {event => setTransportZone(event.target.value)} class="form-control" placeholder="enter zone code" />
                            </div>
                            <div className="form-group">
                                <label for="group_code">District Code</label>
                                <input type="text" onChange = {event => setDistrictCode(event.target.value)} class="form-control" placeholder="enter district code" />
                            </div>
                            <div className="form-group">
                                <label for="group_code">District Name</label>
                                <input type="text" onChange = {event => setDistrict(event.target.value)} class="form-control" placeholder="enter district name" />
                            </div>
                            <div className="form-group">
                                <label for="group_code">Province Code</label>
                                <input type="text" onChange = {event => setProvinceCode(event.target.value)} class="form-control" placeholder="enter province code" />
                            </div>
                            <div className="form-group">
                                <label for="group_code">Province</label>
                                <input type="text" onChange = {event => setProvince(event.target.value)} class="form-control" placeholder="enter province name" />
                            </div>
                            <div className="form-group">
                                <label for="group_code">Country Code</label>
                                <select name="" id="" onChange = {event => setCountry(event.target.value)}>
                                    <option value="">Select country code</option>
                                    <option value="TH">TH</option>
                                    <option value="VN">VN</option>
                                    <option value="LK">LK</option>
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
