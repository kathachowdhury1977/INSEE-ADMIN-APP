import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

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

export default function AddTrackTypePopup(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Truck Type
        </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>


                            
                            <div className="form-group">
                                <label for="group_code">Truck Type Name</label>
                                <input type="text" class="form-control" placeholder="enter shipping nane" />
                            </div>
                            <div className="form-group">
                                <label for="group_code">Truck Type Status</label>
                                <select name="" id="">
                                    <option value="">Active</option>
                                    <option value="">InActive</option>sss
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="group_code">Created Date</label>
                                <input type="date" class="form-control"/>
                            </div>
                            <div className="form-group">
                                <label for="group_code">Created By</label>
                                <input type="text" class="form-control" placeholder="created by" />
                            </div>
                            <div className="form-group">
                                <label for="group_code">Modified Date</label>
                                <input type="date" class="form-control" />
                            </div>

                            <div className="form-group">
                                <label for="group_code">Modified By</label>
                                <input type="text" class="form-control" placeholder="modified by" />
                            </div>

                        </form>

                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Save
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
