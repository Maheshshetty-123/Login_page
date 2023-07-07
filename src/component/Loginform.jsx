import React from 'react';
import loginform from './loginform.css';

const Loginform = () => {
  return (
    <div>
    <div className="cover">
        <h1>LoginForm</h1>
        <input type="text" placeholder='username'/>
        <input type="password" placeholder='password'/>

        <div className='login-btn'> <button>Login</button></div>
        <p className='text'>Or login using</p>

        <div className='alt-login'>
            <div className='facebook'></div>
            <div className='google'></div>
        </div>
    </div>
    

    </div>
  )
}

export default Loginform