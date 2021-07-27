import { Col, Collapse, Row } from 'antd';
import React, { useState } from 'react';
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
  const [openItem, setOpenItem] = useState()
    return(
    <Row>
        <Row className='faqTitle'>
            <Col span={24}>FAQ</Col>
        </Row>

        <Row className='faqBody'>
            <Collapse className='faqBody--collapse' 
                      expandIconPosition="right" 
                      accordion bordered={false}
                      onChange={(arg)=>{
                        setOpenItem(arg)
                      }}
                      >
                <Panel className={openItem==='1'? 'faqBody--component active':'faqBody--component'} header="How many team members can I invite?" key="1">
                <p className='faqBody--componentItem'>{text1}</p>
                </Panel>
                <Panel className={openItem==='2'? 'faqBody--component active':'faqBody--component'} header="What is the maximum file upload size?" key="2">
                <p className='faqBody--componentItem'>{text2}</p>
                </Panel>
                <Panel className={openItem==='3'? 'faqBody--component active':'faqBody--component'} header="How do i reset my password?" key="3">
                <p className='faqBody--componentItem'>{text3}</p>
                </Panel>
                <Panel className={openItem==='4'? 'faqBody--component active':'faqBody--component'} header="Can I cancel my subscription?" key="4">
                <p className='faqBody--componentItem'>{text4}</p>
                </Panel>
                <Panel className={openItem==='5'? 'faqBody--component active':'faqBody--component'} header="Do you provide additional support?" key="5">
                <p className='faqBody--componentItem'>{text5}</p>
                </Panel>
            </Collapse>
        </Row>
    </Row>
    );  
    }
    
    export default FaqItens;