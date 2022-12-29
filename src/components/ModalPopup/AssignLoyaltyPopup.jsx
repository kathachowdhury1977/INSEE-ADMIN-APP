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

export default function AssignLoyaltyPopup(props) {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [companytype, setCompanyType] = React.useState("");
    const [groupcode, setGroupCode] = React.useState("");
    const [material, setMaterialGroup] = React.useState("");
    const [loyalty, setLoyalty] = React.useState("");
    const [sdate, setStartDate] = React.useState("");
    const [edate, setEndDate] = React.useState("");
    const location = useLocation();
    // const { productId } = location.state;
    const customerList = useSelector((state) => state.loyaltycustomerlist.loyaltycustomerlist);
    const companyList = useSelector((state) => state.loyalitycompanytypelist.loyalitycompanytypelist);
    const materialGroup = useSelector((state) => state.materialgrouplist.materialgrouplist);
    const addLoyality = useSelector((state) => state.loyaltypointform);

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.loyaltyCustomerTypeList());
    }, []);

    useEffect(() => {
        dispatch(eventActions.loyaltyCompanyTypeList());
    }, []);

    useEffect(() => {
        dispatch(eventActions.materialGroupList(groupcode));
    }, [groupcode]);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {

        let data = {
            "endDate": edate,
            "groupCode": groupcode,
            "materialGroup1": material,
            "points": loyalty,
            "startDate": sdate,
            "typeOfCustomer": companytype
          }

        dispatch(eventActions.postloyaltyPointForm(data));
        setOpen(false);
       


    }


    useEffect(() => {
        if (addLoyality && !addLoyality.loading &&
            (addLoyality.loyaltypointform)) {
            dispatch(eventActions.getLoyalityCalcRules(userName.countryCode, 1, 100000));
            toast.success('Loyality CalcRules added successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }, [addLoyality]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.postloyaltyPointForm())
        }
    }, [])

    console.log("materialGroup", materialGroup);

    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Loyalty Calc Rules
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            
                            <div className="form-group">
                                <label for="group_code">Company</label>
                                <select name="" id="" onChange={event => setGroupCode(event.target.value)}>
                                <option value="" >Select company</option>
                                    {companyList ? companyList.map((compList) =>{
                                        return (
                                            <option value={compList.value}>{compList.key}</option>
                                        ) 
                                    }) : null}
                                   
                                </select>
                               
                            </div>

                            <div className="form-group">
                                <label for="group_code">Material Group</label>
                                <select name="" id="" onChange={event => setMaterialGroup(event.target.value)}>
                                <option value="" >Select  Material group</option>
                                    {materialGroup ? materialGroup.map((compList) =>{
                                        return (
                                            <option value={compList.key}>{compList.key}</option>
                                        ) 
                                    }) : null}
                                   
                                </select>
                               
                            </div>

                            <div className="form-group">
                                <label for="segment">Customer Type</label>
                                <select name="" id="" onChange={event => setCompanyType(event.target.value)}>
                                    <option value="">Select Customer Type</option>
                                    {customerList
                                        ? customerList.map((list) => {
                                            return (
                                                <option value={list.value}>{list.key}</option>
                                            );
                                        })
                                        : null
                                    }

                                </select>
                            </div>
                            <div className="form-group">
                                <label for="group_code">Loyalty Point Per Ton</label>
                                <input type="text" onChange={event => setLoyalty(event.target.value)} class="form-control" placeholder="enter loyalty point" />
                            </div>
                            <div className="form-group">
                                <label for="group_code">Start Date</label>
                                <input type="date" onChange={event => setStartDate(event.target.value)} class="form-control" />
                            </div>
                            <div className="form-group">
                                <label for="group_code">End Date</label>
                                <input type="date" onChange={event => setEndDate(event.target.value)} class="form-control" />
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
