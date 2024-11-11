import React from "react";
import Chart from "react-apexcharts";

export default function BarChart() {
  return (
    <div className="barchart">
      <h3>Bar Chart</h3>
      {/* using chart as props */}
      <Chart
        type="bar"
        width={1000}
        height={400}
        //   passing data in the form of series
        series={[
          {
            name: "Social media subscriber",
            data: [6578, 6787, 3245, 9876, 2324, 5124],
          },
        ]}
        options={{
          title: { text: "chart developed by ajay", style: { fontSize: 30 } },
          subtitle:{
            text:'it is a sub title',
            style:{fontSize:10}
          },
          colors: ["#f90110"],
          theme: { mode: "dark" },

          xaxis: {
            tickPlacement: "on",
            categories: [
              "facebook",
              "Twitter",
              "Instagram",
              "linkedIn",
              "stacoverflow",
              "telegram",
            ],
            title: {
              text: "Social media user",
              style: { color: "#f90000", fontSize: 30 },
            },
            
          },

          yaxis: {
            labels: {
              formatter: (val) => {
                return `$${val}`;
              },
              style: { fontSize: 21, colors: ["#f11111"] },
            },
          },
          legend: {
            show: true,
            position: "bottom",
          },

          // to edit data in graphs
          dataLabels: {
            formatter: (val) => {
              return `$${val}`;
            },
            style: {
              colors: ["#111111"],
            },
          },
        }}
      ></Chart>
    </div>
  );
}
