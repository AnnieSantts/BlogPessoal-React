import React from 'react';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Grid} from '@material-ui/core';
import Home from './paginas/home/Home';
import './App.css';

function App() {
  return(
    <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
            <Routes> // Antigo Switch
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<CadastroUsuario />} />
            </Routes>
        </div>
        <Footer />
    </Router>
)
  
}

export default App;