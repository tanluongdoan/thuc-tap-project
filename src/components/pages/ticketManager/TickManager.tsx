import { Col, Row } from 'antd';
import React, { useState } from 'react';
import ButtonFilter from '../../buttons/ButtonFilter';
import ButtonImport from '../../buttons/ButtonImport';
import Search from '../../search/Search';
import TableManager from '../../tableManager/TableManager';
import Title from '../../title/Title';
import { data } from './data';
const TickManager = () => {
    const [state, setState] = useState({
        textSearch: '2022',
        dataFilter: {},
        dataTable: data,
    });
    //============================================
    // search
    //============================================
    const handleSearch = (e: string) => {
        let dt = [{}];
        if (e) {
            dt = data.filter(function (item: any) {
                return (
                    item.tenSuKien.toLowerCase().indexOf(e.toLowerCase()) !== -1
                );
            });
        }
        // setState({
        //     ...state,
        //     dataTable: dt,
        // });
        console.log(dt);
    };
    handleSearch('2022');
    return (
        <div id="tick-manager">
            <Title children={'  Danh sách vé'} />

            <Row className="tick-manager-header">
                <Col span={8}>
                    <Search
                        children={'Tìm bằng số vé'}
                        background={'#F7F7F8'}
                    />
                </Col>
                <Col span={8} offset={8}>
                    <div className="tick-manager-buttons">
                        <ButtonFilter />
                        <ButtonImport />
                    </div>
                </Col>
            </Row>
            <Row>
                <TableManager data={state.dataTable} />
            </Row>
        </div>
    );
};

export default TickManager;
