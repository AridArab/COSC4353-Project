import NavBar from './NavBar.jsx';
import HomeAnimationOne from './components/Home/HomeAnimationOne.jsx';
import HomeAnimationTwo from './components/Home/HomeAnimationTwo.jsx';
import ButtonToPage from './components/Home/ButtonToPage.jsx'


function Home() {

    return(
        <>
            <NavBar/>
            <HomeAnimationOne/>
            <HomeAnimationTwo/>
            <ButtonToPage buttonid="button-1" linkid="button-1" hyperlink="/Profile" text="Profile"/>
            <ButtonToPage buttonid="button-2" linkid="button-2" hyperlink="/QuoteForm" text="Quote Form"/>
            <ButtonToPage buttonid="button-3" linkid="button-3" hyperlink="/QuoteHistory" text="Quote History"/>
        </>
    );
}

export default Home