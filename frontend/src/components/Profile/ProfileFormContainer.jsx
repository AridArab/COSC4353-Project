import StateSelectorDropdown from './StateSelectorDropdown.jsx';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function ProfileFormContainer(){
  const [stateDict, setStateDict] = useState({
    "AL": { name: "Alabama", selected: false },
    "AK": { name: "Alaska", selected: false },
    "AZ": { name: "Arizona", selected: false },
    "AR": { name: "Arkansas", selected: false },
    "CA": { name: "California", selected: false },
    "CO": { name: "Colorado", selected: false },
    "CT": { name: "Connecticut", selected: false },
    "DE": { name: "Delaware", selected: false },
    "DC": { name: "District of Columbia", selected: false },
    "FL": { name: "Florida", selected: false },
    "GA": { name: "Georgia", selected: false },
    "HI": { name: "Hawaii", selected: false },
    "ID": { name: "Idaho", selected: false },
    "IL": { name: "Illinois", selected: false },
    "IN": { name: "Indiana", selected: false },
    "IA": { name: "Iowa", selected: false },
    "KS": { name: "Kansas", selected: false },
    "KY": { name: "Kentucky", selected: false },
    "LA": { name: "Louisiana", selected: false },
    "ME": { name: "Maine", selected: false },
    "MD": { name: "Maryland", selected: false },
    "MA": { name: "Massachusetts", selected: false },
    "MI": { name: "Michigan", selected: false },
    "MN": { name: "Minnesota", selected: false },
    "MS": { name: "Mississippi", selected: false },
    "MO": { name: "Missouri", selected: false },
    "MT": { name: "Montana", selected: false },
    "NE": { name: "Nebraska", selected: false },
    "NV": { name: "Nevada", selected: false },
    "NH": { name: "New Hampshire", selected: false },
    "NJ": { name: "New Jersey", selected: false },
    "NM": { name: "New Mexico", selected: false },
    "NY": { name: "New York", selected: false },
    "NC": { name: "North Carolina", selected: false },
    "ND": { name: "North Dakota", selected: false },
    "OH": { name: "Ohio", selected: false },
    "OK": { name: "Oklahoma", selected: false },
    "OR": { name: "Oregon", selected: false },
    "PA": { name: "Pennsylvania", selected: false },
    "RI": { name: "Rhode Island", selected: false },
    "SC": { name: "South Carolina", selected: false },
    "SD": { name: "South Dakota", selected: false },
    "TN": { name: "Tennessee", selected: false },
    "TX": { name: "Texas", selected: false },
    "UT": { name: "Utah", selected: false },
    "VT": { name: "Vermont", selected: false },
    "VA": { name: "Virginia", selected: false },
    "WA": { name: "Washington", selected: false },
    "WV": { name: "West Virginia", selected: false },
    "WI": { name: "Wisconsin", selected: false },
    "WY": { name: "Wyoming", selected: false }
  });
 
  const [dataFetched, setDataFetched] = useState(false);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
  });
  
  const fetchData = async() => {
    try{
      const response = await Axios.get('http://localhost:8000/api/user/me/profile');
      const data = response.data;
      if (data){

        setFormData({
          fname: data.fname,
          lname: data.lname,
          address1: data.address1,
          address2: data.address2,
          city: data.city,
          state: data.state,
          zipcode: data.zipcode,
        });
        setDataFetched(true);
        const updatedStateDict = {...stateDict};
        updatedStateDict[data.state].selected = true;
        setStateDict(updatedStateDict);
        //stateDict[data.state].selected=true;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  
  const handleUpdate = async (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    //console.log(event.target.name, event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      if (!dataFetched){
        const response = await Axios.post('http://localhost:8000/api/user/me/profile/create', formData);
        console.log('Form submitted successfully', response.data);
        // Add success handling code 
      }
      else{
        const response = await Axios.put('http://localhost:8000/api/user/me/profile/edit', formData);
        console.log('Form submitted successfully', response.data);
      }
    } catch (error) {
      console.error('Form submission error', error);
      // Add error handling code 
    }
  };


  return(
    <div className="profile-form-container">
      <p className="profile-form-title">Profile Management</p>
      <p className="profile-form-instructions">Please fill form below</p>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="profile-field-container">
          <p className="profile-field-label">First Name</p>
          <input type="text" id="fname" name="fname" className="profile-field" placeholder="John" value={formData.fname} onChange={handleUpdate}/>
        </div>

        <div className="profile-field-container">
          <p className="profile-field-label">Last Name</p>
          <input type="text" id="lname" name="lname" className="profile-field" placeholder="Doe" value={formData.lname} onChange={handleUpdate}/>
        </div>

        <div className="profile-field-container">
          <p className="profile-field-label">Address 1</p>
          <input type="text" id="address1" name="address1" className="profile-field" placeholder="3551 Cullen Blvd" value={formData.address1} onChange={handleUpdate}/>
        </div>
        <div className="profile-field-container">
          <p className="profile-field-label">Address 2</p>
          <input type="text" id="address2" name="address2" className="profile-field" placeholder="533" value={formData.address2} onChange={handleUpdate}/>
        </div>

        <div className="profile-field-container">
          <p className="profile-field-label">City</p>
          <input type="text" id="city" name="city" className="profile-field" placeholder="Houston" value={formData.city} onChange={handleUpdate}/>
        </div>

        <div className="profile-field-container">
          <p className="profile-field-label">State</p>
          <StateSelectorDropdown className="profile-field" states={stateDict} defaultValue={formData.state} onChange={handleUpdate}/>
        </div>

        <div className="profile-field-container">
          <p className="profile-field-label">ZIP Code</p>
          <input type="text" id="zipcode" name="zipcode" className="profile-field" placeholder="77004" value={formData.zipcode} onChange={handleUpdate}/>
        </div>
      
        <button type="submit" className="profile-submit-button">
          {dataFetched ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
}

export default ProfileFormContainer;
