import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { eventActions } from "../../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Loader from "../../../components/Loader/Loader";
import { useLocation } from 'react-router-dom';
import RetailerAction from "../RetailerSubDealer/RetailerAction";
import RetailerCheckboxPermission from "../RetailerSubDealer/RetailerCheckboxPermission";
import defaultImg from "../../../assets/img/men.jpg";
import ConfirmationBox from '../../../components/MaterialTable/ConfirmationBox';
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';
import DOMPurify from "dompurify";





const headCells = [
    { id: 'Permisions', numeric: false, disablePadding: true, label: 'Permisions' },
    { id: 'Action', numeric: true, disablePadding: false, label: 'Action' },
    { id: 'UserName', numeric: true, disablePadding: false, label: 'User Name' },
    { id: 'UserImage', numeric: true, disablePadding: false, label: 'User Image' },
    { id: 'Salutation', numeric: true, disablePadding: false, label: 'Salutation' },
    { id: 'FirstName', numeric: true, disablePadding: false, label: 'First Name' },
    { id: 'LastName', numeric: true, disablePadding: false, label: 'Last Name' },
    { id: 'NickName', numeric: true, disablePadding: false, label: 'Nick Name' },
    { id: 'MobileNumber', numeric: true, disablePadding: false, label: 'Mobile Number' },
    { id: 'PhoneNumber', numeric: true, disablePadding: false, label: 'Phone Number' },
    { id: 'EmailAddress', numeric: true, disablePadding: false, label: 'Email Address' },
    { id: 'Gender', numeric: true, disablePadding: false, label: 'Gender' },
    { id: 'DateOfBirth', numeric: true, disablePadding: false, label: 'Date Of Birth' },
    { id: 'Age', numeric: true, disablePadding: false, label: 'Age' },
    { id: 'MaritalStatus', numeric: true, disablePadding: false, label: 'Marital Status' },
    { id: 'Relation', numeric: true, disablePadding: false, label: 'Relation' },
    { id: 'Position', numeric: true, disablePadding: false, label: 'Position' },
    { id: 'SocialIDsWhatsApp,Line,Zolo', numeric: true, disablePadding: false, label: 'Social IDs(WhatsApp,Line,Zolo)' },
    { id: 'HighestEducation', numeric: true, disablePadding: false, label: 'Highest Education' },
    { id: 'Institution', numeric: true, disablePadding: false, label: 'Institution' },
    { id: 'Major', numeric: true, disablePadding: false, label: 'Major' },
    { id: 'FavouriteFood', numeric: true, disablePadding: false, label: 'Favourite Food' },
    { id: 'NotPerferredFood', numeric: true, disablePadding: false, label: 'Not Perferred Food' },
    { id: 'NotPreferredDrink', numeric: true, disablePadding: false, label: 'Not Preferred Drink' },
    { id: 'DietaryLimitation', numeric: true, disablePadding: false, label: 'Dietary Limitation' },
    { id: 'FavoriteSports', numeric: true, disablePadding: false, label: 'Favorite Sports' },
    { id: 'country', numeric: true, disablePadding: false, label: 'Country' },
    { id: 'HandiCap', numeric: true, disablePadding: false, label: 'HandiCap' },
    { id: 'PDPA', numeric: true, disablePadding: false, label: 'PDPA Signed' },
    { id: 'PDPAConsentDate/Time', numeric: true, disablePadding: false, label: 'PDPA Signed Date/Time' },
];

function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
}));

