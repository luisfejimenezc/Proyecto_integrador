import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from './../pages/home';
import Tour from './../pages/tours';
import TourDetails from './../pages/toursdetails';
import Login from './../pages/login';
import Register from './../pages/register';
import SearchResultlist from './../pages/SearchResultsList';


const routers = () => {
  return (
    <Routes>
      <Route path= '/' element={<Navigate to "/home" />} />
      <Route path = '/home'  element ={<Home/>}/>
      <Route path = '/tours'  element ={<Tours/>}/>
      <Route path = '/tours/:id'  element ={<TourDetails/>}/>
      <Route path = '/login'  element ={<Login/>}/>
      <Route path = '/register'  element ={<Register/>}/>
      <Route path = '/tour/search'  element ={<SearchResultlist/>}/>
    </Routes>
  );
};

export default routers
