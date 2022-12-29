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
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
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

export default function AssignEditDate(props) {
    const [open, setOpen] = React.useState(false);
    const details = props.mysetID;
    const location = useLocation();
    const { productGroupId } = location.state;
    const { accountName } = location.state;
    const dispatch = useDispatch();
    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);
    const assingAutosoldtoList = useSelector((state) => state.assignbyproductinsoldto.assignbyproductinsoldto);
    const UpdateSoldDate = useSelector((state) => state.updateproductdateundersoldto);
    const soldtoProductAssign = useSelector((state) => state.getassignproductlistforsoldto);

    useEffect(() => {
        props.mysetID && dispatch(eventActions.getAssignedProductGroupByIdInSoldTo(productGroupId,props.mysetID,accountName));
    }, [productGroupId,props.mysetID,accountName,soldtoProductAssign]);

    const [startdate, setStartDate] = React.useState("");
    const [enddate, setEndDate] = React.useState("");

    console.log("soldtoProductAssign", soldtoProductAssign);

    let myStartDate = assingAutosoldtoList && moment(assingAutosoldtoList.startDate, 'DD-MM-YYYY').format('YYYY-MM-DD')
    let myEndDate = assingAutosoldtoList && moment(assingAutosoldtoList.endDate, 'DD-MM-YYYY').format('YYYY-MM-DD')

    console.log("mystartdate",startdate);

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

    const handleSubmit = () => {
        const requestData = {
            "productList": [
                {
                    "endDate": enddate || !!assingAutosoldtoList && assingAutosoldtoList.endDate,
                    "productGroupId": productGroupId,
                    "productId": props.mysetID,
                    "soldToNumber": accountName,
                    "startDate": startdate || !!assingAutosoldtoList && assingAutosoldtoList.startDate
            }]
        }
            
        
        console.log("requestData",requestData);

        dispatch(eventActions.updateProductDateUnderSoldTo(requestData));
        props.setOpen(false);

    };

    useEffect(() => {
        if (!!UpdateSoldDate && !!UpdateSoldDate.updateproductdateundersoldto && UpdateSoldDate.updateproductdateundersoldto !== undefined) {
            dispatch(eventActions.getAssignedProductListForSoldTo(productGroupId,accountName));


        }
    }, [UpdateSoldDate])

    useEffect(() => {
        return () => {
            dispatch(eventActions.updateProductDateUnderSoldTo());
        }
    }, [])



    return (
        <div className="guideline_popup">
            <Button className="button-popup-desi" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update Start Date & End Date
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>


                            <div class="form-group">
                                <label for="upload">Start Date</label>
                                <input type="date" className="form-control"
                                 defaultValue={myStartDate || ''}
                                 onChange={event => setStartDate(moment(event.target.value).format('DD-MM-YYYY'))}
                                  />
                            </div>
                            <div class="form-group">
                                <label for="upload">End Date</label>
                                <input type="date"
                                 defaultValue = {myEndDate || ''}
                                 className="form-control"
                                 onChange={event => setEndDate(moment(event.target.value).format('DD-MM-YYYY'))} />
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
