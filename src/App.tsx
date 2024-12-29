import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import WhyUs from './pages/WhyUs';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import JoinUs from './pages/JoinUs';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Resources from './pages/Resources';
import TiffinServices from './pages/TiifinServices';
import ContactUs from './pages/CoontactUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Canvas className="fixed top-0 left-0 w-full h-full -z-10">
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls />
            <AnimatedBackground />
          </Canvas>
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/tiffin-services" element={<TiffinServices />} />
              <Route path="/join-us" element={<JoinUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </div>
        </Suspense>
        <Footer/>
      </div>
    </Router>
  );
};

const AnimatedBackground: React.FC = () => {
  return (
    <mesh>
      <sphereGeometry args={[5, 32, 32]} />
      <meshStandardMaterial color="#4B5563" wireframe />
    </mesh>
  );
};

export default App;

