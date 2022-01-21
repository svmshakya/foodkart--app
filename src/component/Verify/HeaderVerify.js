import React from 'react';
import logo from '../../Assets/undraw_confirmed_81ex.svg';

function HeaderVerify() {
    const title = 'Please verify Mobile number';
    const subtitle = 'An OTP is sent to +917896781234'
    return (
        <div>
            <div style={{ marginLeft: '75px' }}><img src={logo} /></div>
            <div className={'title' + ' ' + 'welcome'}>{title}</div>
            <div className={'subtitle' + ' ' + 'login-subtitle'}>{subtitle}</div>
        </div>
    )
}

export default HeaderVerify;