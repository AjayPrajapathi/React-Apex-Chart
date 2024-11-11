import React from "react";
import Chart from "react-apexcharts";

export default function Comparison() {
  return (
    <div className="barchart">
      <h3>Bar Chart - Current vs Previous Data</h3>
      <Chart
        type="bar"
        width={1000}
        height={400}
        // Adding both current and previous data as series
        series={[
          {
            name: "Current Subscribers",
            data: [6578, 6787, 3245, 9876, 2324, 5124],
          },
          {
            name: "Previous Subscribers",
            data: [5678, 5987, 2745, 8976, 2224, 4724],
          },
        ]}
        options={{
          title: { text: "Subscriber Comparison: Current vs Previous Month", style: { fontSize: 30 } },
          subtitle: {
            text: "Comparison between this month and the previous month",
            style: { fontSize: 15 },
          },
          colors: ["#00E396", "#FF4560"], // Different colors for current and previous data
          theme: { mode: "dark" },

          xaxis: {
            tickPlacement: "on",
            categories: [
              "Facebook",
              "Twitter",
              "Instagram",
              "LinkedIn",
              "StackOverflow",
              "Telegram",
            ],
            title: {
              text: "Social Media Platforms",
              style: { color: "#f90000", fontSize: 30 },
            },
          },

          yaxis: {
            labels: {
              formatter: (val) => {
                return `${val} subscribers`;
              },
              style: { fontSize: 16, colors: ["#f11111"] },
            },
            title: {
              text: "Number of Subscribers",
              style: { fontSize: 18, color: "#f11111" },
            },
          },
          legend: {
            show: true,
            position: "bottom",
          },

          // Data labels inside the bars
          dataLabels: {
            enabled: true,
            formatter: (val) => {
              return `${val}`;
            },
            style: {
              colors: ["#ffffff"],
            },
          },

          // Plot options to display bars next to each other
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "55%",
              endingShape: "rounded",
            },
          },
        }}
      ></Chart>
    </div>
  );
}
