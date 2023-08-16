import React from "react";

const FormRowProfile = ({ type, name, value, handleChange, labelText }) => {
  return (
    <>
      <label htmlFor={name} className="text-black text-xl block font-semibold capitalize">
        {labelText || name}
      </label>
      <input
        placeholder={labelText || name}
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="text-center placeholder:text-black"
      />
    </>
  );
};

export default FormRowProfile;
