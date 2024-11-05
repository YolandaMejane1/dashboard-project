// mock data
export const revenueData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [15430, 23000, 9000, 34500, 28000, 45000, 22000, 32000, 18000, 26000, 40000, 35000], 
        borderColor: "#2196F3",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };


  export const userActivityData = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: "User Activity",
        data: [30, 45, 60, 70, 50, 80, 100],
        borderColor: "#FF9800",
        backgroundColor: "rgba(255, 152, 0, 0.2)",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  export const transactionData = [
    { id: 1, reference: "#0199", date: "2024-11-01", amount: 150.00 },
    { id: 2, reference: "#0200", date: "2024-11-02", amount: 200.00 },
    { id: 3, reference: "#0201", date: "2024-11-03", amount: 500.00 },
  ];