import React from "react";
import "./SubDealerManagement.scss";
import { Tab, Tabs } from "@material-ui/core";
import Contact from "../subDealerManagement/subdealer/contact/Contact";
import LoyaltyTransaction from "../subDealerManagement/subdealer/loyaltytransaction/LoyaltyTransaction";
import DealerRelationShip from "../subDealerManagement/subdealer/relationShip/DealerRelationShip";
import Header from "../../../components/Header/Header";

const Loyalty = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const subdealerNumber = params.get("subDelearNumber");
  const subdealerName = params.get("subDelearName");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const urlPath = window.location.pathname

  return (
    <>
      <div className="content-wrapper">
        <div className={"row ipad_css"}>
          <div className={`mainScroll ${urlPath === "/SubDealerManagement" && "mainScroll-subdealer"} `}>
            <div className="col-12 mt-2 headerPadding">
              <Header title="Retailer / Sub Dealer Management List" />
              <div className="SubDealerContactContainer">
                <div className="ContactHeader">
                  <h6>
                    Sub Dealer Number
                    <br />
                    <span className="account_dt text-danger">
                      {subdealerNumber}
                    </span>
                  </h6>

                  <h6 className="mr-0">
                    Sub Dealer Name
                    <br />
                    <span className="account_dt text-danger">
                      {subdealerName}
                    </span>
                  </h6>
                </div>
                <Tabs variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile value={selectedTab} onChange={handleChange} style={{overflow: 'auto'}}>
                  <Tab label="CONTACTS" />
                  <Tab label="DEALER LIST WITH RELATIONSHIP" wrapped />
                  <Tab label="SUB DEALER LOYALTY TRANSACTION" wrapped />
                </Tabs>
                {selectedTab === 0 && <Contact />}
                {selectedTab === 1 && <DealerRelationShip />}
                {selectedTab === 2 && <LoyaltyTransaction />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loyalty;
