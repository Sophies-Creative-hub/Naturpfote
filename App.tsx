
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Anamnese from './pages/Anamnese';
import Booking from './pages/Booking';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onAction={setCurrentPage} />;
      case 'services': return <Services onAction={setCurrentPage} />;
      case 'about': return <About />;
      case 'blog': return <Blog />;
      case 'contact': return <Contact />;
      case 'pricing': return <Pricing onAction={setCurrentPage} />;
      case 'anamnese': return <Anamnese />;
      case 'booking': return <Booking />;
      default: return <Home onAction={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main className="flex-grow">
        <div className="transition-opacity duration-300">
          {renderPage()}
        </div>
      </main>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
