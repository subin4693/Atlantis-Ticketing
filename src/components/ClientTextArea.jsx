import React from "react";

const ClientTextArea = ({ type, title, value, setValue }) => {
    return (
        <>
            &nbsp;&nbsp;<label>{title} : </label>
            <br />
            <textarea
                rows="5"
                cols="20"
                className="bg-input rounded-[25px] p-4 w-full shadow-custom "
                resize="none"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    );
};

export default ClientTextArea;
