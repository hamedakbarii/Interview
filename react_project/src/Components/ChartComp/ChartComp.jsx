import React, { useState } from "react";
import { useQuery } from "react-query";

export default function ChartComp({ showData }) {
  let codes = showData.map((country) => country.item.code);
  const [countryCode, setCountryCodes] = useState(codes);
  const [apiData, setApiData] = useState();

  const { isLoading, error } = useQuery(
    ["myData", setCountryCodes],
    async () => {
      const response = await fetch(
        `http://localhost:3000/chart/${countryCode}`
      );
      const data = await response.json();
      setApiData(data.data.results);
    },
    {
      enabled: Boolean(countryCode),
    }
  );
  console.log(apiData);

  return <div>ChartComp</div>;
}
