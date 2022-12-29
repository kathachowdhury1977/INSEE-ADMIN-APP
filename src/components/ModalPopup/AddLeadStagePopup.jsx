import React,{useEffect} from 'react';
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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

export default function AddAreaTypePopup(props) {
    const dispatch = useDispatch();
    const [name, setName] = React.useState("");
    const [id, setId] = React.useState("");
    const [score, setScore] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const addleadstageReducer = useSelector((state) => state.addleadstagemaster);

   
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (addleadstageReducer && !addleadstageReducer.loading &&
            (addleadstageReducer.addleadstage)) {
                toast.success('Lead stage added successfully', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
            dispatch(eventActions.resetAddLeadStageReducer());
            dispatch(eventActions.getLeadStage());
        }
    }, [addleadstageReducer]);

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    const handleSubmit = () => {
        let data = 
        {
            "leadStage": name,
            "leadStageId": id,
            "score": score
          }
        dispatch(eventActions.addLeadStage(data));
        setOpen(false);
      } 

    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Lead Stage
        </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                        <div className="form-group">
                                <label for="customer_group">Lead Stage Id</label>
                                <input type="text"  class="form-control" onChange={event => setId(event.target.value)} placeholder="enter lead stage id" />
                            </div>
                            <div className="form-group">
                                <label for="customer_group">Lead Stage</label>
                                <input type="text"  class="form-control" onChange={event => setName(event.target.value)} placeholder="enter lead stage" />
                            </div>
                            <div className="form-group">
                                <label for="customer_group">Score</label>
                                <input type="text"  class="form-control" onChange={event => setScore(event.target.value)} placeholder="enter score" />
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
