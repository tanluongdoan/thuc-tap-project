import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';
import { data } from './data';
const ChartArea = () => {
    const config = {
        data,
        xField: 'Date',
        yField: 'revenue',
        meta: {
            revenue: {
                min: 140,
                max: 260,
                formatter: (v: any) => `${v}tr`,
            },
        },
        xAxis: {
            range: [0, 1],
            tickCount: 6,
        },
        yAxis: {
            // range: [0, 1],
            tickCount: 3,
        },
        areaStyle: {
            fill: 'l(270) 0:#ffffff  1:#faa05f42',
        },
        line: {
            color: '#FF993C',
            size: 4,
        },
        smooth: true,
        theme: 'default',
    };
    return <Area {...config} />;
};

export default ChartArea;
