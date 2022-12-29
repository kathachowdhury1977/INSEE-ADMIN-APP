import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { eventActions } from "../../_actions";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import FormSelectbox from "../../components/FormSelectbox/FormSelectbox";


const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function EditUserManagment(props) {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const UserManagmntList = props.userManagment;
    const [fname, setFirstName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [empEmail, setEmployeeEmail] = React.useState("");
    const [roles, setRoles] = React.useState("");
    const [segment, setSegment] = React.useState("");
    const [managerId, setManagerId] = React.useState("");
    const [division, setDivision] = React.useState("");

    const [country, setCountry] = React.useState("TH");
    const [status, setStatus] = React.useState("");
    const [regionIndex, setRegionIndex] = useState();

    const AddRoleList = useSelector((state) => state.getrolelist.getrolelist);
    const divisionList = useSelector((state) => state.getdivision.getdivision);
    const UpdateStatus = useSelector((state) => state.updateactionstatus);
    const RegionList = useSelector((state) => state.regionlist.regionlist);
    const reginSelectvalue = useSelector((state) => state.regionselect.regionselect);
    const ProvinceList = useSelector((state) => state.provincelist.provincelist);
    const provinceSelectvalue = useSelector((state) => state.provinceselect.provinceselect);
    const DistrictList = useSelector((state) => state.districtlist.districtlist);
    const SubDistrictList = useSelector((state) => state.subdistrictlist.subdistrictlist);
    const districtSelectvalue = useSelector((state) => state.districtselect.districtselect);
    const subdistrictSelectvalue = useSelector((state) => state.subdistrictselect.subdistrictselect);

    const updateCustomerList = useSelector((state) => state.updateusermanagment);


    console.log("UserManagmntList", UserManagmntList);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        if (props.popupopen) {
            setOpen(true);
        }

    }, []);


    const countryHandler = event => {
        setCountry(event.target.value);
    }


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        props.setOpen(false);
    };

    const handleSubmit = () => {
        let data = {
            "company": "string",
            "companyId": "string",
            "country":  country || UserManagmntList.country,
            "createdAt": 0,
            "createdBy": "string",
            "district": [
              districtSelectvalue || UserManagmntList && UserManagmntList.district && UserManagmntList.province[0],
            ],
            "division": [
              division || UserManagmntList && UserManagmntList.division && UserManagmntList.division[0],
            ],
            "employeeEmail": empEmail || UserManagmntList.employeeEmail,
            "employeeId": UserManagmntList.userId,
            "employeeLevel": "string",
            "employeeStatus":  status || UserManagmntList.status,
            "firstName": fname || UserManagmntList.firstName,
            "functionDescription": "string",
            "functionId": "string",
            "geographyId": "string",
            "id": UserManagmntList.id,
            "lastName": "string",
            "locationDescription": "string",
            "locationId": "string",
            "managerEmail": "string",
            "managerFirstName": "string",
            "managerId": managerId || UserManagmntList.managerId,
            "managerLastName": "string",
            "parentPositionId": "string",
            "password": password || UserManagmntList.password,
            "positionDescription": "string",
            "positionId": "string",
            "province": [
              provinceSelectvalue || UserManagmntList && UserManagmntList.province && UserManagmntList.province[0],
            ],
            "region": [
              reginSelectvalue || UserManagmntList && UserManagmntList.region && UserManagmntList.region[0],
            ],
            "roleName": roles || UserManagmntList.roles,
            "roles": [
              {
                "createdAt": 1619180773081,
                "createdBy": 1619180773081,
                "id": "string",
                "name": "string",
                "permissions": [
                  "DELETE"
                ],
                "updatedAt": 0,
                "updatedBy": "string"
              }
            ],
            "segment": segment || UserManagmntList.segment,
            "status": 0,
            "subDistrict": [
              subdistrictSelectvalue || UserManagmntList && UserManagmntList.subDistrict && UserManagmntList.subDistrict[0],
            ],
            "updatedAt": 0,
            "updatedBy": "string",
            "userId":  UserManagmntList.userId,
            "validFrom": "string",
            "validTo": "string"
          }

        dispatch(eventActions.updateUsermanagmentCustomer({ 'userid': UserManagmntList.userId, 'updateby': userName.userId, 'data': data }));

        setFirstName("");
        setPassword("");
        setEmployeeEmail("");
        setRoles("");
        setSegment("");
        setManagerId("");
        setDivision("");
        setCountry("");
        setStatus("");
        props.setOpen(false);
    }

    useEffect(() => {
        if (updateCustomerList && !updateCustomerList.loading &&
            (updateCustomerList.updateusermanagment)) {
               
            toast.success('Customer has been updated successfully', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

            
                dispatch(eventActions.getAllUser())
           
          

        }
    }, [updateCustomerList]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.updateUsermanagmentCustomer())        
        }
    }, [])

    useEffect(() => {
        return () => {
            dispatch(eventActions.getAllUser())
        }
    }, [])

    useEffect(() => {
        return () => {
            dispatch(eventActions.InternalManagmentSearch());
        }
    }, [])

    useEffect(() => {
        return () => {
            dispatch(eventActions.InternalManagmentFilter());
        }
    }, [])

   
   



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








    return (
        <div className="guideline_popup edit-date">

            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.popupopen} className="edit-page">
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Update User Management List
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <form className="row">

                            <div class="form-group col-6">
                                <label for="customer_group">User Name </label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="category"
                                    defaultValue={UserManagmntList.firstName}
                                    onChange={(event) => setFirstName(event.target.value)}
                                />
                            </div>
                            <div class="form-group col-6">
                                <label for="customer_group">User Id</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={UserManagmntList.userId}


                                />
                            </div>
                            <div class="form-group col-6">
                                <label for="customer_group">Password</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={UserManagmntList.password}
                                    onChange={(event) => setPassword(event.target.value)}

                                />
                            </div>
                            <div class="form-group col-6">
                                <label for="customer_group">Email Id</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={UserManagmntList.employeeEmail}
                                    onChange={(event) => setEmployeeEmail(event.target.value)}

                                />
                            </div>
                            <div class="form-group col-6">
                                <label for="customer_group">Role</label>
                                <select name={"role"} value={roles || (UserManagmntList.roles) || ''} onChange={event => setRoles(event.target.value)} >
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

                            <div class="form-group col-6">
                                <label for="customer_group">Segment</label>
                                <select name={"segment"} value={segment || (UserManagmntList.segment) || ''} onChange={event => setSegment(event.target.value)} >
                                    <option value="">Select Segment</option>
                                    <option value="B2B">B2B</option>
                                    <option value="B2C">B2C</option>
                                </select>


                            </div>

                            <div class="form-group col-6">
                                <label for="customer_group">Manager Id</label>
                                <input type="text"
                                    class="form-control"
                                    placeholder="value"
                                    defaultValue={UserManagmntList.managerId}
                                    onChange={(event) => setManagerId(event.target.value)}

                                />
                            </div>
                            <div class="form-group col-6">
                                <label for="customer_group">Division</label>

                                <select name={"division"} value={division || (UserManagmntList && UserManagmntList.division && UserManagmntList.division[0]) || ''} onChange={event => setDivision(event.target.value)} >
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
                            <div class="form-group col-6">
                                <label for="customer_group">Country</label>
                                <select name="" id="" value={country || (UserManagmntList.country)} onChange={countryHandler}>
                                    <option value="">Select Country</option>
                                    <option value="TH">TH</option>
                                    <option value="LK">LK</option>
                                    <option value="VN">VN</option>
                                </select>
                            </div>
                            <div class="form-group col-6">
                                <label for="customer_group">Region</label>
                                <FormSelectbox
                                    name={"selectregion"}
                                    class={"input p-0"}
                                    onSelectChange={onChangeSelectRegion()}
                                    label="Select Region"
                                    dataValue={reginSelectvalue || (UserManagmntList && UserManagmntList.region && UserManagmntList.region[0]) || ''}
                                    data={selectRegion}
                                />


                            </div>
                            <div class="form-group col-6">
                                <label for="customer_group">Province</label>
                                <FormSelectbox
                                    name={"selectprovince"}
                                    class={"input p-0"}
                                    selectIndex={regionIndex}
                                    onSelectChange={onChangeSelectProvince}
                                    label="Select Province"
                                    dataValue={provinceSelectvalue || (UserManagmntList && UserManagmntList.province && UserManagmntList.province[0]) || ''}
                                    data={selectProvince}
                                />


                            </div>
                            <div class="form-group col-6">
                                <label for="customer_group">District</label>
                                <FormSelectbox
                                    name={"selectdistrict"}
                                    class={"input p-0"}
                                    onSelectChange={onChangeSelectDistrict}
                                    label="Select District"
                                    dataValue={districtSelectvalue || (UserManagmntList && UserManagmntList.district && UserManagmntList.district[0]) || ''}
                                    data={selectDistrict}
                                />

                            </div>
                            <div class="form-group col-6">
                                <label for="customer_group">Sub-District</label>
                                <FormSelectbox
                                    name={"selectsubdistrict"}
                                    class={"input p-0"}
                                    onSelectChange={onChangeSelectSubDistrict}
                                    label="Select Sub District"
                                    dataValue={subdistrictSelectvalue || (UserManagmntList && UserManagmntList.subDistrict && UserManagmntList.subDistrict[0]) || ''}
                                    data={selectSubDistrict}
                                />

                            </div>

                            <div class="form-group col-6">
                                <label for="customer_group">Status</label>
                                <select name="" id="" disabled value={status || (UserManagmntList.status) || ''} onChange={(event) => setStatus(event.target.value)}>
                                    <option value="active">Active</option>
                                    <option value="inactive">InActive</option>
                                </select>
                            </div>

                        </form>

                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmit} color="primary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>

            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}
