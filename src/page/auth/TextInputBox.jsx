import React from "react";

const TextInputBox = ({ type, Icon, placeholder, value, setValue }) => {
    return (
        <div className="w-full overflow-hidden rounded-[25px]  bg-input px-4 flex items-center justify-center gap-2">
            <Icon className="text-gray-400" />
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full border-none outline-none py-4 bg-input"
            />
        </div>
    );
};

export default TextInputBox;
