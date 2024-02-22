import /*React,*/ { useState } from 'react';
import PasswordInput from './components/LoginRegister/PasswordInput'; // Password Input
import UsernameInput from './components/LoginRegister/Username'; // Import Username
import ConfirmPasswordInput from './components/LoginRegister/ConfirmPassword'; // Import the ConfirmPasswordInput

const LoginRegister = () => {
  const [isSignUp, /*setIsSignUp*/] = useState(true);

  return (
    <div className="container" style={{ display: 'block' }}>
      <div className="form-box">
        <h1 id="title">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
        <form>
          <div className="input-group">
            <UsernameInput /> {/*Use the UsernameInput component*/}
            <PasswordInput placeholder="Password" />
            {isSignUp && <ConfirmPasswordInput />} {/*Use the ConfirmPasswordInput component*/}
          </div>
          {!isSignUp && (
            <p id="forgotPasswordLink">Forgot Password? <a href="#">Click Here!</a></p>
          )}
          {/* Button fields remain unchanged */}
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
