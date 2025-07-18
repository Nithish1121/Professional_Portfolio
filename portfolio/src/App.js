import './App.css';
import Navbar from './Components/navbar';
import Home from './Components/home';
import About from'./Components/about';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
