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
import { eventActions } from "../../../_actions";
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

export default function DivisionListPopup(props) {
    const [open, setOpen1] = React.useState(false);
    const dispatch = useDispatch();
    const myList = props.divisionId;
    console.log("mySoldNumberList", myList);



    useEffect(() => {
        if (props.divisionpop) {
            props.setOpen(true);
        }

    }, []);


    const handleClickOpen = () => {
        props.setOpen(true);
    };


    const handleClose = () => {
        props.setOpen(false);
    };



    return (
        <div className="guideline_popup">
            <Button className="button-popup-desi" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.divisionpop}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Division-List
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <div class="my_extra">
                        <table className="my_soldto table table-bordered guideline_table ">
                            
                            <tbody>
                            <tr className="row">
                                {
                                    myList ? myList.map((myList) => {

                                        return (
                                                <td className="col-6 p-2">{myList}</td>
                                        );
                                    })
                                        : <div className="no-data col-12">No data</div>
                                }
                                 </tr>
                            </tbody>
                        </table>
                        </div>

                    </Typography>
                </DialogContent>

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
