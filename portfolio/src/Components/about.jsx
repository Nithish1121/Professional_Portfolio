import "../Stylings/about.css";

const About=()=>{
    return (
        <div className="aboutContainer">
            <div className="about1">
                <p className="big" id="about_big">About</p>
                <p className="small">About Me</p>
            </div>
        
            <div className="card1" >
                <div className="card1-body">
                    <h4 className="card1-title">Who am I ? </h4>
                    <p className="card1-text">Results-driven Full Stack Developer adept at building scalable, high-performance applications and applying technical expertise to real-world challenges. Strong collaboration and communication skills enable seamless teamwork and efficient problem-solving. Proactive, adaptable, and committed to continuous learning, innovation, and delivering value-driven solutions.</p>
                    <h6 className="card1-subtitle">- Code is my craft. Impact is my metric.</h6>
                </div>
                <div className="card2-body">
                    <h5 className="card2-title">My toolbox &lt; / &gt;</h5>
                    <div className="tools">
                        <p className="skill"><span className="bullet">✧</span> Frontend</p>
                        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" id="pro1">
                            <div className="progress-bar progress-bar-striped progress-bar-animated custom-progress-bar " style={{width: "50%"}} >50%</div>
                        </div> 
                    </div>
                    <div className="tools">
                        <p className="skill"><span className="bullet">✧</span> Backend</p>
                        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" id="pro2">
                            <div className="progress-bar progress-bar-striped progress-bar-animated custom-progress-bar " style={{width: "50%"}} >50%</div>
                        </div> 
                    </div>
                    <div className="tools">
                        <p className="skill"><span className="bullet">✧</span> Full-Stack</p>
                        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" id="pro3">
                            <div className="progress-bar progress-bar-striped progress-bar-animated custom-progress-bar " style={{width: "50%"}} >50%</div>
                        </div> 
                    </div>
                    <div className="tools">
                        <p className="skill"><span className="bullet">✧</span> Data Analytics</p>
                        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" id="pro4">
                            <div className="progress-bar progress-bar-striped progress-bar-animated custom-progress-bar " style={{width: "50%"}} >50%</div>
                        </div> 
                    </div>
                    <div className="Subtools">
                    <p className="tool" id="tool1">Java Script</p>
                    <p className="tool">React</p>
                    <p className="tool">HTML/CSS</p>
                    <p className="tool">Bootstrap</p>
                    <p className="tool">Git</p>
                    </div>
                    <div className="Subtools">
                    <p className="tool">Java</p>
                    <p className="tool">Springboot</p>
                    <p className="tool">Power BI</p>
                    <p className="tool">Python</p>
                    <p className="tool">SQL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;