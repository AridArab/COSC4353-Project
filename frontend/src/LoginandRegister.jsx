import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './authprovider/authProvider';

const LoginRegisterForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (isSignUp) {
      // Call registerUser function
      await registerUser(username, password);
    } else {
      // Call loginUser function
      await loginUser(username, password);
    }
    // Redirect logic after signup/login (e.g., to home page)
    navigate("/", { replace: true });// Example redirect to '/home' page
  };

  const registerUser = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:8000/api/user', {
        username,
        password
      });
      console.log('User registered:', response.data);
      // Redirect to home page or display a success message
    } catch (error) {
      console.error('Registration error:', error.response.data);
      // Handle registration error (e.g., display error message)
    }
  };

  const loginUser = async (user, pass) => {
    try {
      const formData = new FormData();
      formData.append('username', user);
      formData.append('password', pass);
      const response = await axios.post('http://localhost:8000/api/login', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setToken(response.data.access_token); // Store the token
      console.log('Login successful:', response.data);
      // Redirect to home page or display a success message
    } catch (error) {
      console.error('Login error:', error.response.data);
      // Handle login error (e.g., display error message)
    }
  };

  return (
    <div className="container" style={{ display: 'block' }}>
      <div className="form-box">
        <h1 id="title">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="input-group">
            <div className="input-field">
              <i className="fa-solid fa-circle-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-key"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {isSignUp && (
                <span className="icon-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              )}
            </div>
            {isSignUp && (
              <div className="input-field" id="confirmPasswordField">
                <i className="fa-solid fa-key"></i>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span className="icon-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            )}
          </div>
          {!isSignUp && (
            <p id="forgotPasswordLink">
              Forgot Password? <a href="#">Click Here!</a>
            </p>
          )}
          <div className="btn-field">
            <button
              type="button"
              id="signupBtn"
              onClick={handleSignUpClick}
              className={isSignUp ? 'disable' : ''}
            >
              New User
            </button>
            <button
              type="button"
              id="signinBtn"
              onClick={handleSignInClick}
              className={!isSignUp ? 'disable' : ''}
            >
              Returning Client
            </button>
          </div>
          <button type="submit" className="login-btn">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginRegisterForm;
