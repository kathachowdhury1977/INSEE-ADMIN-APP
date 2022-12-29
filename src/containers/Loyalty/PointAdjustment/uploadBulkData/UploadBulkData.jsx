import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Axios from "axios";
import "./UploadBulkData.scss";
import { API_URL_LMS, API_URL_ADMIN } from "../../../../Constant/index";

const UploadBulkData = (props) => {
  const { setOpenPopup } = props;
  const [values, setValues] = useState({ selFile: "" });
  const [state, setState] = useState({
    openAlert: false,
    severity: "success",
    message: "",
    simulateBtnTxt: "Simulate",
    simErr: false,
    simulateBtnDis: false,
    simulationSuccess: false,
    upldBtnTxt: "Upload",
    upldBtnDis: false,
    simErrFilePath: "",
    enableCloseBtn:false,
  });

  const onSimulateClick = (e) => {
    setState({
      ...state,
      simulateBtnTxt: "Simulating...",
      simulateBtnDis: true,
    });
    const formData = new FormData();
    formData.append("file", values.selFile);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };
    Axios.post(
      API_URL_LMS + `loyalty/upload-manual-adjust/simulate`,
      formData,
      requestOptions
    )
      .then((response) => {
        if (response.data.status == 200) {
          setState({
            ...state,
            openAlert: true,
            simulateBtnTxt: "Simulate",
            simulateBtnDis: false,
            simulationSuccess: true,
            message:
              "Simulate successfull. No error in the file - " +
              values.selFile.name,
          });
        }
        if (response.data.status == 420) {
          setState({
            ...state,
            simulateBtnTxt: "Simulate",
            simulateBtnDis: true,
            openAlert: true,
            simErr: true,
            severity: "error",
            message: "Error in processing! Please check files using the link:",
            simErrFilePath: response.data.message,
          });
        }
      })
      .catch((error) => {
        setState({
          ...state,
          simulateBtnTxt: "Simulate",
          simulateBtnDis: true,
          openAlert: true,
          severity: "error",
          message: "Error in processing!",
        });
      });
  };

  const onUploadBtnClick = (e) => {
    setState({ ...state, upldBtnTxt: "Uploading...", upldBtnDis: true });
    const formData = new FormData();
    formData.append("file", values.selFile);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        "X-AUTH-TOKEN": localStorage.getItem("x-auth-token"),
      },
    };
    Axios.post(
      API_URL_LMS + `loyalty/upload-manual-adjust`,
      formData,
      requestOptions
    )
      .then((response) => {
        if (response.data.status == 200) {
          setState({
            ...state,
            openAlert: true,
            upldBtnTxt: "Upload",
            upldBtnDis: false,
            simulationSuccess: true,
            message: "Uploaded Successfully",
            enableCloseBtn:true,
          });
        }
        if (response.data.status == 420) {
          setState({
            ...state,
            upldBtnTxt: "Upload",
            upldBtnDis: false,
            message: response.data.message,
            severity: "error",
            enableCloseBtn:false,
          });
        }
      })
      .catch((error) => {
        setState({
          ...state,
          upldBtnTxt: "Upload",
          upldBtnDis: false,
          message: "Error in processing",
          severity: "error",
          enableCloseBtn:false,
        });
      });
  };

  const downloadFile = () => {
    const url = state.simErrFilePath;
    const link = document.createElement("a");
    link.href = url;
    document.body.appendChild(link);
    link.click();
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (e.target.type == "file") {
      value = e.target.files[0];
    }

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="UpBlkContainer">
      {state.openAlert ? (
        <div className="AlertMsg">
          <Alert
            severity={state.severity}
            action={
              state.enableCloseBtn && <Button
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenPopup(false);
                }}
              >
                Close
              </Button>
            }
          >
            {state.message}
            {state.simErr ? (
              <a href="#" onClick={downloadFile}>
                {state.simErrFilePath.replace(/^.*[\\\/]/, "")}
              </a>
            ) : null}
          </Alert>
        </div>
      ) : (
        ""
      )}
      {state.simulationSuccess ? (
        <div className="UpldBlkBtnContainer">
          <Button
            type="submit"
            variant="contained"
            className="SaveBtn"
            onClick={onUploadBtnClick}
          >
            {state.upldBtnTxt}
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
      ) : (
        <div>
          <div className="UpldBlkHdr">
            {values.selFile ? null : <h6>Select File</h6>}
          </div>
          <div className="userImageContainer">
            <div className="UpldBlkInput">
              <input
                type="file"
                accept=".xlsx"
                name="selFile"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="UpldBlkBtnContainer">
            <Button
              type="submit"
              variant="contained"
              className="SaveBtn"
              onClick={onSimulateClick}
              disabled={state.simulateBtnDis}
            >
              {state.simulateBtnTxt}
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
      )}
    </div>
  );
};

export default UploadBulkData;
