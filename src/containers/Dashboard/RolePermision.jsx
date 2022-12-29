import React, { useEffect } from "react";
import { eventActions } from "../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import "./Dashboard.scss";
import {Link} from "react-router-dom";
import SalesRepPermission from "../../components/MaterialTable/SalesRepPermission";
import PermissionSection from "../../components/MaterialTable/PermissionSection";
import UserPermission from "../../components/MaterialTable/UserPermission";

function RolePermision(props) {
  const event = useSelector((state) => state);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(eventActions.allEvent());
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <Header title="Role Permision" />

        <div className="row">
          <div className="mainScroll">
            <div className="col-12 mt-2 view_section">
              <div className="row mt-4">
                <div className="col-5 pr-0">
                    <div className="role_main mb-4">
                   <div className="role_permision">
                    <div className="col-12">
                        <div className="row head_sec">
                            <PermissionSection/>     
                        </div>
                    </div>
                </div>
                <button className="button-section">Update List</button>
                </div>
                </div>
                <div className="col-2 text-center arrow_icon">
                  <div>
                  <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                  <i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="col-5 pl-0">
                <div className="role_main mb-4">
                   <div className="role_permision">
                    <div className="col-12">
                        <div className="row head_sec">
                            <SalesRepPermission/>  
                        </div>
                    </div>
                </div>
                <button className="button-section">Remove All</button>
                </div>
                 
                </div>
                <div className="col-5 pr-0">
                <div className="role_main mb-4">
                   <div className="role_permision">
                    <div className="col-12">
                        <div className="row head_sec">
                            <PermissionSection/>     
                        </div>
                    </div>
                </div>
                <button className="button-section">Update List</button>
                </div>
                </div>

                <div className="col-2 text-center arrow_icon">
                  <div>
                  <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                  <i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="col-5 pl-0">
                <div className="role_main mb-4">
                   <div className="role_permision">
                    <div className="col-12">
                        <div className="row head_sec">
                            <UserPermission/>     
                        </div>
                    </div>
                </div>
                <button className="button-section">Remove All</button>
                </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 button_section">
                  <button className="back"><Link to= "/UserManagment" className="text-white">Back </Link></button>
                  <button className="cancel">Cancel</button>
                  <button className="save">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withTranslation()(RolePermision);
