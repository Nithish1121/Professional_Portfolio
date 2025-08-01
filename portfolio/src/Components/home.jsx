import "../Stylings/home.css";
// import { ScrollLink } from "react-scroll";

const Home=()=>{
    return(
        <div className="home">
            <div className="profile"><img src="Images/profile_pic.jpg" className="img-thumbnail" alt="..."/></div>            
                <div className="about">
                    <h1 className="head">Hello world, I</h1>
                    <p className="para"> <span className="bullet">✧</span> <span className="heading">Was declared as:</span> Nithish Kumar R</p>
                    <p className="para"> <span className="bullet">✧</span> <span className="heading">Was declared on:</span> 11/02/2001</p>
                    <p className="para"> <span className="bullet">✧</span> <span className="heading">Is functioning as:</span> Software Developer</p>
                    <p className="para"> <span className="bullet">✧</span> <span className="heading">Is compiled to:</span> Shape concepts into interactive realities</p>
                <div className="welcome">
                    <p>Building the future with clean code, creativity, and a passion for innovation.<br/>Welcome to my personal dev workspace where ideas come to life.</p>
                    <a className="btn" id="bt1" href="#contact" role="button">Contact Me</a>
                    <a className="btn" id="bt2" href="#project" role="button">View my projects</a>
                </div>    
            </div>
        </div>
    )
}
export default Home;