import { Col, Row } from 'antd';
import React from 'react';
import HeaderMessage from './HeaderMessage';
import HeaderNotification from './HeaderNotification';
import HeaderSearch from './HeaderSearch';
import HeaderUser from './HeaderUser';

const Header: React.FC = () => {
    return (
        <div id="header">
            <Row>
                <Col flex="470px">
                    <HeaderSearch />
                </Col>
                <Col flex="auto">
                    <div className="header-right">
                        <div className="header-right-item">
                            <HeaderMessage />
                        </div>
                        <div className="header-right-item">
                            <HeaderNotification />
                        </div>
                        <div className="header-right-item">
                            <HeaderUser />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Header;