const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
    loaderItem: {
        width: '100%',
        margin: '30px auto',
        height: '100vh'
    },
    root: {
        width: '100%',
    },

    container: {
        maxHeight: "calc(90vh - 261px)",
    },

    paper: {
        width: '100%',
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

export default function RetailerSubDealerUsers(props) {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const dispatch = useDispatch();
    let history = useHistory();
    const location = useLocation();

    const { userId } = location.state;
    const { contactPersonDetails } = location.state;
    const { retailerCode } = location.state;
    const { retailerName } = location.state;

    const { accountName } = location.state;
    const { soldtoNumber } = location.state;
    const AccountCardList = useSelector((state) => state.retailerallcontactlist);
    const uploadContact = useSelector((state) => state.uploadContact);
    const searchedContactList = useSelector(state => state.SearchedContactList);
    const [open, setOpen] = React.useState(false);
    const [contactDelete, setContactDelete] = React.useState('');
    const deleteContact = useSelector((state) => state.deleteretailercontactlist);
    const ResendLogin = useSelector((state) => state.resendlogincredential);
    const SendSmsuser = useSelector((state) => state.sendsmsfromsoldto);


    console.log("contactPersonDetails", contactPersonDetails);
    
    // useEffect(() => {
    //     !!props.searchValue &&  dispatch(eventActions.retailerAllContactList(retailerCode, props.searchValue))
    // }, [props.searchValue])


    useEffect(() => {
        dispatch(eventActions.retailerAllContactList(retailerCode, ''));
    }, []);


    let rows = [];

     rows =  AccountCardList.retailerallcontactlist ? AccountCardList.retailerallcontactlist: [];
      

     console.log("my contact",AccountCardList);
    

    const updateContactList = (event, userId, retailerCode, retailerName, inseeRefId) => {
        console.log("event", accountName);
        history.push("/EditRetailerContactForm", { userId: userId, retailerCode: retailerCode, retailerName: retailerName, inseeRefId: inseeRefId });
    }

    const deleteContactpop = (event, retailerCode, userId) => {

        setOpen(true)
        setContactDelete({"retailerCode":retailerCode, "userId":userId})
    }

    console.log("primaryMobileNumber", contactDelete);

    useEffect(() => {
        if (!!deleteContact.deleteretailercontactlist && !!deleteContact.deleteretailercontactlist !== undefined) {
            dispatch(eventActions.retailerAllContactList(retailerCode));
            toast.success('Retailer Contact is deleted successfully', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }, [deleteContact])

    useEffect(() => {
        return () => {
            dispatch(eventActions.deleteRetailerContactList())
        }
    }, [])

    const resendLogin = (event, userId) => {
        console.log("my user id", userId);
        dispatch(eventActions.resendEmailLoginCredential(userId));
    }



    useEffect(() => {
        if (!!ResendLogin.resendlogincredential && !!ResendLogin.resendlogincredential !== undefined) {
            dispatch(eventActions.AccountContactList(accountName, soldtoNumber));
            toast.success('We have resend login credential successfully', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else if (!!ResendLogin && ResendLogin.error) {
            toast.success(!!ResendLogin.error, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }

    }, [ResendLogin])


    useEffect(() => {
        return () => {
            dispatch(eventActions.resendEmailLoginCredential())
        }
    }, [])


    // const SendSmsuser = useSelector((state) => state.sendsmsfromsoldto);

    const sendSMS = (event, userId) => {
        console.log("mysms", userId);
        dispatch(eventActions.sendSMSformSoldTo(userId));
    }



    useEffect(() => {
        if (!!SendSmsuser.sendsmsfromsoldto && !!SendSmsuser.sendsmsfromsoldto !== undefined) {
            dispatch(eventActions.AccountContactList(accountName, soldtoNumber));
            toast.success('We have SMS successfully', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else if (!!SendSmsuser && SendSmsuser.error) {
            toast.success(!!SendSmsuser.error, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }

    }, [SendSmsuser])



    useEffect(() => {
        return () => {
            dispatch(eventActions.sendSMSformSoldTo())
        }
    }, [])


    const [soldToList, setSoldToList] = React.useState("");
    const [shipToList, setShipToList] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);

    const handleSoldToList = (event, ownerSoldToList, shipToList, relation) => {
        setSoldToList({ 'List': ownerSoldToList || shipToList, 'relation': relation });
        setPopupopen(true);
    }


    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableContainer className={classes.container}>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        stickyHeader aria-label="sticky table"
                    >
                        <EnhancedTableHead
                            rowCount={rows && rows.length}
                        />
                        <TableBody>
                            {AccountCardList && AccountCardList.loading ? <div className={classes.loaderItem}><Loader /></div> :
                                  rows && rows
                                  .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                                  : rows && rows
                                    .slice()
                                    .reverse()
                                        .map((row, index) => {
                                            const labelId = `enhanced-table-checkbox-${index}`;
                                            return (
                                                <TableRow>

                                                    <TableCell id={labelId} align="left">
                                                        <div className="pt-2">
                                                            <RetailerAction row={row} />
                                                            <RetailerCheckboxPermission row={row} />
                                                        </div>
                                                        <div style={{marginTop:"35px"}}>
                                                        <button className="send-sms" onClick={(event) => sendSMS(event, row.userId)}>Send SMS</button>
                                                        <button className="resend-mail" onClick={(event) => resendLogin(event, row.userId)}>Resend Login Credential</button>
                                                       </div>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <span class="product_group-edit" onClick={(event) => updateContactList(event, row.userId, retailerCode, retailerName, row.inseeRefId)}>Edit</span>
                                                        <span class="product_group-edit" onClick={(event) => deleteContactpop(event, retailerCode, row.userId)}>Delete</span>
                                                    </TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.userId)}}></TableCell>
                                                    <TableCell align="right"><img className="user_image" src={row.contactImage && row.contactImage ? row.contactImage : defaultImg}></img></TableCell>
                                                    <TableCell align="right">{row.salutation}</TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.firstName)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.lastName)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.nickName)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.alternateMobileNumber)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.phoneNumber)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.emailId)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.gender)}}></TableCell>
                                                    <TableCell align="right">{row.dob === null ? "" : moment(row.dob).format('DD-MM-yyyy')}
                                                    </TableCell>
                                                    <TableCell align="right">{row.age}</TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.maritalStatus)}}></TableCell>
                                                    <TableCell align="right"> {row.relation}</TableCell>
                                                    <TableCell align="right"  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.position)}}></TableCell>
                                                    <TableCell align="right">
                                                        {row.whatsAppId} <br />
                                                        {row.zoloId} <br />
                                                        {row.lineId}</TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.education)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.institution)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.major)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.favFood)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.nonPreferedFood)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.nonPreferedDrink)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.dietaryLimitaion)}}></TableCell>
                                                    <TableCell align="right" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.favSports)}}></TableCell>
                                                    <TableCell align="right">{row.countryCode}</TableCell>
                                                    <TableCell align="right">{row.handicaped}</TableCell>
                                                    <TableCell align="right">{row.pdpConfirmed}</TableCell>
                                                    <TableCell align="right">{row.confirmedDate}</TableCell>

                                                </TableRow>
                                            );
                                        })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>


            <div>
                {!!contactDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteRetailerContactList(contactDelete)} open={open} setOpen={setOpen} />}
            </div>
        </div>
    );
}
