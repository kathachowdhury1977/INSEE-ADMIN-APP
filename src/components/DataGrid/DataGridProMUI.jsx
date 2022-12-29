import React, { useState,useEffect } from "react";
import {
  DataGridPro,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
  gridVisibleSortedRowIdsSelector,
  useGridApiRef,
  gridPaginatedVisibleSortedGridRowIdsSelector,
} from "@mui/x-data-grid-pro";
import { customStableSort } from '../../_helpers';
import DownloadIcon from "@mui/icons-material/Download";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Axios from "axios";
import ExportPopup from "../exportPopup/ExportPopup";
import { API_URL_ADMIN, API_URL_LMS } from "../../Constant/index";
import { ExportDataGrid } from "../../_helpers/commonFunctions";
import UploadIcon from "@mui/icons-material/Upload";

const DataGridProMUI = (props) => {
  const [openExportPopup, setOpenExportPopup] = useState(null);
  const [exportState, setExportState] = useState({
    btnName: "EXPORT",
    linkToDownload: null,
  });
  const [sortModel, setSortModel] = React.useState([]);
  const [sortedRow, setSortedRow] = useState([]);
  const apiRef = useGridApiRef();

  useEffect(() => {
    setSortedRow(props.rows);
  }, [props.rows]);

  const onExportClick = () => {
    let dataToExport = getExportData();
    ExportDataGrid(
      props.ExpFilecolHeadings,
      props.ExpFilecolKeys,
      dataToExport,
      props.ExportDateFormatIndexes,
      props.ExportFileName,
      props.excelFormating,
      props.excelDataTransformConfig
    );
  };

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        {/* <GridToolbarColumnsButton /> */}
        <GridToolbarDensitySelector />
        <div className="ExportAndSearchContainer">
          {props.enableUpload && (
            <Button
              variant="outlined"
              startIcon={<UploadIcon />}
              onClick={props.enableUpload}
            >
              {"Upload"}
            </Button>
          )}
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={onExportClick}
          >
            Export
          </Button>
          {props.enableQuickSearch && <GridToolbarQuickFilter />}
        </div>
      </GridToolbarContainer>
    );
  };

  // returns the data which are displyed on DataGrid
  const getExportData = () => {
    let finalRows = [];
    const visibleRows = gridPaginatedVisibleSortedGridRowIdsSelector(apiRef);
    for (let i = 0; i < visibleRows.length; i++) {
      let curRow = props.rows.filter((r) => {
        return r.id == visibleRows[i];
      });
      finalRows.push(curRow[0]);
    }
    return finalRows;
  };

  function customSortModel(model) {
    setSortedRow(customStableSort(props.rows, model));
    setSortModel(model);
  }

  const getDetailPanelHeight = React.useCallback(() => "auto", []);

  return (
    <div>
      <DataGridPro
        style={{ fontSize: "14px" }}
        rows={Array.isArray(sortedRow) ? sortedRow : []}
        sortingMode="server"
        columns={props.columns}
        components={{ Toolbar: CustomToolbar }}
        pageSize={props.pageSize}
        rowsPerPageOptions={props.rowsPerPageOptions}
        labelRowsPerPage={props.labelRowsPerPage}
        getDetailPanelHeight={getDetailPanelHeight}
        pagination={true}
        onPageSizeChange={props.onPageSizeChange}
        localeText={{
          noRowsLabel: "No Data",
        }}
        apiRef={apiRef}
        autoHeight={true}
        loading={props.loading}
        // {...(uniqueId && { getRowId: (row) => row[uniqueId] })}
        // rowCount={rowCount}
        // paginationMode="server"
        sortModel={sortModel}
        onSortModelChange={(newSortModel) => customSortModel(newSortModel)}
      />

      <ExportPopup
        title={""}
        openPopup={openExportPopup}
        setOpenExportPopup={setOpenExportPopup}
        linkToDownload={exportState.linkToDownload}
      />
    </div>
  );
};

DataGridProMUI.defaultProps = {
  pageSize: 25,
  rowsPerPageOptions: [25, 50, 75, 100],
  pagination: true,
  labelRowsPerPage: "Rows per page",
  enableQuickSearch: true,
  enableMasterDetail: false, //make it true and also pass detailComponent as props that will be displayed on click of '+' button in each row.
  style: { display: "flex", height: "350px", marginTop: "10px" },
  noRowsLabel: "No rows",
};

export default DataGridProMUI;
