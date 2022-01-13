import React from 'react';
import { TypeTinhTrang } from './config.type';
import TinhTrang from './TinhTrang';
import Update from './Update';
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
        title: 'Mã gói',
        dataIndex: 'maGoi',
        key: 'maGoi',
    },
    {
        title: 'Tên gói vé',
        dataIndex: 'tenGoiVe',
        key: 'tenGoiVe',
    },
    {
        title: 'Ngày áp dụng',
        key: 'ngayApDung',
        dataIndex: 'ngayApDung',
    },
    {
        title: 'Ngày hết hạn',
        key: 'ngayHetHan',
        dataIndex: 'ngayHetHan',
    },
    {
        title: 'Giá vé (VNĐ/Vé)',
        key: 'giaVe',
        dataIndex: 'giaVe',
    },
    {
        title: 'Giá Combo (VNĐ/Combo)',
        key: 'giaCombo',
        dataIndex: 'giaCombo',
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
                            text={'Đang áp dụng'}
                        />
                    );
                default:
                    return <TinhTrang class={'het-han'} text={'Tắt'} />;
            }
        },
    },
    {
        title: '',
        key: 'update',
        dataIndex: 'update',
        render: () => {
            return <Update />;
        },
    },
];
