import React from 'react';
import { TypeTinhTrang } from './config.type';
import TinhTrang from './TinhTrang';
interface typeColumn {
    title: string;
    dataIndex: string;
    key: string;
    render?: any;
}
export const columns: Array<typeColumn> = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
    },
    {
        title: 'Booking code',
        dataIndex: 'bookingCode',
        key: 'bookingCode',
    },
    {
        title: 'Số vé',
        dataIndex: 'soVe',
        key: 'soVe',
    },
    {
        title: 'Tên sự kiện',
        key: 'tenSuKien',
        dataIndex: 'tenSuKien',
    },
    {
        title: 'Tình trạng sử dụng',
        key: 'tinhTrang',
        dataIndex: 'tinhTrang',
        render: (text: TypeTinhTrang) => {
            switch (text) {
                case 'daSuDung':
                    return (
                        <TinhTrang class={'da-su-dung'} text={'Đã sử dụng'} />
                    );
                case 'chuaSuDung':
                    return (
                        <TinhTrang
                            class={'chua-su-dung'}
                            text={'Chưa sử dụng'}
                        />
                    );
                default:
                    return <TinhTrang class={'het-han'} text={'Hết hạn'} />;
            }
        },
    },
    {
        title: 'Ngày sử dụng',
        key: 'ngaySuDung',
        dataIndex: 'ngaySuDung',
    },
    {
        title: 'Ngày xuất vé',
        key: 'ngayXuatVe',
        dataIndex: 'ngayXuatVe',
    },
    {
        title: 'Cổng check-in',
        key: 'check',
        dataIndex: 'check',
    },
];
