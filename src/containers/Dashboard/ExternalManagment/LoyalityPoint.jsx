import React, { useEffect } from "react";
import { eventActions } from "../../../_actions";
import { withTranslation, useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import EditLoyalityPoint from "../../../components/MasterPopup/EditLoyalityPoint";
import Loader from "../../../components/Loader/Loader";
import Pagination from '@material-ui/lab/Pagination';


function LoyalityPoint(props) {
    const event = useSelector((state) => state);
    let history = useHistory();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const location = useLocation();
    const [page, setPage] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [loyalityPoint, setLoyalityPoint] = React.useState("");
    const [popupopen, setPopupopen] = React.useState(false);
    const { accountName } = location.state;
    const [point, setPoint] = React.useState("");
    const [redemption, setRedemption] = React.useState("");
    const redemList = useSelector((state) => state.getredemlist);
    const earnList = useSelector((state) => state.getearnpointlist);

    let startIndex = earnList.getearnpointlist && earnList.getearnpointlist.startIndex;
    let endIndex = earnList.getearnpointlist && earnList.getearnpointlist.endIndex;

    useEffect(() => {
        dispatch(eventActions.SoldToContractList(accountName));
    }, []);


    useEffect(() => {
        dispatch(eventActions.getRedemList(accountName, 1, 1000000));
    }, []);


    useEffect(() => {
        dispatch(eventActions.getEarnPointList(accountName, 1, 30));
    }, []);


    const handleChangePage = (event, value) => {
        console.log("valuevalue",event);
        if (value === 1) {
            startIndex = 1;
            endIndex = 29;

        }
        else {
            startIndex = ((value - 1) * 29) + 1;
            endIndex = value * 29;
        }
        setPage(value);

        dispatch(eventActions.getEarnPointList(accountName, startIndex, endIndex));
    };


    const rows = redemList.getredemlist && redemList.getredemlist ? redemList.getredemlist && redemList.getredemlist.results : [];
    const earnRows = earnList.getearnpointlist ? earnList.getearnpointlist.results : [];





    const handlerPoint = (event) => {
        setPoint(event.target.value);
    }






    return (
        <>

            <div className="radio_button">
                <input type="radio" checked id="html" name="loyality" value="earn" onChange={(event) => handlerPoint(event)} />
                <label for="earn">Earn</label>
                &nbsp; &nbsp; &nbsp; &nbsp;
                {/* <input type="radio" id="css" name="loyality" value="redemption" onChange={(event) => handlerPoint(event)} />
                <label for="redemption">Redemption</label> */}
            </div>

            {point === "redemption" ?
                <div className="table-responsive fixTableHead volume_allocation">
                    <table class="table table-bordered guideline_table mt-2">
                        <thead>
                            <tr>

                                {/* <th>soldToId</th> */}
                                <th>Redeem Points</th>
                                <th>Transaction No</th>
                                <th>Product Code</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>activityType</th>
                                <th>Remarks</th>
                                <th>transactionDate</th>


                            </tr>
                        </thead>
                        <tbody>
                            {redemList && redemList.loading ? <Loader /> :
                                rows ? rows.map((list) => {

                                    return (

                                        <tr>

                                            {/* <td>{list.soldToId}</td> */}
                                            <td>{list.redeemPoints}</td>
                                            <td>{list.transactionNo}</td>
                                            <td>{list.productCode}</td>
                                            <td>{list.productName}</td>
                                            <td>{list.quantity}</td>
                                            <td>{list.activityType}</td>
                                            <td>{list.remarks}</td>
                                            <td>{list.transactionDate}</td>


                                        </tr>
                                    );
                                }) : <div className="no_record">No Record Found</div>
                            }


                        </tbody>
                    </table>
                </div>

                : <>
                <div className="table-responsive fixTableHead volume_allocation">
                    <table class="table table-bordered guideline_table mt-2">
                        <thead>
                            <tr>

                                {/* <th>soldToId</th> */}
                                <th>Activity Type</th>
                                <th>Customer Id</th>
                                <th>Customer Name</th>
                                <th>Expiry Date</th>
                                <th>Expiry Points</th>
                                <th>Last Credited Date</th>
                                <th>Last Credited Points</th>
                                <th>Total Points</th>
                                <th>Remark</th>


                            </tr>
                        </thead>
                        <tbody>
                            {earnList && earnList.loading ? <Loader /> :

                                earnRows && earnRows.length > 0 ? earnRows.reverse()
                                    .map((list) => {
                                        return (
                                            <tr>
                                                <td>{list.activityType}</td>
                                                <td>{list.customerId}</td>
                                                <td>{list.customerName}</td>
                                                <td>{list.activityType === "Point Deduction" ? - list.expiryDate : list.expiryDate}</td>
                                                <td>{list.activityType === "Point Deduction" ? - list.expiryPoints : list.expiryPoints}</td>
                                                <td>{list.lastCreditedDate}</td>
                                                <td>{list.activityType === "Point Deduction" ? - list.lastCreditedPoints : list.lastCreditedPoints}</td>
                                                <td>{list.activityType === "Point Deduction" ? - list.totalPoints : list.totalPoints}</td>
                                                <td>{list.remark}</td>

                                            </tr>
                                        );
                                    }) : <div className="no_record">No Record Found</div>
                            }


                        </tbody>
                    </table>
                   
                </div>
                 <div className="pagination_sec mt-2">
                 <Pagination count={Math.ceil(earnList.getearnpointlist && earnList.getearnpointlist.totalCount / 29)} page={page} onChange={handleChangePage} variant="outlined" color="secondary" />
             </div>
             </>
            }



            <EditLoyalityPoint loyalityPoint={loyalityPoint} popupopen={popupopen} setOpen={setPopupopen} />
        </>
    );
}

export default withTranslation()(LoyalityPoint);
