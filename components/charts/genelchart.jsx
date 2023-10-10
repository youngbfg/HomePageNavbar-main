import React, { useState, useEffect } from 'react';
const Mix = dynamic(() => import('@ant-design/plots').then(({ Mix }) => Mix),{ ssr: false }
);
import dynamic from 'next/dynamic';
import styles from "./genelchart.module.css";
import { DataView } from '@antv/data-set';

const DemoMix = () => {
  const data = [
    ['UTK', 51],
    ['UKOME', 67],
    ['İTK', 19],
  ];
  
  const yearData = [
    ['2010', 60],
    ['2011', 51],
    ['2012', 73],
    ['2013', 84],
    ['2014', 79],
    ['2015', 89],
  ];
  
  // çember konfigrasyonu
  const config = {
    height: 500,
    padding: 'auto',
    tooltip: {
    showMarkers: false,
    },
    views: [
      {
        data: data.map((d) => ({
          type: d[0],
          value: d[1],
        })),
        region: {
          start: {
            x: 0,
            y: 0,
          },
          end: {
            x: 0.5,
            y: 0.4,
          },
        },
        coordinate: {
          type: 'theta',
          cfg: {
            radius: 0.99,
          },
        },
        axes: {
          value: {
            title: {
              text: '',
            },
            grid: null,
            tickLine: null,
            line: false,
            ticks: false,
          },
        },
        geometries: [
          {
            type: 'interval',
            xField: '1',
            yField: 'value',
            colorField: 'type',
            mapping: {},
            adjust: {
              type: 'stack',
            },
          },
        ],
        interactions: [
          {
            type: 'element-active',
          },
          {
            type: 'association-highlight',
          },
        ],
      },

      // bar grafik-------------------------------------------
      {
        data: new DataView()
          .source(
            data.map((d) => ({
              type: d[0],
              ordered: d[1],
            })),
          )
          .transform({
            type: 'fold',
            fields: ['ordered'],
            key: 'gender',
            value: 'value',
          }).rows,
        region: {
          start: {
            x: 0.5,
            y: 0,
          },
          end: {
            x: 1,
            y: 0.45,
          },
        },
        coordinate: {
          cfg: {
            isTransposed: true,
          },
        },
        axes: {
          // value: true,
          value: true,
        },
        geometries: [
          {
            type: 'interval',
            xField: 'type',
            yField: 'value',
            colorField: '#003c84',
            mapping: {},
            adjust: {
              type: 'dodge',
              marginRatio: 0,
            },
          },
        ],
      },

      //sütun grafik -------------------------------------------------------------
      {


        data: new DataView()
        .source(
          yearData.map((d) => ({
            year: d[0],
            ordered: d[1],
          })),
        )
        .transform({
          type: 'fold',
          fields: ['ordered'],
          key: 'gender',
          value: 'value',
        }).rows,

      
        region: {
          start: {
            x: 0,
            y: 0.52,
          },
          end: {
            x: 0.98,
            y: 1,
          },
        },
        axes: {
          value: true,
        },
        meta: {
          ordered: {
            min: 40,
            max: 90,
          },
        },
        geometries: [
          {
            type: 'interval',
            xField: 'year',
            yField: 'value',
            mapping: {},
            colorField: '#003c84',
            adjust: {
              type: 'dodge',
              marginRatio: 0,
            },
          },

          // üst çizgi isteğe bağlı açılıp kapatılabilir------------------
          // // {
          //   type: 'line',
          //   xField: 'year',
          //   yField: 'ordered',
          //   colorField: '',
          //   mapping: {
          //     style: {
          //       lineWidth: 5.0,
                
          //     },
          //   },
          // },
        ],
      },
    ],
  };
  return(
    <div className={styles.general}>
        <Mix {...config} />
    </div>
  )
};

export default DemoMix;