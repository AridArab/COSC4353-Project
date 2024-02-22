// UsernameInput.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const UsernameInput = () => (
  <div className="input-field">
    <FontAwesomeIcon icon={faCircleUser} />
    <input type="text" placeholder="Username" />
  </div>
);

export default UsernameInput;
