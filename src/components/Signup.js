import React, { useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  FacebookAuthProvider,
} from 'firebase/auth';
import { Link } from 'react-router-dom';
import './Signup.css';
import image from '../img/img.jpg';

const Signup = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
  });

  const handleFirstNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };

  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      history.push('/dashboard');
    }
  }, []);

  const onSignup = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(() => history.push('/'))
          .catch((e) => alert(e.message));
      })
      .catch((e) => alert(e.message));
  };

  //fb signup
  const facebookprovider = new FacebookAuthProvider();
  const auth = getAuth();
  function handleFacebookSignIn() {
    signInWithPopup(auth, facebookprovider)
      .then((result) => {
        localStorage.setItem('token', result._tokenResponse.idToken);
        history.push('/dashboard');
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div className='flex-container'>
      <div className='flex-child'>
        <div class='img-holder'>
          <img class='img' src={image} alt='image' />
        </div>
      </div>
      <div className='flex-child'>
        <form action=''>
          <div className='heading'>
            <h1>Sign-up</h1>
          </div>
          <div className='login-link'>
            <p>
              Already have an account? <Link to='/'>Login</Link>
            </p>
          </div>
          <div className='social-login'>
            <button
              className='facebook-signup-btn'
              type='button'
              onClick={handleFacebookSignIn}
            >
              <span>Join via facebook</span>
            </button>
          </div>
          <div class='name'>
            <div class='name-input'>
              <label for=''>First Name</label>
              <br />
              <input
                type='text'
                className='name-control'
                placeholder='First Name'
                name='name'
                value={values.firstName}
                onChange={handleFirstNameInputChange}
                required
              />
            </div>
            <div class='name-input'>
              <label for=''>Last Name</label>
              <input
                type='text'
                className='name-control'
                placeholder='Last Name'
                name='name'
                value={values.lastName}
                onChange={handleLastNameInputChange}
                required
              />
            </div>
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
          <div className='signup-btn'>
            <button className='signup-btn-btn' type='button' onClick={onSignup}>
              <span>Join our community</span>
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

export default Signup;
