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

export default function AddSubDealerSoldTo(props) {
    const location = useLocation();
    const { accountName } = location.state;
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const [upload, setUpload] = React.useState("");
    const [subDealerCode, setSubDealerCode] = React.useState("");
    const [markDelete, setMarkDelete] = React.useState(false);
    const addsubDealer = useSelector((state) => state.addsoldtosubdealer);
   

    const getretailerCode = useSelector((state) => state.autosubdealerlist.autosubdealerlist);


    useEffect(() => {
        dispatch(eventActions.getAutoretailersubdealerCode(subDealerCode));
      }, [subDealerCode]);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const uploadXl = (event) => {
        setUpload(event.target.files[0]);
        // console.log("event type", event.target.files[0]);
    };

    const handleSubmit = () => {
        let data = {
 
                "markDelete": markDelete,
                "retailerCode": subDealerCode,
                "retailerName": !!subDealerCode ? !!getretailerCode && getretailerCode && getretailerCode.retailerName: [],
                "retailerNameTH": !!subDealerCode ? !!getretailerCode && getretailerCode && getretailerCode.retailerNameTH :[],   
                "soldToNumber": accountName,        
              
        }
          dispatch(eventActions.AddSoldTosubDealer(data));
          setSubDealerCode('');
          setOpen(false);
          props.setSearchValue("");
    }

    useEffect(() => {
        if (!!addsubDealer && !!addsubDealer.addsoldtosubdealer && addsubDealer.addsoldtosubdealer !== undefined) {
            dispatch(eventActions.subDealerData(1, true, '', accountName, 30));
            toast.success(`Sub Dealer added successfully`, {
                      position: "top-right",
                      autoClose: 4000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
        }
        else if (!!addsubDealer && addsubDealer.error) {
            toast.success(addsubDealer.error, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          }
    }, [addsubDealer])

    useEffect(() => {
        return () => {
            dispatch(eventActions.AddSoldTosubDealer())
        }
    }, [])


    return (
        <div className="guideline_popup assign_popup" style={{width: "108px"}}>
            <Button variant="outlined" color="primary" onClick={handleClickOpen} title="Upload customer Group">
              {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                   Add Sub Dealer
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>

                            <div class="form-group">
                                <label for="soldtonumber">Sub Dealer Code</label>
                                <input type="text" className="form-control" 
                                onChange={(event) => setSubDealerCode(event.target.value) } 
                                placeholder="Enter Retailer Code"/>
                            </div>

                            <div class="form-group">
                                <label for="soldtonumber">Sub Dealer Name (EN)</label>
                                <input type="text" 
                                className="form-control" 
                                placeholder="Enter Sub Dealer EN"
                                defaultValue={!!subDealerCode ? getretailerCode && getretailerCode.retailerName: []}
                                // onChange={(event) => setDealerName(event.target.value)} 
                                />
                            </div>

                            <div class="form-group">
                                <label for="soldtonumber">Sub Dealer Name (TH)</label>
                                <input type="text" className="form-control"
                                placeholder="Enter Sub Dealer TH"
                                 defaultValue={!!subDealerCode ? getretailerCode && getretailerCode.retailerNameTH :[]}
                                // onChange={(event) => setDealerNameTh(event.target.value)} 
                                />
                            </div>

                            <div class="form-group">
                                <label for="soldtonumber">Relationship with  Sub Dealer</label>
                               <select name="" id="" onChange={(event) => setMarkDelete(event.target.value)}>
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
