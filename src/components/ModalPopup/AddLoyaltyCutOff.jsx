import React, { useEffect, useState } from 'react';
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
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

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

export default function AddLoyaltyCutOff(props) {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [category, setCategory] = React.useState("");
    const [groupcode, setGroupCode] = React.useState("");
    const [soldto, setSoldToNumber] = React.useState("");
    const [year, setYear] = React.useState("");
    const [month, setMonth] = React.useState("");
    const [date, setDate] = React.useState("");
    const CutOffRules = useSelector((state) => state.uploadloyalitycutoffrules);
    const location = useLocation();

    const companyList = useSelector((state) => state.loyalitycompanytypelist.loyalitycompanytypelist);
    const categoryList = useSelector((state) => state.loyaltycategorymaster.loyaltycategorymaster);

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);


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

    const handleSubmit = () => {

        let data = {
            "category": category,
            "date": date,
            "groupCode": groupcode,
            "month": month,
            "soldToNumber": soldto,
            "year": year
        }

        dispatch(eventActions.uploadLoyalityCutOffRules(data));
        setOpen(false);



    }


    useEffect(() => {
        if (CutOffRules && !CutOffRules.loading &&
            (CutOffRules.uploadloyalitycutoffrules)) {
            dispatch(eventActions.getLoyalityCutOffRules(userName.countryCode, 1, 100000));
            toast.success('Loyality Cut Off added successfully', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }, [CutOffRules]);

    useEffect(() => {
        return () => {
            dispatch(eventActions.uploadLoyalityCutOffRules())
        }
    }, [])

  console.log("categoryList",categoryList);

    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Loyalty Cut Off Rules
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>

                        <div className="form-group">
                                <label for="group_code">Sold To Number</label>
                                <input type="text" onChange={event => setSoldToNumber(event.target.value)} class="form-control" placeholder="enter soldto number" />
                            </div> 

                            <div className="form-group">
                                <label for="group_code">Division</label>
                                {/* <input type="text" class="form-control" placeholder="category" /> */}
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
                                <label for="group_code">Company</label>
                                <select name="" id="" onChange={event => setGroupCode(event.target.value)}>
                                    <option value="" >Select  company</option>
                                    {companyList ? companyList.map((compList) => {
                                        return (
                                            <option value={compList.value}>{compList.key}</option>
                                        )
                                    }) : null}


                                </select>

                            </div>

                            {/* <div className="form-group">
                                <label for="group_code">Year</label>
                                <input type="text" onChange={(event) => setYear(event.target.value)} class="form-control" placeholder="enter loyalty point" />
                            </div>



                            <div className="form-group">
                                <label for="group_code">Month</label>
                                <input type="text" onChange={event => setMonth(event.target.value)} class="form-control" placeholder="enter loyalty point" />
                            </div> */}



                            <div className="form-group">
                                <label for="group_code">Date</label>
                                <input type="text" onChange={event => setDate(event.target.value)} class="form-control" placeholder="enter loyalty point" />
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
