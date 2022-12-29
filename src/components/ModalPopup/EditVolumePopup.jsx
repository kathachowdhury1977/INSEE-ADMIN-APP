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
import { setYear } from 'date-fns';



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

export default function EditVolumePopup(props) {
    const location = useLocation();
    const { accountName } = location.state;
    const [open, setOpen] = React.useState(false);
    const [year, setYear] = React.useState('');
    const [month, setMonth] = React.useState('');
    const [cutoff, setCutOff] = React.useState('');
    const [company, setCompany] = React.useState("");
    const [catgory, setCategory] = React.useState("");
    const updatevolume = useSelector((state) => state.updatevolumecuttoffdate);
    const details = props.groupDetail;
    const dispatch = useDispatch();


    const companyList = useSelector((state) => state.loyalitycompanytypelist.loyalitycompanytypelist);
    const categoryList = useSelector((state) => state.loyaltycategorymaster.loyaltycategorymaster);


    useEffect(() => {
        dispatch(eventActions.loyaltyCompanyTypeList());
    }, []);

    useEffect(() => {
        dispatch(eventActions.LoyalityCategoryMasterList());
    }, []);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);


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


    const handleSubmit = (event) => {
        let data = {
                    "category": catgory || details.category,
                    "date": cutoff || details.date,
                    "groupCode": company || details.groupCode,
                    "month": month || details.month,
                    "soldToNumber": accountName,
                    "year": year || details.year
                }
        dispatch(eventActions.updateVolumeCutOffDate(data));
        setYear('');
        setMonth('');
        setCutOff('');
        props.setOpen(false);

    };


   
    useEffect(() => {
        if (updatevolume && !updatevolume.loading &&
            (updatevolume.updatevolumecuttoffdate)) {
            dispatch(eventActions.getVolumeAllocationList(accountName));
            toast.success('Volume Allocation updated successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }, [updatevolume]);





  useEffect(() => {
        return () => {
            dispatch(eventActions.updateVolumeCutOffDate())
        }
    }, [])


    console.log("details++++", details.groupCode);



    return (
        <div className="guideline_popup">
            <Button className="button-popup-desi" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update Volume Cut off date
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            <div className="form-group">
                                <label for="customer_group">Company</label>

                                <select name="" id="" style={{backgroundColor: "#eee"}} disabled value={details.groupCode} onChange={event => setCompany(event.target.value)}>
                                    <option value="" >Select  company</option>
                                    {companyList ? companyList.map((compList) => {
                                        return (
                                            <option value={compList.value}>{compList.key}</option>
                                        )
                                    }) : null}


                                </select>
                            </div>

                            <div className="form-group">
                                <label for="customer_group">Category</label>
                                <select name="" id="" style={{backgroundColor: "#eee"}} disabled value={details.category} onChange={event => setCategory(event.target.value)}>
                                    <option value="" >Select  division</option>
                                    {categoryList ? categoryList.map((list) => {
                                        return (
                                            <option value={list.value}>{list.value}</option>
                                        )
                                    }) : null}
                                </select>
                            </div>

                            <div className="form-group">
                                <label for="customer_group">Year</label>
                                <input type="text" defaultValue={details.year} class="form-control" onChange={event => setYear(event.target.value)} placeholder="enter year" />
                            </div>

                            <div className="form-group">
                                <label for="customer_group">Month</label>
                                <input type="text" defaultValue={details.month} class="form-control" onChange={event => setMonth(event.target.value)} placeholder="enter month" />
                            </div>

                            <div className="form-group">
                                <label for="customer_group">Cut Off Date</label>
                                <input type="text" defaultValue={details.date} class="form-control" onChange={event => setCutOff(event.target.value)} placeholder="enter cutoff date" />
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
