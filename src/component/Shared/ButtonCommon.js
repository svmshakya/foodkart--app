import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            marginTop: '50px',
            marginRight: '60px'
        },
    },
    button: {
        background: '#F7B348',

    }
}));

function ButtonCommon({ handleSubmit, buttonText, error }) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button onClick={()=>{handleSubmit()}}className={classes.button} variant="contained" disabled={error !== ''}>
                {buttonText}
            </Button>
        </div>

    )
}

export default ButtonCommon;