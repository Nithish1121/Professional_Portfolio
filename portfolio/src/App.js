// import './App.css';
// import Navbar from './Components/navbar';
// import Home from './Components/home';
// import About from'./Components/about';

// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <Home/>
//       <About/>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/navbar';
// import Home from './Components/home';
// import About from './Components/about';

// function App() {
//   return (
    
//     <Router>
//       <div className="App">
//         <Navbar/>
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Components/navbar';
import Home from './Components/home';
import About from './Components/about';
import Experience from './Components/experience';
import Projects from './Components/project';
// import Contact from './Components/contact';
import Certificate from './Components/certificate';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="project">
        <Projects />
      </div>
      <div id="certificate">
        <Certificate/>
      </div>
      {/* <div id="contact">
        <Contact />
      </div> */}
    </div>
  );
}

export default App;
