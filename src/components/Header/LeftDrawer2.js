import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navmenu from "../Navmenu/Navmenu";
import { withTranslation, useTranslation } from "react-i18next";
import MainLogo from '../../assets/img/logo.png';

const btnSTyle = {
  background: "#f64028",
  color: "#fff",
  border: "none",
  padding: "3%",
  "border-radius": "10px",
  "margin": "10px"
};


function LeftDrawer(props) {
  const { t } = useTranslation();
  let history = useHistory();

  function handleClick(e) {
    history.push("/")

  } 

  console.log("Logout")


  return (
    <>
      <aside className={"main-sidebar  " + props.style}>
        <div className="main_logo">
          <img src={MainLogo} alt="logo" />
        </div>
        <section className="sidebar">
          <ul className="sidebar-menu" data-widget="tree">
            <Navmenu
              classmain={""}
              src={"/Dashboard"}
              faIcon={"fa fa-home"}
              label={t("Dashboard")}
            />
            <Navmenu
              classmain={""}
              src={"/UserManagment"}
              faIcon={"fa fa-users"}
              label={t("Internal User Managment")}
            />



            <Navmenu
              classmain={""}
              src={"/GuidelineMatrix"}
              faIcon={"fa fa-tree"}
              label={t("Guideline Matrix")}
            />

            <Navmenu
              classmain={""}
              src={"/StrategyMatrix"}
              faIcon={"fa fa-tree"}
              label={t("Strategy Matrix")}
            />

            <Navmenu
              classmain={""}
              src={"/SoldToManagement"}
              faIcon={"fa fa-shopping-cart"}
              label={t("Sold To Management")}
            />


            <Navmenu
              classmain={""}
              src={"/RetailerSubDealer"}
              faIcon={"fa fa-users"}
              label={t("Retailer/Sub-dealer Management")}
            />

            <Navmenu
              classmain={""}
              src={"/GeographyMaster"}
              faIcon={"fa fa-globe"}
              label={t("Geography Master")}
            />

            <Navmenu
              classmain={""}
              src={"/CustomerGroupMaster"}
              faIcon={"fa fa-user-circle-o"}
              label={t("Customer Group Master")}
            />

            <Navmenu
              classmain={""}
              src={"/Cms"}
              faIcon={"fa fa-image"}
              label={t("Banner image")}
            />


            <Navmenu
              classmain={""}
              src={"/ProductMaster"}
              faIcon={"fa fa-product-hunt"}
              label={t("Product Master")}
            />

            <Navmenu
              classmain={""}
              src={"/ProductGroupMaster"}
              faIcon={"fa fa-product-hunt"}
              label={t("Product Group Master")}
            />

            <Navmenu
              classmain={""}
              src={"/ProductClassification"}
              faIcon={"fa fa-product-hunt"}
              label={t("Product Classification")}
            />


            {/* <Navmenu
              classmain={""}
              src={"/ContractMaster"}
              faIcon={"fa fa-paper-plane"}
              label={t("Contract Master")}
            /> */}

            {/* <Navmenu
              classmain={""}
              src={"/ShipToMaster"}
              faIcon={"fa fa-ship"}
              label={t("Ship To Master")}
            /> */}

            <Navmenu
              classmain={""}
              src={"/CompanyGroupMaster"}
              faIcon={"fa fa-bar-chart"}
              label={t("Company Group Master")}
            />

            <Navmenu
              classmain={""}
              src={"/ConwoodProductMaster"}
              faIcon={"fa fa-copy"}
              label={t("Conwood Product Master")}
            />

            <Navmenu
              classmain={""}
              src={"/InseePrivilege"}
              faIcon={"fa fa-trophy"}
              label={t("Insee Privilege")}
            />

            <Navmenu
              classmain={""}
              src={"/CustomerTierStatus"}
              faIcon={"fa fa-certificate"}
              label={t("Customer Tier Status")}
            />

            <Navmenu
              classmain={""}
              src={"/DistributorInseeVolume"}
              faIcon={"fa fa-users"}
              label={t("Distributor Insee Volume")}
            />
            <Navmenu
              classmain={""}
              src={"/LeadInseeVolume"}
              faIcon={"fa fa-empire"}
              label={t("Lead Insee Volume")}
            />
            <Navmenu
              classmain={""}
              src={"/DistributorForcast"}
              faIcon={"fa fa-leanpub"}
              label={t("Distributor Forcast")}
            />

            <Navmenu
              classmain={""}
              src={"/Master"}
              faIcon={"fa fa-globe"}
              label={t("Master")}
            />


          </ul>
        </section>
      </aside>
    </>
  );
}
export default withTranslation()(LeftDrawer);
