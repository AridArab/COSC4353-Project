import NavBar from './NavBar.jsx';
import ImageContainer from './components/QuoteForm/ImageContainer.jsx';
import QuoteFormContainer from './components/QuoteForm/QuoteFormContainer.jsx';
import QuoteBodyContainer from './components/QuoteForm/QuoteBodyContainer.jsx';
import Footer from './components/general/Footer.jsx'

function FuelQuote() {

  return(
    <>
      <NavBar/>
      <ImageContainer/>
      <QuoteBodyContainer/>
      <QuoteFormContainer/>
      <Footer/>
    </>
  );
}

export default FuelQuote