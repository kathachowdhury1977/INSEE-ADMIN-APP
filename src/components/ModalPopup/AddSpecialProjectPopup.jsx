import React, { useEffect } from 'react';
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
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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

export default function AddSpecialProjectPopup(props) {
    const dispatch = useDispatch();
    const [specialProject, setSpecialProject] = React.useState("");
    const [productCode, setProductCode] = React.useState("");
    const [productDesc, setProductDesc] = React.useState("");
    const [salesDesc, setSalesDesc] = React.useState("");
    const [shipingType, setShippingType] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const addspecialprojectReducer = useSelector((state) => state.addspecialprojectmaster);


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (addspecialprojectReducer && !addspecialprojectReducer.loading &&
            (addspecialprojectReducer.addspecialproject)) {
            toast.success('Special Project added successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            dispatch(eventActions.resetAddSpecialProjectReducer());
            dispatch(eventActions.getSpecialProject(userName.countryCode));
        }
    }, [addspecialprojectReducer]);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    const handleSubmit = () => {
        let data =
                {
                    "id": "string",
                    "productCode": productCode,
                    "productDescription": productDesc,
                    "salesDistrictOfShipTo": salesDesc,
                    "shippingType": shipingType,
                    "value": specialProject
                }
        dispatch(eventActions.addSpecialProject(userName.countryCode, data));
        setOpen(false);
    }

    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Special Project
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>

                            <div className="form-group">
                                <label for="group_code">Special Project Name</label>
                                <input type="text" class="form-control" onChange={event => setSpecialProject(event.target.value)} placeholder="enter special project" />
                            </div>
                            <div className="form-group">
                                <label for="group_code">Product Code</label>
                                <input type="text" class="form-control" onChange={event => setProductCode(event.target.value)} placeholder="enter special project" />
                            </div>
                            <div className="form-group">
                                <label for="group_code">Product Description</label>
                                <input type="text" class="form-control" onChange={event => setProductDesc(event.target.value)} placeholder="enter special project" />
                            </div>
                            <div className="form-group">
                                <label for="group_code">Sales Description for shipto</label>
                                <input type="text" class="form-control" onChange={event => setSalesDesc(event.target.value)} placeholder="enter special project" />
                            </div>

                            <div className="form-group">
                                <label for="group_code">Shipping Type</label>
                                <input type="text" class="form-control" onChange={event => setShippingType(event.target.value)} placeholder="enter special project" />
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
