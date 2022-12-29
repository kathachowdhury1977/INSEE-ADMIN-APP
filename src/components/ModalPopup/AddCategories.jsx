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

export default function AddCategories(props) {
    const [inputList, setInputList] = useState([{ subCategoryId: "", subCategoryName: "" }]);
    const [open, setOpen] = React.useState(false);
    const [parentcategory, setParentCateogy] = React.useState("");
    const [parentCategoryValue, setParentCategoryValue] = useState("");
    const [parentcatid, setParentCateogyId] = React.useState("");
    const [categoryid, setCateogyId] = React.useState("");
    const [categoryname, setCateogyName] = React.useState("");
    const [sdate, setCateogySdate] = React.useState("");
    const [edate, setCateogyEdate] = React.useState("");
    const addconwood = useSelector((state) => state.addconwoodmaster);
    const parentCategory = useSelector((state) => state.dropdownparent.dropdownparent);
    const dispatch = useDispatch();

    const handleParent = (event) => {
        var index = event.target.selectedIndex;
        var optionElement = event.target.childNodes[index]
        var option = optionElement.getAttribute("attribute-value");
        console.log("keys", option);
        setParentCategoryValue(option);
        setParentCateogy(event.target.value);
    }


    useEffect(() => {
        dispatch(eventActions.dropdownParentCategory());
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    const handleAddClick = () => {
        setInputList([...inputList, { subCategoryId: "", subCategoryName: "" }]);
    };

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    const handleSubmit = () => {

        console.log("inputList", inputList);

        let UpdateData = {
            "categoryId": categoryid,
            "categoryName": categoryname,
            "countryCode": userName.countryCode,
            "endDate":  moment(edate).format('DD-MM-yyyy'),
            "parentCategoryId": parentCategoryValue,
            "patentCategoryName": parentcategory,
            "startDate": moment(sdate).format('DD-MM-yyyy'),
            "status": "string",
            "subCategoryList": inputList,
        }
        console.log("UpdateData",UpdateData);

        dispatch(eventActions.addConwoodMaster(UpdateData));
      
    }

    useEffect(() => {

        if (!!addconwood && !!addconwood.addconwoodmaster && addconwood.addconwoodmaster !== undefined) {
            dispatch(eventActions.getConwoodAllCategoryList(2));
            toast.success('Conwood has been created successfully', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              setOpen(false);
        }
        else if (!!addconwood && addconwood.error) {
            toast.success(addconwood.error, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          }

    }, [addconwood])



    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Category & Sub Category
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label for="group_code">Parent Category Name</label>
                                                <select name="" id="" onChange={handleParent}>
                                                    <option value="">Select parent Category</option>
                                                    {parentCategory
                                                        ? parentCategory.map((categorylist) => {
                                                            return (
                                                                <option attribute-value={categorylist.key} value={categorylist.value}>{categorylist.value}</option>
                                                            );
                                                        })
                                                        : null
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label for="group_code">Parent Category Id</label>
                                                <input type="text" disabled class="form-control" value={parentCategoryValue} onChange={handleParent} placeholder="category Id" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label for="group_code">Category Id</label>
                                                <input type="text" class="form-control" onChange={event => setCateogyId(event.target.value)} placeholder="enter category Id" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label for="group_code">Category Name</label>
                                                <input type="text" class="form-control" onChange={event => setCateogyName(event.target.value)} placeholder="enter category Name" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label for="group_code">Category Start Date</label>
                                                <input type="date" class="form-control" onChange={event => setCateogySdate(event.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label for="group_code">Category End Date</label>
                                                <input type="date" class="form-control" placeholder="enterdate" onChange={event => setCateogyEdate(event.target.value)} />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="col-12 p-0">
                                {inputList.map((x, i) => {
                                    return (
                                        <div className="row">
                                            <div className="col-5">
                                                <div className="form-group">
                                                    <label for="group_code">Sub Category Id</label>
                                                    <input
                                                        name="subCategoryId"
                                                        class="form-control"
                                                        placeholder="Enter Category id"
                                                        value={x.subCategoryId}
                                                        onChange={e => handleInputChange(e, i)}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-5">
                                                <div className="form-group">
                                                    <label for="group_code">Sub Category Name</label>
                                                    <input
                                                        className="ml10"
                                                        name="subCategoryName"
                                                        class="form-control"
                                                        placeholder="Enter category name"
                                                        value={x.subCategoryName}
                                                        onChange={e => handleInputChange(e, i)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="btn-box col-2 text-right">
                                                {inputList.length !== 1 && <button
                                                    onClick={() => handleRemoveClick(i)}><i className="fa fa-trash"></i></button>}
                                                {inputList.length - 1 === i && <button onClick={handleAddClick}><i className="fa fa-plus"></i></button>}
                                            </div>
                                        </div>
                                    );
                                })}

                            </div>


                        </form>

                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} className="cancel-btn">
                        Cancel
                    </Button>
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
