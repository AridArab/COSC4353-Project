// PasswordInput.js
//import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';

const PasswordInput = ({ placeholder }) => {
  <div className="input-field">
    <FontAwesomeIcon icon={faKey} />
    <input type="password" placeholder={placeholder} />
  </div>
};

export default PasswordInput;
