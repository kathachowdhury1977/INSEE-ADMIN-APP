import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import SearchBox from "../../../components/SearchBox/SearchBox";
import MaterialTable from "../../../components/MaterialTable/MaterialTable";
import AssignProductPopup from "../../../components/ModalPopup/AssignProductPopup";

function ProductMaster(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const assigncheck = useSelector((state) => state.assignproduct.assignproduct);
    const divisionList = useSelector((state) => state.getdivision.getdivision);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);
    const [searchValue, setSeachValue] = React.useState('');
    const [selectDivision, setSelectDivision] = React.useState('');

    console.log("selectDivision",selectDivision);

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getDivision(userName.countryCode));
    }, []);


    useEffect(() => {
        dispatch(eventActions.AssignProduct(

        ));
    }, []);

    // const countryHandler = event => {
       
    //     dispatch(eventActions.filterProductMaster(event.target.value));
    // }

    console.log("divisionList++", divisionList);


    return (
        <>
            <div className="content-wrapper">
                <Header title="Product Master" />

                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className="col-12 view_section">
                            <div className="row mt-2 mb-2" style={{alignItems: "center"}}>
                                <div className="col-4">
                                    <SearchBox handleSearchValue={setSeachValue}
                                        placeholder="Search by Product name or Product Id" />
                                </div>
                                <div className="col-2">
                                    <div className="select-country">
                                        <select name="" id="" onChange={event => setSelectDivision(event.target.value)}>
                                            <option value="">Select Division</option>
                                            <option value="">All</option>
                                              
                                            {divisionList
                                                ? divisionList.map((divisionItem) => {
                                                    return (
                                                        <option value={divisionItem.value}>{divisionItem.value}</option>
                                                    );
                                                })
                                                : null
                                            }

                                        </select>
                                    </div>
                                </div>
                                <div className="col-6 pr-2">

                                    <div className="button_popup">
                                        <AssignProductPopup assigncheck={assigncheck} title="Assign Product Group" />
                                        {/* <Link className="add-button ml-2">Active</Link>
                                        <Li nk className="add-button">In Active</Link>                       */}
                                    </div>
                                </div>
                            </div>


                            <div className="table-responsive table_design retaiter-table">
                                <MaterialTable searchValue={searchValue} selectDivision={selectDivision} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(ProductMaster);
