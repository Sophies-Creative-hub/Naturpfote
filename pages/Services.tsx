
import React from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onAction: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onAction }) => {
  return (
    <div className="bg-white pt-32 pb-24 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-serif text-stone-800 mb-6">Meine Leistungen</h1>
          <p className="text-lg text-stone-600 italic">
            "Gesundheit ist nicht die Abwesenheit von Krankheit, sondern die Harmonie zwischen Körper, Geist und Seele."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group p-10 bg-stone-50 rounded-3xl border border-stone-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4">{service.title}</h3>
              <p className="text-stone-600 mb-8 leading-relaxed h-24 overflow-hidden">
                {service.description}
              </p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-stone-200">
                <span className="text-emerald-700 font-bold">{service.price}</span>
                <button 
                  onClick={() => onAction('booking')}
                  className="text-stone-800 font-bold flex items-center hover:text-emerald-700 transition-colors"
                >
                  Buchen
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-emerald-700 rounded-[3rem] text-white text-center shadow-2xl">
          <h2 className="text-3xl font-serif mb-6">Nicht sicher, was Ihr Tier braucht?</h2>
          <p className="text-emerald-100 mb-10 max-w-2xl mx-auto">
            Nutzen Sie unsere kostenlose Online-Anamnese für eine erste Einschätzung oder kontaktieren Sie mich direkt für ein Beratungsgespräch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onAction('anamnese')}
              className="bg-white text-emerald-800 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all shadow-lg"
            >
              Online-Anamnese starten
            </button>
            <button 
              onClick={() => onAction('contact')}
              className="border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              Persönliche Anfrage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
