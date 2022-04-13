import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import MyRoute from './config/MyRoute';
import Header from './components/Header/Header';

function App() {


  return (

    <div className="App">
      <Header />
     <MyRoute />
    </div>
  );
}

export default App;


