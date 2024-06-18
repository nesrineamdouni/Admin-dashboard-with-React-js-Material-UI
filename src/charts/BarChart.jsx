import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2019", 975, 600, 260],
  ["2021", 1249, 500, 270],
  ["2022", 448, 1200, 400],
  ["2023", 937, 670, 380],
];

export const options = {
  chart: {
    title: "Business Results",
    subtitle: "Sales, Expenses, and Profit",
  },
};

export default function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="350px"
      data={data}
      options={options}
    />
  );
}
