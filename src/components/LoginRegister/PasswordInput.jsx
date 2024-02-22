// PasswordInput.js
import React from 'react';
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
import { faKey } from '@fontawesome/free-solid-svg-icons';

const PasswordInput = ({ placeholder }) => {
  <div className="input-field">
    <FontAwesomeIcon icon={faKey} />
    <input type="password" placeholder={placeholder} />
    <span className="icon-arrow">
      <FontAwesomeIcon icon={faArrowRight} />
    </span>
    <button type="submit" className="login-btn">
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  </div>
};

export default PasswordInput;
