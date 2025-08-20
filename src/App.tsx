import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Corporate from './pages/Corporate';
import RealEstateProjects from './pages/RealEstateProjects';
import AviationProjects from './pages/AviationProjects';
import News from './pages/News';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kurumsal" element={<Corporate />} />
            <Route path="/projeler/gayrimenkul" element={<RealEstateProjects />} />
            <Route path="/projeler/havacilik" element={<AviationProjects />} />
            <Route path="/duyurular" element={<News />} />
            <Route path="/iletisim" element={<Contact />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;