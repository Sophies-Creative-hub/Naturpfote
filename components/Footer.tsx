
import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-serif text-white mb-6">Naturpfote</h3>
          <p className="max-w-md mb-6 leading-relaxed">
            Ihre Praxis für ganzheitliche Tiergesundheit. Wir kombinieren fundiertes Wissen der modernen Tiermedizin mit den bewährten Ansätzen der Naturheilkunde.
          </p>
          <div className="flex space-x-4">
            <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-emerald-700 cursor-pointer transition-colors">f</div>
            <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-emerald-700 cursor-pointer transition-colors">in</div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Navigation</h4>
          <ul className="space-y-4">
            <li><button onClick={() => onNavigate('services')} className="hover:text-emerald-400 transition-colors text-left w-full">Leistungen</button></li>
            <li><button onClick={() => onNavigate('blog')} className="hover:text-emerald-400 transition-colors text-left w-full">Wissen & Blog</button></li>
            <li><button onClick={() => onNavigate('about')} className="hover:text-emerald-400 transition-colors text-left w-full">Über mich</button></li>
            <li><button onClick={() => onNavigate('pricing')} className="hover:text-emerald-400 transition-colors text-left w-full">Preise</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Rechtliches</h4>
          <ul className="space-y-4">
            <li><button onClick={() => onNavigate('contact')} className="hover:text-emerald-400 transition-colors text-left w-full">Kontakt</button></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Impressum</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Datenschutz</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-stone-800 mt-16 pt-8 text-sm text-center">
        © {new Date().getFullYear()} Naturpfote - Tierheilpraxis Martina Schmidt. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
};

export default Footer;
