import React,{useState} from "react";
import { Tab, Tabs } from "@material-ui/core";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import "./allocationInventory.scss";
import { API_URL_LMS} from "../../../../Constant/index";
// import Contact from "../subDealerManagement/subdealer/contact/Contact";
// import LoyaltyTransaction from "../subDealerManagement/subdealer/loyaltytransaction/LoyaltyTransaction";
// import DealerRelationShip from "../subDealerManagement/subdealer/relationShip/DealerRelationShip";
import AllocationInventoryList from "../allocationInventory/AllocationInventoryList";
import ItemDetalsHeaderSection from "../allocationInventory/ItemDetalsHeaderSection";
import InventoryItemList from "../allocationInventory/InventoryItemList";
import InventoryBillingList from "../allocationInventory/InventoryBillingList";
import Header from "../../../../components/Header/Header";

const AllocationInventoryContainer = (props) => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const location = useLocation();
  const itemDetails=location.state.row
  const [tableData, setTableData] = useState([]);
  const [isAddEdit, setIsAddEdit] = useState(false);
    
  const getproductDetails = () => {   
      const requestOptions = {
        headers: {
          "Content-Type": "application/json",
          "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
        },
      };  
      Axios.get(API_URL_LMS+`loyalty/inventory-item?productCode=${itemDetails.productCode}&customerId=${itemDetails.customerId}&billingMonths=${itemDetails.billingMonth}&billingYear=${itemDetails.billingYear}`,requestOptions)
        .then((response) => {
            if(response.data.status===200)
            {
              setTableData(response.data.data)   

            }else{
              setTableData([])
            }
          
        })
        .catch((error) => {
          
        });
  };
  
  React.useEffect(() => {
    // getproductDetails()
  }, []);

  // React.useEffect(() => {
  //   if(isAddEdit===true)
  //   getproductDetails()
  // }, [isAddEdit]);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <>
      <div className="content-wrapper">
        <div className={"row ipad_css"}>
          <div className="mainScroll  ">
            <div className="col-12 mt-2">
              <Header title="Inventory Allocation Item Details" />
              <div className="SubDealerContactContainer">
                <ItemDetalsHeaderSection itemDetails={itemDetails} />
                
                <Tabs value={selectedTab} onChange={handleChange}>
                  <Tab label="CC ALLOCATION INVENTORY ITEMS"  />
                  <Tab label="CC ALLOCATION INVENTORY BILLING" />
                </Tabs>
                {/* {selectedTab === 0 && <Contact />} */}
                {selectedTab === 0 && <InventoryItemList itemDetails={itemDetails} setIsAddEdit={setIsAddEdit} productId={itemDetails.id} dataTable={tableData} />}
                {selectedTab === 1 && <InventoryBillingList itemDetails={itemDetails} />}
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
