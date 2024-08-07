import React from "react";

const SocialmediaAuthBtn = ({ handleClick, img, text }) => {
    return (
        <button
            onClick={handleClick}
            className=" p-0  mb-8 rounded-[25px]  w-full py-4  bg-input flex item-center justify-center relative max-w-[350px]"
        >
            <img
                src={img}
                alt="google image"
                className="w-8 h-8 absolute left-5"
            />
            {text}
        </button>
    );
};

export default SocialmediaAuthBtn;
