import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AllBooks from './Components/AllBooks';
import Categories from './Components/Categories';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/allBooks" element={<AllBooks />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
