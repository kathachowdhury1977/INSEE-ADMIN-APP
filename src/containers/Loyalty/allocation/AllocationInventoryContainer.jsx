import React from "react";
import { Tab, Tabs } from "@material-ui/core";
// import Contact from "../subDealerManagement/subdealer/contact/Contact";
// import LoyaltyTransaction from "../subDealerManagement/subdealer/loyaltytransaction/LoyaltyTransaction";
// import DealerRelationShip from "../subDealerManagement/subdealer/relationShip/DealerRelationShip";
import AllocationInventoryList from "./allocationInventory/AllocationInventoryList";
import Header from "../../../components/Header/Header";

const AllocationInventoryContainer = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <>
      <div className="content-wrapper">
        <div className={"row ipad_css"}>
          <div className="mainScroll  ">
            <div className="col-12 mt-2">
              <Header title="Retailer / Sub Dealer Management List" />
              <div className="SubDealerContactContainer">
                <div className="ContactHeader">
                  <h6>
                    Dealer Number
                    <br />
                    <span className="account_dt text-danger">
                      {"98898775654"}
                    </span>
                  </h6>

                  <h6 className="">
                    Dealer Name
                    <br />
                    <span className="account_dt text-danger">
                      {"xyz corporation"}
                    </span>
                  </h6>
                </div>
                <Tabs value={selectedTab} onChange={handleChange}>
                  <Tab label="SUB DEALER LIST WITH RELATIONSHIP"  />
                  <Tab label="DEALER LOYALTY TRANSACTION" wrapped />
                  <Tab label="ALLOCATION INVENTORY" wrapped />
                </Tabs>
                {/* {selectedTab === 0 && <Contact />} */}
                {selectedTab === 0 && <AllocationInventoryList />}
                {/* {selectedTab === 2 && <LoyaltyTransaction />} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllocationInventoryContainer;
