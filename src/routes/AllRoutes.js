import React from 'react';
import {Routes,Route} from 'react-router-dom';
import {Home } from '../Pages/Home.js';
import { About } from '../Pages/About.js';
import {Main} from '../Pages/Main.js';
import {Search} from "../Pages/Search.js";
import { Details } from '../Pages/Details.js';
import {PageNotFound} from "../Pages/PageNotFound.js";

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/main' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/search' element={<Search />} />
            <Route path='/detail' element={<Details />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </div>
  )
}
