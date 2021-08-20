import React from 'react';
import './DesktopImg.css';
import DesktopIllustration from '../images/illustration-woman-online-desktop.svg'
import DesktopShadowIllustration from '../images/bg-pattern-desktop.svg'
import BoxIllustration from '../images/illustration-box-desktop.svg'



function DesktopImg() {
    return(
        <div>
            <div className='ilustrationFaqDesktop'>
                <img className='ilustrationDesktopImg' src={DesktopIllustration} alt=""/>
                <div className='ilustrationShadowFaqDesktop' >
                    <img className='ilustrationDesktopShadow' src={DesktopShadowIllustration} alt=""/>                    
                </div>
            </div>
            <img className='ilustrationDesktopBox' src={BoxIllustration} alt=""/>
        </div>
    )
}

export default DesktopImg;