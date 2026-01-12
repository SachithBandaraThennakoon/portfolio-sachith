import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ServicesIndex from './pages/Services/index';
import AI from './pages/Services/AI';
import DataEngineering from './pages/Services/DataEngineering';
import BI from './pages/Services/BI';
import Automation from './pages/Services/Automation';
import Research from './pages/Services/Research';
import Robotics from './pages/Services/Robotics';
import AIConsultant from './pages/AIConsultant';


export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/services/ai" element={<AI />} />
        <Route path="/services/data-engineering" element={<DataEngineering />} />
        <Route path="/services/bi" element={<BI />} />
        <Route path="/services/automation" element={<Automation />} />
        <Route path="/services/research" element={<Research />} />
        <Route path="/services/robotics" element={<Robotics />} />

        <Route path="/products" element={<Products />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/ai-consultant" element={<AIConsultant />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </MainLayout>
  );
}
