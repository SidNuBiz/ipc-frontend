// import React, { useState } from 'react'
import {orders} from "../../../data/siteContent.js";
import { useEffect } from "react";

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { useRef } from "react";


ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const LineChart = () => {

  const daysFetched = useRef(false)

  const numDays = new Date(new Date().getFullYear() , new Date().getMonth(), 0).getDate();

    const days=[];
    const values=[];

    function setDays() {

        for(var i = 1 ; i <= numDays ; i++) {
            days.push(i);
        }

    }



    useEffect (() => {

      if(daysFetched.current) return;

      daysFetched.current = true;

      setDays();

        var data = Array.from(days.map((day) => orders.filter((order) => order.date.year === new Date().getFullYear().toString() && parseInt(order.date.month) === new Date().getMonth() + 1 && parseInt(order.date.day) === day).length));
        values.push(...data);

        console.log(values);
        console.log(days);


    }, );

  return (

    <div className="bg-gradient-to-t from-gray-900 to-[#032725] p-10 rounded-lg">

        {/* Heading */}

        <div className="text-white mb-10 lg:text-2xl md:text-2xl">
          {'Orders on ' + new Date().toLocaleString('default', { month: 'long' }) + ' ' + new Date().getFullYear()}
        </div>

        <Line data={{

          labels: days,
          datasets: [{

            label: 'Orders',
            data: values,
            fill: true,
            backgroundColor: 'transparent',
            borderColor: '#18debb',
            tension: 0.2,
            pointBackgroundColor: '#18debb',
            pointBorderColor: '#18debb',
            pointHoverBackgroundColor: '#ffffff',
            pointHoverBorderColor: '#ffffff',
            pointRadius: 4,
            pointHoverRadius: 4,
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            scaleStepWidth: 1,



          }],

        }}
        options={{

          responsive: true,

          animation: true,


          scales: {

            y: {

              ticks: {

                beginAtZero: true,

                stepSize: 1,

                color: '#ffffff',

              }

            },

            x: {

              ticks: {

                beginAtZero: true,

                stepSize: 1,

                color: '#ffffff',
              }

            },

          }







        }}

        />
    </div>

  )

}


export default LineChart