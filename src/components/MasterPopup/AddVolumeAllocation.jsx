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
import { useLocation } from 'react-router-dom';
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

export default function AddVolumeAllocation(props) {
    const dispatch = useDispatch();
    const location = useLocation();
    const { accountName } = location.state;
    const [year, setYear] = React.useState("");
    const [month, setMonth] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [cutoff, setCutOff] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [catgory, setCategory] = React.useState("");
    const Addvolume = useSelector((state) => state.uploadloyalitycutoffrules);

    const companyList = useSelector((state) => state.loyalitycompanytypelist.loyalitycompanytypelist);
    const categoryList = useSelector((state) => state.loyaltycategorymaster.loyaltycategorymaster);


    useEffect(() => {
        dispatch(eventActions.loyaltyCompanyTypeList());
    }, []);

    useEffect(() => {
        dispatch(eventActions.LoyalityCategoryMasterList());
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    const handleSubmit = () => {
        let data =
        {
            "category": catgory,
            "date": cutoff,
            "groupCode": company,
            "month": month,
            "soldToNumber": accountName,
            "year": year
        }
        dispatch(eventActions.uploadLoyalityCutOffRules(data));
        setOpen(false);
    }

    useEffect(() => {
        if (Addvolume && !Addvolume.loading &&
            (Addvolume.uploadloyalitycutoffrules)) {
            dispatch(eventActions.getVolumeAllocationList(accountName));
            toast.success('Volume Allocation added successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }, [Addvolume]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.uploadLoyalityCutOffRules())
        }
    }, [])


    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Set Volume Allocation Date
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            <div className="form-group">
                                <label for="customer_group">Company</label>

                                <select name="" id="" onChange={event => setCompany(event.target.value)}>
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
                                <select name="" id="" onChange={event => setCategory(event.target.value)}>
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
                                <input type="text" class="form-control" onChange={event => setYear(event.target.value)} placeholder="enter year" />
                            </div>

                            <div className="form-group">
                                <label for="customer_group">Month</label>
                                <input type="text" class="form-control" onChange={event => setMonth(event.target.value)} placeholder="enter month" />
                            </div>

                            <div className="form-group">
                                <label for="customer_group">Cut Off Date</label>
                                <input type="text" class="form-control" onChange={event => setCutOff(event.target.value)} placeholder="enter cutoff date" />
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
