import React from 'react';
import { Row, Col } from 'antd';
import './Mobile.css';
import ImgMobile from './ImgMobile';
import FaqItens from './FaqItens';

function Mobile () {
    return(
        <Row>       
            <Col span={2}/>
            <Col span={20}>
                <ImgMobile/>
                <Row className="card">
                    <FaqItens/>
                </Row>
            </Col>
            <Col span={2}/>
        
        </Row>
    );
}

export default Mobile;