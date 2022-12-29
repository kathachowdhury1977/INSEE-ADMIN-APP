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

export default function UploadLoyalityCutOffRules(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const [category, setCategory] = React.useState("");
    const [groupcode, setGroupCode] = React.useState("");
    const [year, setYear] = React.useState("");
    const [month, setMonth] = React.useState("");
    const [date, setDate] = React.useState("");
    const CutOffRules = useSelector((state) => state.uploadloyalitycutoffrules);
    const companyList = useSelector((state) => state.loyalitycompanytypelist.loyalitycompanytypelist);

    useEffect(() => {
        dispatch(eventActions.loyaltyCompanyTypeList());
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    // const uploadXl = (event) => {
    //     setUpload(event.target.files[0]);
    // };

    const handleSubmit = () => {

        let data = {
            "category": category,
            "date": date,
            "groupCode": groupcode,
            "month": month,
            "year": year
        }

        console.log("mydatas",data);
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


    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen} title="Upload loyality cutoff rules">
                {/* <i class="fa fa-upload button-upload" aria-hidden="true"></i>  */}
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Loyality Cut off Rules
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>

                            <div className="form-group">
                                <label for="group_code">Category</label>
                                <input type="text" onChange={event => setCategory(event.target.value)} class="form-control" placeholder="enter loyalty point" />
                            </div>

                            <div className="form-group">
                                <label for="group_code">Group Code</label>
                                <select name="" id="" onChange={event => setGroupCode(event.target.value)}>
                                <option value="" >Select  code</option>
                                    {companyList ? companyList.map((compList) =>{
                                        return (
                                            <option value={compList.value}>{compList.key}</option>
                                        ) 
                                    }) : null}
                                   
                                </select>
                               
                            </div>

                            <div className="form-group">
                                <label for="group_code">Year</label>
                               <select name="" id="" onChange={(event) => setYear(event.target.value)}>
                                   <option value="2021">2021</option>
                                   <option value="2022">2022</option>
                                   <option value="2023">2023</option>
                                   <option value="2024">2024</option>
                                   <option value="2025">2025</option>
                               </select>
                            </div>

                            <div className="form-group">
                                <label for="group_code">Month</label>
                               <select name="" id="" onChange={(event) => setMonth(event.target.value)}>
                                   <option value="January">January</option>
                                   <option value="February">February</option>
                                   <option value="March">March</option>
                                   <option value="April">April</option>
                                   <option value="May">May</option>
                                   <option value="June">June</option>
                                   <option value="July">July</option>
                                   <option value="August">August</option>
                                   <option value="September">September</option>
                                   <option value="October">October</option>
                                   <option value="November">November</option>
                                   <option value="December">December</option>
                               </select>
                            </div>

                            <div className="form-group">
                                <label for="group_code">Date</label>
                                <input type="date" onChange={event => setDate(event.target.value)} class="form-control" placeholder="enter loyalty point" />
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
