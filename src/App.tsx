import 'chartjs-adapter-luxon';
import React from 'react';
import { Line } from 'react-chartjs-2';
import './App.css';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
      label: 'My First dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
  }]
}

function App() {
  const options = {
    scales: {
      y: {
        min: 0,
      },
      x: {
        type: 'time',
        time: {
          // Luxon Format Strings https://github.com/moment/luxon/blob/master/docs/formatting.md#table-of-tokens
          // ChartJS Display Formats https://www.chartjs.org/docs/latest/axes/cartesian/time.html#display-formats
          displayFormats: {
            hour: 'h:mm a',
            day: 'M/d ha',
            weeks: 'M/d/yyyy',
          },
          minUnit: 'minute',
          tooltipFormat: 'M/d/yyyy h:mm a',
        },
        ticks: {
          source: 'data',
          autoSkip: true,
          autoSkipPadding: 15,

          minRotation: 45,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <Line data={data} options={options} />
  );
}

export default App;
