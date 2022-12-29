import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import UploadInseePrivilage from "../../../components/ModalPopup/UploadInseePrivilage";
import InseePrivilageTable from "./InseePrivilageTable";
import InseePrivilageSearch from "../../../components/SearchBox/InseePrivilageSearch";
import { ToastContainer, toast } from 'react-toastify';

function InseePrivilege(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const inseePrivilage = useSelector((state) => state.inseeprivilagelist.inseeprivilagelist);
    const downloadInsee = useSelector((state) => state.downloadinsee.downloadinsee);
    const updateInseePrivilege = useSelector((state) => state.updateinseeprivilege);
    const uploadInsee = useSelector((state) => state.uploadinseeprivilage);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);

    console.log("myInseeList",inseePrivilage);


    useEffect(() => {
        !!updateInseePrivilege && !!updateInseePrivilege.updateinseeprivilege &&
            toast.success(`Insee Privilege has been updated successfully`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
    }, [updateInseePrivilege])

    useEffect(() => {
        return () => {
            dispatch(eventActions.updateInseePrivilage())
        }
    }, [])


    useEffect(() => {
        dispatch(eventActions.DownloadInseePrivilege());
    }, []);

    useEffect(() => {
        if (!!uploadInsee && !!uploadInsee.uploadinseeprivilage && uploadInsee.uploadinseeprivilage !== undefined) {
            dispatch(eventActions.InseePrivilageList(49, '', 1));
            toast.success('Insee Privilege excel has been uploaded successfully', {
                        position: "top-right",
                        autoClose: 4000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
      
          } else if (!!uploadInsee && uploadInsee.error) {
            toast.success(!!uploadInsee.error, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          }

    }, [uploadInsee])

      useEffect(() => {
        return () => {
            dispatch(eventActions.UploadInseePrivilage())
        }
    }, [])

    return (
        <>
            <div className="content-wrapper">
                <Header title="INSEE Privilege" />

                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="col-12 view_section">
                            <div className="row mt-2 mb-2" style={{alignItems: "center"}}>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 text-left guide_month_year">
                                    <span className="insee-month"><b>Month : {inseePrivilage && inseePrivilage.latestMonth}</b></span>
                                    <span className="ml-3"><b>Year : {inseePrivilage && inseePrivilage.latestYear}  </b></span>
                                </div>

                                <div className="col-xl-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 pr-2 mt-2">
                                    <InseePrivilageSearch />
                                </div>

                                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 pr-2">
                                    <div className="button_popup">
                                        {/* <Link to="/" className="add-button">Download Template</Link> */}
                                        <a className="add-button" title="Download Template" href={downloadInsee && downloadInsee} download> <i class="fa fa-download button-upload" aria-hidden="true"></i> Download</a>
                                        <UploadInseePrivilage className="ml-3 add-button" title="INSEE Privilege" />
                                    </div>
                                </div>
                            </div>

                            <div className="table-responsive table_design retaiter-table">

                                <InseePrivilageTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(InseePrivilege);
