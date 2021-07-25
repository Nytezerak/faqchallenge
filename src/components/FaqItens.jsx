import { Col, Collapse, Row } from 'antd';
import React from 'react';
import './FaqItens.css'

const { Panel } = Collapse;

const text1 = `
  aaaaa
`;

const text2 = `
  bbbb
`;

const text3 = `
  cccc
`;

const text4 = `
  dddd
`;

const text5 = `
  ffff
`;

function FaqItens () {
    return(
    <Row>
        <Row className='faqTitle'>
            <Col span={24}>FAQ</Col>
        </Row>

        <Row className='faqBody'>
            <Collapse className='faqBody--collapse' 
                      expandIconPosition="right" 
                      accordion bordered={false}
                      
                      >
                <Panel className='faqBody--component' header="How many team members can I invite?" key="1">
                <p>{text1}</p>
                </Panel>
                <Panel header="What is the maximum file upload size?" key="2">
                <p>{text2}</p>
                </Panel>
                <Panel header="How do i reset my password?" key="3">
                <p>{text3}</p>
                </Panel>
                <Panel header="Can I cancel my subscription?" key="4">
                <p>{text4}</p>
                </Panel>
                <Panel header="Do you provide additional support?" key="5">
                <p>{text5}</p>
                </Panel>
            </Collapse>
        </Row>
    </Row>
    );  
    }
    
    export default FaqItens;