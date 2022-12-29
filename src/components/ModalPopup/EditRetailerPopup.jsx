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
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles(theme => ({
    dialogPaper: {

        width: '1000px'
    },
}));

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

export default function EditRetailerPopup(props) {
    const [open, setOpen] = React.useState(false);
    const RetailerId = props.retaierDetail;
    const dispatch = useDispatch();
    const location = useLocation();
    const RetailerAuto = useSelector((state) => state.retailerautolist.retailerautolist);
    const UpdateRetailer = useSelector((state) => state.updateretailerlist);

    const [retailercode, setRetailerCode] = useState("");
    const [retailername, setRetailerName] = useState("");
    const [divisioncode, setDivisionCode] = useState("");
    const [distribution, setDistribution] = useState("");
    const [oraganization, setOraganization] = useState("");
    const [payment, setPayment] = useState("");
    const [creditcontrol, setCreditControl] = useState("");
    const [companycode, setCompanyCode] = useState("");
    const [salesrep, setSalesRep] = useState("");
    const [monthly, setMonthly] = useState("");
    const [salesdistrict, setSalesDistrict] = useState("");
    const [address, setAddress] = useState("");
    const [subdistrict, setSubDistrict] = useState("");
    const [province, setProvince] = useState("");
    const [region, setRegion] = useState("");
    const [postal, setPostal] = useState("");
    const [latitude, setLatitude] = useState("");
    const [lognitude, setLognitude] = useState("");
    const [ownerFname, setOwnerFistName] = useState("");
    const [ownerprimary, setOwnerPrimary] = useState("");
    const [ownerAlt, setOwnerAlternate] = useState("");
    const [ownerphone, setOwnerPhone] = useState("");
    const [alternateMobile, setAlternateMobile] = useState("");
    const [ownerphoneS, setPhonenumber2] = useState("");
    const [owneremail, setOwnerEmail] = useState("");
    const [ownerBirth, setOwnerBirthday] = useState("");
    const [contactFname, setContactFname] = useState("");
    const [contactLname, setContactLname] = useState("");
    const [contactmobile1, setContactMobile1] = useState("");
    const [contactphone1, setContactPhone1] = useState("");
    const [contactmobile2, setContactMobile2] = useState("");
    const [contactphoneN2, setContactPhoneN2] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [ownerLastName, setOwnerLastName] = useState("");





    useEffect(() => {
        dispatch(eventActions.retailerAutoList(RetailerId.id));
    }, [RetailerId.id]);



    useEffect(() => {
        if (props.popupopen) {
            setOpen(true);
        }

    }, []);



    console.log("RetailerAuto", RetailerAuto);

    // const handleInputChange = e => {
    //     setProductname(e.target.value);
    // };

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        props.setOpen(false);
    };

    const handleSubmit = () => {

        let data = {
            "address": address || !!RetailerAuto && RetailerAuto.address,
            "companyCode": companycode || !!RetailerAuto && RetailerAuto.companyCode,
            "contactPersonDetails": {
                "email": contactEmail || !!RetailerAuto && RetailerAuto.contactPersonDetails && RetailerAuto.contactPersonDetails.email,
                "firstName": contactFname || !!RetailerAuto && RetailerAuto.contactPersonDetails && RetailerAuto.contactPersonDetails.firstName,
                "lastName": contactLname || !!RetailerAuto && RetailerAuto.contactPersonDetails && RetailerAuto.contactPersonDetails.lastName,
                "mobileNumber": [
                    contactmobile1 || !!RetailerAuto && RetailerAuto.contactPersonDetails && RetailerAuto.contactPersonDetails.mobileNumber[0],
                    contactmobile2 || !!RetailerAuto && RetailerAuto.contactPersonDetails && RetailerAuto.contactPersonDetails.mobileNumber[1]
                ],
                "phoneNumber": [
                    contactphone1 || !!RetailerAuto && RetailerAuto.contactPersonDetails && RetailerAuto.contactPersonDetails.phoneNumber[0],
                    contactphoneN2 || !!RetailerAuto && RetailerAuto.contactPersonDetails && RetailerAuto.contactPersonDetails.phoneNumber[1]
                ]
            },
            "creditControlArea": creditcontrol || !!RetailerAuto && RetailerAuto.creditControlArea,
            "distributionChannelCode": distribution || !!RetailerAuto && RetailerAuto.distributionChannelCode,
            "divisionCode": divisioncode || !!RetailerAuto && RetailerAuto.divisionCode,
            "latitude": latitude || !!RetailerAuto && RetailerAuto.latitude,
            "longitude": lognitude || !!RetailerAuto && RetailerAuto.longitude,
            "monthlyPotential": monthly || !!RetailerAuto && RetailerAuto.monthlyPotential,
            "paymentTerm": payment || !!RetailerAuto && RetailerAuto.paymentTerm,
            "postalCode": postal || !!RetailerAuto && RetailerAuto.postalCode,
            "provinceId": province || !!RetailerAuto && RetailerAuto.provinceId,
            "regionId": region || !!RetailerAuto && RetailerAuto.region,
            "retailerCode": retailercode || !!RetailerAuto && RetailerAuto.retailerCode,
            "retailerName": retailername || !!RetailerAuto && RetailerAuto.retailerName,
            "retailerOwnerDetails": {
                "alternateMobileNumber": [
                    ownerAlt || !!RetailerAuto && RetailerAuto.ownerDetails && RetailerAuto.ownerDetails.alternateMobileNumber[0],
                    alternateMobile || !!RetailerAuto && RetailerAuto.ownerDetails && RetailerAuto.ownerDetails.alternateMobileNumber[1]

                ],
                "birthday": ownerBirth || !!RetailerAuto && RetailerAuto.ownerDetails && RetailerAuto.ownerDetails.birthday,
                "firstName": ownerFname || !!RetailerAuto && RetailerAuto.ownerDetails && RetailerAuto.ownerDetails.firstName,
                "lasttName": ownerLastName || !!RetailerAuto && RetailerAuto.ownerDetails && RetailerAuto.ownerDetails.lastName,
                "phoneNumber": [
                    ownerphone || !!RetailerAuto && RetailerAuto.ownerDetails && RetailerAuto.ownerDetails.phoneNumber[0],
                    ownerphoneS || !!RetailerAuto && RetailerAuto.ownerDetails && RetailerAuto.ownerDetails.phoneNumber[1]
                ],
                "primaryEmail": owneremail || !!RetailerAuto && RetailerAuto.ownerDetails && RetailerAuto.ownerDetails.primaryEmail,
                "primaryMobileNumber": ownerprimary || !!RetailerAuto && RetailerAuto.ownerDetails && RetailerAuto.ownerDetails.primaryMobileNumber
            },
            "salesDistrict": salesdistrict || !!RetailerAuto && RetailerAuto.salesDistrict,
            "salesOrganizationCode": oraganization || !!RetailerAuto && RetailerAuto.salesOrganizationCode,
            "salesRepId": salesrep || !!RetailerAuto && RetailerAuto.salesRepId,
            "soldToNumber": "string",
            "subDistrict": subdistrict || !!RetailerAuto && RetailerAuto.subDistrict
        }

        dispatch(eventActions.updateRetailerList(data, RetailerId.id));
        props.setOpen(false);


        setRetailerCode("");
        setRetailerName("");
        setDivisionCode("");
        setDistribution("");
        setOraganization("");
        setPayment("");
        setCreditControl("");
        setCompanyCode("");
        setSalesRep("");
        setMonthly("");
        setSalesDistrict("");
        setAddress("");
        setSubDistrict("");
        setProvince("");
        setRegion("");
        setPostal("");
        setLatitude("");
        setLognitude("");
        setOwnerFistName("");
        setOwnerPrimary("");
        setOwnerAlternate("");
        setOwnerPhone("");
        setAlternateMobile("");
        setPhonenumber2("");
        setOwnerEmail("");
        setOwnerBirthday("");
        setContactFname("");
        setContactLname("");
        setContactMobile1("");
        setContactPhone1("");
        setContactMobile2("");
        setContactPhoneN2("");
        setContactEmail("");
        setOwnerLastName("");
    };


    useEffect(() => {
        if (!!UpdateRetailer && !!UpdateRetailer.updateretailerlist && UpdateRetailer.updateretailerlist !== undefined) {

        }

    }, [UpdateRetailer])

    useEffect(() => {
        return () => {
            dispatch(eventActions.updateRetailerList())
        }
    }, [])


    return (
        <div className="guideline_popup">
            <span variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.title}
            </span>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen} className="retailer-popup">
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update Retailer / Sub Dealer
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form>
                            <div className="row">
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Retailer Code</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setRetailerCode(event.target.value)}
                                            placeholder="enter retailer code"
                                            defaultValue={!!RetailerAuto && RetailerAuto.retailerCode || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Retailer Name</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setRetailerName(event.target.value)} placeholder="enter retailer Name"
                                            defaultValue={!!RetailerAuto && RetailerAuto.retailerName || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Division Code</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setDivisionCode(event.target.value)}
                                            placeholder="enter division code"
                                            defaultValue={!!RetailerAuto && RetailerAuto.divisionCode || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Distribution Channel Code</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setDistribution(event.target.value)}
                                            placeholder="enter channel code"
                                            defaultValue={!!RetailerAuto && RetailerAuto.distributionChannelCode || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Sales Oragnization Code</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setOraganization(event.target.value)}
                                            placeholder="enter organization code"
                                            defaultValue={!!RetailerAuto && RetailerAuto.salesOrganizationCode || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Payment Term</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setPayment(event.target.value)}
                                            placeholder="enter payment term"
                                            defaultValue={!!RetailerAuto && RetailerAuto.paymentTerm || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Credit Control Area</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setCreditControl(event.target.value)}
                                            placeholder="enter credit control area"
                                            defaultValue={!!RetailerAuto && RetailerAuto.creditControlArea || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Company Code</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setCompanyCode(event.target.value)}
                                            placeholder="enter company code"
                                            defaultValue={!!RetailerAuto && RetailerAuto.companyCode || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Sales Rep Id</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setSalesRep(event.target.value)}
                                            placeholder="enter rep id"
                                            defaultValue={!!RetailerAuto && RetailerAuto.salesRepId || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Monthly Potential</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setMonthly(event.target.value)}
                                            placeholder="enter monthly potential"
                                            defaultValue={!!RetailerAuto && RetailerAuto.monthlyPotential || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Sales District</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setSalesDistrict(event.target.value)}
                                            placeholder="enter sales district"
                                            defaultValue={!!RetailerAuto && RetailerAuto.salesDistrict || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Address</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setAddress(event.target.value)}
                                            placeholder="enter address"
                                            defaultValue={!!RetailerAuto && RetailerAuto.address || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Sub District</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setSubDistrict(event.target.value)}
                                            placeholder="enter sub district"
                                            defaultValue={!!RetailerAuto && RetailerAuto.subDistrict || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Province Id</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setProvince(event.target.value)}
                                            placeholder="enter province id"
                                            defaultValue={!!RetailerAuto && RetailerAuto.provinceId || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Region Id</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setRegion(event.target.value)}
                                            placeholder="enter region id"
                                            defaultValue={!!RetailerAuto && RetailerAuto.region || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Postal Code</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setPostal(event.target.value)}
                                            placeholder="enter postal code"
                                            defaultValue={!!RetailerAuto && RetailerAuto.postalCode || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Latitude</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setLatitude(event.target.value)}
                                            placeholder="enter latitude"
                                            defaultValue={!!RetailerAuto && RetailerAuto.latitude || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Lognitude</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setLognitude(event.target.value)}
                                            placeholder="enter lognitude"
                                            defaultValue={!!RetailerAuto && RetailerAuto.longitude || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Owner Firstname</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setOwnerFistName(event.target.value)}
                                            placeholder="enter firstname"
                                            defaultValue={!!RetailerAuto && RetailerAuto.ownerDetails && RetailerAuto.ownerDetails.firstName || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Owner Lastname</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setOwnerLastName(event.target.value)}
                                            placeholder="enter firstname"
                                            defaultValue={!!RetailerAuto && RetailerAuto.ownerDetails && RetailerAuto.ownerDetails.lastName || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Owner Primary Mobile Number</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setOwnerPrimary(event.target.value)}
                                            placeholder="enter mobile number"
                                            defaultValue={!!RetailerAuto && RetailerAuto.ownerDetails && RetailerAuto.ownerDetails.primaryMobileNumber || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Owner Alternate Mobile Number-1</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setOwnerAlternate(event.target.value)}
                                            placeholder="enter mobile number"
                                            defaultValue={!!RetailerAuto && RetailerAuto.ownerDetails && RetailerAuto.ownerDetails.alternateMobileNumber[0] || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Owner Phone Number-1</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setOwnerPhone(event.target.value)}
                                            placeholder="enter phone number"
                                            defaultValue={!!RetailerAuto && RetailerAuto.ownerDetails && RetailerAuto.ownerDetails.phoneNumber[0] || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Owner Alternate Mobile Number-2</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setAlternateMobile(event.target.value)}
                                            placeholder="enter mobile number"
                                            defaultValue={!!RetailerAuto && RetailerAuto.ownerDetails && RetailerAuto.ownerDetails.alternateMobileNumber[1] || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Owner Phone Number-2</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setPhonenumber2(event.target.value)}
                                            placeholder="enter phone number"
                                            defaultValue={!!RetailerAuto && RetailerAuto.ownerDetails && RetailerAuto.ownerDetails.phoneNumber[1] || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Owner Primary Email</label>
                                        <input type="email" class="form-control"
                                            onChange={event => setOwnerEmail(event.target.value)}
                                            placeholder="enter primary email"
                                            defaultValue={!!RetailerAuto && RetailerAuto.ownerDetails && RetailerAuto.ownerDetails.primaryEmail || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Owner Birthday</label>
                                        <input type="date" class="form-control"
                                            onChange={event => setOwnerBirthday(event.target.value)}
                                            placeholder="enter owner birthday"
                                            defaultValue={!!RetailerAuto && RetailerAuto.ownerDetails && RetailerAuto.ownerDetails.birthday || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Contact FirstName</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setContactFname(event.target.value)}
                                            placeholder="enter first name"
                                            defaultValue={!!RetailerAuto && RetailerAuto.contactPersonDetails && RetailerAuto.contactPersonDetails.firstName || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Contact LastName</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setContactLname(event.target.value)}
                                            placeholder="enter last name"
                                            defaultValue={!!RetailerAuto && RetailerAuto.contactPersonDetails && RetailerAuto.contactPersonDetails.lastName || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Contact Mobile Number-1</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setContactMobile1(event.target.value)}
                                            placeholder="enter mobile number"
                                            defaultValue={!!RetailerAuto && RetailerAuto.contactPersonDetails && RetailerAuto.contactPersonDetails.mobileNumber[0] || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Contact Phone Number-1</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setContactPhone1(event.target.value)}
                                            placeholder="enter phone number"
                                            defaultValue={!!RetailerAuto && RetailerAuto.contactPersonDetails && RetailerAuto.contactPersonDetails.phoneNumber[0] || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Contact Mobile Number-2</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setContactMobile2(event.target.value)}
                                            placeholder="enter mobile number"
                                            defaultValue={!!RetailerAuto && RetailerAuto.contactPersonDetails && RetailerAuto.contactPersonDetails.mobileNumber[1] || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Contact Phone Number-2</label>
                                        <input type="text" class="form-control"
                                            onChange={event => setContactPhoneN2(event.target.value)}
                                            placeholder="enter phone number"
                                            defaultValue={!!RetailerAuto && RetailerAuto.contactPersonDetails && RetailerAuto.contactPersonDetails.phoneNumber[1] || ''} />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="customer_group">Contact Email</label>
                                        <input type="email" class="form-control"
                                            onChange={event => setContactEmail(event.target.value)}
                                            placeholder="enter contact email"
                                            defaultValue={!!RetailerAuto && RetailerAuto.contactPersonDetails && RetailerAuto.contactPersonDetails.email || ''} />
                                    </div>
                                </div>

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
