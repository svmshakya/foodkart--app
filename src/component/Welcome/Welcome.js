import React from 'react';
import ButtonCommon from '../Shared/ButtonCommon';
import HeaderWelcome from './HeaderWelcome';
import './Welcome.scss';

function Welcome(){
return(
    <div className='main-welcome'>
    <HeaderWelcome></HeaderWelcome>
    <ButtonCommon buttonText="Get Started" error=''></ButtonCommon>
</div>
)
}

export default Welcome;