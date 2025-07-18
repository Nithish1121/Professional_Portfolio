import "../Stylings/navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="bran">
            <a href="home" className="no-underline">
                <h3 className="name"> <span className="symbol">&lt; / &gt;</span> Nithish Kumar R</h3>
            </a>
            <p className="role">- Software developer</p>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="project">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="certificate">
                Certificates
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
