
function NavBar() {
    return (
        <div className="navbar">
            <a className="navbar-element" href="/Home">Home</a>
            <a className="navbar-element" href="/Profile">Profile</a>
            <a className="navbar-element" href="/FuelQuote">Quote Form</a>
            <a className="navbar-element" href="/QuoteHistory">Quote History</a>
            <div className="navbar-search search-container">
                <input type="text" id="searchInput" className="navbar-search" name="search" placeholder="Search"/>
                <button type="submit" className="navbar-search"><i className="fa fa-search"></i></button>
            </div>
        </div>
    );
}

export default NavBar;