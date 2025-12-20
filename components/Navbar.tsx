
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Bestimme, ob die Navbar "solid" sein muss (entweder gescrollt, mobiles Menü offen oder auf einer Unterseite)
  const isHome = currentPage === 'home';
  const isSolid = isScrolled || isOpen || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY > 20 && isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const navLinks = [
    { id: 'home', label: 'Start' },
    { id: 'services', label: 'Leistungen' },
    { id: 'pricing', label: 'Preise' },
    { id: 'about', label: 'Über mich' },
    { id: 'blog', label: 'Magazin' },
    { id: 'contact', label: 'Kontakt' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isSolid 
          ? 'py-3 bg-white/95 backdrop-blur-xl shadow-md border-b border-stone-100' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group z-[110]" 
            onClick={() => handleNavClick('home')}
          >
            <span className={`text-2xl md:text-3xl font-serif font-bold tracking-tight transition-colors duration-300 ${
              isSolid ? 'text-stone-900' : 'text-white'
            }`}>
              Natur<span className={`${isSolid ? 'text-emerald-700' : 'text-emerald-400'} group-hover:text-emerald-500 transition-colors italic`}>pfote</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-semibold tracking-wide transition-all relative group py-2 ${
                  isSolid ? 'text-stone-600 hover:text-emerald-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 transform origin-left transition-transform duration-300 ${
                  currentPage === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('booking')}
              className={`${
                isSolid ? 'bg-emerald-700' : 'bg-emerald-600'
              } text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-emerald-500 transition-all shadow-md hover:shadow-emerald-200 hover:-translate-y-0.5 active:translate-y-0`}
            >
              Termin buchen
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center z-[110]">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 transition-colors ${isSolid ? 'text-stone-900' : 'text-white'}`}
              aria-label="Menü öffnen"
            >
              <div className="w-8 h-5 flex flex-col justify-between items-end">
                <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-8 rotate-45 translate-y-[9px]' : 'w-8'}`}></span>
                <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-6'}`}></span>
                <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-8 -rotate-45 -translate-y-[9px]' : 'w-4'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[120] transform transition-transform duration-500 ease-in-out md:hidden ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="h-full flex flex-col justify-center items-center p-10 space-y-8">
          {navLinks.map((link, idx) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-4xl font-serif font-bold transition-all duration-300 ${
                currentPage === link.id ? 'text-emerald-700 scale-110' : 'text-stone-800'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('booking')}
            className="w-full max-w-xs bg-emerald-700 text-white px-6 py-5 rounded-2xl text-xl font-bold shadow-lg"
          >
            Termin buchen
          </button>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-stone-400 font-bold uppercase tracking-widest text-sm"
          >
            Schließen
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
