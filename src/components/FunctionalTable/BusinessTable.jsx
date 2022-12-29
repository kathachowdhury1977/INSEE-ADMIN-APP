import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Search from '@material-ui/icons/Search';


// https://codesandbox.io/s/materialtable-column-state-j92ck?file=/src/Table.js:0-1705
const BusinessTable = ({ title,tableData, comonscol,onchange,onUpdate,onDelete }) => {
  const [gridData, setGridData] = useState(tableData);
 
  const [columns, setcolumns] = useState(comonscol);


  console.log("columns",columns);

  useEffect(() => {
    gridData.resolve();
    setcolumns(comonscol);
    console.log("RESOLVE AT:", gridData.updatedAt);
  }, [gridData, comonscol]);

  const onRowAdd = newData =>
    new Promise((resolve, reject) => {
      setcolumns([]);
      const { data } = gridData;
      const updatedAt = new Date();
      data.push(newData);
      onchange(newData);
      setGridData({ ...gridData, data, resolve, updatedAt });
    });

  const onRowDelete = oldData =>
    new Promise((resolve, reject) => {
      setcolumns([]);
      const { data } = gridData;
      const updatedAt = new Date();
      const index = data.indexOf(oldData);
      onDelete(data[index]);
      //data.splice(index, 1);
      setGridData({ ...gridData, data, resolve, updatedAt });
    });

  const onRowUpdate = (newData, oldData) =>
    new Promise((resolve, reject) => {
      setcolumns([]);
      const { data } = gridData;
      const updatedAt = new Date();
      const index = data.indexOf(oldData);
      console.log("newData",newData);
      console.log("oldData",oldData)
      onUpdate(newData);
      data[index] = newData;
      setGridData({ ...gridData, data, resolve, updatedAt });
    });

  const { data } = gridData;

  return (
    <div>
      <MaterialTable
        data={data}
        columns={columns}
        title={title}
        editable={{
          isEditable: rowData => true,
          isDeletable: rowData => true,
          onRowAdd: onRowAdd,
          onRowUpdate: onRowUpdate,
          onRowDelete: onRowDelete
        }}
      />
    </div>
  );
};

export default BusinessTable;
