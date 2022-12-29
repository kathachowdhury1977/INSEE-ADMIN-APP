import React, { useState, useEffect } from 'react';
import MultiSelect from 'react-multiple-select-dropdown-lite';
import 'react-multiple-select-dropdown-lite/dist/index.css';
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import "./Dropdown_section.scss";

const ProvinceDropdown = () => {
    const dispatch = useDispatch();
    const ProvinceList = useSelector((state) => state.provincelist.provincelist);
    const reginSelectvalue = useSelector((state) => state.regionselect.regionselect);

    console.log("reginSelectvalue",reginSelectvalue);

    const provinceSelectvalue = useSelector((state) => state.provinceselect.provinceselect);

    useEffect(() => {
        if(reginSelectvalue) {
            console.log("useeffect value",reginSelectvalue);

            dispatch(eventActions.ProvinceList(reginSelectvalue === undefined ? '' : reginSelectvalue));
             // dispatch(eventActions.ProvinceList(reginSelectvalue && reginSelectvalue.length ? '' : reginSelectvalue));
        }
       
    }, [reginSelectvalue]);


    const [value, setvalue] = useState([])


    const handleOnchange = val => {
        setvalue(val)
        var data = val.split(",")

        dispatch(eventActions.provinceSelect(data));
    }

    const optionList = ProvinceList && ProvinceList ? ProvinceList && ProvinceList.map((item) => {
        if (item != null) {

            return {
                label: item.province,
                value: item.province
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
export default ProvinceDropdown;
