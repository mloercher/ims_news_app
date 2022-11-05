
import './App.css';
import Header from './components/Header';
// import React, { createContext, useEffect, useState } from 'react';
// import axios from 'axios';
import { NewsContextProvider } from "./NewsContext"
import Feed from './components/Feed'
import Handler from './components/Handler';




function App() {

  return (
    <NewsContextProvider>
      <div className='main-container'>
      <Handler />
      </div>
    </NewsContextProvider>
  );
}

export default App;
