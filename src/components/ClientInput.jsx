import React from "react";

const ClientInput = ({ type, title, value, setValue }) => {
    return (
        <>
            &nbsp;&nbsp;<label>{title} : </label>
            <br />
            <input
                type="text"
                className="bg-input rounded-[25px] p-3 pl-5 w-full shadow-custom "
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    );
};

export default ClientInput;
