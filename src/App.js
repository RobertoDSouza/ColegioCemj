import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from  './components/Pages/Home/home'
import Maternal from './components/Pages/Series/Maternal/Maternal'
import Fundamental1 from './components/Pages/Series/Fundamental1/Fundamental1';
import Fundamental2 from './components/Pages/Series/Fundamental2/Fundamental2';
import Hibrido from './components/Pages/Series/Hibrido/Hibrido';
import Noticias from './components/Pages/Noticias/Noticias';
import Contato from './components/Pages/Contato/Contato';
import QuemSomos from './components/Pages/QuemSomos/QuemSomo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/Maternal" element={<Maternal/>}/>
            <Route path="/Fundamental1" element={<Fundamental1/>}/>
            <Route path="/Fundamental2" element={<Fundamental2/>}/>
            <Route path="/Hibrido" element={<Hibrido/>}/>
            <Route path="/Noticias" element={<Noticias/>}/>  
            <Route path="/Contato" element={<Contato/>}/>
            <Route path="/QuemSomos" element={<QuemSomos/>}/>          
          </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
