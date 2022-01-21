import React, { useState } from 'react';
import './Login.scss';
import Contact from './Contact';
import Header from './Header';
import ButtonCommon from '../Shared/ButtonCommon';
import { useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();
    const [number, setNumber] = useState('');
    const [error, setError] = useState('');
    const handleContactChange = (e) => {
        if (e.target.value.length <= 10) {
            setNumber(e.target.value);
            setError('');
        } else {
            setError('Invalid Phone number');
        }
    };

    const handleSubmit = () => {
        localStorage.setItem('otp', 1234);
        history.push('./verify')

    };
    return (
        <div className='main-login'>
            <Header></Header>
            <Contact handleContactChange={handleContactChange} error={error}></Contact>
            <ButtonCommon handleSubmit={handleSubmit} buttonText="Sign In with OTP" error={error}></ButtonCommon>
        </div>
    )
}

export default Login;