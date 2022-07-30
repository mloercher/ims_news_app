
import './App.css';
import Header from './components/Header';
// import React, { createContext, useEffect, useState } from 'react';
// import axios from 'axios';
import { NewsContextProvider } from "./NewsContext"
import Feed from './components/Feed'

function App() {
  return (
    <NewsContextProvider>
      <div className='header-cont'>
      <Header />
      </div>
      <div className='app-container'> 
       
        <Feed /> 
      </div>
    </NewsContextProvider>
  );
}

export default App;
