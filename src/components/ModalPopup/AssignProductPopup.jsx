import React from 'react';
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

export default function AssignProductPopup(props) {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const productGroupList = useSelector((state) => state.productselectid.productselectid);
    const productList = useSelector((state) => state.productmasterid.productmasterid);
    const assignvalue = props.assigncheck && props.assigncheck;

    console.log("productGroupList", productGroupList);
    console.log("productList", props.productIds);




    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {

        let data = {
            "productGroupId": "string",
            "productGroupList": productGroupList,
            "productGroupName": "string",
            "productList": productList,
            "status": "string"
        }

        dispatch(eventActions.UpdateProductGroup(data));
        setOpen(false);

        toast.success('Product has been Added in Product Group Master', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    console.log('productList=====', productList);

    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen} disabled={assignvalue === 0 || assignvalue === undefined}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Assign Product Group
        </DialogTitle>
                <DialogContent dividers className="assign_popup" style={{height: "270px"}}>
                    <Typography gutterBottom>
                        <form>
                            <div className="form-group">
                                <label for="customer_group"> Product Group</label>
                                <SelectWithOption />
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
