import React, { useState, useEffect } from 'react';
import './style.css';

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
=======
import React, { useState, useEffect } from 'react';
import './style.css';

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
