import React, { useState, useEffect } from 'react';
import MultiSelect from 'react-multiple-select-dropdown-lite';
import 'react-multiple-select-dropdown-lite/dist/index.css';
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import "./Dropdown_section.scss";

const DistrictDropdown = () => {
    const dispatch = useDispatch();
    const DistrictList = useSelector((state) => state.districtlist.districtlist);
    const provinceSelectvalue = useSelector((state) => state.provinceselect.provinceselect);

    console.log("provinceSelectvalue", provinceSelectvalue);

    useEffect(() => {
        if (provinceSelectvalue) {
            dispatch(eventActions.DistrictList(provinceSelectvalue === undefined ? '' : provinceSelectvalue));
        }

    }, [provinceSelectvalue]);


    const [value, setvalue] = useState([])


    const handleOnchange = val => {
        setvalue(val)
        var data = val.split(",")

    }


    const optionList = DistrictList && DistrictList ? DistrictList && DistrictList.map((item) => {
        if (item != null) {
            return {
                label: item.district,
                value: item.district
            }
        }

    })

        : [
            {
                id: "0",
                name: "Data is not available",
            },
        ];


    return (
        <div className="dropdown_section">
            <MultiSelect
                onChange={handleOnchange}
                options={optionList}
            />
        </div>
    )
}
export default DistrictDropdown;
