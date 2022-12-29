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

export default function EditLoyalityCutOffRules(props) {
    const [open, setOpen] = React.useState(false);
    const [category, setCategory] = React.useState("");
    const [groupcode, setGroupCode] = React.useState("");
    const [soldto, setSoldToNumber] = React.useState("");
    const [year, setYear] = React.useState("");
    const [month, setMonth] = React.useState("");
    const [date, setDate] = React.useState("");
    const dispatch = useDispatch();
    const myActionDetails = props.cutoffRules;
    const updateCutOff = useSelector((state) => state.updateloyaltycutoff);
    const companyList = useSelector((state) => state.loyalitycompanytypelist.loyalitycompanytypelist);
    console.log("myActionDetails", myActionDetails);


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

    const handleSubmit = () => {
        let data = {
            "category": category || myActionDetails && myActionDetails.category,
            "date": date || myActionDetails && myActionDetails.date,
            "groupCode": groupcode || myActionDetails && myActionDetails.groupCode,
            "month": month || myActionDetails && myActionDetails.month,
            "soldToNumber": soldto || myActionDetails && myActionDetails.soldToNumber,
            "year": year || myActionDetails && myActionDetails.year
        }
        dispatch(eventActions.updateloyaltyCutOff(data));
        props.setOpen(false);
    }

    useEffect(() => {
        if (updateCutOff && !updateCutOff.loading &&
            (updateCutOff.updateloyaltycutoff)) {
            dispatch(eventActions.getLoyalityCutOffRules(userName.countryCode, 1, 100000));
            toast.success('Loyalty Cut off updated successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }, [updateCutOff]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.updateloyaltyCutOff())
        }
    }, [])




    return (
        <div className="guideline_popup edit-date">
            <Button onClick={handleClickOpen}>
                <i className="fa fa-pencil"></i>
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen} className="edit-page">
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update Loyality Cutt off Rules
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>

                            <div className="form-group">
                                <label for="group_code">Sold To Number</label>
                                <input type="text" disabled defaultValue={myActionDetails && myActionDetails.soldToNumber} onChange={event => setSoldToNumber(event.target.value)} class="form-control" placeholder="enter soldto number" />
                            </div>

                            <div className="form-group">
                                <label for="group_code">Division</label>
                                <input type="text" disabled defaultValue={myActionDetails && myActionDetails.category} onChange={event => setCategory(event.target.value)} class="form-control" placeholder="enter loyalty point" />
                            </div>

                            <div className="form-group">
                                <label for="group_code">Company</label>
                                <select name="" id="" disabled value={groupcode || (myActionDetails && myActionDetails.groupCode) || ''} onChange={event => setGroupCode(event.target.value)}>
                                    <option value="" >Select company</option>
                                    {companyList ? companyList.map((compList) => {
                                        return (
                                            <option value={compList.value}>{compList.key}</option>
                                        )
                                    }) : null}

                                </select>

                            </div>

                            {/* <div className="form-group">
                                <label for="group_code">Year</label>
                                <input type="text" defaultValue={myActionDetails && myActionDetails.year} onChange={event => setYear(event.target.value)} class="form-control" placeholder="enter year" />
                            </div>

                            <div className="form-group">
                                <label for="group_code">Month</label>
                                <input type="text" defaultValue={myActionDetails && myActionDetails.month} onChange={event => setMonth(event.target.value)} class="form-control" placeholder="enter month" />
                            </div> */}

                            <div className="form-group">
                                <label for="group_code">Date</label>
                                <input type="text" defaultValue={myActionDetails && myActionDetails.date} onChange={event => setDate(event.target.value)} class="form-control" placeholder="enter date" />
                            </div>



                        </form>

                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmit} color="primary">
                        Update
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
