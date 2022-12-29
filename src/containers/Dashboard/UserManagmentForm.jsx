import React, { useEffect, useState } from "react";
import { eventActions } from "../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import "./Dashboard.scss";
import FormSelectbox from "../../components/FormSelectbox/FormSelectbox";
import { ToastContainer, toast } from 'react-toastify';

function UserManagmentForm(props) {
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
    const [managerId, setManagerId] = React.useState("");
    const [division, setDivision] = React.useState("");
    const [country, setCountry] = React.useState("")
    const [count, setCount] = useState(1);
    const [regionIndex, setRegionIndex] = useState();
    const[status, setStatus] = React.useState(1);
    const AddCustomerUser = useSelector((state) => state.adduser);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);

    const AddRoleList = useSelector((state) => state.getrolelist.getrolelist);
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

    console.log("AddCustomerUser",status);



    const countryHandler = event => {
        setCountry(event.target.value);
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





    const onChangeSelectRegion = (key) => event => {
        setRegionIndex(key);
        dispatch(eventActions.regionSelect(event));

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





    const handleSubmit = () => {


        let data = {
            "company": "string",
            "companyId": "string",
            "country": country,
            "createdAt": 0,
            "createdBy": "string",
            "district": [
                districtSelectvalue
            ],
            "division": [
                division
            ],
            "employeeEmail": email,
            "employeeId": "string",
            "employeeLevel": "string",
            "employeeStatus": "string",
            "firstName": name,
            "functionDescription": "string",
            "functionId": "string",
            "id": userId,
            "lastName": "string",
            "locationDescription": "string",
            "locationId": "string",
            "managerEmail": "string",
            "managerFirstName": "string",
            "managerId": managerId,
            "managerLastName": "string",
            "parentPositionId": "string",
            "password": password,
            "positionDescription": "string",
            "positionId": "string",
            "province": [
                provinceSelectvalue
            ],
            "region": [
                reginSelectvalue
            ],
            "roleName": role,
            "roles": [
                {
                    "createdAt": 0,
                    "createdBy": "string",
                    "id": "string",
                    "name": 'string',
                    "permissions": [
                        "DELETE"
                    ],
                    "updatedAt": 0,
                    "updatedBy": "string"
                }
            ],
            "segment": segment,
             "status": status,
            "subDistrict": [
                subdistrictSelectvalue
            ],
            "updatedAt": 0,
            "updatedBy": "string",
            "userId": userId,
            "validFrom": "string",
            "validTo": "string"
        }
        console.log("my dat", data);
        dispatch(eventActions.addUser(data, userName.userId)
        );
      
    };


    useEffect(() => {
        if (!!AddCustomerUser && !!AddCustomerUser.adduser && AddCustomerUser.adduser !== undefined) {
            dispatch(eventActions.getAllUser());
            toast.success(`User has been created successfully`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            history.push("/UserManagment");

        }

        else if (!!AddCustomerUser && !!AddCustomerUser.error) {
            toast.success(!!AddCustomerUser && !!AddCustomerUser.error && !!AddCustomerUser.error, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }


    }, [AddCustomerUser])


    useEffect(() => {
        return () => {
            dispatch(eventActions.addUser());
        }
    }, [])




    const handleBack = () => {
        history.push("/UserManagment");
        

    }

    return (
        <>
            <div className="content-wrapper">
                <Header title="Add User" />

                <div className={"row ipad_css "  +  MyNewClass}>
                    <div className="mainScroll">
                        <div className="col-12 form_section mt-2">
                            <div>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label for="name">Name</label>
                                            <input type="text" name={"name"} onChange={event => setName(event.target.value)} className="form-control" placeholder="Enter Name" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label for="userid">Employee ID (UserID)</label>
                                            <input type="text" name={"userId"} onChange={event => setUserID(event.target.value)} className="form-control" placeholder="Enter userId" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div class="form-group">
                                            <label for="pwd">Password</label>
                                            <input type="password" name={"password"} onChange={event => setPassword(event.target.value)} className="form-control" placeholder="Enter password" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <input type="email" name={"email"} onChange={event => setEmail(event.target.value)} className="form-control" placeholder="Enter email" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div class="form-group">
                                            <label for="role">Role</label>
                                            <select name={"role"} onChange={event => setRole(event.target.value)} >
                                                <option value="">Select Role</option>
                                                {AddRoleList
                                                    ? AddRoleList.map((roleItem) => {
                                                        return (
                                                            <option value={roleItem.name}>{roleItem.name}</option>
                                                        );
                                                    })
                                                    : null
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div class="form-group">
                                            <label for="segment">Segment</label>
                                            <select name={"segment"} onChange={event => setSegment(event.target.value)} >
                                                <option value="">Select Segment</option>
                                                <option value="B2B">B2B</option>
                                                <option value="B2C">B2C</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div class="form-group">
                                            <label for="managerid">Manager ID</label>
                                            <input type="text" name={"managerId"} onChange={event => setManagerId(event.target.value)} className="form-control" placeholder="Enter Manager Id on number" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div class="form-group">
                                            <label for="division">Division</label>

                                            <select name={"division"} onChange={event => setDivision(event.target.value)} >
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

                                    <div className="col-3">
                                        <div class="form-group">
                                            <label for="country">Country</label>
                                            <select name="" id="" onChange={countryHandler}>
                                                <option value="">Select Country</option>
                                                <option value="TH">TH</option>
                                                <option value="LK">LK</option>
                                                <option value="VN">VN</option>
                                            </select>
                                        </div>
                                    </div>

                                     <div className="col-3">
                                        <div class="form-group">
                                            <label for="country">Status</label>
                                            <select name={"status"} onChange={event => setStatus(event.target.value)} >
                                                <option value="1" selected>Active</option>
                                                <option value="2">In-Active</option>
                                            </select>
                                        </div>
                                    </div>



                                    <div className="col-12">
                                      
                                        {[...Array(count)].map((_, i) =>

                                            <div className="row " key={i}>

                                                <div className="col-3">
                                                    <div class="form-group">
                                                        <label for="region">Region</label>
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
                                                <div className="col-3">
                                                    <div class="form-group">
                                                        <label for="province">Province</label>
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
                                                <div className="col-3">
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
                                                <div className="col-3">
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
                                        )}
                                    </div>




                                   
                                </div>

                                <div className="col-12 pl-0 mb-3 text-center">
                                    <button className="cancel_user" onClick={handleBack}>Cancel</button>
                                    <button className="add_user" onClick={handleSubmit}>Save</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withTranslation()(UserManagmentForm);
