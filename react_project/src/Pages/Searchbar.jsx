import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Searchbar() {
  // const [countryName, setCountryName] = useState([]);

  // fetch("http://localhost:3000/", {
  //   method: "Get",
  // })
  //   .then((response) => response.json())
  //   .then((data) => setCountryName(data));

  return (
    <div className="border rounded-lg w-[1200px] h-[550px] flex justify-center items-center m-0 m-auto mt-2">
      <div className="w-80 border border-gray-500 p-2 rounded-lg text-sm flex justify-between">
        <input
          type="text"
          placeholder="Type Country Name..."
          className="outline-none w-full"
          // onChange={(e) => setCountryName(e.target.value)}
          // value={countryName}
        />
        <KeyboardArrowDownIcon className="text-gray-500" />
      </div>
      {/* {countryName} */}
    </div>
  );
}
