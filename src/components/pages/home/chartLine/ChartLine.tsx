import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartLine: React.FC = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: null,
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                backgroundColor: 'rgba(250, 160, 95, 0.09)',
                borderColor: '#FF993C',
                borderWidth: '4',
                pointBorderWidth: 0,
                pointStyle: 'null',
                spanGaps: false,
                pointHitRadius: 0,
            },
        ],
    };
    return (
        <div>
            <Line data={data} />
        </div>
    );
};

export default ChartLine;
