import React, { useEffect } from 'react';
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

export default function AddProductGroupPopup(props) {
    const [open, setOpen] = React.useState(false);
    const [productname, setProductname] = React.useState("");
    const [status, setStatus] = React.useState("");
    const [sdate, setSDate] = React.useState("");
    const [edate, setEDate] = React.useState("");
    const addProduct = useSelector((state) => state.addproductgroup);
    const dispatch = useDispatch();
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {

        let data = {
            "endDate": moment(edate).format('DD-MM-yyyy'),
            "productGroupId": "string",
            "productGroupList": [
                "string"
            ],
            "productGroupName": productname,
            "productList": [
                "string"
            ],
            "startDate": moment(sdate).format('DD-MM-yyyy'),
            "status": status
        }


        dispatch(eventActions.AddProductGroup(data));

    };

    console.log("my add data", addProduct);

    useEffect(() => {
        if (!!addProduct && !!addProduct.addproductgroup && addProduct.addproductgroup !== undefined) {

            dispatch(eventActions.productGroupmasterList(50, 1));

            toast.success('Product has been added successfully', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setOpen(false);
        }
        else if (!!addProduct && !!addProduct.error) {

            toast.success(addProduct.error, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }, [addProduct])

    return (
        <div className="guideline_popup">
            <Button onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title"  onClose={handleClose}>
                    Add Product Group
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form id="form">
                            <div className="form-group">
                                <label for="customer_group">Product Group Name</label>
                                <input type="text" name="productname" type="text" pattern="[a-z]{1,15}" id="productname" onChange={event => setProductname(event.target.value)} class="form-control" placeholder="enter product group" required />
                            </div>
                            <div className="form-group">
                                <label for="customer_group">Start Date</label>
                                <input type="date" onChange={event => setSDate(event.target.value)} class="form-control" placeholder="enter start date" />
                            </div>
                            <div className="form-group">
                                <label for="customer_group">End Date</label>
                                <input type="date" onChange={event => setEDate(event.target.value)} class="form-control" placeholder="enter end date" />
                            </div>
                            <div className="form-group">
                                <label for="group_code">Status</label>
                                <select name="" id="" onChange={event => setStatus(event.target.value)}>
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
