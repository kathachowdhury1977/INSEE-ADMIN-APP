import React, { useState, useEffect } from 'react';
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

export default function AddAppTypePopup(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const [country, setCountry] = React.useState("");
    const [apptype, setAppType] = useState("");
    const [channeltype, setChannelType] = useState("");
    const [upload, setUpload] = React.useState("");
    const [sdate, setStartDate] = React.useState("");
    const [edate, setEndDate] = React.useState("");

    const apptypelist = useSelector((state) => state.getapptype.getapptype);
    const channeltypelist = useSelector((state) => state.getchanneltype.getchanneltype);
    const addBanner = useSelector((state) => state.addbannerimage);

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getAppType());
    }, []);

    useEffect(() => {
        dispatch(eventActions.getChannelType());
    }, []);


    const uploadXl = (event) => {
        setUpload(event.target.files[0]);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        dispatch(eventActions.addBannerImage(country, edate, upload, apptype, channeltype, sdate));
        setOpen(false)

    };


    useEffect(() => {
        if (!!addBanner.addbannerimage && addBanner.addbannerimage !== undefined) {
            dispatch(eventActions.getBannerImageList(userName.countryCode));
        }
    }, [addBanner])


    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add App Type
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            <div className="form-group">
                                <label for="segment">Country</label>
                                <select name="" id="" onChange={event => setCountry(event.target.value)}>
                                    <option value=""> Country Code</option>
                                    <option value="TH">TH</option>
                                    <option value="LK">LK</option>
                                    <option value="VN">VN</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="customer_group">App Type</label>
                                <select name="" id="" onChange={event => setAppType(event.target.value)}>
                                    <option value="">App Type</option>
                                    {apptypelist
                                        ? apptypelist.map((item) => {
                                            return (
                                                <option value={item.key}>{item.key}</option>

                                            );
                                        })
                                        : null
                                    }

                                </select>
                            </div>

                            <div className="form-group">
                                <label for="customer_group">Channel Type</label>
                                <select name="" id="" onChange={event => setChannelType(event.target.value)}>
                                    <option value="">Channel Type</option>
                                    {channeltypelist
                                        ? channeltypelist.map((item) => {
                                            return (
                                                <option value={item.key}>{item.key}</option>

                                            );
                                        })
                                        : null
                                    }
                                </select>
                            </div>

                            <div className="form-group">
                                <label for="sdate">Start Date</label>
                                <input type="date" onChange={event => setStartDate(event.target.value)} class="form-control" />
                            </div>
                            <div className="form-group">
                                <label for="sdate">End Date</label>
                                <input type="date" onChange={event => setEndDate(event.target.value)} class="form-control" />
                            </div>
                            <div className="form-group">
                                <label for="customer_group">Upload Image</label><br />
                                <input type="file" onChange={uploadXl} />
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
