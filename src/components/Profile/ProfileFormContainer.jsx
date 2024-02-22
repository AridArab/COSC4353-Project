import StateSelectorDropdown from './StateSelectorDropdown.jsx';

function ProfileFormContainer(){
  return(
    <div className="profile-form-container">
      <p className="profile-form-title">Profile Management</p>
      <p className="profile-form-instructions">Please fill form below</p>
      <form className="profile-form">
        <div className="profile-field-container">
          <p className="profile-field-label">First Name</p>
          <input type="text" id="fname" name="fname" className="profile-field" placeholder="John"/>
        </div>

        <div className="profile-field-container">
          <p className="profile-field-label">Last Name</p>
          <input type="text" id="lname" name="lname" className="profile-field" placeholder="Doe"/>
        </div>

        <div className="profile-field-container">
          <p className="profile-field-label">Address 1</p>
          <input type="text" id="address1" name="address1" className="profile-field" placeholder="3551 Cullen Blvd"/>
        </div>
        <div className="profile-field-container">
          <p className="profile-field-label">Address 2</p>
          <input type="text" id="address2" name="address2" className="profile-field" placeholder="533"/>
        </div>

        <div className="profile-field-container">
          <p className="profile-field-label">City</p>
          <input type="text" id="city" name="city" className="profile-field" placeholder="Houston"/>
        </div>

        <div className="profile-field-container">
          <p className="profile-field-label">State</p>
          <StateSelectorDropdown className="profile-field"/>
        </div>

        <div className="profile-field-container">
          <p className="profile-field-label">ZIP Code</p>
          <input type="text" id="zipcode" name="zipcode" className="profile-field" placeholder="77004"/>
        </div>

        <input type="submit" className="profile-submit-button" value="Submit"/>
      </form>
    </div>
  );
}

export default ProfileFormContainer;
