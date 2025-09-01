import "../Stylings/navbar.css";
import { Link as ScrollLink } from "react-scroll";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.getElementById("navbarNav");
    const navbar = document.querySelector(".navbar");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        // Collapse the navbar
        const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      });
    });

    // Toggle class on navbar when menu is shown/hidden
    navbarCollapse.addEventListener("shown.bs.collapse", () => {
      navbar.classList.add("menu-open");
    });

    navbarCollapse.addEventListener("hidden.bs.collapse", () => {
      navbar.classList.remove("menu-open");
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <div className="bran">
          <ScrollLink className="no-underline" to="home" smooth={true} duration={10}>
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
            {["about", "experience", "project", "certificate", "contact"].map((section, index) => (
              <li className="nav-item" key={index} id={section === "contact" ? "lastoption" : ""}>
                <ScrollLink className="nav-link" to={section} smooth={true} duration={500}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;