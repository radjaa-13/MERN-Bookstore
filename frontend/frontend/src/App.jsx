
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './pages/Home';
import {Routes, Route } from 'react-router-dom';




function App() {
  return (
  <div  >
    
 <Header/> 
 <Routes>

 <Route path="/" element = {<Home/>} />
 
 </Routes>

  </div>
  );

}

export default App

