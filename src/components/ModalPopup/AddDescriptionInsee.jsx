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

export default function AddDescriptionInsee(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const [adddescription, setAddDescription] = React.useState("");
    const [productId, setProductId] = React.useState("");
    const InseeDescUpdate = useSelector((state) => state.inssedesupdate);


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        let UpdateData = {
            "inseeDescription": adddescription,
            "productId": props.productmasterId
        }
        dispatch(eventActions.insseDesUpdate(UpdateData));        
      
    }

    useEffect(() => {
        if (!!InseeDescUpdate && !!InseeDescUpdate.inssedesupdate && !!InseeDescUpdate.inssedesupdate !== undefined) {        
            dispatch(eventActions.productMasterDetail(productId && productId));
            dispatch(eventActions.ProductImageGetList(productId && productId));
            dispatch(eventActions.getloyaltyPointList(productId && productId));

            toast.success(`Insee description has been updated successfully`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setOpen(false);
           
        }
    }, [InseeDescUpdate])

    useEffect(() => {
        return () => {
            dispatch(eventActions.insseDesUpdate())
        }
    }, [])


    console.log("my id",props.productmasterId);

    return (
        <div className="guideline_popup">
            <span variant="outlined" color="primary" onClick={handleClickOpen}>
                <i className="fa fa-pencil"></i>
            </span>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Insee Description
        </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            <div className="form-group">
                                <label for="month">Description</label><br />
                                <textarea name="" id="" cols="60" rows="4" onChange={event => setAddDescription(event.target.value)}></textarea>
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
