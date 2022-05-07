import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Books from './AllBooks';
import Categories from './Categories';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/allBooks" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
