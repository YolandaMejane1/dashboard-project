import React from "react";
import { Line } from "react-chartjs-2";
import { revenueData } from "../data/mockData";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const RevenueChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Revenue Trend",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Revenue in $",
        },
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          callback: (value, index) => {
            return revenueData.labels[index] || '';
          },
          autoSkip: false,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 1,
        borderColor: "#2196F3",
      },
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "auto" }}>
      <Line data={revenueData} options={options} />
    </div>
  );
};

export default RevenueChart;