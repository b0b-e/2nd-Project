import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const AbilityDistributionChart = () => {
  // Data for different evaluation areas
  const data = {
    labels: ['Speech Therapy', 'Motor Skills', 'Cognitive Skills', 'Social Interaction', 'Behavioral Response', 'Emotional Response'],
    datasets: [
      {
        label: 'Evaluation Score (%)',
        data: [85, 75, 90, 60, 70, 50], 
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      Ability Distribution
      <Pie data={data} />
    </div>
  );
};

export default AbilityDistributionChart;
