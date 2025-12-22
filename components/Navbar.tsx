import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300
          ${isSolid
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-stone-200'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-center py-3 md:py-5">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer group z-[110]"
              onClick={() => handleNavClick('home')}
            >
              <span
                className={`text-2xl md:text-3xl font-serif font-bold transition-colors ${
                  isSolid ? 'text-stone-900' : 'text-white'
                }`}
              >
                Natur
                <span
                  className={`italic transition-colors ${
                    isSolid ? 'text-emerald-700' : 'text-emerald-400'
                  }`}
                >
                  pfote
                </span>
              </span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-semibold relative py-2 transition-colors
                    ${isSolid ? 'text-stone-600 hover:text-emerald-700' : 'text-white/90 hover:text-white'}
                  `}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('booking')}
                className="bg-emerald-700 text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-emerald-600 transition"
              >
                Termin buchen
              </button>
            </nav>

            {/* Mobile Toggle */}
            <div className="md:hidden z-[110]">
              <button
                onClick={() => setIsOpen(prev => !prev)}
                className={`p-2 ${isSolid ? 'text-stone-900' : 'text-white'}`}
                aria-label="Menü öffnen"
              >
                <div className="w-8 h-5 flex flex-col justify-between items-end">
                  <span className={`h-0.5 bg-current transition-all ${isOpen ? 'w-8 rotate-45 translate-y-[9px]' : 'w-8'}`} />
                  <span className={`h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : 'w-6'}`} />
                  <span className={`h-0.5 bg-current transition-all ${isOpen ? 'w-8 -rotate-45 -translate-y-[9px]' : 'w-4'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ MOBILE MENU – EXISTIERT NUR WENN OFFEN */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-[120] md:hidden">
          <div className="h-full flex flex-col justify-center items-center p-10 space-y-8">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-4xl font-serif font-bold text-stone-800"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick('booking')}
              className="w-full max-w-xs bg-emerald-700 text-white px-6 py-5 rounded-2xl text-xl font-bold"
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
      )}
    </>
  );
};

export default Navbar;
