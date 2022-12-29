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

export default function SoldToAddDate(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const location = useLocation();
    const { productGroupId } = location.state;
    const { accountName } = location.state;
    const [startdate, setStartDate] = React.useState("");
    const [enddate, setEndDate] = React.useState("");
    const assignvalue = props.assigncheck && props.assigncheck;
    const productIdList = useSelector((state) => state.soldtoassignproduct);
    const soldtoaddDate = useSelector((state) => state.addproductdateundersoldto);
    const assignproductgroupdetail = useSelector((state) => state.assignproductgroupidlist);
    console.log("productIdList++", productIdList);


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const handleSubmit = () => {

        const data = !!productIdList.soldtoassignproduct && productIdList.soldtoassignproduct.map(eachId => {

            return {
                "endDate": enddate,
                "productGroupId": productGroupId,
                "productId": eachId,
                "soldToNumber": accountName,
                "startDate": startdate

            }
        })
        const reqJson = {
            productList: data
        }
        dispatch(eventActions.addProductDateUnderSoldTo(reqJson));
        setOpen(false);
    }



    useEffect(() => {
        if (!!soldtoaddDate && !!soldtoaddDate.addproductdateundersoldto && soldtoaddDate.addproductdateundersoldto !== undefined) {
            dispatch(eventActions.AssignProductGroupDetailList(productGroupId));


        }
    }, [soldtoaddDate])

    useEffect(() => {
        return () => {
            dispatch(eventActions.addProductDateUnderSoldTo());
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
                                <input type="date" className="form-control" onChange={event => setStartDate(event.target.value)} />
                            </div>
                            <div class="form-group">
                                <label for="upload">End Date</label>
                                <input type="date" className="form-control" onChange={event => setEndDate(event.target.value)} />
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
