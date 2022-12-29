import React, { useEffect, useState } from 'react';
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
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

export default function EditCategoriesPopup(props) {
    // { subCategoryId: "", subCategoryName: "" }
    const [inputList, setInputList] = useState([]);
    const [open, setOpen] = React.useState(false);
    const categoryId = props.categoryId;
    const dispatch = useDispatch();
    const location = useLocation();
    const [parentcategory, setParentCateogy] = React.useState("");
    const [parentCategoryValue, setParentCategoryValue] = useState("");
    const [parentcatid, setParentCateogyId] = React.useState("");
    const [categoryid, setCateogyId] = React.useState("");
    const [categoryname, setCateogyName] = React.useState("");
    const [sdate, setCateogySdate] = React.useState("");
    const [edate, setCateogyEdate] = React.useState("");
    const addconwood = useSelector((state) => state.addconwoodmaster);
    const parentCategory = useSelector((state) => state.dropdownparent.dropdownparent);

    const categoryList = useSelector((state) => state.getconwoodcategory);
    const UpdateConwood = useSelector((state) => state.updateconwoodcategory);
    const ConwoodAutoList = useSelector((state) => state.conwoodautofillcategory.conwoodautofillcategory);




    console.log("ConwoodAutoList+++++", ConwoodAutoList && ConwoodAutoList);
    const mySubList = ConwoodAutoList && ConwoodAutoList.subCategoryList;
    console.log("mySubList", mySubList);

    //  useEffect(() => {
    //     setInputList(mySubList)
    //    console.log("mySubList+++",mySubList);
    // }, [mySubList]);


    useEffect(() => {
        // debugger

        if (mySubList != null && mySubList != undefined) {
            if (mySubList.length > 0) {
                setInputList(mySubList)
            }

           
            else {
                setInputList([{ subCategoryId: "", subCategoryName: "" }]);

            }

           

        }

    }, [mySubList])


    let formStartDate = ConwoodAutoList && moment(ConwoodAutoList.startDate, 'DD-MM-YYYY').format('YYYY-MM-DD')
    let formEndDate = ConwoodAutoList && moment(ConwoodAutoList.endDate, 'DD-MM-YYYY').format('YYYY-MM-DD')

    useEffect(() => {
        if (props.popupopen) {
            setOpen(true);
        }

    }, []);

    // const subCategoryList = ConwoodAutoList && ConwoodAutoList ? ConwoodAutoList && ConwoodAutoList.subCategoryList.map((categoryItem, i) => {
    //     if (categoryItem != null) {
    //         return {
    //             id: categoryItem.subCategoryId,
    //             name: categoryItem.subCategoryName
    //         }
    //     }

    // })

    //     : [
    //         {
    //             id: "0",
    //             name: "Data is not available",
    //         },
    //     ];

    // console.log("subCategoryList",subCategoryList);    



    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        props.setOpen(false);
        dispatch(eventActions.getConwoodAllCategoryList(2));
    };




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


    const handleInputChange = (e, index) => {
        console.log('inputlist.....', inputList);
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        console.log('checking', list);
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

    const handleSubmit = () => {
        setInputList(inputList)
        let data = {

            "categoryId": categoryid || !!ConwoodAutoList && ConwoodAutoList.categoryId,
            "categoryName": categoryname || !!ConwoodAutoList && ConwoodAutoList.categoryName,
            "countryCode": "string",
            "endDate": edate || ConwoodAutoList && ConwoodAutoList.endDate,
            "id": "string",
            "parentCategoryId": parentCategoryValue || !!ConwoodAutoList && ConwoodAutoList.parentCategoryId,
            "patentCategoryName": parentcategory || !!ConwoodAutoList && ConwoodAutoList.patentCategoryName,
            "startDate": sdate || ConwoodAutoList && ConwoodAutoList.startDate,
            "status": "string",
            "subCategoryId": 0,
            "subCategoryList": inputList,
            "subCategoryName": "string"
        }

        console.log("datadatadata", data);

        dispatch(eventActions.updateConwoodCategory(data, ConwoodAutoList && ConwoodAutoList.id));
        props.setOpen(false);

        setParentCateogy("");
        setParentCategoryValue("");
        setParentCateogyId("");
        setCateogyId("");
        setCateogyName("");
        setCateogySdate("");
        setCateogyEdate("");

    }

    useEffect(() => {
        if (!!UpdateConwood.updateconwoodcategory && UpdateConwood.updateconwoodcategory !== undefined) {
            dispatch(eventActions.getConwoodAllCategoryList(2));
        }

    }, [UpdateConwood])

    useEffect(() => {
        return () => {
            dispatch(eventActions.updateConwoodCategory());
        }
    }, [])



    return (
        <div className="guideline_popup">
            <span variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.title}
            </span>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update Category & Sub Category
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
                                                <select name="" id="" onChange={handleParent} value={parentcategory || (!!ConwoodAutoList && ConwoodAutoList.patentCategoryName) || ''} >
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
                                                <input type="text" disabled class="form-control" value={parentCategoryValue ? parentCategoryValue : !!ConwoodAutoList && ConwoodAutoList.parentCategoryId || ''} onChange={handleParent} placeholder="category Id" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label for="group_code">Category Id</label>
                                                <input type="text" class="form-control" defaultValue={!!ConwoodAutoList && ConwoodAutoList.categoryId || ''} onChange={event => setCateogyId(event.target.value)} placeholder="enter category Id" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label for="group_code">Category Name</label>
                                                <input type="text" class="form-control" defaultValue={!!ConwoodAutoList && ConwoodAutoList.categoryName || ''} onChange={event => setCateogyName(event.target.value)} placeholder="enter category Name" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label for="group_code">Category Start Date</label>
                                                <input type="date" class="form-control" defaultValue={formStartDate || ''} onChange={event => setCateogySdate(moment(event.target.value).format('DD-MM-YYYY'))} />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label for="group_code">Category End Date</label>
                                                <input type="date" class="form-control" placeholder="enterdate" defaultValue={formEndDate || ''} onChange={event => setCateogyEdate(moment(event.target.value).format('DD-MM-YYYY'))} />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="col-12 p-0">
                                {inputList && inputList.map((x, i) => {
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
                                                {inputList.length > 1 &&
                                                    <button
                                                        onClick={() => handleRemoveClick(i)}>
                                                        <i className="fa fa-trash"></i>
                                                    </button>}
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
