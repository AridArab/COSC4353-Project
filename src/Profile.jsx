import NavBar from './NavBar.jsx';
import { ProfileFormContainer } from './components/Profile'
import { Footer } from `./components/general`

function Profile(){
  return(
    <>
      <NavBar/>
      <ProfileFormContainer/>
      <Footer/>
    </>
  );
}

export default Profile;
