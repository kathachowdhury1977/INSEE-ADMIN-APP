import React, { useEffect } from "react";
import { eventActions } from "../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import "./Dashboard.scss";
import { Link } from "react-router-dom";
import InternalManagmentSearch from "../../components/SearchBox/InternalManagmentSearch";
import SelectBox from "../../components/SelectBox/SelectBox";
import AddRolePopup from "../../components/ModalPopup/AddRolePopup";
import UserManagmentTable from "../../components/MaterialTable/UserManagmentTable";
import { ToastContainer, toast } from 'react-toastify';

function UserManagment(props) {
  const event = useSelector((state) => state);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const getUserId = useSelector((state) => state.selectcustomeruserid.selectcustomeruserid);
  const statusUpdate = useSelector((state) => state.statususermanagmenttype);
  const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);
  console.log("addClass",MyNewClass);

  let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

  console.log("getUserId++",getUserId);

  const handleClick = (event) => {
    console.log("event target +++", event.target.value);
    dispatch(eventActions.statusUsermanagmentCustomer({'userId':getUserId && getUserId, 'status':event.target.value, 'updatedby':userName.userId}))
  }


  useEffect(() => {
    if (statusUpdate && !statusUpdate.loading &&
        (statusUpdate.statususermanagmenttype)) {
            dispatch(eventActions.getAllUser())
        toast.success('Customer status updated successfully', {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })

    }
}, [statusUpdate]);


useEffect(() => {
    return () => {
        dispatch(eventActions.statusUsermanagmentCustomer())
        dispatch(eventActions.getAllUser());
    }
}, [])


  return (
    <>
      <div className="content-wrapper">
        <Header title="Internal User Managment" />

        <div className={"row ipad_css "  +  MyNewClass}>
          <div className="mainScroll">
            <div className="col-12 mt-2 view_section">
              <div className="row">
                <div className="col-6">
                  <InternalManagmentSearch placeholder="Search user..." />
                </div>
                <div className="col-6">
                  <div className="button_popup">
                    <Link to="/UserManagmentForm" className="ml-3 add-button">Add User</Link>
                    <AddRolePopup title="Add Role" />
                  </div>
                </div>
              </div>
              <SelectBox />
              <div className="table-responsive table_design">
                <div className="button_section">
                  <button className="add-button ml-3" onClick={handleClick} value={1}>Active</button>
                  <button className="add-button" onClick={handleClick} value={2}>In Active</button>
                </div>
                <UserManagmentTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withTranslation()(UserManagment);
