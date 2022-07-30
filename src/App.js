
import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { NewsContextProvider } from "./NewsContext"
import Feed from './components/Feed'

function App() {
  return (
    <NewsContextProvider>
      <Feed />
      <div> HIIIII</div>
    </NewsContextProvider>
  );
}

export default App;
