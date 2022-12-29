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

export default function AddLoyalityPoint(props) {
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
                    Loyality Point
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>

                            <div className="form-group">
                                <label for="group_code">Activity Type</label>
                                <input type="text" class="form-control" placeholder="enter activity type" />
                            </div>


                            <div className="form-group">
                                <label for="group_code"> Billing Number</label>
                                <input type="text" class="form-control" placeholder="enter billing number" />
                            </div>

                            <div className="form-group">
                                <label for="group_code"> Billing Date</label>
                                <input type="date" class="form-control" />
                            </div>

                            <div className="form-group">
                                <label for="group_code"> Product Number</label>
                                <input type="text" class="form-control" placeholder="enter product number" />
                            </div>
                              

                            <div className="form-group">
                                <label for="group_code"> Product Date</label>
                                <input type="date" class="form-control"  />
                            </div>

                            <div className="form-group">
                                <label for="group_code"> Quantity (Unit)</label>
                                <input type="text" class="form-control" placeholder="enter quantity unit"  />
                            </div>
                            
                            <div className="form-group">
                                <label for="group_code"> Point Received</label>
                                <input type="text" class="form-control" placeholder="enter point"  />
                            </div>

                            <div className="form-group">
                                <label for="group_code"> Created Date</label>
                                <input type="date" class="form-control"   />
                            </div>


                            <div className="form-group">
                                <label for="group_code"> Expiration Date</label>
                                <input type="date" class="form-control"   />
                            </div>

                            <div className="form-group">
                                <label for="group_code">Remark</label>
                                <input type="text" class="form-control"   />
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
