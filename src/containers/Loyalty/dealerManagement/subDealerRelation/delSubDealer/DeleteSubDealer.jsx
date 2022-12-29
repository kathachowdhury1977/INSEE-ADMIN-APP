import React from "react";
import Button from "@mui/material/Button";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import "./DeleteSubDealer.scss";
import { API_URL_ADMIN } from "../../../../../Constant/index";

const DeleteSubDealer = (props) => {
  const { setOpenPopup, recordForDelete, setState } = props;
  const location = useLocation();
  // dealernumber=accountName,dealerName=soldtoNumber
  const { accountName } = location.state;
  const { soldtoNumber } = location.state;

  const onConfirmClick = (e) => {
    let data = {};
    data.subdealerNumber = recordForDelete.subdealerNumber;
    data.soldToNumber = accountName;
    Axios.delete(API_URL_ADMIN + `retailer/subdealer-soldto`, {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
      data,
    })
      .then((response) => {
        if (response.data.status == 200) {
          setState({ open: true, message: "Deleted Successfully!!!" });
          setOpenPopup(false);
        } else {
          setState({
            message: "Something went wrong!",
            severity: "error",
            open: true,
          });
        }
      })
      .catch((error) => {
        setState({
          message: "Error in processing",
          severity: "error",
          open: true,
        });
      });
  };

  return (
    <div className="DeleteSubDealerContainer">
      Are you sure you want to <b>Delete</b> this record?
      <div className="SaveCancelBtn">
        <Button
          variant="contained"
          size="small"
          className="ConfirmBtn"
          onClick={onConfirmClick}
        >
          Confirm
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={() => {
            setOpenPopup(false);
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};
export default DeleteSubDealer;
