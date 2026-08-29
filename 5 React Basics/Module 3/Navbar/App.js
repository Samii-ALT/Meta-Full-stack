import logo from './logo.svg';
import './App.css';
import Homepage from './HomePage';
import AboutMe from './AboutMe';
import { Routes, Route, Link } from 'react-router-dom';


function App() {
  return( <div className='Main'>
    <nav>
      <Link className='Nav' to="/Home">Home</Link>
      <Link className='Nav' to="/About">About</Link>
    </nav>
    <Routes>
    <Route path='/Home' element={<Homepage />} />
    <Route path='/About' element={<AboutMe />} />
    </Routes>
  </div>
  );
}

export default App;
