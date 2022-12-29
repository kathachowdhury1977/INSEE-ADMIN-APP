import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import AddDivisionPopup from "../../../components/ModalPopup/AddDivisionPopup";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import BusinessTable from "../../../components/FunctionalTable/BusinessTable";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'





function Division(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [category,setCategory] = React.useState("");
    const [subCategory,setSubCategory] = React.useState("");
    
    const categoryList = useSelector((state) => state.categorymaster.getcategory);
    const subcategoryList = useSelector((state) => state.subcategorymaster.getsubcategory);
    const DescriptionList = useSelector((state) => state.descriptionmaster.getdescription);

    const adddescriptionReducer = useSelector((state) => state.adddescriptionmaster);
    const updatedescriptionReducer = useSelector((state) => state.updatedescriptionmaster);
    const deletedescriptionReducer = useSelector((state) => state.deletedescriptionmaster);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);
    

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getCategory(userName.countryCode));
    }, []);

    useEffect(() => {
        dispatch(eventActions.getSubCategory(userName.countryCode,category));
        setSubCategory("")
    }, [category]);

    useEffect(() => {
        dispatch(eventActions.getDescription(userName.countryCode,subCategory));
    }, [subCategory]);



    useEffect(() => {
        if (adddescriptionReducer && !adddescriptionReducer.loading &&
            (adddescriptionReducer.adddescription)) {
                toast.success('Description added successfully', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
            dispatch(eventActions.resetAddDescriptionReducer());
            dispatch(eventActions.getDescription(userName.countryCode,subCategory));
        }
    }, [adddescriptionReducer]);

    useEffect(() => {
        if (updatedescriptionReducer && !updatedescriptionReducer.loading &&
            (updatedescriptionReducer.updatedescription)) {
                toast.success('Description updated', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
            dispatch(eventActions.resetUpdateDescriptionReducer());
            dispatch(eventActions.getDescription(userName.countryCode,subCategory));
        }
    }, [updatedescriptionReducer]);


    useEffect(() => {
        if (deletedescriptionReducer && !deletedescriptionReducer.loading &&
            (deletedescriptionReducer.deletedescription)) {
                toast.success('Description deleted', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
            dispatch(eventActions.resetDeleteDescriptionReducer());
            dispatch(eventActions.getDescription(userName.countryCode,subCategory));
        }
    }, [deletedescriptionReducer]);

    

    const convertedObject =  DescriptionList && Object.values(DescriptionList);

    // console.log("convertedObject",convertedObject);

    // let dataArr = divisionList && divisionList.map(item=>{
    //     return [item.value,item]
    // });

    // let maparr = new Map(dataArr);
    // let result = [...maparr.values()];


   function onchange(newData)
    {
        let data = 
          {
            "subCategory": subCategory,
            "value": newData.description
          }
        dispatch(eventActions.addDescription(newData.countryCode,data));
    }

    function onUpdate(newData)
    {
        let data = {
            "subCategory": subCategory,
            "value": newData.description
          }
        dispatch(eventActions.updateDescription(newData.countryCode,newData.id,data));
    }

    function onDelete(newData)
    {
        let data = {
            "subCategory": subCategory,
            "value": newData.description
          }
        dispatch(eventActions.deleteDescription(newData.countryCode,newData.id,data));
    }

    const tableData = {
        data: convertedObject,
        resolve: () => {},
        updatedAt: new Date()
      };

      console.log("Table Data",tableData);
      
      const comonscol = [
        // { title: "Name", field: "name"},
        { title: "Description", field: "description" },
        { title: "Country Code", field: "countryCode"},
      ];
    return (
        <>
            <div className="content-wrapper">
                <Header title="Description" />
                <div className={"row ipad_css " + MyNewClass}>
                
                    <div className="mainScroll">
                        {/* <div className=" mt-2">
                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddDivisionPopup title="Add" />
                                </div>
                            </div>
                        </div> */}
                        <div style={{width : "300px",marginLeft:"30%",marginTop:"30px"}} className="form-group">
                                <label for="segment">Category</label>
                                <select name="" id=""  onChange={event => setCategory(event.target.value)}>
                                 <option value="">Select Category</option>
                                {categoryList 
                                        ? categoryList.map((unitItem) => {
                                    return (
                                        <option  value={unitItem.id}>{unitItem.description}</option>
                                    );
                                })
                                : null
                              }
                                </select>
                    </div>
                    <div style={{width : "300px",marginLeft:"30%",marginTop:"30px"}} className="form-group">
                                <label for="segment">Sub Category</label>
                                <select name="" id=""  onChange={event => setSubCategory(event.target.value)}>
                                 <option value="">Select Sub Category</option>
                                {subcategoryList 
                                        ? subcategoryList.map((unitItem) => {
                                    return (
                                        <option  value={unitItem.name}>{unitItem.description}</option>
                                    );
                                })
                                : null
                              }
                                </select>
                    </div>
                        <div className="col-12 mt-2 view_section">
                            {DescriptionList
                                        ?
                            <BusinessTable  title ="Description" tableData={tableData} comonscol={comonscol} onDelete={(newData)=> onDelete(newData)} onUpdate={(newData)=> onUpdate(newData)} onchange={(newData)=> onchange(newData)} /> :null }
                            <div className="button_popup float-left mt-2">
                            <Link className="add-button bg-dark" to="/Master">Back</Link>
                        </div>
                        </div>
                       
                    </div>
                </div>
            </div>

        </>
    );
}
export default withTranslation()(Division);
