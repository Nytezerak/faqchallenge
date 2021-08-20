import React from 'react';
import { Col, Row } from 'antd';
import './ImgMobile.css';
import ilustracaoMobile from '../images/illustration-woman-online-mobile.svg'
import ilustracaoSombra from '../images/bg-pattern-mobile.svg'

function ImgMobile () {
return(
    <Row className="rowIlustracao" align="middle">
        <Col className="ilustracaoFaq">
                <img className="ilustracao" src={ilustracaoMobile} alt=""/>
                
            <Col className="sombraFaq">
                <img className="sombra" src={ilustracaoSombra} alt=""/>
            </Col>
        </Col>
    </Row>
);  
}

export default ImgMobile;