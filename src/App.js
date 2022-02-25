import React, { useEffect, useState } from "react";
import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import Category from './pages/Category';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Recipe from './pages/Recipe';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
           {/* <Route path="/about" element={<About />} /> */}
        {/* { categories.map((category)=>(<Route path={category} key={category} element={<Category />} />))}  */}
        <Route path="/:category"  element={<Category />}/>
        <Route path="/:category/:id" element={<Recipe />} />
     

        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;