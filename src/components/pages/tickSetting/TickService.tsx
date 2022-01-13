import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../state';
import ButtonImport from '../../buttons/ButtonImport';
import Search from '../../search/Search';
import TableSetting from '../../tableSetting/TableSetting';
import Title from '../../title/Title';
import { data } from './data';
const TickService: React.FC = () => {
    const [state, setState] = useState({
        textSearch: '2022',
        dataFilter: {},
        dataTable: data,
    });
    //===============================
    const dispatch = useDispatch();
    const { modalSettingOpen } = bindActionCreators(actionCreators, dispatch);
    return (
        <div id="tick-service" className="page-content">
            <Title children={'Danh sách vé'} />

            <Row className="tick-service-header" justify="space-between">
                <Col span={8}>
                    <Search
                        children={'Tìm bằng số vé'}
                        background={'#F7F7F8'}
                    />
                </Col>
                <Col>
                    <div className="tick-service-buttons">
                        <ButtonImport />
                        <button
                            className="btn-primary"
                            onClick={modalSettingOpen}
                        >
                            Thêm gói vé
                        </button>
                    </div>
                </Col>
            </Row>
            <Row>
                <TableSetting data={state.dataTable} />
            </Row>
        </div>
    );
};

export default TickService;
