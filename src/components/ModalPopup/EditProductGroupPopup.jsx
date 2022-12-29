import React, { useEffect, useState } from 'react';
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import moment from 'moment'

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

export default function EditProductGroupPopup(props) {
    const [open, setOpen] = React.useState(false);
    const myproductgroupid = props.productGroupId;
    const dispatch = useDispatch();
    const location = useLocation();
    const productgroupeditlist = useSelector((state) => state.productgroupeditlist.productgroupeditlist);
    const updateproductgroup = useSelector((state) => state.modifiedproductgroup);
    const productgroupmaster = useSelector((state) => state.productgroupmasterlist);


    let formStartDate = productgroupeditlist && moment(productgroupeditlist.startDate, 'DD-MM-YYYY').format('YYYY-MM-DD')
    let formEndDate = productgroupeditlist && moment(productgroupeditlist.endDate, 'DD-MM-YYYY').format('YYYY-MM-DD')



    useEffect(() => {
        if (props.popupopen) {
            setOpen(true);
        }

    }, []);

    useEffect(() => {
        dispatch(eventActions.productGroupEditList(myproductgroupid));
    }, [myproductgroupid, productgroupmaster]);

    const [productname, setProductname] = React.useState(productgroupeditlist && productgroupeditlist.productGroupName);
    const [status, setStatus] = React.useState(productgroupeditlist && productgroupeditlist.status);
    const [sdate, setSDate] = React.useState(productgroupeditlist && productgroupeditlist.startDate);
    const [edate, setEDate] = React.useState(productgroupeditlist && productgroupeditlist.endDate);


    const handleInputChange = e => {
        setProductname(e.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        props.setOpen(false);
       
    };

    const handleSubmit = () => {


        let data = {
            "endDate": edate || !!productgroupeditlist && productgroupeditlist.endDate,
            "productGroupId": myproductgroupid,
            "productGroupList": [
                "string"
            ],
            "productGroupName": productname || !!productgroupeditlist && productgroupeditlist.productGroupName,
            "productList": [
                "string"
            ],
            "startDate": sdate || !!productgroupeditlist && productgroupeditlist.startDate,
            "status": productgroupeditlist && productgroupeditlist.status
        }

        dispatch(eventActions.modifiedProductGroup(data));
        console.log("datasss", data);
        props.setOpen(false);
    };




    useEffect(() => {
        if (!!updateproductgroup && !!updateproductgroup.modifiedproductgroup && updateproductgroup.modifiedproductgroup !== undefined) {
            dispatch(eventActions.productGroupmasterList(50, 1));
        }
    }, [updateproductgroup])



    return (
        <div className="guideline_popup">
            <span variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.title}
            </span>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Edit Product Group
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            <div className="form-group">
                                <label for="customer_group">Product Group Name</label>
                                <input type="text" defaultValue={productgroupeditlist && productgroupeditlist.productGroupName} onChange={handleInputChange} class="form-control" placeholder="enter product group" />
                            </div>
                            <div className="form-group">
                                <label for="customer_group">Start Date</label>
                                <input type="date" defaultValue={formStartDate || ''} onChange={event => setSDate(moment(event.target.value).format('DD-MM-YYYY'))} class="form-control" placeholder="enter start date" />
                            </div>
                            <div className="form-group">
                                <label for="customer_group">End Date</label>
                                <input type="date" defaultValue={formEndDate || ''} onChange={event => setEDate(moment(event.target.value).format('DD-MM-YYYY'))} class="form-control" placeholder="enter end date" />
                            </div>
                            <div className="form-group disble-content">
                                <label for="group_code">Status</label>
                                <select name="" id="" disabled value={productgroupeditlist && productgroupeditlist.status} onChange={event => setStatus(event.target.value)}>
                                    <option value="">Select Status</option>
                                    <option value="Active">Active</option>
                                    <option value="InActive">InActive</option>
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
