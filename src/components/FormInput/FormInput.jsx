import React, { useState } from "react";

const inputStyle = {
  "margin-bottom": "3%",
  "border-radius": "6px",
  padding: "6% 2%",
};
function FormInput(props) {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
    if (props.onChange) props.onChange(inputValue, props.name);
  }

  return (
    <>
      <input
        type={inputType}
        value={props.onChange(inputValue, props.name)}
        class={props.class}
        onChange={handleChange}
        name={props.name}
        placeholder={props.label}
        //style={inputStyle}
      />
    </>
  );
}
export default FormInput;