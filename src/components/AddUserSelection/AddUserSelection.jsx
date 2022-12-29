import React, { useEffect, useState } from "react";
import { eventActions } from "../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormSelectbox from "../FormSelectbox/FormSelectbox";


function AddUserSelection(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [country, setCountry] = React.useState("")
    const [count, setCount] = useState(1)
    const RegionList = useSelector((state) => state.regionlist.regionlist);
    const reginSelectvalue = useSelector((state) => state.regionselect.regionselect);
    const ProvinceList = useSelector((state) => state.provincelist.provincelist);
    const provinceSelectvalue = useSelector((state) => state.provinceselect.provinceselect);
    const DistrictList = useSelector((state) => state.districtlist.districtlist);
    const SubDistrictList = useSelector((state) => state.subdistrictlist.subdistrictlist);
    const districtSelectvalue = useSelector((state) => state.districtselect.districtselect);
    const subdistrictSelectvalue = useSelector((state) => state.subdistrictselect.subdistrictselect);


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
        dispatch(eventActions.RegionList(userName.countryCode));
    }, []);


    const onChangeSelectRegion = event => {
        dispatch(eventActions.regionSelect(event));
    }


    const selectRegion = RegionList && RegionList ? RegionList && RegionList.map((item) => {

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
        dispatch(eventActions.provinceSelect(event));
    }




    const selectProvince = ProvinceList && ProvinceList ? ProvinceList && ProvinceList.map((item) => {
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
        dispatch(eventActions.districtSelect(event));
    }


    const selectDistrict = DistrictList && DistrictList ? DistrictList && DistrictList.map((item) => {
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
        dispatch(eventActions.subDistrictSelect(event));
    }

    const selectSubDistrict = SubDistrictList && SubDistrictList ? SubDistrictList && SubDistrictList.map((item) => {
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







    // let dataArr = divisionList && divisionList.map(item=>{
    //     return [item.value,item]
    // });

    // let maparr = new Map(dataArr);
    // let result = [...maparr.values()];


    return (
        <>

            <div className="row row-cols-5">
                <div className="col">
                    <div class="form-group">
                        <label for="country">Country</label>
                        {/* <input type="text" onChange={event => setCountry(event.target.value)} name={userName.countryCode}  value= {userName.countryCode} className="form-control" placeholder="Enter Province" /> */}
                        <select name="" id="" onChange={event => setCountry(event.target.value)}>
                            <option value="">Select Country</option>
                            <option value="TH">TH</option>
                            <option value="LK">LK</option>
                            <option value="VN">VN</option>
                        </select>
                    </div>
                </div>
                <div className="col">
                    <div class="form-group">
                        <label for="region">Region</label>
                        <FormSelectbox
                            name={"selectregion"}
                            class={"input p-0"}
                            onSelectChange={onChangeSelectRegion}
                            label="Select Region"
                            data={selectRegion}
                        />
                        {/* <RegionDropdown/> */}
                    </div>
                </div>
                <div className="col">
                    <div class="form-group">
                        <label for="province">Province</label>
                        <FormSelectbox
                            name={"selectprovince"}
                            class={"input p-0"}
                            onSelectChange={onChangeSelectProvince}
                            label="Select Province"
                            data={selectProvince}
                        />

                        {/* <ProvinceDropdown /> */}
                    </div>
                </div>
                <div className="col">
                    <div class="form-group">
                        <label for="district">District</label>
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
                <div className="col">
                    <div class="form-group">
                        <label for="district">Sub-District</label>
                        {/* <input type="text" name={"subDistrict"} onChange={event => setSubDistrict(event.target.value)} className="form-control" placeholder="Enter Province" /> */}
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


        </>
    );
}

export default withTranslation()(AddUserSelection);
