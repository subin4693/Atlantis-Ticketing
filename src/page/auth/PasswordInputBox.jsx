import React, { useState } from "react";

import { Eye, EyeOff, Lock } from "lucide-react";

const PasswordInputBox = ({ placeholder, value, setValue }) => {
    const [type, setType] = useState("password");
    return (
        <div className="w-full rounded-[25px]  bg-input px-4 flex items-center justify-center gap-2 overflow-hidden">
            <Lock className="text-gray-400" />
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full border-none outline-none py-4 bg-input"
            />
            <button
                onClick={() =>
                    setType((prev) =>
                        prev === "password" ? "text" : "password"
                    )
                }
            >
                {type === "text" ? (
                    <EyeOff className="text-gray-400" />
                ) : (
                    <Eye className="text-gray-400" />
                )}
            </button>
        </div>
    );
};

export default PasswordInputBox;
