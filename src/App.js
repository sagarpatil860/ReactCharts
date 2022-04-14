import "./styles.css";
import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

function LineChart() {
  const data = {
    labels: ["Jan", "feb", "mar", "Apr"],
    datasets: [
      {
        label: "sales 2020",
        data: [3, 4, 7, 3]
      },
      {
        label: "sales 2020",
        data: [3, 4, 7, 3]
      }
    ]
  };

  return (
    <>
      <Bar data={data} />
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <div className="chart">
        <LineChart />
      </div>
    </div>
  );
}
