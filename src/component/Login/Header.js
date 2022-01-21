import React from 'react';
import logo from '../../Assets/AK_logo.svg';

function Header() {
    const title = 'Welcome Back';
    const subtitle='Please sign in to your account'
    return (
        <div>
            <img src={logo} />
            <div className={'title'+' '+'welcome'}>{title}</div>
            <div className={'subtitle'+' '+'login-subtitle'}>{subtitle}</div>
        </div>
    )
}

export default Header;