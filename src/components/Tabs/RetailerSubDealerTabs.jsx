import React, { useEffect } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { withTranslation, useTranslation } from "react-i18next";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import "./Tabs.scss";
import RetailerDetailTable from '.././../containers/Dashboard/RetailerSubDealer/RetailerDetailTable';
import RetailerSubDealerUsers from "../../containers/Dashboard/RetailerSubDealer/RetailerSubDealerUsers";
import RetailerLoyalityPointList from "../../containers/Dashboard/RetailerSubDealer/RetailerLoyalityPointList";
import { useLocation } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { eventActions } from "../../_actions";



function TabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div p={3}>
                    <Typography>{children}</Typography>
                </div>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));



const RetailerSubDealerTabs = (props) => {
    const classes = useStyles();
    const location = useLocation();
    const { t } = useTranslation();
    const [value, setValue] = React.useState(0);
    const { retailerCode } = location.state;
    const { retailerName } = location.state;
    const [searchValueSoldTo, setSearchValueSoldTo] = React.useState('')
    const [searchValue, setSearchValue] = React.useState('')
    const dispatch = useDispatch();
    const downloadContact = useSelector((state) => state.DownloadContact.DownloadContact);
    const downloadVNLKContact = useSelector((state) => state.retailervnlkcontactexcel.retailervnlkcontactexcel);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);


    const handleSearchHalndle = (e) => {debugger
        setSearchValueSoldTo(e.target.value)
    }

    const handleSearchContact = (e) => { debugger
        setSearchValue(e.target.value)
        dispatch(eventActions.retailerAllContactList(retailerCode, e.target.value))
    }


    let history = useHistory();

    console.log("retailerCode+", downloadContact);

    const addRetailerContact = (event, retailerCode, retailerName) => {
        console.log("retailerCode,retailerName", retailerCode, retailerName)
        history.push("/AddRetailerContactForm", { retailerCode, retailerName });
    }

    useEffect(() => {
        dispatch(eventActions.DownloadContact(
        ));
    }, []);


    useEffect(() => {
        dispatch(eventActions.VNOrLKRetailerContactExcel(
        ));
    }, []);



    return (

        <div className="new_tabs mt-3">
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Contact" {...a11yProps(0)} />
                        <Tab label="Sold To" {...a11yProps(1)} />
                        {/* <Tab label="Loyalty Point" {...a11yProps(2)} /> */}

                    </Tabs>
                </AppBar>
                <div className="tabpanel_box table_design retaiter-table mt-1">

                    <TabPanel value={value} index={0}>
                        <div className="table-responsive table_design retaiter-table">
                            <div className="button_popup">


                                <div className="search new_search" style={{ marginRight: '10px' }}>
                                    <Paper component="form" className={classes.root}>
                                        <InputBase
                                            className={classes.input}
                                            placeholder="Search By Contact "
                                            inputProps={{ 'aria-label': '' }}
                                            onChange={(e) => handleSearchContact(e)}
                                        />
                                        <IconButton className={classes.iconButton}
                                        
                                        aria-label="search">
                                            <SearchIcon />
                                        </IconButton>
                                    </Paper>
                                </div>

                                { userName.countryCode === "VN" || userName.countryCode === "LK" ?

                                    <a className="add-button add-extr" title="Download Template"
                                    style={{ width: "194px", textAlign: "center" }} href={downloadVNLKContact && downloadVNLKContact} download>
                                    <i class="fa fa-download button-upload" aria-hidden="true"></i>
                                    Download
                                    </a>
                                    :
                                    <a className="add-button add-extr" title="Download Template"
                                    style={{ width: "194px", textAlign: "center" }} href={downloadContact && downloadContact} download>
                                    <i class="fa fa-download button-upload" aria-hidden="true"></i>
                                    Download
                                </a> 
                              }           
                               
                

                                <button onClick={(event) => addRetailerContact(event, retailerCode, retailerName)} className="add-button new-btn">Add Retailer Contact</button>
                            </div>
                            <RetailerSubDealerUsers searchValue={searchValue} />
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        <div className="table-responsive table_design retaiter-table">
                            {/* <div className="button_popup mb-2">
                            
                               
                            </div> */}
                            <RetailerDetailTable/>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className="table-responsive table_design retaiter-table">
                       
                            <RetailerLoyalityPointList />
                        </div>
                    </TabPanel>
                </div>
            </div>
        </div>
    )
}

export default RetailerSubDealerTabs