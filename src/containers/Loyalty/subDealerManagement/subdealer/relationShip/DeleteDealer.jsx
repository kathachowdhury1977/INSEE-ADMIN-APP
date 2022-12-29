import React from "react";
import Button from "@mui/material/Button";
import Axios from "axios";
import { API_URL_ADMIN } from "../../../../../Constant/index";

const DeleteContact = (props) => {
  const { setOpenPopup, recordForDelete, setState } = props;

  const onConfirmClick = (e) => {    

    const payloadDetails={
      "soldToNumber": recordForDelete.soldToNumber, 
      "subdealerNumber": recordForDelete.subdealerNumber  
     
    }
    
    Axios.delete(API_URL_ADMIN+"retailer/soldto-subdealer", {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token")
      },
      data: payloadDetails
    })
      .then((response) => {
        if(response.data.status===200){
          setState({ open: true,severity: "success", message: "Deleted Successfully!!!" });
          setOpenPopup(false);
          props.setIsdelete(true)
        }else{
          setState({
            message: response.data.message,
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
