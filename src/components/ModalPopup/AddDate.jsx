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

export default function AddDate(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const location = useLocation();
    const { productGroupId } = location.state;
    const [startdate, setStartDate] = React.useState("");
    const [enddate, setEndDate] = React.useState("");
    const assignvalue = props.assigncheck && props.assigncheck;
    const productIdList = useSelector((state) => state.assignproductitemid);
    const addDate = useSelector((state) => state.assignproductadddate);
    const assignproductgroupdetail = useSelector((state) => state.assignproductgroupidlist);
    console.log("productIdList+++assign", productIdList);


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const handleSubmit = () => {
         
        const data = !!productIdList.assignproductitemid && productIdList.assignproductitemid.map(eachId => {
          
            return {
                "endDate": enddate,
                "productGroupId": productGroupId,
                "productId": eachId,
                "startDate": startdate
            }
        })
         const reqJson = {
            productList : data
         }
         console.log("reqJson+++",reqJson);
        dispatch(eventActions.assignProductAddDate(reqJson));
        setStartDate("");
        setEndDate("");
        setOpen(false);
        // window.location.reload("");

        
      
    }

   

    useEffect(() => {
        if (!!addDate && !!addDate.assignproductadddate && addDate.assignproductadddate !== undefined) {
            dispatch(eventActions.AssignProductGroupDetailList(productGroupId));


        } 
      }, [addDate])

      useEffect(() => {
        return () => {
            dispatch(eventActions.assignProductAddDate());
            dispatch(eventActions.assignProductItemId());
        }
    }, [])
    


    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen} title="Add Start Date and End Date" disabled={assignvalue === 0 || assignvalue === undefined}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Start Date & End Date
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>

                            <div class="form-group">
                                <label for="upload">Start Date</label>
                                <input type="date" className="form-control" onChange={event => setStartDate(moment(event.target.value).format('DD-MM-YYYY'))} />
                            </div>
                            <div class="form-group">
                                <label for="upload">End Date</label>
                                <input type="date" className="form-control" onChange={event => setEndDate(moment(event.target.value).format('DD-MM-YYYY'))} />
                            </div>

                        </form>

                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmit} color="primary">
                        Submit
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
