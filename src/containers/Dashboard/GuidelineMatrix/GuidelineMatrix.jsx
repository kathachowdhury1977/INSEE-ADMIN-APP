import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import FormPopup from "../../../components/ModalPopup/FormPopup";
import GuidelineMatrixTable from "./GuidelineMatrixTable";

function GuidelineMatrix(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const guidelineMatrix = useSelector((state) => state.guidelinematrix.guidelinematrix);

    useEffect(() => {
        dispatch(eventActions.GuideLinematrix(1,1));
    }, []);



  

    return (
        <>
            <div className="content-wrapper">
                <Header title="Guideline Matrix" />

                <div className="row">
                    <div className="mainScroll">
                        <div className="col-12 mt-2 view_section">
                            <div className="row">

                                <div className="col-8 text-left guide_month_year">
                                    <span><b>Month:</b> {guidelineMatrix&&guidelineMatrix.results[0].month}</span>
                                         &nbsp;&nbsp;&nbsp;
                                  <span><b>Year:</b>  {guidelineMatrix&&guidelineMatrix.results[0].year}</span>
                                </div>
                                <div className="col-4">
                                    <div className="button_popup add-button">
                                        <FormPopup title="Upload Guideline Matrix" />
                                    </div>
                                </div>
                            </div>



                            <div className="table-responsive table_design">
                                <GuidelineMatrixTable/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(GuidelineMatrix);
