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

export default function EditInseePrivilege(props) {
    const [open, setOpen] = React.useState(false);
    const details = props.groupDetail;
    const dispatch = useDispatch();
    console.log("details", details);

    const getAutoInseePrivilege = useSelector((state) => state.getautoinseeprivilege.getautoinseeprivilege);
    const updateInseePrivilege = useSelector((state) => state.updateinseeprivilege);
    const inseePrivilage = useSelector((state) => state.inseeprivilagelist.inseeprivilagelist);

    useEffect(() => {
        dispatch(eventActions.getautoInseePrivilege(props.groupDetail.id));
    }, [props.groupDetail.id, !!inseePrivilage && !!inseePrivilage])

    console.log("getAutoInseePrivilege", getAutoInseePrivilege);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    const [soldtonumber, setSoldtoNumber] = useState("");
    const [inssecoins, setInseeCoins] = React.useState('');
    const [nextyear, setNextYear] = React.useState('');
    const [volumeTH, setVolumePeriodTH] = React.useState('');
    const [volumeEN, setVolumePeriodEN] = React.useState('');
    const [remarkTH, setRemarkTH] = React.useState('');
    const [remarkEN, setRemarkEN] = React.useState('');
    const [createDate, setCreateDate] = React.useState('');

   console.log("createDate+++",createDate)

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

    //  let CreateDateList = getAutoInseePrivilege && moment(getAutoInseePrivilege.createdDateInStringFormat, 'YYYY-MM-DD').format('DD-MM-YYYY')
        let CreateDateList = getAutoInseePrivilege && getAutoInseePrivilege.createdDateInStringFormat
    
    console.log("CreateDateList",CreateDateList);
    const handleSubmit = () => {
        // !!getAutoInseePrivilege && !!getAutoInseePrivilege.nextYearStatus
        let data = {
            "coinSalesVolumePeriod_EN": volumeEN  || !!getAutoInseePrivilege && getAutoInseePrivilege.coinSalesVolumePeriod_EN,
            "coinSalesVolumePeriod_TH": volumeTH  || !!getAutoInseePrivilege && getAutoInseePrivilege.coinSalesVolumePeriod_TH,
            "createdDate": createDate  || !!getAutoInseePrivilege && getAutoInseePrivilege.createdDateInStringFormat, 
            "customerInseeCoin": inssecoins || !!getAutoInseePrivilege && getAutoInseePrivilege.customerInseeCoin,
            "id": getAutoInseePrivilege && getAutoInseePrivilege.id,
            "nextYearStatus": nextyear  || !!getAutoInseePrivilege && getAutoInseePrivilege.nextYearStatus,
            "soldToNumber": soldtonumber || !!getAutoInseePrivilege && getAutoInseePrivilege.soldToNumber,
            "soldToRemark_EN": remarkEN  || !!getAutoInseePrivilege && getAutoInseePrivilege.soldToRemark_EN,
            "soldToRemark_TH": remarkTH  || !!getAutoInseePrivilege && getAutoInseePrivilege.soldToRemark_TH
        }
        console.log("my console))", data);
         dispatch(eventActions.updateInseePrivilage(data, getAutoInseePrivilege && getAutoInseePrivilege.id));
        props.setOpen(false);
            setNextYear('');
            setInseeCoins('');
            setSoldtoNumber('');
            setVolumePeriodTH('');
            setVolumePeriodEN('');
            setRemarkTH('');
            setRemarkEN('');
            setCreateDate('');
    };

    useEffect(() => {
        if (!!updateInseePrivilege.updateinseeprivilege && !!updateInseePrivilege.updateinseeprivilege !== undefined) {
            dispatch(eventActions.InseePrivilageList(49, '', 1));
        }
    }, [updateInseePrivilege])


    useEffect(() => {
        return () => {
            dispatch(eventActions.updateInseePrivilage())
        }
    }, [])


   
    return (
        <div className="guideline_popup">
            <Button className="button-popup-desi" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update Insee Privilege
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>

                         
                            <div className="form-group">
                                <label for="sdate">Sold to Number</label>
                                <input type="text"
                                    onChange={event => setSoldtoNumber(event.target.value)}
                                    class="form-control"
                                    disabled
                                    defaultValue={!!getAutoInseePrivilege && getAutoInseePrivilege.soldToNumber || ''}
                                />
                            </div>

                            <div className="form-group">
                                <label for="sdate">Insee Coins</label>
                                <input type="text"
                                    onChange={event => setInseeCoins(event.target.value)}
                                    class="form-control"
                                    defaultValue={!!getAutoInseePrivilege && getAutoInseePrivilege.customerInseeCoin || ''}
                                />
                            </div>
                            <div className="form-group">
                                <label for="sdate">Next Year Status</label>
                                <input type="text"
                                    onChange={event => setNextYear(event.target.value)}
                                    class="form-control"
                                    defaultValue={!!getAutoInseePrivilege && getAutoInseePrivilege.nextYearStatus || ''}
                                />
                            </div>
                            <div className="form-group">
                                <label for="sdate">Coin Sales Volume Period (TH)</label>
                                <input type="text"
                                    onChange={event => setVolumePeriodTH(event.target.value)}
                                    class="form-control"
                                    defaultValue={!!getAutoInseePrivilege && getAutoInseePrivilege.coinSalesVolumePeriod_TH || ''}
                                />
                            </div>

                            <div className="form-group">
                                <label for="sdate">Coin Sales Volume Period (EN)</label>
                                <input type="text"
                                    onChange={event => setVolumePeriodEN(event.target.value)}
                                    class="form-control"
                                    defaultValue={!!getAutoInseePrivilege && getAutoInseePrivilege.coinSalesVolumePeriod_EN || ''}
                                />
                            </div>

                            <div className="form-group">
                                <label for="sdate">Remark (TH)</label>
                                <input type="text"
                                    onChange={event => setRemarkTH(event.target.value)}
                                    class="form-control"
                                    defaultValue={!!getAutoInseePrivilege && getAutoInseePrivilege.soldToRemark_TH || ''}
                                />
                            </div>
                            <div className="form-group">
                                <label for="sdate">Remark (EN)</label>
                                <input type="text"
                                    onChange={event => setRemarkEN(event.target.value)}
                                    class="form-control"
                                    defaultValue={!!getAutoInseePrivilege && getAutoInseePrivilege.soldToRemark_EN || ''}
                                />
                            </div>

                            <div className="form-group">
                                <label for="sdate">Create Date</label>
                                <input type="date"
                                 onChange={event => setCreateDate(event.target.value)}
                                    // onChange={event => setCreateDate(moment(event.target.value).format('DD-MM-YYYY'))}
                                    class="form-control"
                                    defaultValue={CreateDateList || ''}
                                />
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
