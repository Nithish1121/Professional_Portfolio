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
import Navbar from './Components/navbar';
import Home from './Components/home';
import About from './Components/about';


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
      {/* Add other sections similarly */}
    </div>
  );
}

export default App;
