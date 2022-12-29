import React from "react";
import Button from "@mui/material/Button";
import Axios from "axios";
import "./DeleteContact.scss";
import { API_URL_ADMIN } from "../../../../../../Constant/index";

const DeleteContact = (props) => {
  const { setOpenPopup, recordForDelete, setState } = props;

  const onConfirmClick = (e) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };

    Axios.delete(
      API_URL_ADMIN +
        `retailer/subdealer-contact?contactId=` +
        recordForDelete.id+`&userName=`+recordForDelete.userName,
      requestOptions
    )
      .then((response) => {
        console.log(response);
        setState({ open: true, message: "Deleted Successfully!!!" });
        setOpenPopup(false);
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
    <div className="DeleteContactContainer">
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
export default DeleteContact;
