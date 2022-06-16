import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NewPost from './pages/NewPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/about" element={ <About /> } />
        <Route exact path="/new-post" element={ <NewPost /> } />
      </Routes>
    </Router>
  );
}

export default App;
