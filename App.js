import react from 'react';
import { Route, Links, Routes, Link } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About'
import UserProfile from './Components/UserProfile'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/user/:id" exact element={<UserProfile />} />
      </Routes>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/user/123">UserProfile</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
