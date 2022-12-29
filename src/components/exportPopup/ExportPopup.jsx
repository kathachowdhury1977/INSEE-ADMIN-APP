import React from "react";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";
import Popup from "../Popup/Popup";
import "./ExportPopup.scss";

const ExportPopup = (props) => {
  const { linkToDownload, title, openPopup, setOpenExportPopup } = props;

  const downloadFile = () => {
    const url = linkToDownload.data;
    const link = document.createElement("a");
    link.href = url;
    document.body.appendChild(link);
    link.click();
  };

  return (
    <>
      <Popup
        title={title}
        openPopup={openPopup}
        setOpenPopup={setOpenExportPopup}
      >
        <div className="ExpClsIcon">
          <CloseIcon
            onClick={() => {
              setOpenExportPopup(false);
            }}
          />
        </div>
        <div className="ExportDwnldBtnContainer">
          <h6>Your file is ready for download.</h6>
          <Button
            variant="outlined"
            size="small"
            startIcon={<DownloadIcon />}
            style={{ textTransform: "none" }}
            onClick={downloadFile}
            className="ExpDwnldBtn"
          >
            {"Download"}
          </Button>
        </div>
      </Popup>
    </>
  );
};

export default ExportPopup;
