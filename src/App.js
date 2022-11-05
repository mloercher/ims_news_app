
import './App.css';

// import React, { createContext, useEffect, useState } from 'react';
// import axios from 'axios';
import { NewsContextProvider } from "./NewsContext"
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
