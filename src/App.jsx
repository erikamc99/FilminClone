import './App.css';
import Footer from './components/footer/Footer';
import React from "react";
import Navbar from "./components/header/navbar/navbar";
import Content from './components/content/Content';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PaginaEnConstruccion from "./components/construction";
import { ModalProvider } from "./context/ModalContext";  
import Modal from "./components/content/modal/Modal"; 

const AppContent = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/construction" element={<PaginaEnConstruccion />} />
        <Route path="/" element={<Content />} />
      </Routes>
      <Footer />
      <Modal />
    </>
  );
};

function App() {
  return (
    <Router>
      <ModalProvider>
        <AppContent />
      </ModalProvider>
    </Router>
  );
}

export default App;