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
import 'react-toastify/dist/ReactToastify.css';

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

export default function UploadChooseTranspostorZone(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const [upload, setUpload] = React.useState("");
    const UploadChooseTransportor = useSelector((state) => state.uploadchoosetransportor);

    

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    const uploadXl = (event) => {
        setUpload(event.target.files[0]);
    };

    const handleSubmit = () => {
        dispatch(eventActions.uploadChooseTransportorZone(userName.countryCode, upload));
        setOpen(false);
    }


    useEffect(() => {
        if (UploadChooseTransportor && !UploadChooseTransportor.loading &&
            (UploadChooseTransportor.uploadchoosetransportor)) {
                dispatch(eventActions.getChooseTransportorZone(userName.countryCode));
            toast.success('transportor Zone uploaded successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            
        }
    }, [UploadChooseTransportor]);

    useEffect(() => {
        return () => {
            dispatch(eventActions.uploadChooseTransportorZone())
        }
    }, [])


    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen} title="Upload Transportor zone">
                <i class="fa fa-upload button-upload" aria-hidden="true"></i> {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Upload Choose Transportor Zone
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>

                            <div class="form-group">
                                <label for="upload">upload File:</label>
                                <input type="file" onChange={uploadXl} />
                            </div>

                        </form>

                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmit} color="primary">
                        Upload
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
