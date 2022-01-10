import { Input } from 'antd';
import React, { useEffect, useState } from 'react';
import IconCalendar from '../icons/IconCalendar';
import TickDatePiker from './TickDatePiker';
import { TypeDay } from './type';

const DatePiker = (props: any) => {
    const { activeDate, setActiveDate } = props;
    const [state, setState] = useState({
        date: 0,
        month: 0,
        year: 0,
        day: 0,
    });
    const [show, setShow] = useState(false);
    const { date, month, year } = state;
    const { activeDate: activeD, activeMonth, activeYear } = activeDate;

    useEffect(() => {
        let dt = new Date();
        setState({
            date: dt.getDate(),
            month: dt.getMonth(),
            year: dt.getFullYear(),
            day: dt.getDay(),
        });
    }, []);
    //======================================================
    //===================================================
    // sự kện nút button nhấn next hoặc prev
    const monthPrevNext = (boolean: boolean) => {
        const { month, year } = state;
        if (boolean) {
            setState({
                ...state,
                month: month + 1 > 11 ? 0 : month + 1,
                year: month + 1 > 11 ? year + 1 : year,
            });
        } else {
            setState({
                ...state,
                month: month - 1 < 0 ? 11 : month - 1,
                year: month - 1 < 0 ? year - 1 : year,
            });
        }
    };
    //===========================================================
    //===========================================================
    //===========================================================
    // băt sự kiên chọn ngày và xét lai ngày hiện tại
    const handleClick = (e: TypeDay) => {
        const { number, monthSate } = e;
        if (monthSate + month > 11) {
            setState({
                date: number,
                month: 0,
                year: year + 1,
                day: 0,
            });
            setActiveDate(number, 0, year + 1);
        }
        if (monthSate + month < 0) {
            setState({
                date: number,
                month: 11,
                year: year - 1,
                day: 0,
            });
            setActiveDate(number, 11, year - 1);
        }
        if (monthSate + month >= 0 && monthSate + month <= 11) {
            setState({
                date: number,
                month: month + monthSate,
                year: year,
                day: 0,
            });
            setActiveDate(number, month + monthSate, year);
        }

        setShow(false);
    };
    //=========================================================
    // hàm nút radio
    //====================================================
    const [valueRadio, setValueRadio] = useState(1);
    const onChange = (e: any) => {
        setValueRadio(e.target.value);
    };
    ///================================================
    ///================================================
    ///================================================

    return (
        <div className="date-piker">
            <Input
                value={`${activeD < 10 ? `0${activeD}` : activeD}/${
                    activeMonth + 1 < 10
                        ? `0${activeMonth + 1}`
                        : activeMonth + 1
                }/${activeYear}`}
            />

            <span onClick={() => setShow(!show)}>
                <IconCalendar />
            </span>
            <div className={show ? '' : 'd-none'}>
                <TickDatePiker
                    state={state}
                    active={activeDate}
                    monthPrevNext={monthPrevNext}
                    handleClick={handleClick}
                    onChange={onChange}
                    valueRadio={valueRadio}
                />
            </div>
        </div>
    );
};

export default DatePiker;
