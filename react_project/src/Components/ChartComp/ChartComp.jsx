import React, { useState } from "react";
import { useQuery } from "react-query";
import { Line } from "react-chartjs-2";

export default function ChartComp({ showData }) {
  let codes = showData.map((country) => country.item.code);
  const [countryCode, setCountryCode] = useState(codes[0]);

  const { isLoading } = useQuery("chartData", () =>
    fetch(`http://localhost:3000/chart/${countryCode}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) return <p>"Loading..."</p>;

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3, 15],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <h2>My Chart</h2>
      {/* <Line data={data} options={options} /> */}
    </div>
  );
}
