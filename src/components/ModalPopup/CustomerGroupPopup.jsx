import React, { useState } from 'react';
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

export default function CustomerGroupPopup(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const [group, setGroup] = useState("");
    const [code, setCode] = useState("");
    const [segment, setSegment] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {

        let data = {
            "code": code,
            "customerGroup": group,
            "segment": segment
          }
        dispatch(eventActions.addcustomerGroup(data));
        setOpen(false);
        dispatch(eventActions.GetcustomerGroup());


    };

    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Customer Group
        </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            <div className="form-group">
                                <label for="customer_group">Customer Group</label>
                                <input type="text" class="form-control" onChange={event => setGroup(event.target.value)} placeholder="enter customer group"/>
                            </div>
                            <div className="form-group">
                                <label for="group_code">Customer Group Code</label>
                                <input type="text" onChange={event => setCode(event.target.value)} class="form-control" placeholder="enter customer group code"/>
                            </div>
                            <div className="form-group">
                                <label for="segment">Segment</label>
                                <select name="" id="" onChange={event => setSegment(event.target.value)}>
                                    <option value="">Select Segment</option>
                                    <option value="B2B">B2B</option>
                                    <option value="B2C">B2C</option>
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
