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

export default function AddSoldRetailer(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const location = useLocation();
    const { retailerCode } = location.state;
    const [upload, setUpload] = React.useState("");
    const [soldto, setSoldto] = React.useState("");
    const [accountNameEN, setAccountNameEN] = React.useState("");
    const [accountNameTH, setAccountNameTH] = React.useState("");
    const [relationWith, setRelationShip] = React.useState(false);
    const addSoldTo = useSelector((state) => state.addretailersoldto);
    const soltoNumberSearch = useSelector((state) => state.soldtomanagmentsearch.soldtomanagmentsearch);
    

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.SoldToManagmentSearch(userName.countryCode, 50, soldto ? soldto : '' , 1));
    }, [soldto])

    console.log("soltoNumberSearch",soltoNumberSearch);

    const soldToHandler =(event) => {
        setSoldto(event.target.value)
    }

    console.log("soldto",soldto);


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

 

    const handleSubmit = () => {
        let data = {      
            "accountNameEN": !!soldto ? !!soltoNumberSearch && soltoNumberSearch.results[0].accountName : [],
            "accountNameTH": !!soldto ? !!soltoNumberSearch && soltoNumberSearch.results[0].accountNameTH: [] ,
            "markDelete": relationWith,
            "soldToNumber": soldto,  
            "retailerCode":retailerCode
          }
          dispatch(eventActions.addRetailerSoldTo(data, retailerCode));
        setSoldto("");
        setOpen(false);
        props.setRetailerSearch("");
    }


    useEffect(() => {
        if (addSoldTo && !addSoldTo.loading &&
            (addSoldTo.addretailersoldto)) {
                dispatch(eventActions.retailerDetailList(retailerCode));
                toast.success('Sold To Retailer added successfully', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
            
        }else if (!!addSoldTo && addSoldTo.error) {
            toast.success(addSoldTo.error, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          }
         
    }, [addSoldTo]);

   

    useEffect(() => {
        return () => {
            dispatch(eventActions.addRetailerSoldTo())
           
        }
    }, [])



    return (
        <div className="guideline_popup assign_popup" style={{width: "110px", marginTop: "1px", height : "30px"}}>
            <Button variant="outlined"color="primary" onClick={handleClickOpen} title="Upload customer Group">
              {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                   Add Sold To List
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            <div class="form-group">
                                <label for="soldtonumber">Sold To Number</label>
                                <input type="text"
                                 className="form-control" 
                                 placeholder="Sold To Number"
                                 onChange={soldToHandler}/>
                            </div>

                            <div class="form-group">
                                <label for="soldtonumber">Account Name (EN)</label>
                                <input type="text" 
                                className="form-control" 
                                placeholder="Enter Account Name EN"
                                defaultValue={!!soldto ? !!soltoNumberSearch && soltoNumberSearch.results[0].accountName && soltoNumberSearch.results && soltoNumberSearch.results[0].accountName : null}
                                onChange={(event) => setAccountNameEN(event.target.value)}/>
                            </div>

                            <div class="form-group">
                                <label for="soldtonumber">Account Name (TH)</label>
                                <input type="text" 
                                className="form-control"
                                placeholder="Enter Account Name TH"
                                defaultValue={!!soldto ? !!soltoNumberSearch && soltoNumberSearch.results[0].accountNameTH && soltoNumberSearch.results && soltoNumberSearch.results[0].accountNameTH : null} 
                                onChange={(event) => setAccountNameTH(event.target.value)}/>
                            </div>

                            <div class="form-group">
                                <label for="soldtonumber">Relationship with sold to</label>
                               <select name="" id="" onChange={(event) => setRelationShip(event.target.value)}>
                                   <option value="false">Active</option>
                                   <option value="true">InActive</option>
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
