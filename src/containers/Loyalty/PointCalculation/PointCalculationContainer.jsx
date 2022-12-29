import React, { useEffect } from "react";
import "./PointCalculation.scss";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../../src/components/Header/Header";
import RulesListAuto from "./Auto/RulesList";
import PointsManualAdjust from "../PointAdjustment/PointsManualAdjust";
import RulesListManual from "./Manual/RulesList";
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
                <Header title="Point Calculation Rules " />
                <div className="row ipad_css ">
                    <div className="mainScroll">                        
                            <div className="col-12 mt-2">
                            <Tabs value={selectedTab} onChange={handleChange}>
                            <Tab label="POINTS CALCULATION RULES - AUTO" wrapped={false} style={{maxWidth:"295px"}} />                            
                            <Tab label="POINTS CALCULATION RULES - MANUAL" wrapped={false} style={{maxWidth:"312px"}}/>                            
                            <Tab label="POINTS ADJUST - MANUAL" wrapped={false} style={{maxWidth:"312px"}}/>
                            </Tabs>
                            {selectedTab === 0 && <RulesListAuto />}
                            {selectedTab === 2 && <PointsManualAdjust />}
                            {selectedTab === 1 && <RulesListManual />}
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
