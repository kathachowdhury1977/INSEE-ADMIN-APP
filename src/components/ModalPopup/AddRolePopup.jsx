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

export default function AddRolePopup(props) {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [role, setRole] = React.useState("");
    const [permisson, setPermission] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        let data = {
            // "addRole": role,
            // "id": "string"

            "createdAt": 0,
            "createdBy": "string",
            "id": "string",
            "name": role,
            "permissions": [
                permisson
            ],
            "updatedAt": 0,
            "updatedBy": "string"
        }
        dispatch(eventActions.AddRole(data));
        setOpen(false);
    }


    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add User Managment Role
        </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            <div className="form-group">
                                <label for="Role">Role</label>
                                <input type="text" onChange={event => setRole(event.target.value)} class="form-control" placeholder="Add Role" />
                            </div>

                            <div className="form-group">
                                <label for="Role">Permissions</label>
                                <div>
                                    <span>
                                        <input type="checkbox" id="POST" name="POST" value="POST" onChange={event => setPermission(event.target.value)} />
                                    &nbsp;
                                    <label for="POST"> SAVE</label>
                                    </span>
                                &nbsp; &nbsp;
                                <span>
                                        <input type="checkbox" id="GET" name="GET" value="GET" onChange={event => setPermission(event.target.value)} />
                                    &nbsp;
                                    <label for="GET"> VIEW</label>
                                    </span>
                                &nbsp; &nbsp;
                                <span>
                                        <input type="checkbox" id="PUT" name="PUT" value="PUT" onChange={event => setPermission(event.target.value)} />
                                    &nbsp;
                                    <label for="PUT"> UPDATE</label>
                                    </span>
                                &nbsp; &nbsp;
                                <span>
                                        <input type="checkbox" id="DELETE" name="DELETE" value="DELETE" onChange={event => setPermission(event.target.value)}/>
                                    &nbsp;
                                    <label for="DELETE"> DELETE</label>
                                    </span>
                                    &nbsp; &nbsp;
                                    <span>
                                        <input type="checkbox" id="OPTIONS" name="OPTIONS" value="OPTIONS" onChange={event => setPermission(event.target.value)} />
                                    &nbsp;
                                    <label for="OPTIONS"> OPTIONS</label>
                                    </span>
                                </div>
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
