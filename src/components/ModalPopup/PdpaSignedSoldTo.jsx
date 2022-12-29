import React,{useEffect} from 'react';
import { eventActions } from "../../_actions";
import { withStyles } from '@material-ui/core/styles';
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import SelectWithOption from "../SelectWithOption/SelectWithOption";
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

export default function PdpaSignedSoldTo(props) {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [boolenValue, setBoolenValue] = React.useState();
    const PdpaSigned = useSelector((state) => state.soldtopdpaforcustomer);
    const productGroupList = useSelector((state) => state.productselectid.productselectid);
    const soldToManagmentNumbers = useSelector((state) => state.soldtomanagmentitemid.soldtomanagmentitemid);
    const assignvalue = props.assigncheck && props.assigncheck;

    console.log("boolenValue", boolenValue);




    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleBoolen = (event) => {
        setBoolenValue(event.target.value)
    }

    const handleSubmit = () => {

        let data =  soldToManagmentNumbers       
        
        console.log("myList",data);
        dispatch(eventActions.SoldToPdpaForCustomer(data,boolenValue));
        setOpen(false);

    }

    useEffect(() => {
        if (PdpaSigned && !PdpaSigned.loading &&
            (PdpaSigned.soldtopdpaforcustomer)) {
                dispatch(eventActions.soldToManagmentList(50, 1));
                toast.success('PDPA has been assigned successfully', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
        }
    }, [PdpaSigned]);

    useEffect(() => {
        return ()=>{
         dispatch(eventActions.SoldToPdpaForCustomer());
        }
     },[]);



    return (
        <div className="guideline_popup assign_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen} disabled={assignvalue === 0 || assignvalue === undefined}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    PDPA Signed
                </DialogTitle>
                <DialogContent dividers className="assign_popup">
                    <Typography gutterBottom>
                        <form>
                            <div className="form-group">
                                <label for="customer_group"> Product Signed Staus</label>
                                <br />
                                <input type="radio" name="boolen" onChange={handleBoolen} value={"true"}></input>
                                &nbsp; &nbsp;
                                <label for="html" style={{ fontWeight: "normal" }}>True</label>
                                &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;
                                <input type="radio" name="boolen" onChange={handleBoolen} value={"false"}></input>
                                &nbsp; &nbsp;
                                <label for="html" style={{ fontWeight: "normal" }}>False</label>
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
