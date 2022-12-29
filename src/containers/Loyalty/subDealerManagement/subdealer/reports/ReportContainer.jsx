import React, { useEffect } from "react";
import "./Reports.scss";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../../../components/Header/Header";
import SubDealerActivityPoint from "./activityPointReport/SubDealerActivityPoint";
import { Tab, Tabs } from "@material-ui/core";
// import "./SubDealer.scss";
// import LoyaltyReportsTabs from "./LoyaltyReportsTabs";


function Main(props) {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
      setSelectedTab(newValue);
    };

    return (
        <>
            <div className="content-wrapper">
                <Header title="Sub Dealer Management List" />
                <div className="row ipad_css ">
                    <div className="mainScroll">                        
                            <div className="col-12 mt-2">
                            <Tabs value={selectedTab} onChange={handleChange}>
                            <Tab label="DEALER ACTIVITY POINT REPORT" />
                            <Tab label="VOLUME ALLOCATION REPORT" wrapped />
                            <Tab label="ADJUST LOYALTY REPORT" wrapped />
                            <Tab label="DEALER AND SUBDEALER POINTS REPORT" wrapped />
                            </Tabs>
                            {selectedTab === 0 && <SubDealerActivityPoint />}
                                {/* coming soon */}
                                {/* <SubDealerList /> */}
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
}

export default withTranslation()(Main);
