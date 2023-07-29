import React from 'react';
import './App.css';
// import Navbar from './Navbar';
import Navbar1 from './Navbar1';
import Coins from './Coins';
import Exchange from './Exchange';
import Blog from './Blog';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';


function App() {

  return (
    <>
      <Navbar1/>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/coins' Component={Coins} />
        <Route path='/exchange' Component={Exchange} />
        <Route path='/blog' Component={Blog} />
      </Routes>
      {/* <Navbar1/> */}
    </>
  );
}

export default App;

