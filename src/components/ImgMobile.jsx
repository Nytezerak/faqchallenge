import React from 'react';
import { Col, Row } from 'antd';
import './ImgMobile.css';
import ilustracaoMobile from '../images/illustration-woman-online-mobile.svg'
import ilustracaoSombra from '../images/bg-pattern-mobile.svg'

function ImgMobile () {
return(
    <Row className="rowIlustracao" align="middle">
        <Col className="ilustracaoFaq">
                <img className="ilustracao" src={ilustracaoMobile} alt="Garota vendo tela de FAQ"/>
                
            <Col className="sombraFaq">
                <img className="sombra" src={ilustracaoSombra} alt="Sombra da ilustração"/>
            </Col>
        </Col>
    </Row>
);  
}

export default ImgMobile;