import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import ChartArea from '../../chartArea/ChartArea';
import ChartPie from '../../chartPie/ChartPie';
import DatePiker from '../../tickDatePiker';
import Title from '../../title/Title';

const Home: React.FC = () => {
    const [state, setState] = useState({
        day: {
            activeDate: 0,
            activeMonth: 0,
            activeYear: 0,
        },
    });
    useEffect(() => {
        const d = new Date();
        setState({
            ...state,
            day: {
                activeDate: d.getDate(),
                activeMonth: d.getMonth(),
                activeYear: d.getFullYear(),
            },
        });
    }, []);
    //==========================================
    const setDay = (date: any, month: any, year: any) => {
        setState({
            ...state,
            day: {
                activeDate: date,
                activeMonth: month,
                activeYear: year,
            },
        });
    };
    //=============================
    return (
        <div id="home" className="page-content">
            <Title children={'Thống kê'} />
            <Row justify="space-between" className="home-top">
                <Col>
                    <span className="text">Danh thu</span>
                </Col>
                <Col>
                    {' '}
                    <DatePiker
                        activeDate={state.day}
                        setActiveDate={setDay}
                        module={1}
                    />
                </Col>
            </Row>
            <div className="home-chart-area">
                <ChartArea />
                <div className="text">
                    <span className="sub-text">Tổng doanh thu theo tuần</span>
                    <div className="price">
                        <span className="number">525.145.000</span>
                        <span className="vnd">đồng</span>
                    </div>
                </div>
            </div>
            <div>
                <ChartPie />
            </div>
        </div>
    );
};

export default Home;
