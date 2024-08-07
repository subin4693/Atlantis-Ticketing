import React, { useState } from "react";
import { Button } from "./ui/button";

const ClientInputMenu = ({ value, setValue, title, placeholder }) => {
  const [text, setText] = useState("");
  const handleAdd = () => {
    if (text.trim().length == 0) return;
    setValue([...value, text]);
    setText("");
  };
  return (
    <div>
      &nbsp;&nbsp;<label>{title} : </label>
      {value.length > 0 && (
        <ul className="bg-input rounded-[25px] p-5 mt-5">
          {value &&
            value.map((val, index) => (
              <li key={index}>{index + 1 + " " + val}</li>
            ))}
        </ul>
      )}
      <input
        type="text"
        className="bg-input rounded-[25px] p-2 w-full mt-5"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
      />
      <Button
        className="max-w-fit text-xs py-[9px] px-5 mt-5 rounded-[25px]"
        onClick={handleAdd}
      >
        Add
      </Button>
    </div>
  );
};

export default ClientInputMenu;
