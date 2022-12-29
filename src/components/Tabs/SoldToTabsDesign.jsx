import React, { Component, useEffect } from "react";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import "./Tabs.scss";
import SoldToContact from "../../containers/Dashboard/ExternalManagment/SoldToContact";
import SoldTruckMaster from "../../containers/Dashboard/ExternalManagment/SoldTruckMaster";
import SoldToShip from "../../containers/Dashboard/ExternalManagment/SoldToShip";
import { SubDealerRelation } from "../../containers/Loyalty/dealerManagement/subDealerRelation/SubDealerRelation";
import SoldToContractList from "../../containers/Dashboard/ExternalManagment/SoldToContractList";
import LoyalityPoint from "../../containers/Dashboard/ExternalManagment/LoyalityPoint";
import AddTruckPopup from "../../components/ModalPopup/AddTruckPopup";
import AddLoyalityPoint from "../../components/ModalPopup/AddLoyalityPoint";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import UploadContact from '../MaterialTable/UploadContact'
import TruckMasterSearch from "../SearchBox/TruckMasterSearch";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { eventActions } from "../../_actions";
import VolumeAllocationHistrory from "../../containers/Dashboard/ExternalManagment/VolumeAllocationHistrory";
import AddVolumeAllocation from "../../components/MasterPopup/AddVolumeAllocation";
import LoyaltyTransaction from "../../containers/Loyalty/dealerManagement/loyaltytransaction/LoyaltyTransaction";
import AllocationInventoryList from "../../containers/Loyalty/allocation/allocationInventory/AllocationInventoryList";

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const SoldToTabsDesign = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState("");
  const location = useLocation();
  const { accountName } = location.state;
  const { soldtoNumber } = location.state;
  const downloadContactDetails = useSelector(
    (state) => state.DownloadContactDetails
  );
  const downloadContactVNandLk = useSelector((state) => state.contactvnlkLink);

  let userName = localStorage.getItem("userData");
  userName = JSON.parse(userName);

  console.log(downloadContactVNandLk, "downloadContactVNandLk");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let history = useHistory();

  const addContactform = (event, accountName, soldtoNumber) => {
    history.push("/AddContactForm", { accountName, soldtoNumber });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(eventActions.DownloadContactDetails());
  }, []);

  useEffect(() => {
    dispatch(eventActions.getContactVNLKDownloadLink());
  }, []);

  return (
    <div className="new_tabs mt-3">
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="simple tabs example"
          >
            <Tab label="Contact" {...a11yProps(0)} />
            <Tab label="Contract" {...a11yProps(1)} />
            <Tab label="Ship-To" {...a11yProps(2)} />
            <Tab label="SUB DEALER LIST WITH RELATIONSHIP" className="tabGap" {...a11yProps(3)} />
            <Tab label="DEALER LOYALTY TRANSACTION" className="tabGap" {...a11yProps(4)} />
            <Tab label="ALLOCATION INVENTORY" className="tabGap" {...a11yProps(5)} />
            <Tab label="Truck Master" {...a11yProps(6)} />
            {/* <Tab label="Loyalty Point " {...a11yProps(5)} />
            <Tab label="Vol.Allocation Cut Off Date" {...a11yProps(6)} /> */}
          </Tabs>
        </AppBar>
        <div className="tabpanel_box">
          <TabPanel value={value} index={0}>
            <div
              className="row ml-1 mb-1"
              style={{ justifyContent: "flex-end" }}
            >
              <div className="col-2"></div>
              <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12 col-xs-12 pl-0">
                <div className="button_popup">
                  <div
                    className="search new_search"
                    style={{ marginRight: "10px" }}
                  >
                    <Paper component="form" className={classes.root}>
                      <InputBase
                        className={classes.input}
                        placeholder="Search By Contact "
                        inputProps={{ "aria-label": "" }}
                        onChange={(event) => setSearchValue(event.target.value)}
                      />
                      <IconButton
                        className={classes.iconButton}
                        aria-label="search"
                      >
                        <SearchIcon />
                      </IconButton>
                    </Paper>
                  </div>

                  {/* <UploadContact title="Upload Contact" /> */}
                  <button
                    onClick={(event) =>
                      addContactform(event, accountName, soldtoNumber)
                    }
                    accountName={accountName}
                    soldtoNumber={soldtoNumber}
                    className="add-button new-btn"
                  >
                    Add Contact
                  </button>

                  {userName.countryCode === "VN" ||
                  userName.country === "LK" ? (
                    <a
                      className="add-button add-extr"
                      title="Download Template"
                      style={{ width: "194px", textAlign: "center" }}
                      href={
                        !!downloadContactVNandLk &&
                        !!downloadContactVNandLk.contactvnlkLink &&
                        downloadContactVNandLk.contactvnlkLink
                      }
                      download
                    >
                      <i
                        class="fa fa-download button-upload"
                        aria-hidden="true"
                      ></i>
                      Download
                    </a>
                  ) : (
                    <a
                      className="add-button add-extr"
                      title="Download Template"
                      style={{ width: "194px" }}
                      href={
                        !!downloadContactDetails &&
                        !!downloadContactDetails.downloadedContactList &&
                        downloadContactDetails.downloadedContactList
                      }
                      download
                    >
                      <i
                        class="fa fa-download button-upload"
                        aria-hidden="true"
                      ></i>
                      Download
                    </a>
                  )}
                </div>
              </div>
            </div>
            <SoldToContact searchValue={searchValue} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SoldToContractList />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <SoldToShip />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <SubDealerRelation />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <LoyaltyTransaction />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <AllocationInventoryList soldtoNumber={accountName} />
          </TabPanel>
          <TabPanel value={value} index={6}>
            <div className="table_design">
              <SoldTruckMaster />
            </div>
          </TabPanel>
          {/* <TabPanel value={value} index={6}>
            <LoyalityPoint />
          </TabPanel> */}
          {/* <TabPanel value={value} index={7}>
            <div className="text-right mt-2">
              <AddVolumeAllocation title="Set Volume Allocation Date" />
            </div>

            <VolumeAllocationHistrory />
          </TabPanel> */}
        </div>
      </div>
    </div>
  );
};

export default SoldToTabsDesign;
