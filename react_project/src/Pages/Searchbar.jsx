import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useQuery } from "react-query";
// import ChartComp from "../components/ChartComp/ChartComp";

export default function Searchbar() {
  const [searchQuery, setSearchQuery] = useState("ir");

  const { data, isLoading, error } = useQuery("myData", () => {
    return fetch(`http://localhost:3000/?q=${searchQuery}`);
  });

  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center">An error occurred: {error.message}</p>;
  }

  return (
    <div className="border rounded-lg w-[1200px] h-[550px] flex flex-col justify-center items-center gap-10 p-4 m-0 m-auto mt-2">
      <div className="w-96 border border-gray-500 p-2 rounded-lg text-sm flex justify-between shadow-lg">
        <input
          type="text"
          placeholder="Type Country Name..."
          className="outline-none w-full"
        />
        <KeyboardArrowDownIcon className="text-gray-500" />
      </div>

      <div>test</div>

      {/* <div>
        <ChartComp countryCode={searchQuery} />
      </div> */}
    </div>
  );
}
