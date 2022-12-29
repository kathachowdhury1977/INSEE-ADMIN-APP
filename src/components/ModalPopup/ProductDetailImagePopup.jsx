import React, {useEffect} from 'react';
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

const margin = {
    marginLeft: "10px"
}

const uploadfile = {
    display: "flex"
}


export default function ProductDetailImagePopup(props) {
    const location = useLocation();
    const [open, setOpen] = React.useState(false);
    const [upload, setUpload] = React.useState(50);
    const [thumbnail, setThumbnail] = React.useState(false);
    const dispatch = useDispatch();
    const ProductMasterDetail = useSelector((state) => state.productmasterdetail.productmasterdetail);
    const ProductImages = useSelector((state) => state.productimageupload);
    const { productId } = location.state;

    console.log("ProductMasterDetailpopup", ProductMasterDetail);
    console.log("thumbnail", ProductImages);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const uploadImage = (event) => {
        setUpload(event.target.files[0]);
        ////console.log("event type", event.target.files[0]);
    };

    const description = props.sapDesc;

    console.log('description', description && description.ProductList.Material_Description_Sales_Text_EN__c);


    const handleSubmit = () => {
        ////debugger



        let productData = {};
        productData["productCode"] = description && description.ProductList.ccrz__ProductId__c;
        productData["productImageurl"] = [""];
        productData["productName"] = ProductMasterDetail && ProductMasterDetail.Name;
        productData["productDesc"] = description && description.ProductList.Material_Description_Sales_Text_EN__c;


        dispatch(eventActions.productDetailImageUpload(upload, productData, thumbnail));
        setThumbnail(false);
        setOpen(false);

    };


    useEffect(() => {
        if (ProductImages && !ProductImages.loading &&
            (ProductImages.productimageupload)) {
            dispatch(eventActions.ProductImageGetList(productId && productId));
            toast.success('Product image uploaded successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            dispatch(eventActions.productMasterDetail(productId && productId));
            dispatch(eventActions.getloyaltyPointList(productId && productId));

        }
    }, [ProductImages]);

    useEffect(() => {
        return () => {
            dispatch(eventActions.productDetailImageUpload());
            dispatch(eventActions.ProductImageGetList())
            dispatch(eventActions.productMasterDetail());
        }
    }, [])




    return (
        <div className="guideline_popup">
            <Button variant="outlined" color="primary" className="upload_button" onClick={handleClickOpen}>
                <i className="fa fa-upload"></i> {props.title}
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Upload Image
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form >
                            <div className="form-group">
                                <label for="customer_group" style={uploadfile}> Upload File</label>
                                <input type="file" multiple name="uploadImage" onChange={uploadImage} />
                            </div>

                            <div className="form-group">
                                <input type="checkbox" onChange={(event) => setThumbnail(!thumbnail)} />
                                <label for="customer_group" style={margin}>Display Image</label>
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
