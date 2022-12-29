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
    
    const categoryList = useSelector((state) => state.categorymaster.getcategory);
    const subcategoryList = useSelector((state) => state.subcategorymaster.getsubcategory);

    const addsubcategoryReducer = useSelector((state) => state.addsubcategorymaster);
    const updatesubcategoryReducer = useSelector((state) => state.updatesubcategorymaster);
    const deletesubcategoryReducer = useSelector((state) => state.deletesubcategorymaster);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);


    

    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getCategory(userName.countryCode));
    }, []);

    useEffect(() => {
        dispatch(eventActions.getSubCategory(userName.countryCode,category));
    }, [category]);


    useEffect(() => {
        if (addsubcategoryReducer && !addsubcategoryReducer.loading &&
            (addsubcategoryReducer.addsubcategory)) {
                toast.success('Sub category added successfully', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
            dispatch(eventActions.resetAddSubCategoryReducer());
            dispatch(eventActions.getSubCategory(userName.countryCode,category));
        }
    }, [addsubcategoryReducer]);

    useEffect(() => {
        if (updatesubcategoryReducer && !updatesubcategoryReducer.loading &&
            (updatesubcategoryReducer.updatesubcategory)) {
                toast.success('Sub category updated', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
            dispatch(eventActions.resetUpdateSubCategoryReducer());
            dispatch(eventActions.getSubCategory(userName.countryCode,category));
        }
    }, [updatesubcategoryReducer]);

    useEffect(() => {
        if (deletesubcategoryReducer && !deletesubcategoryReducer.loading &&
            (deletesubcategoryReducer.deletesubcategory)) {
                toast.success('Sub category deleted', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
            dispatch(eventActions.resetDeleteSubCategoryReducer());
            dispatch(eventActions.getSubCategory(userName.countryCode,category));
        }
    }, [deletesubcategoryReducer]);

   

    const convertedObject =  subcategoryList && Object.values(subcategoryList);

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
                "categoryId": category,
                "description": newData.description,
                "name": newData.name
            }
        dispatch(eventActions.addSubCategory(newData.countryCode,data));
    }

    function onUpdate(newData)
    {
        let data = {
                "categoryId": category,
                "description": newData.description,
                "name": newData.name
                }
        dispatch(eventActions.updateSubCategory(newData.countryCode,newData.id,data));
    }

    function onDelete(newData)
    {
        let data = {
                "categoryId": category,
                "description": newData.description,
                "name": newData.name
                }
          dispatch(eventActions.deleteSubCategory(newData.countryCode,newData.id,data));
    }

    const tableData = {
        data: convertedObject,
        resolve: () => {},
        updatedAt: new Date()
      };

      console.log("Table Data",tableData);
      
      const comonscol = [
        { title: "Name", field: "name"},
        { title: "Description", field: "description" },
        { title: "Country Code", field: "countryCode"},
      ];
    return (
        <>
            <div className="content-wrapper">
                <Header title="Sub Category" />
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
                        <div className="col-12 mt-2 view_section">
                            {subcategoryList
                                        ?
                            <BusinessTable  title ="Sub Category" tableData={tableData} comonscol={comonscol} onDelete={(newData)=> onDelete(newData)} onUpdate={(newData)=> onUpdate(newData)} onchange={(newData)=> onchange(newData)} /> :null }
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
