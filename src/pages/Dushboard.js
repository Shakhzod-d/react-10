import Chart from 'chart.js/auto';
import { color, getRelativePosition } from 'chart.js/helpers';
import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar , Line} from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  
);



export default function Dushboard() {
   const data = {
     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
     datasets: [
      {
        label: '',
        data: [420,600,280,480,150,210,700,490,205,400],
        borderRadius: '4',
        backgroundColor: [
          '#FF5B5A',
          '#58CEFF',
          '#4A52FF',
          '#00A28A',
          '#FF5B5A',
          '#AB53DB',
          '#FFBC54',
          '#FF5B5A',
          '#00A28A',
          '#58CEFF'
        ],
        

      },
     
      


     ]
  
   }


   const date = {
    labels: ['01:00', '02:00', '03:00', '12:00', '04:00', '05:00', '06:00', '07:00', '08:00'],
    datasets: [
     {
        label: '',
       data: [0,3,2.5,3.4,5,4,3.5,5.6,7],
       backgroundColor: [
        'rgba(254, 213, 118, 0.40)',
      ],
      pointColor: 'transparent',
      fill: true,
      borderColor: [
        '#FF3F40'
      ],
      borderWidth: [
        '1'
      ],
      tension: 0.4,
       

     },

    ]
 
  }


    


  const options = {
  }

  




  return (
    <>

        <div className="dushboard__menu">

        <div className="search__help">
          <input 
            type="text"
            placeholder='Search'
            className='input__search'

           />
           <img src="./icons/search2.svg" alt="" />
          
        </div>


          <h5>Weekly statistics</h5>

          <div className="user__cards">
            <div className="first__card">
              <p className='card__title'>Users</p>
              <div className="card__number">
                <p>12,924</p>
                <img src="./icons/upper.svg" alt="" />
              </div>
              
          </div>
            <div className="second__card">
              <p className='card__title'>New Users</p>
              <div className="card__number">
                <p>5,200</p>
                <img src="./icons/under.svg" alt="" />
              </div>

            </div>
            <div className="third__card">
              <p className='card__title'>App Download</p>
              <div className="card__number">
                <p>467k</p>
                <img src="./icons/upper.svg" alt="" />
              </div>

            </div>
          </div>

        </div>

       <div className="Bar__lines">
            <div
              className='Bar__lines'
              style={
              {width: '501px'}

              }

            >
            <p className='bar__title'>Monthly Visitors</p>

            <Bar className='bar' options={options} data={data} />



            </div>

            <div 
              className="Line__bars"
              style={
                {width: '489px'}

              }
                >

              <p className='line__title'>Daily visitor</p>

              <Line options={options} data={date} />


            </div>

            <div className="world__map">
              <p className='map__title'>World map</p>

              <img src="./icons/world.png" alt="" />
            </div>
       </div>

          
    </>

  )
}
