import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    text: {
        width: 120,
        paddingLeft:5
    }
}));

function Otp({error,handleOTPchange}) {
    const classes = useStyles();
    const text = 'Didn’t receive the code? Resend'
    return (
        <>
            <div style={{
                paddingTop: '5px',
                paddingRight: '30px',
            }}>
                <form noValidate autoComplete="off">
                    <TextField onChange={handleOTPchange} className={classes.text} id="standard-basic" />
                </form>
                {error}
            </div>
            <div className={'subtitle' + ' ' + 'resend-subtitle'}>{text}</div>
        </>
    )
}

export default Otp;