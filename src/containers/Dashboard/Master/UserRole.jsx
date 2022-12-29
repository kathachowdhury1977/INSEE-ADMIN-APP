import React,{ useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import AddUserRolePopup from '../../../components/ModalPopup/AddUserRolePopup';
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import EditUserRole from "../../../components/MasterPopup/EditUserRole";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";


function AreaType(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [userRole, setUserRole] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');


    const userrole = useSelector((state) => state.userrolemaster.getuserrole);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getUserRole(userName.countryCode));
    }, []);

    console.log("userrole",userrole);

    const handleDelete = (event) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete(event)
    }

    const handlepen = (event, addRole) => {
        setUserRole({ 'addRole': addRole });
        setPopupopen(true);
    }



    return (
        <>
            <div className="content-wrapper">
                <Header title="User Role" />
                <div className="row">
                    <div className="mainScroll">
                        <div className=" mt-2">


                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddUserRolePopup title="Add User Role" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section fixTableHead">
                            <table class="table table-bordered guideline_table">
                            <thead>
                                    <tr>
                                        <th>Action</th>
                                        {/* <th>User Role Id</th> */}
                                        <th>User Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {userrole
                                        ? userrole.map((unitItem) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <div className="action">
                                                            <span className="category_icon">
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.addRole)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    {/* <td>{unitItem.name}</td> */}
                                                    <td>{unitItem.addRole}</td>
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

            <EditUserRole userRole={userRole} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteProductGroupList(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>


        </>
    );
}

export default withTranslation()(AreaType);
