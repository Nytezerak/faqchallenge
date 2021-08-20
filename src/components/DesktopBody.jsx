import { Col, Row } from 'antd';
import React from 'react';
import DesktopImg from './DesktopImg';
import FaqItens from './FaqItens';

function DesktopBody() {
    return(
        <Row className="bullseye" align="middle">
                <Col span={11}>
                    <DesktopImg/>
                </Col>
                <Col span={13}>
                    <FaqItens/>
                </Col>
        </Row>
    )
}

export default DesktopBody;