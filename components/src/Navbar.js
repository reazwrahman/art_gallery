
function NavBar() {
    return (
      <nav className="navbar">
        
        <ul className="menu">
          <li>
            <a href="index.html" className="dropdown-item">Paintings</a>
          </li>
        </ul>
      </nav>
    );
};

ReactDOM.render(<NavBar/>, document.getElementById('navbar'))