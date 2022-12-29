import React, { useState } from "react";

const inputStyle = {
  "margin-bottom": "3%",
  "border-radius": "6px",
  padding: "2% 2%",
  height: "50px",
};
function FormSelectbox(props) {
  const [selectedData, updateSelectedData] = useState(0);
  function handleChange(event) {
    updateSelectedData(event.target.value)

    if (props.onSelectChange) props.onSelectChange(event.target.value, event.target.name);
  }

  let options =
    props.data !== "data" ? (
      props.data.map(function (modedata) {
        console.log("selectIndex",props.key);
        // if (props.key === props.selectIndex )
        // {
        return (
          <option key={modedata.id} value={modedata.id}>
            {modedata.name}
          </option>
        );
      //  }
      })
    ) : (
      <option key={0} value={0}>
        {"No Data Available"}
      </option>
    );

  return (
    <select name={props.name} className={props.class} value={props.dataValue} onChange={handleChange}>
      <option> {props.label}</option>
      {options}
    </select>
  );
}
export default FormSelectbox;
