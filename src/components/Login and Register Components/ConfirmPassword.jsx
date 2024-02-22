// ConfirmPasswordInput.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';

const ConfirmPasswordInput = () => (
  <div className="input-field">
    <FontAwesomeIcon icon={faKey} />
    <input type="password" placeholder="Confirm Password" />
    <span className="icon-arrow">
      <FontAwesomeIcon icon={faArrowRight} />
    </span>
    <button type="submit" className="login-btn">
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  </div>
);

export default ConfirmPasswordInput;
