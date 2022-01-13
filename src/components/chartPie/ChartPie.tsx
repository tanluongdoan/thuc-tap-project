import React, { useEffect, useRef, useState } from 'react';
const data = [
    {
        text: 'a',
        number: 10,
        color: '#0000ff',
    },
    {
        text: 'b',
        number: 20,
        color: 'violet',
    },
    {
        text: 'c',
        number: 60,
        color: 'red',
    },
];
const total = data.reduce(
    (accumulator: any, food: any) => accumulator + food.number,
    0
);
const ChartPie = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(
        null
    );

    function drawLine(
        ctx: any,
        startX: any,
        startY: any,
        endX: any,
        endY: any
    ) {
        ctx.beginPath();

        ctx.moveTo(startX, startY);

        ctx.lineTo(endX, endY);

        ctx.stroke();
    }
    function drawPieSlice(
        ctx: any,
        centerX: any,
        centerY: any,
        radius: any,
        startAngle: any,
        endAngle: any,
        color: any
    ) {
        ctx.fillStyle = color;

        ctx.beginPath();

        ctx.moveTo(centerX, centerY);

        ctx.arc(centerX, centerY, radius, startAngle, endAngle);

        ctx.closePath();

        ctx.fill();
    }
    useEffect(() => {
        if (canvasRef.current) {
            const renderCtx = canvasRef.current.getContext('2d');

            if (renderCtx) {
                setContext(renderCtx);
            }
        }
        if (context)
            if (context) {
                let lengthData = data.length;
                let startAngle = -Math.PI / 2;
                for (let i = 0; i < lengthData; i++) {
                    let d = data[i];
                    let color = d.color;

                    let endAngle = (2 * Math.PI * d.number) / total;
                    drawPieSlice(
                        context,
                        100,
                        100,
                        100,
                        startAngle,
                        endAngle + startAngle,
                        color
                    );
                    startAngle = endAngle + startAngle;
                }
                context.fillStyle = 'white'; // color of fill
                context.fillRect(10, 40, 140, 160);
            }
    }, [context]);

    return (
        <canvas
            id="myCanvas"
            ref={canvasRef}
            width={500}
            height={500}
            style={{
                border: '2px solid #000',
                marginTop: 10,
            }}
        ></canvas>
    );
};

export default ChartPie;
