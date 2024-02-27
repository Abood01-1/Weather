"use client";
import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const TimeLine = ({ time }) => {
  let hour = [];
  let temp = [];

  time.map((ele) => {
    hour.push(ele?.dt_txt?.split(" ")[1].slice(0, -3));
    temp.push(+(ele.main.temp - 272.15).toFixed());
  });

  return (
    <section className='col-span-4 max-[850px]:w-full row-span-2 details px-6 py-3 '>
      <Line
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: "#ffffff",
                font: {
                  size: 14,
                },
              },
            },
          },
          scales: {
            y: {
              ticks: {
                color: "#ffffff88",
                stepSize: 1,
                beginAtZero: true,
              },
            },
            x: {
              ticks: {
                color: "#ffffff88",
                stepSize: 2,
                beginAtZero: true,
              },
            },
          },
        }}
        data={{
          labels: hour,
          datasets: [
            {
              label: "Hour By Hour Temperature",
              data: temp,
              fill: true,
              backgroundColor: "#22d3ee33",
              borderColor: "#22d3ee55",
              pointBackgroundColor: "white",
              tension: 0.5,
              hoverBackgroundColor: "#333",
            },
          ],
        }}
      />
    </section>
  );
};

export default TimeLine;
