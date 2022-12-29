import React, {useEffect} from 'react';
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
// import CsvFileReader from "../CsvFileReader/CsvFileReader";

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

export default function GeographyMasterPopup(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const [contrycode, setCountryCode] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [upload, setUpload] = React.useState("");
    const divisionList = useSelector((state) => state.getdivision.getdivision);

    console.log("upload", upload);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getDivision(userName.countryCode));
    }, []);


    const uploadXl = (event) => {
        setUpload(event.target.files[0]);
        // console.log("event type", event.target.files[0]);
    };

    const handleSubmit = () => {
        dispatch(eventActions.GeographyMasterUpload(contrycode, category, upload));
        setOpen(false);

    };


    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Upload Geography Master
            </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>

                            <div class="form-group">
                                <label for="upload">Country</label>
                                <select name="" id="" onChange={event => setCountryCode(event.target.value)}>
                                    <option value="">Select Country</option>
                                    <option value="TH">TH</option>
                                    <option value="VN">VN</option>
                                    <option value="LK">LK</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="upload">Division</label>         

                                <select name={"division"} onChange={event => setCategory(event.target.value)}>
                                    <option value="">Select Division</option>
                                    {divisionList
                                        ? divisionList.map((divisionItem) => {
                                            return (
                                                <option value={divisionItem.value}>{divisionItem.value}</option>
                                            );
                                        })
                                        : null
                                    }

                                </select>

                            </div>

                            <div class="form-group">
                                <label for="upload">upload File:</label>
                                <input type="file" onChange={uploadXl} />
                            </div>

                        </form>

                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmit} color="primary">
                        Upload
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
