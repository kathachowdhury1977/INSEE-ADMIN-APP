import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import { Link } from "react-router-dom";
import ".././Dashboard.scss";
import { useLocation } from 'react-router-dom';
import AssignSoldTo from "./AssignSoldTo";
import { ToastContainer, toast } from 'react-toastify';


function SoldToassignProductGroupList(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const location = useLocation();
    const { productGroups } = location.state;
    const { accountName } = location.state;
    const { soldtoNumber } = location.state;


    let history = useHistory();
    const soldtoProductList = useSelector((state) => state.soldtoproductgrouplist);
    const soldtoUpdateDate = useSelector((state) => state.assignsoldtoproductupdatedate);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);


    useEffect(() => {
        dispatch(eventActions.soldtoProductGroupList(accountName));
    }, []);

    console.log("soldtoProductList", productGroups);

    useEffect(() => {
        !!soldtoUpdateDate && !!soldtoUpdateDate.assignsoldtoproductupdatedate && 
      
        toast.success('Product Group Details has been updated successfully', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

        
    }, [soldtoUpdateDate])

    useEffect(() => {
        return () => {
            dispatch(eventActions.assignSoldToProductUpdateDate());
        }
    }, [])
  

    return (
        <>
            <div className="content-wrapper">
                <Header title="Assigned Sold To Product Group" />

                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="col-12 view_section mt-2">
                            <div className="row">
                                <div className="col-9 mt-2">
                                    <div className="header_head">
                                        <h6>Sold To Number<br />
                                            <span className="account_dt text-danger">{accountName}</span>
                                        </h6>

                                        <h6 className="">
                                            Account Name<br />
                                            <span className="account_dt text-danger">{soldtoNumber}</span>
                                        </h6>
                                    </div>

                                </div>
                            </div>
                            <div className="table-responsive table_design retaiter-table">
                               <AssignSoldTo/>
                            </div>

                            <div className="button_popup float-left mt-2">
                                <Link className="add-button bg-dark" to="/SoldToManagement">Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(SoldToassignProductGroupList);
