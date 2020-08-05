import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function CovidChart({}) {
  const [data, setData] = useState();
  const url = "https://disease.sh/v3/covid-19/historical/FR?lastdays=180";
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => data.timeline)
      .then(data => setData(buildChartData(data, "cases")));
  }, []);

  const buildChartData = (data, caseType) => {
    const dataChart = [];
    for (const date in data[caseType]) {
      const topush = {
        x: date,
        y: data[caseType][date]
      };
      dataChart.push(topush);
    }
    return dataChart;
  };

  return (
        <Line
          options={{
            scales: {
              xAxes: [{
                type: 'time',
                time: {
                  format: "MM/DD/YY"
                }
              }]
            }
          }}
      data={{
        datasets: [
          {
            label: "Number of Covid case",
            backgroundColor: "lightgreen",
            data
          }
        ]
      }}
    />

  );
}

export default CovidChart;
