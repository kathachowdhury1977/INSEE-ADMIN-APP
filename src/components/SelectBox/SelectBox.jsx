import React, { useEffect, useState } from "react";
import { eventActions } from "../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import FormSelectbox from "../../components/FormSelectbox/FormSelectbox";
import {Link} from "react-router-dom";

function SelectBox(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    let history = useHistory();
    const [name, setName] = React.useState("");
    const [userId, setUserID] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [role, setRole] = React.useState("");
    const [segment, setSegment] = React.useState("");
    const [status, setStatus] = React.useState("");
    const [managerId, setManagerId] = React.useState("");
    const [divisionval, setDivisionValue] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [region, setRegion] = React.useState("");
    const [district, setDistrict] = React.useState("");
    const [subdistrict, setSubDistrict] = React.useState("");
    const [count, setCount] = useState(1);
    const [regionIndex, setRegionIndex] = useState();
    const [province, setProvince] = React.useState("");


    const AddRoleList = useSelector((state) => state.getrolelist.getrolelist);
    const roleselectvalue = useSelector((state) => state.roleselect.roleselect);
    const divisionList = useSelector((state) => state.getdivision.getdivision);
    const segmentList = useSelector((state) => state.segmentlist.segmentlist);
    const RegionList = useSelector((state) => state.regionlist.regionlist);
    const reginSelectvalue = useSelector((state) => state.regionselect.regionselect);
    const ProvinceList = useSelector((state) => state.provincelist.provincelist);
    const provinceSelectvalue = useSelector((state) => state.provinceselect.provinceselect);
    const DistrictList = useSelector((state) => state.districtlist.districtlist);
    const SubDistrictList = useSelector((state) => state.subdistrictlist.subdistrictlist);
    const districtSelectvalue = useSelector((state) => state.districtselect.districtselect);
    const subdistrictSelectvalue = useSelector((state) => state.subdistrictselect.subdistrictselect);


    useEffect(() => {
        dispatch(eventActions.roleSelect());
    }, []);



    const countryHandler = event => {
        setCountry(event.target.value);
    }


    const segmentHandler = event => {
        setSegment(event.target.value);

    }

    const divisionHandler = (event) => {
        setDivisionValue(event.target.value);

    }




    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);


    useEffect(() => {
        if (provinceSelectvalue) {
            dispatch(eventActions.SubDistrictList(districtSelectvalue === undefined ? '' : districtSelectvalue));
        }

    }, [districtSelectvalue]);


    useEffect(() => {
        if (provinceSelectvalue) {
            dispatch(eventActions.DistrictList(provinceSelectvalue === undefined ? '' : provinceSelectvalue));
        }

    }, [provinceSelectvalue]);


    useEffect(() => {
        if (reginSelectvalue) {
            dispatch(eventActions.ProvinceList(reginSelectvalue === undefined ? '' : reginSelectvalue));
        }
    }, [reginSelectvalue]);

    useEffect(() => {
        if (country) {
            dispatch(eventActions.RegionList(country === undefined ? '' : country));
        }
    }, [country]);




    useEffect(() => {
        dispatch(eventActions.getRoleList());
    }, []);

    useEffect(() => {
        dispatch(eventActions.SegmentList());
    }, []);


    useEffect(() => {
        dispatch(eventActions.getDivision(userName.countryCode));
    }, []);


    const activeHandle = (event) => {
        setStatus(event.target.value);
    }

    const onChangeSelectRole = (event) => {
        setRole(event)
        dispatch(eventActions.AddRole(event));
        ///dispatch(eventActions.InternalManagmentFilter(event));


    }
    useEffect(() => {
        ///console.log('division',division);
        let filterData = [{ country: country }, { district: district }, { division: divisionval }, { province: province }, { region: region }, { role: role }, { segment: segment }, { status: status }, { subdistrict: subdistrict }];
        ///console.log('filterData',filterData);
        dispatch(eventActions.InternalManagmentFilter(filterData));
    }, [country, district, divisionval, province, region, role, segment, status, subdistrict])


    const selectRole = AddRoleList && AddRoleList ? AddRoleList && AddRoleList.map((item, i) => {

        if (item != null) {
            return {

                id: item.name,
                name: item.name,
            }
        }

    }) : [
        {
            id: "0",
            name: "Data is not available",
        },
    ];






    const onChangeSelectRegion = (key) => event => {
        setRegionIndex(key);
        dispatch(eventActions.regionSelect(event));
        setRegion(event);


    }


    const selectRegion = RegionList && RegionList ? RegionList && RegionList.map((item, i) => {

        if (item != null) {
            return {

                id: item.region,
                name: item.region,
            }
        }

    }) : [
        {
            id: "0",
            name: "Data is not available",
        },
    ];

    const onChangeSelectProvince = event => {
        setProvince(event);
        dispatch(eventActions.provinceSelect(event));
    }




    const selectProvince = ProvinceList && ProvinceList ? ProvinceList && ProvinceList.map((item, i) => {
        if (item != null) {

            return {
                id: item.province,
                name: item.province
            }
        }

    }) : [
        {
            id: "0",
            name: "Data is not available",
        },
    ];


    const onChangeSelectDistrict = event => {
        setDistrict(event);
        dispatch(eventActions.districtSelect(event));
    }


    const selectDistrict = DistrictList && DistrictList ? DistrictList && DistrictList.map((item, i) => {
        if (item != null) {
            return {
                id: item.district,
                name: item.district
            }
        }

    })

        : [
            {
                id: "0",
                name: "Data is not available",
            },
        ];


    const onChangeSelectSubDistrict = event => {
        setSubDistrict(event);
        dispatch(eventActions.subDistrictSelect(event));
    }

    const selectSubDistrict = SubDistrictList && SubDistrictList ? SubDistrictList && SubDistrictList.map((item,) => {
        if (item != null) {
            return {
                id: item.subDistinct,
                name: item.subDistinct
            }
        }

    })

        : [
            {
                id: "0",
                name: "Data is not available",
            },
        ];

    console.log("AddRoleList", AddRoleList);

   
    function refreshPage() {
        window.location.reload(false);
      }

    return (
        <>

            <div>
                <div className="row mt-2">


                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-xs-12">
                        <div class="form-group">

                            <FormSelectbox
                                name={"selectrole"}
                                class={"input p-0"}
                                onSelectChange={onChangeSelectRole}
                                label="Select Role"
                                data={selectRole}
                            />
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-xs-12">
                        <div class="form-group">

                            <select name={"segment"} onChange={segmentHandler} >
                                <option value="">Select Segment</option>
                                <option value="B2B">B2B</option>
                                <option value="B2C">B2C</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-xs-12">
                        <div class="form-group">


                            <select name="division" onChange={divisionHandler} >
                                <option value="">Select Division</option>
                                {divisionList
                                    ? divisionList.map((divisionItem) => {
                                        return (
                                            <option value={divisionItem.description}>{divisionItem.description}</option>
                                        );
                                    })
                                    : null
                                }

                            </select>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-xs-12">
                        <div class="form-group">
                            <select name="" id="" onChange={countryHandler}>
                                <option value="">Select Country</option>
                                <option value="TH">TH</option>
                                <option value="LK">LK</option>
                                <option value="VN">VN</option>
                            </select>
                        </div>
                    </div>



                    <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        {[...Array(count)].map((_, i) =>

                            <div className="row " key={i}>

                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                    <div class="form-group">

                                        <FormSelectbox
                                            name={"selectregion"}
                                            class={"input p-0"}
                                            key={i}
                                            onSelectChange={onChangeSelectRegion(i)}
                                            label="Select Region"
                                            data={selectRegion}
                                        />
                                        {/* <RegionDropdown/> */}
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                    <div class="form-group">

                                        <FormSelectbox
                                            name={"selectprovince"}
                                            class={"input p-0"}
                                            selectIndex={regionIndex}
                                            key={i}
                                            onSelectChange={onChangeSelectProvince}
                                            label="Select Province"
                                            data={selectProvince}
                                        />

                                        {/* <ProvinceDropdown /> */}
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                    <div class="form-group">

                                        <FormSelectbox
                                            name={"selectdistrict"}
                                            class={"input p-0"}
                                            onSelectChange={onChangeSelectDistrict}
                                            label="Select District"
                                            data={selectDistrict}
                                        />
                                        {/* <DistrictDropdown /> */}
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                    <div class="form-group">

                                        <FormSelectbox
                                            name={"selectsubdistrict"}
                                            class={"input p-0"}
                                            onSelectChange={onChangeSelectSubDistrict}
                                            label="Select Sub District"
                                            data={selectSubDistrict}
                                        />
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>




                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div class="form-group">

                            <select name={"status"} onChange={activeHandle}>
                                <option value="">Select Status</option>
                                <option value="1">Active</option>
                                <option value="2">In-Active</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">                  
                            <span className="clear_filter" onClick={() => window.location.reload(false)}>Clear Filter</span>
                    </div>
                </div>


            </div>

        </>
    );
}

export default withTranslation()(SelectBox);
