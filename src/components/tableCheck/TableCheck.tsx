import { Table } from 'antd';
import React from 'react';
import { columns } from './config';
import IconPrev from '../icons/IconPrev';
import IconNext from '../icons/IconNext';

const TableCheck = (props: any) => {
    function itemRender(current: number, type: string, originalElement: any) {
        if (type === 'prev') {
            return (
                <button>
                    <IconPrev />
                </button>
            );
        }
        if (type === 'next') {
            return (
                <button>
                    <IconNext />
                </button>
            );
        }
        return originalElement;
    }
    return (
        <div className="box-table">
            <Table
                columns={columns}
                dataSource={props.data}
                rowClassName={'helo'}
                loading={false}
                pagination={{
                    position: ['bottomCenter'],
                    itemRender: itemRender,
                }}
            />
        </div>
    );
};

export default TableCheck;
