import NavBar from './NavBar.jsx';
import Footer from './components/general/Footer.jsx';

function NotFound(){
  return(
    <>
      <NavBar/>
      <div className="not-found">
        <h1>That page was not found.</h1>
      </div>
      <Footer/>
    </>
  );
}

export default NotFound;
