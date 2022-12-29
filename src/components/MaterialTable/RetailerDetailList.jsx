import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";

function RetailerDetailList(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [page, setPage] = React.useState(0);
    const [serchTextValue, setSearchText] = React.useState('');
    const retailerData = useSelector((state) => state.retailerSubdealers.retailerSubdealers);
    let startIndex = retailerData && retailerData.fromIndex;
    let endIndex = retailerData && retailerData.toIndex;
    useEffect(() => {
        console.log('rajeev')
        dispatch(eventActions.retailerSubdealers(50, serchTextValue ? serchTextValue : '', 1));
    }, []);

    useEffect(() => {
        dispatch(eventActions.AssignProduct(

        ));
    }, []);

    const eventKeyUp = (e) => {
        setSearchText(e.target.value)
        dispatch(eventActions.retailerSubdealers(50, e.target.value, 1));
    }


    const handleChangePage = (event, value) => {
        if (value === 1) {
            startIndex = 1;
            endIndex = 49;
        }
        else {
            startIndex = ((value - 1) * 49) + 1;
            endIndex = value * 49;

        }
        setPage(value);
        console.log('abcd')
        dispatch(eventActions.retailerSubdealers(endIndex, serchTextValue ? serchTextValue : '', startIndex));

    };

    console.log(retailerData, 'retailerData-----')

    return (
        <>
            <div className="content-wrapper">
                <Header title="Retailer Detail List" />

                <div className="row view_section">
                    <div className="mainScroll">
                        <div className="row mt-3 ml-1">
                            <div className="col-4 pl-2">
                                {/* <RetailerSearch eventKeyUp={eventKeyUp} /> */}
                            </div>
                            <div className="col-8">
                                <div className="button_popup mr-2">
                                    {/* <Link className="add-button">Download</Link> */}
                                    {/* <RetailerSubPopup title="Retailer Managment" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="table-responsive table_design retaiter-table">
                                {/* <RetailerSubDealerTable retailerData={retailerData} page={page} handleChangePage={handleChangePage} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(RetailerDetailList);
