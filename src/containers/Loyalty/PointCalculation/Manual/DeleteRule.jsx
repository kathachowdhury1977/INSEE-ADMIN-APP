import React from "react";
import Button from "@mui/material/Button";
import Axios from "axios";
import { API_URL_LMS } from "../../../../Constant/index";

const DeleteRule = (props) => {
  const { setOpenPopup, recordForDelete, setState } = props;

  const onConfirmClick = (e) => {    

    Axios.delete(API_URL_LMS+"loyalty/point-calc-rule/"+recordForDelete.id, {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token")
      }
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
    <div className="DeleteRuleContainer">
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
export default DeleteRule;
