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

export default function ContactSoldToPopupList(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const myList = props.soldToList;
    console.log("mySoldNumberList", myList.List);



    useEffect(() => {
        if (props.popupopen) {
            setOpen(true);
        }

    }, []);


    const handleClickOpen = () => {
        setOpen(true);
    };


    const handleClose = () => {
        props.setOpen(false);
    };



    return (
        <div className="guideline_popup">
            <Button className="button-popup-desi" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {myList.relation} List
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <div class="fixTableHead my_extra">
                        <table className="my_soldto table table-bordered guideline_table ">
                            <thead>
                                <tr>
                                    <th>Sold To Number</th>
                                    <th>Ship To List</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myList.List ? myList.List.map((myList) => {

                                        return (
                                            <tr>

                                                <td>{myList.soldToNumber}</td>
                                                <td>{myList.shipToList ? myList.shipToList.map((shiplist) => {
                                                    return (
                                                        <div>{shiplist}</div>
                                                    )
                                                })  : <div className="no-data">No data</div>
                                                }
                                                </td>
                                            </tr>
                                        );
                                    })
                                        : <div className="no-data">No data</div>
                                }
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
