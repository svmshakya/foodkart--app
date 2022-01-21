import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ButtonCommon from '../Shared/ButtonCommon';
import HeaderVerify from './HeaderVerify';
import Otp from './Otp';
import './Verify.scss';
function Verify() {
    const [error, setError] = useState('');
    const [otp, setOtp] = useState();
    const history = useHistory();
    const handleVerify = () => {
        if (localStorage.getItem('otp') === otp) {
            history.push('./welcome')
        }
        else {
            setError('Invalid OTP');
        }
    }
    const handleOTPchange = (e) => {
        e.preventDefault();
        if (e.target.value) {
            setOtp(e.target.value);
            setError('');
        }

    }
    return (
        <div className='main-verify'>
            <HeaderVerify></HeaderVerify>
            <Otp handleOTPchange={handleOTPchange} error={error}></Otp>
            <ButtonCommon handleSubmit={handleVerify} buttonText="verify" error={error}></ButtonCommon>
        </div>
    )
}

export default Verify;