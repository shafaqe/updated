import React, { useEffect, useState } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
} from 'firebase/auth';
import { Link } from 'react-router-dom';
import './Login.css';
import image from '../img/img.jpg';
import { initializeApp } from 'firebase/app';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      history.push('/dashboard');
    }
  }, []);

  const onLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem('token', userCredential._tokenResponse.idToken);
        history.push('/dashboard');
      })
      .catch((e) => alert(e.message));
  };

  //fb login
  const facebookprovider = new FacebookAuthProvider();
  function handleFacebookSignIn() {
    const auth = getAuth();
    signInWithPopup(auth, facebookprovider)
      .then((result) => {
        localStorage.setItem('token', result._tokenResponse.idToken);
        history.push('/dashboard');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(error.message);
      });
  }

  return (
    <div className='login-flex-container'>
      <div class='login-flex-child'>
        <div class='img-holder'>
          <img class='login-img' src={image} alt='image' />
        </div>
      </div>
      <div className='login-flex-child'>
        <form action=''>
          <div className='heading'>
            <h1>Login</h1>
          </div>

          <div className='signup-link'>
            <p>
              Don't have an account? <Link to='/signup'>Signup</Link>
            </p>
          </div>
          <div className='social-login'>
            <button
              className='facebook-login-btn'
              type='button'
              onClick={handleFacebookSignIn}
            >
              <span>
                <i className='fab fa-facebook-f'></i> Login via facebook
              </span>
            </button>
          </div>
          <div className='credentials'>
            <label className='block'>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name='email'
              type='email'
              id='inputEmail'
              className='cred-box'
              placeholder='Email Address'
              required
            />
          </div>
          <div className='credentials'>
            <label className='block'>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name='password'
              type='password'
              id='inputPassword'
              className='cred-box'
              placeholder='Password'
              required
            />
          </div>

          <div className='login-btn'>
            <button className='login-btn-btn' type='button' onClick={onLogin}>
              <span>
                Login our community
              </span>
            </button>
          </div>
          <div className='other-links'>
            <p>
              By joining you agree to the <a href=''>Terms </a> and
              <a href=''> Policy</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;