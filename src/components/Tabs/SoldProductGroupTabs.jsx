import React, { useEffect } from 'react';
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { withTranslation, useTranslation } from "react-i18next";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SoldToAssignProductList from "../MaterialTable/SoldToAssignProductList";
import "./Tabs.scss";
import SoldToAddDate from "../ModalPopup/SoldToAddDate";


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



const SoldProductGroupTabs = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { t } = useTranslation();
    const [value, setValue] = React.useState(0);
    const ProductGroupList = useSelector((state) => state.productgroupdetaillist);
    const assigncheck = useSelector((state) => state.assignproduct.assignproduct);

    const location = useLocation();
    const { productGroupName } = location.state

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        dispatch(eventActions.AssignProduct(

        ));
    }, []);


    useEffect(() => {
        dispatch(eventActions.productGroupDetailList());
    }, []);


  

    return (
        <div className="tabs_Section mt-3">
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} className="assigned_heading" onChange={handleChange} aria-label="simple tabs example">
                        <Tab label={productGroupName} {...a11yProps(0)} />
                        {/* <Tab label="Assigned Sold To" {...a11yProps(1)} /> */}

                    </Tabs>
                </AppBar>
                <div className="table_design retaiter-table">             
                    <TabPanel value={value} index={0}>
                        <div className="productlist">
                            <h5 className="assign-head_text">Product Group Name : <span className="text-danger">{productGroupName}</span></h5>
                            <div className="product-width" style={{width: "auto"}}>
                                {/* <SoldToAddDate title="Add Date" assigncheck={assigncheck}/> */}
                             </div>
                            <SoldToAssignProductList />
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        {/* <div className="productlist">
                            <div className="mt-2 ml-2">
                                <h5><strong>Sold To Number</strong></h5>
                            </div>
                            <SoldToAssignList />
                        </div> */}

                    </TabPanel>
                </div>
            </div>
        </div>
    )
}

export default SoldProductGroupTabs;