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

export default function EditBeatManagement(props) {
    const [open, setOpen] = React.useState(false);
    const [beatCode, setBeatCode] = React.useState("");
    const [customerId, setCustomerId] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [region, setRegion] = React.useState("");
    const [province, setProvince] = React.useState("");
    const [district, setDistrict] = React.useState("");
    const [division, setDivision] = React.useState("");
    const [subDistrict, setSubDistrict] = React.useState("");
    const dispatch = useDispatch();
    const myActionDetails = props.beatListI;
    console.log("myActionDetails", myActionDetails.customerId);
    const updateBeatManag = useSelector((state) => state.updatebeatmaster);


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
        // let data = {
            
        //         "beatCode": beatCode ? beatCode: myActionDetails.beatCode,
        //         "country": 
        //             country ? [country] : myActionDetails.country,
                
        //         "customerId": customerId ? [customerId] : myActionDetails.customerId,
                
        //         "district":
        //             district ? [district] : myActionDetails.district,
                
        //         "division": 
        //             division ? [division] : myActionDetails.division,
                
                
        //         "province": 
        //             province ? [province] : myActionDetails.province,
        //         "region": 
        //             region ? [region] : myActionDetails.region,
        //         "subDistrict": 
        //             subDistrict ? [subDistrict] :myActionDetails.subDistrict
                
        //       }

           
        dispatch(eventActions.updateBeatMaster({ 'customerIdList': customerId ? customerId : myActionDetails.customerId, 'id': myActionDetails.id }));
        setBeatCode('');
        setCustomerId("");
        setCountry("");
        setRegion("");
        setProvince("");
        setDistrict("");
        setDivision("");
        setSubDistrict("");
        props.setOpen(false);
    }

    useEffect(() => {
        if (updateBeatManag && !updateBeatManag.loading &&
            (updateBeatManag.updatebeatmaster)) {
                dispatch(eventActions.getBeatMasterSearch());
            toast.success('Beat has been updated successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }, [updateBeatManag]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.updateBeatMaster())
        }
    }, [])



    return (
        <div className="guideline_popup edit-date">
           
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen} className="edit-page">
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update Beat Management
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>

                            <div class="form-group">
                                <label for="customer_group">Beat Code</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={myActionDetails.beatCode}
                                    onChange={event => setBeatCode(event.target.value)}
                                    disabled
                                />
                            </div>
                            <div class="form-group">
                                <label for="customer_group">Customer IDs</label>
                                 <textarea class="form-control"  defaultValue={myActionDetails.customerId}  onChange={event => setCustomerId(event.target.value)}  placeholder="value" name="" id="" cols="30" rows="5"></textarea> 
                                {/* <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={myActionDetails.customerId}
                                    onChange={event => setCustomerId(event.target.value)}
                                /> */}
                            </div>

                            <div class="form-group">
                                <label for="customer_group">Country</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={myActionDetails.country}
                                    onChange={event => setCountry(event.target.value)}
                                    disabled
                                />
                            </div>
                            <div class="form-group">
                                <label for="customer_group">Region</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={myActionDetails.region}
                                    onChange={event => setRegion(event.target.value)}
                                    disabled
                                />
                            </div>
                            <div class="form-group">
                                <label for="customer_group">Province</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={myActionDetails.province}
                                    onChange={event => setProvince(event.target.value)}
                                    disabled
                                />
                            </div>

                            <div class="form-group">
                                <label for="customer_group">District</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={myActionDetails.district}
                                    onChange={event => setDistrict(event.target.value)}
                                    disabled
                                />
                            </div>
                            <div class="form-group">
                                <label for="customer_group">Sub District</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={myActionDetails.subDistrict}
                                    onChange={event => setSubDistrict(event.target.value)}
                                    disabled
                                />
                            </div>
                            <div class="form-group">
                                <label for="customer_group">Division</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={myActionDetails.division}
                                    onChange={event => setDivision(event.target.value)}
                                    disabled
                                />
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
