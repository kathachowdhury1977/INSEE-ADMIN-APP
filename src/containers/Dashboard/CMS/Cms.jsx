import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import "../Dashboard.scss";
import AddAppTypePopup from "../../../components/ModalPopup/AddAppTypePopup";
import { Link } from "react-router-dom";
import BannerImageTable from "../../../components/MaterialTable/BannerImageTable";
import { ToastContainer, toast } from 'react-toastify';

function Cms(props) {
    const addBanner = useSelector((state) => state.addbannerimage);
    const editbannerlist = useSelector((state) => state.editbannerlist);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);

    console.log(addBanner, "bannersss")

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const isBannerAdded = !!addBanner && !!addBanner.addbannerimage
    const isBannerUpdated = !!editbannerlist && !!editbannerlist.editbannerlist

    useEffect(() => {
        (isBannerAdded || isBannerUpdated) &&
            toast.success(`APP and Channel has been ${isBannerAdded ? 'Added' : 'Updated'} successfully`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
    }, [addBanner, editbannerlist])

    useEffect(() => {
        return () => {
            dispatch(eventActions.addBannerImage())
            dispatch(eventActions.editBannerList())
        }
    }, [])

    return (
        <>
            <div className="content-wrapper">
                <Header title="Banner Image" />

                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="col-12 view_section">
                            <div className="row  mt-2 mb-2">

                                <div className="col-3 text-left guide_month_year">

                                </div>
                                <div className="col-9 pr-2">
                                    <div className="button_popup add-button">
                                        <AddAppTypePopup title="Add" />
                                    </div>
                                </div>
                            </div>

                            <div className="table-responsive table_design retaiter-table">
                                <BannerImageTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(Cms);
