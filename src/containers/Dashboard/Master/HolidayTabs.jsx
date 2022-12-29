import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { withTranslation, useTranslation } from "react-i18next";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import DateWise from "./DateWise";
import AddHolidayMaster from "../../../components/MasterPopup/AddHolidayMaster";
import UploadHolidayMaster from "../../../components/ModalPopup/UploadHolidayMaster";
import UploadWeekendMaster from "../../../components/MasterPopup/UploadWeekendMaster";
import WeekendHoliday from "./WeekendHoliday";
import AllHolidayWeekendList from "./AllHolidayWeekendList";
// import "./Tabs.scss";



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



const HolidayTabs = (props) => {
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
                        <Tab label="Holiday" {...a11yProps(0)} />
                        <Tab label="Weekend" {...a11yProps(1)} />
                        <Tab label="All" {...a11yProps(2)} />

                    </Tabs>
                </AppBar>
                <div className="tabpanel_box table_design retaiter-table">
                    <TabPanel value={value} index={0}>
                        <div className="col-12 text-right p-0 mt-2">
                            <div className="button_popup" style={{display: "flex", justifyContent: "end"}}>
                                <UploadHolidayMaster title="Upload Holiday"/>
                                <AddHolidayMaster title="Add Holiday" />
                            </div>
                        </div>
                        <DateWise />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                          <div className="col-12 text-right p-0 mt-2">
                              <div className="button_popup">
                                  <UploadWeekendMaster title="Upload Weekend"/>
                              </div>
                          </div>
                        <WeekendHoliday/>

                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      <div>
                          <AllHolidayWeekendList/>
                      </div>

                    </TabPanel>
                </div>
            </div>
        </div>
    )
}

export default HolidayTabs