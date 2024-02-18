import React from 'react';
import {Routes,Route} from 'react-router-dom';
import {Home } from '../Pages/Home.js';
import { About } from '../Pages/About.js';


export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </div>
  )
}
