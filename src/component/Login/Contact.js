import React from 'react';
import TextField from '@material-ui/core/TextField';

function Contact({handleContactChange,error}) {
    const text = 'We will send you a one time SMS message.Charges may apply.'
    return (
        <>
        <div style={{
            paddingTop: '5px',
            paddingRight: '30px',
        }}>
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Enter Contact Number" onChange={(e)=>{handleContactChange(e)}} />
            </form>
            {error}
            
        </div>
        <div className={'subtitle'+' '+'login-subtitle'}>{text}</div>
        </>
    )
}

export default Contact;