import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Searchbar() {
  return (
    <div className="border rounded-lg w-full flex justify-center items-center">
      <div className="w-80 border border-gray-500 p-2 rounded-lg text-sm flex justify-between">
        <input
          type="text"
          placeholder="Type Country Name..."
          className="outline-none w-full"
        />
        <KeyboardArrowDownIcon className="text-gray-500" />
      </div>
    </div>
  );
}
