import React from 'react'
import { Radar } from 'react-chartjs-2'

const RadarChart = () => {

    const data = {
        labels: [
          'Mat',
          'Sci',
          'Eng',
          'His',
          'Geo',
          'Com',
          'Art'
        ],
        datasets: [{
          label: '2020',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
            label: '2021',
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
        };

    return (
        <div>
            <Radar
               data={data} 
            />
        </div>
    )
}

export default RadarChart