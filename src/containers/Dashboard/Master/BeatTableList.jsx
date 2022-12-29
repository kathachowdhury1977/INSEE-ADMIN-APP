import React, { useEffect } from "react";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { eventActions } from "../../../_actions";
import EditBeatManagement from "../../../components/MasterPopup/EditBeatManagement";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import UploadBeatList from "../../../components/MasterPopup/UploadBeatList";
import BeatMasterSearch from "../../../components/SearchBox/BeatMasterSearch";
import CustomerIdListPopup from "./CustomerIdListPopup";
import ProvinceListPopup from "./ProvinceListPopup";
import DistrictListPopup from "./DistrictListPopup";
import SubDistrictListPopup from "./SubDistrictListPopup";
import DivisionListPopup from "./DivisionListPopup";



const BeatTableList = (props) => {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [beatListI, setBeatList] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [customerpop, setCustomerPop] = React.useState(false);
    const [provincepop, setProvincePop] = React.useState(false);
    const [districtpop, setDistrictPop] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');
    const [searchValue, setSearchValue] = React.useState('');
    const [customerIds, setCustomerIdList] = React.useState("");
    const [provinceId, setProvinceList] = React.useState("");
    const [districtId, setDistrictList] = React.useState("");
    const [subdistrictId, setSubDistrictList] = React.useState("");
    const [subdistrictpop, setSubDistrictPop] = React.useState(false);
    const [divisionId, setDivisionList] = React.useState("");
    const [divisionpop, setDivisionPop] = React.useState(false);


    // const [country, setCountry] = React.useState("");
    // const [division, setDivision] = React.useState("");
    // const [region, setRegion] = React.useState("");
    // const [province, setProvince] = React.useState("");
    // const [district, setDistrict] = React.useState("");
    // const [subdistrict, setSubDistrict] = React.useState("");


    const searchList = useSelector((state) => state.beatmastersearch);
    const downloadbeatList = useSelector((state) => state.downloadbeatmaster.downloadbeatmaster);
    const deleteBeat = useSelector((state) => state.deletebeatmaster);
    console.log("searchList+++", searchList);

    useEffect(() => {

        let filterData = [{ key: searchValue }];
        console.log('filterData', filterData);
        dispatch(eventActions.getBeatMasterSearch(filterData));
    }, [searchValue])

    // useEffect(() => {

    //     let filterData = [{ country: country }, { district: district }, { division: division }, {key : searchValue}, { province: province }, { region: region }, { subdistrict: subdistrict }];
    //       console.log('filterData',filterData);
    //        dispatch(eventActions.getBeatMasterSearch(filterData));
    // }, [country, district, division, searchValue, province, region, subdistrict])


    useEffect(() => {
        dispatch(eventActions.downloadBeatMaster());
    }, []);







    const rows = searchList.beatmastersearch ? searchList.beatmastersearch : [];


    const handleDelete = (event, id) => {

        setOpen(true);

        setCategoryDelete(id)
    }

    const handlepen = (event, id, beatCode, customerId, country, region,
        province, district, subDistrict, division) => {
        setBeatList({
            'id': id, 'beatCode': beatCode, 'customerId': customerId, 'country': country, 'region': region,
            'province': province, 'district': district, 'subDistrict': subDistrict, 'division': division
        });
        setPopupopen(true);
    }





    useEffect(() => {
        if (deleteBeat && !deleteBeat.loading &&
            (deleteBeat.deletebeatmaster)) {
            dispatch(eventActions.getBeatMasterSearch());
            toast.success('Beat master deleted successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }, [deleteBeat]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.deleteBeatMaster())
        }
    }, [])

    const customerIdList = (event, customerId) => {
        setCustomerIdList(customerId);
        setCustomerPop(true);
    }

    const provinceList = (event, province) => {
        setProvinceList(province)
        setProvincePop(true)
    }

    const districtList = (event, district) => {
        setDistrictList(district)
        setDistrictPop(true)
    }

    const subDistrictList = (event, subdistrict) => {
        setSubDistrictList(subdistrict)
        setSubDistrictPop(true)
    }

    const subDivision = (event, division) => {
        setDivisionList(division)
        setDivisionPop(true)
    }

    return (
        <>
            <div className="col-12 mt-2 view_section p-0">
                {/* <div className="row mb-2 mt-2 select-box">
                    <div className="col-2">
                        <select name="" id="" onChange={(event) => setCountry(event.target.value)}>
                            <option value="">Select Country</option>
                            {rows ? rows.map((countryList) => {
                                return (
                                    <option value={countryList.country}>{countryList.country}</option>
                                )
                            }) : <div>No data</div>
                            }
                        </select>
                    </div>
                    <div className="col-2">
                        <select name="" id="" onChange={(event) => setDivision(event.target.value)}>
                            <option value="">Select Division</option>
                            {rows ? rows.map((divisionList) => {
                                return (
                                    <option value={divisionList.division}>{divisionList.division}</option>
                                )
                            }) : <div>No data</div>
                            }
                        </select>
                    </div>
                    <div className="col-2">
                        <select name="" id="" onChange={(event) => setRegion(event.target.value)}>
                            <option value="">Select Region</option>
                            {rows ? rows.map((regionList) => {
                                return (
                                    <option value={regionList.region}>{regionList.region}</option>
                                )
                            }) : <div>No data</div>
                            }
                        </select>
                    </div>
                    <div className="col-2">
                        <select name="" id="" onChange={(event) => setProvince(event.target.value)}>
                            <option value="">Select Province</option>
                            {rows ? rows.map((provinceList) => {
                                return (
                                    <option value={provinceList.region}>{provinceList.province}</option>
                                )
                            }) : <div>No data</div>
                            }
                        </select>
                    </div>
                    <div className="col-2">
                        <select name="" id="" onChange={(event) => setDistrict(event.target.value)}>
                            <option value="">Select District</option>
                            {rows ? rows.map((districtList) => {
                                return (
                                    <option value={districtList.district}>{districtList.district}</option>
                                )
                            }) : <div>No data</div>
                            }
                        </select>
                    </div>
                    <div className="col-2">
                        <select name="" id="" onChange={(event) => setSubDistrict(event.target.value)}>
                            <option value="">Select SubDistrict</option>
                            {rows ? rows.map((subdistrictList) => {
                                return (
                                    <option value={subdistrictList.subDistrict}>{subdistrictList.subDistrict}</option>
                                )
                            }) : <div>No data</div>
                            }
                        </select>
                    </div>
                </div> */}
                <div className="row mb-2">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12"></div>
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div className="button_popup add-button">
                            <BeatMasterSearch handleSearchValue={setSearchValue} />
                            <a className="add-button" title="Download Template" href={downloadbeatList && downloadbeatList.beatMasterPath} download> <i class="fa fa-download button-upload" aria-hidden="true"></i> Download</a>
                            <UploadBeatList title="Upload Beat List" />
                        </div>
                    </div>
                </div>
                <div className="fixTableHead" style={{ height: "calc(100vh - 310px)" }}>
                    <table class="table table-bordered guideline_table">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Beat Code</th>
                                <th>Customer IDs</th>
                                <th>Country</th>
                                <th>Region</th>
                                <th>Province</th>
                                <th>District</th>
                                <th>Sub-district</th>
                                <th>Division</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchList && searchList.loading ? <Loader /> :

                                rows && rows
                                    .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                                    : rows && rows
                                        .slice()
                                        .reverse().map((list) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <div className="action">
                                                            <span className="category_icon">
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event, list.id)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, list.id, list.beatCode, list.customerId, list.country, list.region,
                                                                    list.province, list.district, list.subDistrict, list.division)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>{list.beatCode}</td>
                                                    <td><span className="viewClick" onClick={(event) => customerIdList(event, list.customerId)}>click view</span></td>
                                                    <td>{list.country}</td>
                                                    <td>
                                                        {list.region ? list.region.map((reginid) => {
                                                            return (
                                                                <span> {reginid + ','}</span>
                                                            )
                                                        }) : <div>no data</div>
                                                        }
                                                    </td>
                                                    <td><span className="viewClick" onClick={(event) => provinceList(event, list.province)}>click view</span></td>
                                                    <td><span className="viewClick" onClick={(event) => districtList(event, list.district)}>click view</span></td>
                                                    <td>
                                                        <span className="viewClick" onClick={(event) => subDistrictList(event, list.subDistrict)}>click view</span>
                                                        {/* {list.subDistrict} */}
                                                    </td>
                                                    <td>
                                                        <span className="viewClick" onClick={(event) => subDivision(event, list.division)}>click view</span></td>

                                                </tr>
                                            );
                                        })
                                    
                            }

                        </tbody>
                    </table>
                </div>
                <EditBeatManagement beatListI={beatListI} popupopen={popupopen} setOpen={setPopupopen} />
                <div>
                    {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteBeatMaster(categoryDelete)} open={open} setOpen={setOpen} />}
                </div>
                <div className="button_popup float-left mt-2">
                    <Link className="add-button bg-dark" to="/Master">Back</Link>
                </div>
                <div>
                    <CustomerIdListPopup customerIds={customerIds} customerpop={customerpop} setOpen={setCustomerPop} />
                </div>

                <div>
                    <ProvinceListPopup provinceId={provinceId} provincepop={provincepop} setOpen={setProvincePop} />
                </div>
                <div>
                    <DistrictListPopup districtId={districtId} districtpop={districtpop} setOpen={setDistrictPop} />
                </div>

                <div>
                    <SubDistrictListPopup subdistrictId={subdistrictId} subdistrictpop={subdistrictpop} setOpen={setSubDistrictPop} />
                </div>

                <div>
                    <DivisionListPopup divisionId={divisionId} divisionpop={divisionpop} setOpen={setDivisionPop} />
                </div>

            </div>

        </>
    )
}

export default BeatTableList;