import React,{ useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header/Header";
import ".././Dashboard.scss";
import { Link } from "react-router-dom";
import AddCompetitorProductPopup from "../../../components/ModalPopup/AddCompetitorProductPopup";
import EditComptitor from "../../../components/MasterPopup/EditComptitor";
import ConfirmationBox from "../../../components/MaterialTable/ConfirmationBox";
import { ToastContainer, toast } from 'react-toastify'
import Loader from "../../../components/Loader/Loader";
import DOMPurify from "dompurify";

function CompatitorProduct(props) {
    const event = useSelector((state) => state);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [actionCategory, setActionCategory] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const [categoryDelete, setCategoryDelete] = React.useState('');

    const Deletecompetitorproduct = useSelector((state) => state.deletecompetitorproduct);
    const competitorproduct = useSelector((state) => state.competitorproductmaster);
    const MyNewClass = useSelector((state) => state.addclasswithstyle.addclasswithstyle);


    let userName = localStorage.getItem('userData');
    userName = JSON.parse(userName);

    useEffect(() => {
        dispatch(eventActions.getCompatitorProduct(userName.countryCode));
    }, []);

    console.log("competitorproduct", competitorproduct);

    const rows = competitorproduct.getcompetitorproduct ? competitorproduct.getcompetitorproduct : [];

    const handleDelete = (event, competitorProductBrandId) => {
        console.log("myEvent", event);
        setOpen(true);
        setCategoryDelete({'competitorProductBrandId':competitorProductBrandId, 'country':userName.countryCode})
    }
 

    useEffect(() => {
        if (Deletecompetitorproduct && !Deletecompetitorproduct.loading &&
            (Deletecompetitorproduct.deletecompetitorproduct)) {
                dispatch(eventActions.getCompatitorProduct(userName.countryCode));
                toast.success('Competitor Product has been deleted successfully', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
        }
    }, [Deletecompetitorproduct]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.DeleteCompetitorProduct())
        }
    }, [])


    const handlepen = (event, competitorProductBrandId,competitorProductBrand, status) => {
        setActionCategory({ 'competitorProductBrandId': competitorProductBrandId, 'competitorProductBrand':competitorProductBrand, 'status': status });
        setPopupopen(true);
    }

    return (
        <>
            <div className="content-wrapper">
                <Header title="Competitor Product Brand" />
                <div className={"row ipad_css " + MyNewClass}>
                    <div className="mainScroll">
                        <div className=" mt-2">
                            <div className="col-12 text-right">
                                <div className="button_popup add-button">
                                    <AddCompetitorProductPopup title="Add competitor Product Brand" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-2 view_section">
                            <div className="fixTableHead">
                            <table class="table table-bordered guideline_table">
                            <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>competitor Product Brand Id</th>
                                        <th>competitor Product Brand</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {competitorproduct && competitorproduct.loading ? <Loader/> :
                                        rows && rows
                                        .slice().length == 0 ? (<div className="no_record">No Record Found</div>)
                                        : rows && rows
                                          .slice()
                                          .reverse().map((unitItem) => {
                                            return (
                                                <tr>
                                                    <td>
                                                    <div className="action">
                                                            <span className="category_icon">
                                                                <i className="fa fa-trash" onClick={(event) => handleDelete(event,unitItem.competitorProductBrandId)}></i>
                                                            </span>
                                                            <span className="category_icon edit_conwood">
                                                                <i className="fa fa-edit" onClick={(event) => handlepen(event, unitItem.competitorProductBrandId, unitItem.competitorProductBrand, unitItem.status)}></i>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.competitorProductBrandId)}}></td>
                                                    <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.competitorProductBrand)}}></td>
                                                    <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(unitItem.status)}}></td>
                                                </tr>
                                            );
                                        })
                                       
                                    } 
                                </tbody>
                            </table>
                            </div>
                            <div className="button_popup float-left mt-2">
                                <Link className="add-button bg-dark" to="/Master">Back</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <EditComptitor actionCategory={actionCategory} popupopen={popupopen} setOpen={setPopupopen} />
            <div>
                {categoryDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.DeleteCompetitorProduct(categoryDelete)} open={open} setOpen={setOpen} />}
            </div>

        </>
    );
}

export default withTranslation()(CompatitorProduct);
