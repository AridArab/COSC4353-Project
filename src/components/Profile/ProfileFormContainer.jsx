import StateSelectorDropdown from './StateSelectorDropdown.jsx';

function ProfileFormContainer(){
  return(
    <div class="profile-form-container">
      <p class="profile-form-title">Profile Management</p>
      <p class="profile-form-instructions">Please fill form below</p>
      <form class="profile-form">
        <div class="profile-field-container">
          <p class="profile-field-label">First Name</p>
          <input type="text" id="fname" name="fname" class="profile-field" placeholder="John"/>
        </div>

        <div class="profile-field-container">
          <p class="profile-field-label">Last Name</p>
          <input type="text" id="lname" name="lname" class="profile-field" placeholder="Doe"/>
        </div>

        <div class="profile-field-container">
          <p class="profile-field-label">Address 1</p>
          <input type="text" id="address1" name="address1" class="profile-field" placeholder="3551 Cullen Blvd"/>
        </div>
        <div class="profile-field-container">
          <p class="profile-field-label">Address 2</p>
          <input type="text" id="address2" name="address2" class="profile-field" placeholder="533"/>
        </div>

        <div class="profile-field-container">
          <p class="profile-field-label">City</p>
          <input type="text" id="city" name="city" class="profile-field" placeholder="Houston"/>
        </div>

        <div class="profile-field-container">
          <p class="profile-field-label">State</p>
          <StateSelectorDropdown class="profile-field"/>
        </div>

        <div class="profile-field-container">
          <p class="profile-field-label">ZIP Code</p>
          <input type="text" id="zipcode" name="zipcode" class="profile-field" placeholder="77004"/>
        </div>

        <input type="submit" class="profile-submit-button" value="Submit"/>
      </form>
    </div>
  );
}

export default ProfileFormContainer;
