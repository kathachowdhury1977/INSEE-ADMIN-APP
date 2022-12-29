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

export default function EditForcaseInseePopup(props) {
    const [open, setOpen] = React.useState(false);
    const ObjectList = props.groupDetail;
    const dispatch = useDispatch();
    console.log("ObjectList", ObjectList);
    const updateTotalInsee = useSelector((state) => state.updatetotalinseevolume);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    const [soldtonumber, setSoldtoNumber] = useState("");
    const [division, setDivision] = React.useState('');
    const [jan, setJan] = React.useState('');
    const [feb, setFeb] = React.useState('');
    const [march, setMarch] = React.useState('');
    const [april, setApril] = React.useState('');
    const [may, setMay] = React.useState('');
    const [june, setJune] = React.useState('');
    const [july, setJuly] = React.useState('');
    const [august, setAugust] = React.useState('');
    const [sept, setSept] = React.useState('');
    const [oct, setOct] = React.useState('');
    const [nov, setNov] = React.useState('');
    const [dec, setDec] = React.useState('');
    const [productbrand, setProductBrand] = React.useState('');


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
            "apr": april || ObjectList.apr,
            "august": august || ObjectList.august,
            "createdOn": "",
            "dec": dec || ObjectList.dec,
            "division": division || ObjectList.division,
            "feb": feb || ObjectList.feb,
            "id": ObjectList.id,
            "jan": jan || ObjectList.jan,
            "july": july || ObjectList.july,
            "june": june || ObjectList.june,
            "mar": march || ObjectList.mar,
            "may": may || ObjectList.may,
            "nov": nov || ObjectList.nov,
            "oct": oct || ObjectList.oct,
            "productBrand": productbrand || ObjectList.productBrand,
            "sep": sept || ObjectList.sep,
            "soldTo": soldtonumber || ObjectList.soldTo,
            "type": ObjectList.type,
            "year": ObjectList.year
        }
        dispatch(eventActions.UpdateTotalInseeVolumeList(data));
        setSoldtoNumber("");
        setDivision('');
        setJan('');
        setFeb('');
        setMarch('');
        setApril('');
        setMay('');
        setJune('');
        setJuly('');
        setAugust('');
        setSept('');
        setOct('');
        setNov('');
        setDec('');
        setProductBrand('');
        props.setOpen(false);

    };


    useEffect(() => {
        if (!!updateTotalInsee && !!updateTotalInsee.updatetotalinseevolume && updateTotalInsee.updatetotalinseevolume !== undefined) {
            dispatch(eventActions.getTotalInseeVolumeList("forcast"));
        }
    }, [updateTotalInsee])

    useEffect(() => {
        return () => {
            dispatch(eventActions.UpdateTotalInseeVolumeList())
        }
    }, [])



    return (
        <div className="guideline_popup">
            <Button className="button-popup-desi" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update Lead Insee Volume
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>

                            {/* defaultValue={!!dashboardimageDetails && dashboardimageDetails.startDate || ''} */}
                            <div className="form-group">
                                <label for="sdate">Sold to Number</label>
                                <input type="text"
                                    onChange={event => setSoldtoNumber(event.target.value)}
                                    class="form-control"
                                    disabled
                                    defaultValue={ObjectList.soldTo} />
                            </div>
                            <div className="form-group">
                                <label for="sdate">Division</label>
                                <input type="text"
                                    onChange={event => setDivision(event.target.value)}
                                    class="form-control"
                                    defaultValue={ObjectList.division} />
                            </div>
                            <div className="form-group">
                                <label for="sdate">Product Brand</label>
                                <input type="text"
                                    onChange={event => setProductBrand(event.target.value)}
                                    class="form-control"
                                    defaultValue={ObjectList.productBrand} />
                            </div>

                            <div className="form-group">
                                <label for="sdate">January</label>
                                <input type="text"
                                    onChange={event => setJan(event.target.value)}
                                    class="form-control"
                                    defaultValue={ObjectList.jan} />
                            </div>
                            <div className="form-group">
                                <label for="sdate">February</label>
                                <input type="text"
                                    onChange={event => setFeb(event.target.value)}
                                    class="form-control"
                                    defaultValue={ObjectList.feb} />
                            </div>
                            <div className="form-group">
                                <label for="sdate">March</label>
                                <input type="text"
                                    onChange={event => setMarch(event.target.value)}
                                    class="form-control"
                                    defaultValue={ObjectList.mar} />
                            </div>

                            <div className="form-group">
                                <label for="sdate">April</label>
                                <input type="text"
                                    onChange={event => setApril(event.target.value)}
                                    class="form-control"
                                    defaultValue={ObjectList.apr} />
                            </div>
                            <div className="form-group">
                                <label for="sdate">May</label>
                                <input type="text"
                                    onChange={event => setMay(event.target.value)}
                                    class="form-control"
                                    defaultValue={ObjectList.may} />
                            </div>
                            <div className="form-group">
                                <label for="sdate">June</label>
                                <input type="text"
                                    onChange={event => setJune(event.target.value)}
                                    class="form-control"
                                    defaultValue={ObjectList.june} />
                            </div>

                            <div className="form-group">
                                <label for="sdate">July</label>
                                <input type="text"
                                    onChange={event => setJuly(event.target.value)}
                                    class="form-control"
                                    defaultValue={ObjectList.july} />
                            </div>
                            <div className="form-group">
                                <label for="sdate">August</label>
                                <input type="text"
                                    onChange={event => setAugust(event.target.value)}
                                    class="form-control"
                                    defaultValue={ObjectList.august} />
                            </div>
                            <div className="form-group">
                                <label for="sdate">September</label>
                                <input type="text"
                                    onChange={event => setSept(event.target.value)}
                                    class="form-control"
                                    defaultValue={ObjectList.sep} />
                            </div>
                            <div className="form-group">
                                <label for="sdate">Octomber</label>
                                <input type="text"
                                    onChange={event => setOct(event.target.value)}
                                    class="form-control"
                                    defaultValue={ObjectList.oct} />
                            </div>

                            <div className="form-group">
                                <label for="sdate">November</label>
                                <input type="text"
                                    onChange={event => setNov(event.target.value)}
                                    class="form-control"
                                    defaultValue={ObjectList.nov} />
                            </div>
                            <div className="form-group">
                                <label for="sdate">December</label>
                                <input type="text"
                                    onChange={event => setDec(event.target.value)}
                                    class="form-control"
                                    defaultValue={ObjectList.dec} />
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
