import React from 'react';
import logo from '../../Assets/Artboard 1.svg';

function HeaderWelcome() {
    const title = 'Welcome to AdmitKard';
    const subtitle = 'In order to provide you with a custom experience,we need to ask you a few questions.'
    return (
        <div>
            <div style={{ marginLeft: '170px' }}><img src={logo} /></div>
            <div className={'title' + ' ' + 'welcomePage'}>{title}</div>
            <div className={'subtitle' + ' ' + 'welcome-subtitle'}>{subtitle}</div>
        </div>
    )
}

export default HeaderWelcome;