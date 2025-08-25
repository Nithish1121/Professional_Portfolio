import "../Stylings/footer.css";

const Footer=()=>{
    return (
        <div className="Footercontainer">
            <p className="footText">© 2025 Nithish Kumar R. All rights reserved.</p>
            <div className="ico">
                {/* <p><i className="fas fa-map-marker-alt"></i></p> */}
                <p className="footico"><a href="http://linkedin.com/in/nithishkumar1121
                " className="no-underline"> <i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/Nithish1121" className="no-underline" id="giticon"><i className="fab fa-github"></i></a>
                </p>
                {/* <p className="footicon"><a href="https://github.com/Nithish1121" className="no-underline" id="giticon"><i className="fab fa-github"></i></a></p> */}
            </div>
        </div>

    )
}

export default Footer;

