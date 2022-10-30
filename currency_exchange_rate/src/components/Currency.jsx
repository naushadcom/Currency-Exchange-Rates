


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };

  const labels=['INR','USD', 'MXN', 'EUR', 'MZN']
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset',
        data:[81.938491,0.996822,19.716553,1,63.579593],
        backgroundColor: 'green',
      }
    ],
}
        

const Currency =() => {
    

   
    return(
        <div style={{width:'80%', height:'50%'}}>
          <h1>Comparing the currency rate of five countries</h1>
            <Bar data={data} options={options}/>
         </div>)
}
export default Currency;