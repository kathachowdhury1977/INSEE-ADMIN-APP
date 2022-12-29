import React from 'react'
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

const ConfirmationBox = props => {

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
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(props.actionToDispatch);
        props.setOpen(false);
    };

    // const DialogTitle = withStyles(styles)((props) => {
    //     const { children, classes, ...other } = props;
    //     return (
    //         <MuiDialogTitle disableTypography className={classes.root} {...other}>
    //             <Typography variant="h6">{children}</Typography>
    //             {/* {onClose ? (
    //                 <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
    //                     <CloseIcon />
    //                 </IconButton>
    //             ) : null} */}
    //         </MuiDialogTitle>
    //     );
    // });

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



    return (
        <div className="guideline_popup">
            <Dialog aria-labelledby="customized-dialog-title" open={props.open}>
                <DialogContent dividers className="confirmation_box">
                    <Typography gutterBottom>
                        <h5>{props.title}</h5>
                        <div className="action">
                    <Button className="cancel" onClick={() => props.setOpen(false)} color="danger">
                        Cancel
                    </Button>
                    <Button className="ok" onClick={handleSubmit} color="primary">
                        Ok
                    </Button>
                    </div>
                    </Typography>     
                </DialogContent>
               
            </Dialog>
        </div>
    )

}

export default ConfirmationBox