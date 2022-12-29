import React, { Component } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { withTranslation, useTranslation } from "react-i18next";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import "./Tabs.scss";
import Category from "../../containers/Dashboard/ConwoodProductMaster/Category";
import SubCategory from "../../containers/Dashboard/ConwoodProductMaster/SubCategory";
import AddCategories from "../ModalPopup/AddCategories";


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



const VisitGuideTabs = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="new_tabs mt-3">
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Category" {...a11yProps(0)} />
            <Tab label="Sub Category" {...a11yProps(1)} />

          </Tabs>
        </AppBar>
        <div className="tabpanel_box table_design retaiter-table">
          <TabPanel value={value} index={0}>
            <div className="button_popup add-button mt-2">
              <AddCategories title="Add" />
            </div>
            <div className="mt-2">
              <Category />
            </div>

          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="mt-2">
              <SubCategory />
            </div>

          </TabPanel>
        </div>
      </div>
    </div>
  )
}

export default VisitGuideTabs