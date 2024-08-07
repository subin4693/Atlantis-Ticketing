import React, { useState } from "react";

import { User } from "lucide-react";

const PasswordInputBox = ({ placeholder, value, setValue }) => {
    return (
        <div className="w-full rounded-[25px]  bg-input  px-4 flex items-center justify-center gap-2 overflow-hidden">
            <User className="text-gray-400" />

            {/* <select
                type="select"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full border-none outline-none py-4 bg-input"
            >
                <option className="bg-input">User</option>
                <option>Client</option>
            </select>*/}
            <nav className="flex min-w-[240px] w-full flex-row gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                <div
                    onClick={() => setValue("user")}
                    role="button"
                    className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                    <label
                        htmlFor="horizontal-list-react"
                        className="flex items-center w-full px-3 py-2 cursor-pointer"
                    >
                        <div className="grid mr-3 place-items-center">
                            <div className="inline-flex items-center">
                                <label
                                    className="relative flex items-center p-0 rounded-full cursor-pointer"
                                    htmlFor="horizontal-list-react"
                                >
                                    <input
                                        name="horizontal-list"
                                        id="horizontal-list-react"
                                        type="radio"
                                        defaultChecked={true}
                                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-primary text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-primary before:opacity-0 before:transition-opacity checked:border-primary checked:before:bg-primary hover:before:opacity-0"
                                    />
                                    <span className="absolute text-primary transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3.5 w-3.5"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                        >
                                            <circle
                                                data-name="ellipse"
                                                cx="8"
                                                cy="8"
                                                r="8"
                                            ></circle>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                            User
                        </p>
                    </label>
                </div>
                <div
                    role="button"
                    onClick={() => setValue("client")}
                    className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                    <label
                        htmlFor="horizontal-list-vue"
                        className="flex items-center w-full px-3 py-2 cursor-pointer"
                    >
                        <div className="grid mr-3 place-items-center">
                            <div className="inline-flex items-center">
                                <label
                                    className="relative flex items-center p-0 rounded-full cursor-pointer"
                                    htmlFor="horizontal-list-vue"
                                >
                                    <input
                                        name="horizontal-list"
                                        id="horizontal-list-vue"
                                        type="radio"
                                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-primary text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-primary before:opacity-0 before:transition-opacity checked:border-primary checked:before:bg-primary hover:before:opacity-0"
                                    />
                                    <span className="absolute text-primary transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3.5 w-3.5"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                        >
                                            <circle
                                                data-name="ellipse"
                                                cx="8"
                                                cy="8"
                                                r="8"
                                            ></circle>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                            Vendor
                        </p>
                    </label>
                </div>
            </nav>
        </div>
    );
};

export default PasswordInputBox;
