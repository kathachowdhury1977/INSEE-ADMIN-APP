
import React from "react";
import { Grid } from "@mui/material";
import moment from "moment";  
import { DataFormat,convertToCurrencyFormatQuantaty } from "../../../../_helpers/commonFunctions";

const ItemDetailsHeaderSection = (props) => {
    return (
        <div className="hearderContainer">
        <div className="ContactHeader">
            <h6>
                Dealer Number
                <br />
                <span className="account_dt text-danger" style={{fontWeight:"500"}}>
                    {props.itemDetails.customerId ? DataFormat(props.itemDetails.customerId) : ""}
                </span>
            </h6>

            <h6 className="">
                Dealer Name
                <br />
                <span className="account_dt text-danger" style={{fontWeight:"500"}}>
                {props.itemDetails.customerName}
                </span>
            </h6>
        </div>
        <Grid container>
        <Grid item md={4} xs={12} className="GridContainer textContainer">
        <div className="headerText">
          <span>Allocation Inventory Item</span> <span>{props.itemDetails.allocationInventoryItem}</span>
        </div>
        <div className="headerText">
          <span>Billing Month</span> <span>{props.itemDetails.billingMonth && props.itemDetails.billingMonth.length ===1 ? "0"+props.itemDetails.billingMonth : props.itemDetails.billingMonth}</span>
        </div>
        <div className="headerText">
          <span>Billing Qty</span> <span>{props.itemDetails.billingQty ? convertToCurrencyFormatQuantaty(props.itemDetails.billingQty) : null}</span>
        </div>
        <div className="headerText">
          <span>Manual Allocated</span> <span>{props.itemDetails.manuallyAllocated ? convertToCurrencyFormatQuantaty(props.itemDetails.manuallyAllocated) : "0.000"}</span>
        </div>

        </Grid>
        <Grid item md={4} xs={12} className="GridContainer">
        <div className="headerText">
          <span>Company</span> <span>{props.itemDetails.company}</span>
        </div>
        <div className="headerText">
          <span>Product Number</span> <span>{props.itemDetails.productCode ? DataFormat(props.itemDetails.productCode) : ""}</span>
        </div>
        <div className="headerText">
          <span>Remaining Qty</span> <span>{convertToCurrencyFormatQuantaty(props.itemDetails.remainingQty)}</span>
        </div>
        <div className="headerText">
          <span>Sum Allocated </span> <span>{props.itemDetails.sumAllocated ? convertToCurrencyFormatQuantaty(props.itemDetails.sumAllocated): null}</span>
        </div>
            
        </Grid>
        <Grid item md={4} xs={12} className="GridContainer">
        <div className="headerText">
          <span>Billing Year</span> <span>{props.itemDetails.billingYear}</span>
        </div>
        <div className="headerText">
          <span>Product Name </span> <span>{props.itemDetails.productName}</span>
        </div>
        <div className="headerText">
          <span>Auto Allocated</span> <span>{convertToCurrencyFormatQuantaty(props.itemDetails.autoAllocated)}</span>
        </div>
        <div className="headerText">
          <span>Expiration Date</span> <span>{props.itemDetails.expirationDate ? moment(props.itemDetails.expirationDate).format("DD-MM-yyyy") : "" }</span>
        </div>
            
        </Grid>
        </Grid>

        </div>
    )
}

export default ItemDetailsHeaderSection;