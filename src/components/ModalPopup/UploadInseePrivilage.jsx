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

export default function UploadInseePrivilage(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const monthList = [
        {
            key: "January",
            value: "January",
        },
        {
            key: "February",
            value: "February",
        },
        {
            key: "March",
            value: "March",
        },
        {
            key: "April",
            value: "April",
        },
        {
            key: "May",
            value: "May",
        },
        {
            key: "June",
            value: "June",
        },

        {
            key: "July",
            value: "July",
        },
        {
            key: "August",
            value: "August",
        },
        {
            key: "September",
            value: "September",
        },

        {
            key: "October",
            value: "October",
        },

        {
            key: "November",
            value: "November",
        },
        {
            key: "December",
            value: "December",
        },
    ]


    var monthItem = new Date()
    var yearItem = new Date().getFullYear();


    const [month, setMonth] = React.useState(monthList[monthItem.getMonth()].value);
    const [year, setYear] = React.useState(yearItem);
    const [upload, setUpload] = React.useState("");
    const uploadInsee = useSelector((state) => state.uploadinseeprivilage);


    const [disabled, setDisabled] = React.useState(true);
    const [selected, setSelected] = React.useState(true);

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
        dispatch(eventActions.UploadInseePrivilage(month, year, upload));
        setOpen(false);
    };



    useEffect(() => {
        if (!!uploadInsee && !!uploadInsee.uploadinseeprivilage && !!uploadInsee.uploadinseeprivilage !== undefined) {
            dispatch(eventActions.InseePrivilageList(49, '', 1));

        }
    }, [uploadInsee])


    useEffect(() => {
        return () => {
            dispatch(eventActions.UploadInseePrivilage())
        }
    }, [])

   

    const yearList = [
        {
            key: "2021",
            value: "2021"
        },

        {
            key: "2022",
            value: "2022"
        },
        {
            key: "2023",
            value: "2023"
        },

        {
            key: "2024",
            value: "2024"
        },

        {
            key: "2025",
            value: "2025"
        },
    ]




  
    console.log("yearItem", yearItem === year ? "sucess" : "fail");




    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen} title="Upload Insee Privilage">
                <i class="fa fa-upload button-upload" aria-hidden="true"></i> {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Upload Insee Privilage
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                        <div className="form-group">
                                <label for="year">Year</label>
                                {console.log("update",yearItem)}
                                <select name="" id="" onChange={event => setYear(event.target.value)}>
                                    <option value="">Select Year</option>
                                    {
                                        yearList ? yearList.map((item) => {
                        
                                            return (
                                                <option value={item.value} selected= {yearItem == item.key ? selected : ""}
                                                disabled={yearItem < item.key ? disabled : ""}>{item.key}</option>
                                            );

                                        }) : null
                                    }


                                </select>
                            </div>
                            <div className="form-group">
                                <label for="month">Month</label>
                                <select name="" id="" onChange={event => setMonth(event.target.value)}>
                                    <option value="">Select Month</option>
                                    {monthList ? monthList.map((item, index) => {
                                        return (
                                            <>
                                            {yearItem > year  ?
                                            <option value={item.value}>{item.key}</option> :
                                          
                                            <option value={item.value} selected={monthItem.getMonth() === index ? selected : false} 
                                            disabled={monthItem.getMonth() >= index ? "" : disabled}>{item.key}</option>
                                          
                                            }
                                             
                                            </>
                                           
                                        );
                                    }) : null

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
