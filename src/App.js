import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import AddRestaurant from './pages/AddRestaurant';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/search">Buscar</Link></li>
          <li><Link to="/add">Nuevo Restaurante</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/add" element={<AddRestaurant />} />
      </Routes>
    </Router>
  );
}

export default App;