import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useQuery } from "react-query";
import ChartComp from "../components/ChartComp/ChartComp";

export default function Searchbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showData, setShowData] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [showData]);

  const { isLoading, error } = useQuery(
    ["myData", searchQuery],
    async () => {
      const response = await fetch(`http://localhost:3000/?q=${searchQuery}`);
      const data = await response.json();
      setShowData(data.data.results);
    },
    {
      enabled: Boolean(searchQuery),
    }
  );

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
          className="outline-none w-full bg-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          ref={inputRef}
        />
        <KeyboardArrowDownIcon className="text-gray-500" />
      </div>

      {showData && showData.length !== 0 && (
        <div className="flex flex-col justify-center items-center w-full gap-16">
          <select className="border p-2 border-gray-400 rounded-lg">
            {showData.map((country) => (
              <option key={country.item.code}>{country.item.name}</option>
            ))}
          </select>
          <div>
            <ChartComp showData={showData} />
          </div>
        </div>
      )}
    </div>
  );
}
