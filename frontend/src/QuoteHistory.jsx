import NavBar from './NavBar.jsx';
import HistorySearch from './components/QuoteHistory/HistorySearch.jsx';
import HistoryTable from './components/QuoteHistory/HistoryTable.jsx';
import HistoryHeader from './components/QuoteHistory/HistoryHeader.jsx';
import RefineryImage from './components/QuoteHistory/RefineryImage.jsx';
import Footer from './components/general/Footer.jsx'

function QuoteHistory() {

  return(
    <>
      <NavBar/>
      <HistoryHeader/>
      <HistorySearch/>
      <HistoryTable/>
      <RefineryImage/>
      <Footer/>
    </>
  );
}

export default QuoteHistory
