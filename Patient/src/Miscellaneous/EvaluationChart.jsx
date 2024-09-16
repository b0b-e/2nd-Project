// EvaluationChart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const EvaluationChart = () => {
  const overallScore = 63; // The overall score you want to display (out of 100)
  const remainingScore = 100 - overallScore; // Remaining percentage to reach 100%

  // Data for the pie chart
  const data = {
    labels: ['Overall Score', 'Remaining Score'],
    datasets: [
      {
        label: 'Evaluation Score (%)',
        data: [overallScore, remainingScore],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)', // Color for the overall score
          'rgba(75, 192, 192, 0.2)', // Color for the remaining score (more transparent)
        ],
        borderColor: [
          'rgba(75, 192, 192, 0)',  // No border for the overall score
          'rgba(75, 192, 192, 0)',  // No border for the remaining score
        ],
        borderWidth: 0,  // No border between segments
      },
    ],
  };

  // Options for the pie chart
  const options = {
    responsive: true,
    plugins: {
      datalabels: {
        color: '#000', // Color of the data labels
        display: (context) => context.dataIndex === 0, // Only display label for the overallScore segment
        formatter: (value) => `${value}%`, // Format of the data label
        anchor: 'center', // Anchor position
        align: 'center', // Align position
        font: {
          size: 24, // Font size for the data labels
          weight: 'bold', // Font weight for better visibility
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (context.parsed !== null) {
              label += ': ' + context.parsed + '%';
            }
            return label;
          }
        }
      },
    },
  };

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      Overall Evaluation Score
      <Pie data={data} options={options} />
    </div>
  );
};

export default EvaluationChart;
