import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/nav_bar';

import Home from './pages/Home';
import Categories from './pages/Categories';

export default function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/Categories" element={<Categories />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}
