import React from "react";
export default function DropdownField({ data , setData}) {
  const { fieldName, fieldClass, iconImage, payload, options } = data;
  const changeHandler=(e)=>{
    setData(fieldName,e.target.value)
  }
  return (
    <div className={fieldClass}>
      <p>{fieldName}</p>
      <div className="flex flex-row">
        <img src={iconImage} alt="" />
        <select
          className="outline-none px-2 py-2 w-full"
          name={payload.name}
          id={payload.id}
          required
          onChange={changeHandler}
        >
          <option value="" hidden>
            Please Select
          </option>
          {options.map((optionObj) => <option value={optionObj.value} key={optionObj.value}>{optionObj.name}</option>)}
        </select>
      </div>
    </div>
  );
}
