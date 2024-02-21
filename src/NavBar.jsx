

function NavBar() {

    return(
        <div className="navbar">
            <a className="navbar-element" href="#">Home</a>
            <a className="navbar-element" href="#">Profile</a>
            <a className="navbar-element" href="#">Quote Form</a>
            <a className="navbar-element" href="#">Quote History</a>
            <input type="text" id="search" name="search" className="navbar-element" placeholder="Search"/>
            <button type="submit" id="search" className="navbar-element"><i className="fa fa-search"></i></button>
        </div>
    );
}

export default NavBar