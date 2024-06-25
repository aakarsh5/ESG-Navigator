import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginsignup.css';
import emailIcon from '../assets/email3.jpg';
import passwordIcon from '../assets/password1.jpg';
import userIcon from '../assets/user.jpg';

const LoginSignup = () => {
  const [action, setAction] = useState('sign up'); // Initial state should be 'sign up'

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={userIcon} alt="User Icon" className="icon" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input">
          <img src={emailIcon} alt="Email Icon" className="icon" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={passwordIcon} alt="Password Icon" className="icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgotpassword">
        Lost Password? <span>Click here!</span>
      </div>
      <div className="submitcontainer">
        <Link to="/navbar">
          <div className={action === 'login' ? "submit gray" : 'submit'} onClick={() => setAction('sign up')}>
            Sign up
          </div>
        </Link>
        <div className={action === 'sign up' ? "submit gray" : 'submit'} onClick={() => setAction('login')}>
          Login
        </div> 
      </div>
    </div>
  );
}

export default LoginSignup;
