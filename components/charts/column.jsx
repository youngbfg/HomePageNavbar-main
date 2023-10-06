import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';


const Column = dynamic(() => import('@ant-design/plots').then(({ Column }) => Column),
    { ssr: false }
);
const LineChart = () => {

    
    const data = [
        // {
        //   name: 'London',
        //   月份: 'Jan.',
        //   月均降雨量: 18.9,
        // },
        // {
        //   name: 'London',
        //   月份: 'Feb.',
        //   月均降雨量: 28.8,
        // },
        // {
        //   name: 'London',
        //   月份: 'Mar.',
        //   月均降雨量: 39.3,
        // },
        // {
        //   name: 'London',
        //   月份: 'Apr.',
        //   月均降雨量: 81.4,
        // },
        // {
        //   name: 'London',
        //   月份: 'May',
        //   月均降雨量: 47,
        // },
        // {
        //   name: 'London',
        //   月份: 'Jun.',
        //   月均降雨量: 20.3,
        // },
        // {
        //   name: 'London',
        //   月份: 'Jul.',
        //   月均降雨量: 24,
        // },
        // {
        //   name: 'London',
        //   月份: 'Aug.',
        //   月均降雨量: 35.6,
        // },
        // {
        //   name: 'Berlin',
        //   月份: 'Jan.',
        //   月均降雨量: 12.4,
        // },
        // {
        //   name: 'Berlin',
        //   月份: 'Feb.',
        //   月均降雨量: 23.2,
        // },
        // {
        //   name: 'Berlin',
        //   月份: 'Mar.',
        //   月均降雨量: 34.5,
        // },
        // {
        //   name: 'Berlin',
        //   月份: 'Apr.',
        //   月均降雨量: 99.7,
        // },
        // {
        //   name: 'Berlin',
        //   月份: 'May',
        //   月均降雨量: 52.6,
        // },
        // {
        //   name: 'Berlin',
        //   月份: 'Jun.',
        //   月均降雨量: 35.5,
        // },
        // {
        //   name: 'Berlin',
        //   月份: 'Jul.',
        //   月均降雨量: 37.4,
        // },
        // {
        //   name: 'Berlin',
        //   月份: 'Aug.',
        //   月均降雨量: 42.4,
        // },

        
            {
              year: "1991",
              value: 3,
              type: "Lon"
            },
            {
                year: "1991",
                value: 5,
                type: "Bor"
              },
            {
              year: "1992",
              value: 4,
              type: "Lon"
            },
            {
              year: "1993",
              value: 3.5,
              type: "Lon"
            },
            {
              year: "1994",
              value: 5,
              type: "Lon"
            },
            {
              year: "1995",
              value: 4.9,
              type: "Lon"
            },
            {
              year: "1996",
              value: 6,
              type: "Bor"
            },
            {
              year: "1997",
              value: 7,
              type: "Bor"
            },
            {
              year: "1998",
              value: 9,
              type: "Bor"
            }
            
          
      ];

  const config = {
    data,
   
  
   
    isGroup: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',

      color: ['#1ca9e6', '#f88c24'],
    label: {
        position: 'middle',
      
    },
    layout: [
        // 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position',
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap',
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color',
        },
      ],
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'yellow',
        stroke: 'yellow',
        lineWidth: 3,
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 20,
          stroke: '#ffbe33',
          fill: 'red',
        },
      },
    },
    interactions: [
      {
        type: 'marker-active',
      },
    ],
  };
  return (
    <div>
        <Column {...config} />
    </div>
);

};

export default LineChart;