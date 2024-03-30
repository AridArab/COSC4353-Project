import React, { useState, useEffect } from 'react';
import Axios from 'axios';
const LoginRegisterForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  useEffect(() => {
    // This effect replaces the DOMContentLoaded listener
    // Any initialization logic can go here
  }, []);

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };
  const registerUser = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5173/user', {
        username,
        password 
      });
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('Registration error:', error.response.data);
    }
  };
  const loginUser = async (username, password) => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
  
    try {
      const response = await axios.post('http://localhost:5173/login', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      localStorage.setItem('token', response.data.access_token); // Store the token
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login error:', error.response.data);
    }
  };
  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('http://localhost:5173/user/me/', {
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log('Profile:', response.data);
    } catch (error) {
      console.error('Error fetching profile:', error.response.data);
    }
  };
  const updateUserPassword = async (newPassword) => {
    try {
      const response = await axios.put('http://localhost:5173/user/me/resetpassword', {
        password: newPassword, // Adjust accordingly
      }, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      console.log('Password updated:', response.data);
    } catch (error) {
      console.error('Error updating password:', error.response.data);
    }
  };
  
  return (
    <div className="container" style={{ display: 'block' }}>
      <div className="form-box">
        <h1 id="title">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
        <form>
          <div className="input-group">
            <div className="input-field">
              <i className="fa-solid fa-circle-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-key"></i>
              <input type="password" placeholder="Password" />
              {isSignUp && <span className="icon-arrow"><i className="fa-solid fa-arrow-right"></i></span>}
              <button type="submit" className="login-btn"><i className="fa-solid fa-arrow-right"></i></button>
            </div>
            {isSignUp && (
              <div className="input-field" id="confirmPasswordField">
                <i className="fa-solid fa-key"></i>
                <input type="password" placeholder="Confirm Password" />
                <span className="icon-arrow"><i className="fa-solid fa-arrow-right"></i></span> 
                <button type="submit" className="login-btn"><i className="fa-solid fa-arrow-right"></i></button>
              </div>
            )}
          </div>
          {!isSignUp && (
            <p id="forgotPasswordLink">Forgot Password? <a href="#">Click Here!</a></p>
          )}
          <div className="btn-field">
            <button type="button" id="signupBtn" onClick={handleSignUpClick} className={isSignUp ? 'disable' : ''}>New User</button>
            <button type="button" id="signinBtn" onClick={handleSignInClick} className={!isSignUp ? 'disable' : ''}>Returning Client</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginRegisterForm;