import React from "react";
import { Bar } from "react-chartjs-2";
import { userActivityData } from '../data/mockData';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const UserActivity = () => {
  const today = new Date().getDay();

  const barColors = userActivityData.datasets[0].data.map((_, index) => {
    return index === today ? 'rgba(0, 102, 204, 1)' : 'rgba(0, 102, 204, 0.5)';
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false, // This allows the chart to fill its container
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: "User Activity Over a Week",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Activity Level",
        },
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", maxWidth: "400px", height: "300px", margin: "auto" }}>
      <Bar
        data={{
          ...userActivityData,
          datasets: [{
            ...userActivityData.datasets[0],
            backgroundColor: barColors,
            borderRadius: 10, 
          }],
        }}
        options={options}
      />
    </div>
  );
};

export default UserActivity;