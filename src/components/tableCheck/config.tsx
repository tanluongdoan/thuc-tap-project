import React from 'react';
import { TypeTinhTrang } from './config.type';
import TinhTrang from './TinhTrang';
interface typeColumn {
    title: string;
    dataIndex: string;
    key: string;
    render?: any;
    onFilter?: any;
    filters?: any;
    filteredValue?: any;
}
export const columns: Array<typeColumn> = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
    },
    {
        title: 'Số vé',
        dataIndex: 'soVe',
        key: 'soVe',
    },

    {
        title: 'Ngày sử dụng',
        key: 'ngaySuDung',
        dataIndex: 'ngaySuDung',
    },
    {
        title: 'Tên loại vé',
        key: 'tenVe',
        dataIndex: 'tenVe',
    },
    {
        title: 'Cổng check-in',
        key: 'check',
        dataIndex: 'check',
    },
    {
        title: '',
        key: 'doiSoat',
        dataIndex: 'doiSoat',
    },
];
