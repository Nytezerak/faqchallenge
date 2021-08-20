import { Row } from 'antd';
import React from 'react';
import './Desktop.css';
import DesktopBody from './DesktopBody';

function Desktop () {
    return(
        <Row id="desktopApp">
            <div className='sideGradient'/>
            <DesktopBody/>
        </Row>
    );
}

export default Desktop;