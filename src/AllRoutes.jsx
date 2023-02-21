import React from 'react'

import {Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import {Results} from './Pages/Results';
import Dashboard from './Pages/Dashboard';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/quiz' element={<Quiz />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/result' element={<Results />}/>
        
    </Routes>
  )
}

export default AllRoutes