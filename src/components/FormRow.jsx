import React from "react";

const FormRow = ({ type, name, value, handleChange, labelText, required }) => {
  return (
    <div className="mb-4">
      <input
        placeholder={labelText || name}
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="w-[100%] border border-grey-200 p-3  rounded bg-gray-50 h-[35px] placeholder:capitalize placeholder:text-gray-600"
        required
      />
    </div>
  );
};

export default FormRow;
