
import React from 'react';

interface PricingProps {
  onAction: (page: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onAction }) => {
  const categories = [
    {
      name: 'Beratungspakete',
      items: [
        { name: 'Basis-Ernährungsplan (Gesund)', price: '85 €', desc: 'Individueller Plan inkl. Bedarfsberechnung' },
        { name: 'Komplexe Ernährungsberatung (Krankheit)', price: '125 €', desc: 'Z.B. Niereninsuffizienz, Allergien, Pankreatitis' },
        { name: 'Erstgespräch & Anamnese (Homöopathie)', price: '95 €', desc: 'Ca. 60-90 Min intensive Aufnahme' },
      ]
    },
    {
      name: 'Einzelbehandlungen',
      items: [
        { name: 'Bachblüten-Mischung (Erstellung)', price: '35 €', desc: 'Exkl. Tropfen aus der Apotheke' },
        { name: 'Heilpilzberatung (Einzeln)', price: '50 €', desc: 'Spezifisch auf ein Krankheitsbild' },
        { name: 'Folgetermin / Kurzberatung', price: '45 €', desc: 'Max. 30 Minuten' },
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-stone-50 min-h-screen animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-serif text-center mb-16 text-stone-800">Transparente Honorare</h1>
        
        <div className="space-y-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-10 shadow-sm border border-stone-100">
              <h2 className="text-2xl font-bold text-emerald-800 mb-8 border-b border-stone-100 pb-4">{cat.name}</h2>
              <div className="space-y-8">
                {cat.items.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-stone-800">{item.name}</h3>
                      <p className="text-sm text-stone-500">{item.desc}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-xl font-bold text-stone-900 bg-stone-50 px-4 py-2 rounded-lg border border-stone-100">
                        {item.price}
                      </div>
                      <button 
                        onClick={() => onAction('booking')}
                        className="text-emerald-700 hover:text-emerald-900 font-bold text-sm"
                      >
                        Buchen
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-3xl border border-dashed border-stone-300 text-center">
            <h3 className="font-bold text-stone-800 mb-2">Wichtiger Hinweis</h3>
            <p className="text-stone-500 text-sm max-w-2xl mx-auto">
              Alle Preise inkl. gesetzlicher MwSt. Laborkosten werden separat über das jeweilige Labor abgerechnet. Hausbesuche werden mit 0,50€ pro gefahrenem Kilometer berechnet. Termine müssen mindestens 24 Stunden vorher abgesagt werden.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
