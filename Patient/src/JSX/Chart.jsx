// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Session 1','Session 2','Session 3','Session 4','Session 5','Session 6'],
    datasets: [
      {
        label: 'Evalutaion History',
        data: [45, 49, 57, 62, 71, 78],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: '',
        },
      },
      y: {
        title: {
          display: true,
          text: '',
        },
        beginAtZero: true,
      },
    },
  };
  const divStyle = {
    marginLeft: '10px', 
    marginBottom: '10px' 
  };
  return (
    <div>
      <div style={divStyle}><h3>Evalutaion History</h3></div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
