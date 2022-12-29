import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import AddTransportorZone from "../../../components/ModalPopup/AddTransportorZone";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import EditTransportorZone from "../../../components/MasterPopup/EditTransportorZone";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import Loader from "../../../components/Loader/Loader";


function TransportorZone(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [zone, setZone] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');
    const transportorZone = useSelector((state) => state.transportorzone.transportorzone);

 
    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.transportorZone(userName.countryCode));
    }, []);

    console.log("transportorZone", transportorZone);

    let rows = transportorZone ? transportorZone : [];
    let dataArr = rows.map(item => {
        return [item.transporterZone, item]
    });

    let maparr = new Map(dataArr);
    let result = [...maparr.values()];
    rows = result.reverse();


    const handleDelete = (event) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete(event)
    }

    const handlepen = (event, transporterZone, disctrictCode, district, provinceCode, province, countryCode) => {
        setZone({
            'transporterZone': transporterZone, 'disctrictCode': disctrictCode, 'district': district,
            'provinceCode': provinceCode, 'province': province, 'countryCode': countryCode
        });
        setPopupopen(true);
    }

    return (
        <>
            <div className="content-wrapper">
                <Header title="Transportation Zone" />
                <div className="row">
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddTransportorZone title="Add Transportation Zone" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section fixTableHead">
                            <table class="table table-bordered guideline_table">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Transportation Zone Code</th>
                                        <th>District Code</th>
                                        <th>District</th>
                                        <th>Province Code</th>
                                        <th>Province</th>
                                        <th>Country Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transportorZone && transportorZone.loading ? <Loader /> :
                                        rows ? rows.map((transportorItem) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <div className="action">
                                                            <span className="category_icon">
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, transportorItem.transporterZone, transportorItem.disctrictCode,
                                                                    transportorItem.district, transportorItem.provinceCode, transportorItem.province, transportorItem.countryCode)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>{transportorItem.transporterZone}</td>
                                                    <td>{transportorItem.disctrictCode}</td>
                                                    <td>{transportorItem.district}</td>
                                                    <td>{transportorItem.provinceCode}</td>
                                                    <td>{transportorItem.province}</td>
                                                    <td>{transportorItem.countryCode}</td>
                                                </tr>
                                            );
                                        })
                                            : null
                                    }

                                </tbody>
                            </table>
                            <div className="button_popup float-left mt-2">
                                <Link className="add-button bg-dark" to="/Master">Back</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <EditTransportorZone zone={zone} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductGroupList(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </>
    );
}

export default withTranslation()(TransportorZone);
