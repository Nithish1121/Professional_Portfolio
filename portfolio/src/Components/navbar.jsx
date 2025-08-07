import "../Stylings/navbar.css";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <div className="bran">
          <ScrollLink className="no-underline" to="home" smooth={true} duration={10}  >
            <h3 className="name">
              <span className="symbol">&lt; / &gt;</span> Nithish Kumar R
            </h3>
          </ScrollLink>
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
              <ScrollLink className="nav-link" to="about" smooth={true} duration={500}>
                About
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="experience" smooth={true} duration={500}>
                Experience
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="project" smooth={true} duration={500}>
                Projects
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="certificate" smooth={true} duration={500}>
                Certificates
              </ScrollLink>
            </li>
            <li className="nav-item" id="lastoption">
              <ScrollLink className="nav-link" to="contact" smooth={true} duration={500}>
                Contacts
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


