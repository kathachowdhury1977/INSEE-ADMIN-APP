import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import ConfirmationBox from '../../../components/MaterialTable/ConfirmationBox';
import EditVolumePopup from "../../../components/ModalPopup/EditVolumePopup";
import Loader from "../../../components/Loader/Loader";
import DOMPurify from "dompurify";


function VolumeAllocationHistrory(props) {
    const event = useSelector((state) => state);
    let history = useHistory();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const location = useLocation();
    const { accountName } = location.state;
    const [open, setOpen] = React.useState(false);
    const [popupopen, setPopupopen] = React.useState(false);
    const [groupDetail, setGroupDetail] = React.useState("");
    const [volumeAllocationDelete, setVolumeAllocation] = React.useState('');
    const volumeLocation = useSelector((state) => state.volumeallocationlist);
    const DeletevolumeLocation = useSelector((state) => state.deletevolumeallocation);

    useEffect(() => {
        dispatch(eventActions.getVolumeAllocationList(accountName));
    }, []);



    const rows = volumeLocation.volumeallocationlist;

    console.log("volumeLocation", rows);

    const deleteVolumepop = (event, category, groupCode, soldToNumber) => {
        setOpen(true)
        setVolumeAllocation({ 'category': category, 'groupCode': groupCode, 'soldToNumber': soldToNumber })
    }



    useEffect(() => {
        if (DeletevolumeLocation && !DeletevolumeLocation.loading &&
            (DeletevolumeLocation.deletevolumeallocation)) {
            dispatch(eventActions.getVolumeAllocationList(accountName));
            toast.success('volume allocation cutoff date is deleted', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }, [DeletevolumeLocation]);


    useEffect(() => {
        return () => {
            dispatch(eventActions.deleteVolumeAllocation())
        }
    }, [])



    const handleEdit = (event, groupCode, category, year, month, date) => {
        setGroupDetail({ "groupCode": groupCode, "category": category, "year": year, "month": month, "date": date });
        setPopupopen(true);
    }

    return (
        <>

            <div className="table-responsive fixTableHead volume_allocation">
                <table class="table table-bordered guideline_table mt-2">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Company</th>
                            <th>Category</th>
                            <th>Year</th>
                            <th>Month</th>
                            <th>Cut Off Date</th>


                        </tr>
                    </thead>
                    <tbody>
                        {volumeLocation && volumeLocation.loading ? <Loader /> :
                            rows && rows.length > 0 ? rows.map((row) => {
                                return (
                                    <tr>
                                        <td>
                                            <span class="product_group-edit" onClick={(event) => handleEdit(event, row.groupCode, row.category, row.year, row.month, row.date)}>Edit</span>
                                            <span class="product_group-edit" onClick={(event) => deleteVolumepop(event, row.category, row.groupCode, row.soldToNumber)}>Delete</span>
                                        </td>
                                        <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.groupCode) }}></td>
                                        <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.category) }}></td>
                                        <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.year) }}></td>
                                        <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.month) }}></td>
                                        <td dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row.date) }}></td>


                                    </tr>
                                );
                            })
                                : <div className="no_record">No Record Found</div>

                        }

                    </tbody>
                </table>
            </div>
            <div>
                {!!volumeAllocationDelete && <ConfirmationBox title={'Are you sure, you want to delete ?'} actionToDispatch={eventActions.deleteVolumeAllocation(volumeAllocationDelete)} open={open} setOpen={setOpen} />}
            </div>

            <div>
                <EditVolumePopup groupDetail={groupDetail} popupopen={popupopen} setOpen={setPopupopen} />
            </div>
        </>
    );
}

export default withTranslation()(VolumeAllocationHistrory);
