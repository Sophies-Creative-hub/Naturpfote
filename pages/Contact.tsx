
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="reveal">
          <span className="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-4 block">Kontakt</span>
          <h1 className="text-4xl md:text-6xl font-serif mb-8 text-stone-900 leading-tight">Lassen Sie uns <br />gemeinsam <span className="italic">helfen.</span></h1>
          <p className="text-lg text-stone-600 mb-12 leading-relaxed">
            Haben Sie Fragen zu meinen Behandlungen oder möchten Sie einen Termin in Ihrer gewohnten Umgebung anfragen? Ich freue mich auf Ihre Nachricht und melde mich zeitnah bei Ihnen.
          </p>

          <div className="space-y-8">
            <div className="flex items-start space-x-5 group">
              <div className="bg-white p-4 rounded-2xl shadow-sm group-hover:bg-emerald-700 group-hover:text-white transition-all duration-300">📍</div>
              <div>
                <h4 className="font-bold text-stone-800 text-lg">Praxis & Hausbesuche</h4>
                <p className="text-stone-500">Naturweg 12, 12345 Musterstadt & Umgebung</p>
              </div>
            </div>
            <div className="flex items-start space-x-5 group">
              <div className="bg-white p-4 rounded-2xl shadow-sm group-hover:bg-emerald-700 group-hover:text-white transition-all duration-300">✉️</div>
              <div>
                <h4 className="font-bold text-stone-800 text-lg">E-Mail</h4>
                <p className="text-stone-500">info@naturpfote-heilpraxis.de</p>
              </div>
            </div>
            <div className="flex items-start space-x-5 group">
              <div className="bg-white p-4 rounded-2xl shadow-sm group-hover:bg-emerald-700 group-hover:text-white transition-all duration-300">📞</div>
              <div>
                <h4 className="font-bold text-stone-800 text-lg">Telefon</h4>
                <p className="text-stone-500">+49 (0) 123 4567890</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-stone-100 reveal delay-1">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Vorname</label>
                <input type="text" placeholder="Max" className="w-full p-4 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Nachname</label>
                <input type="text" placeholder="Mustermann" className="w-full p-4 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Anliegen</label>
              <select className="w-full p-4 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 transition-all cursor-pointer">
                <option>Ernährungsberatung</option>
                <option>Heilpraktische Behandlung</option>
                <option>Terminanfrage</option>
                <option>Sonstiges</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Ihre Nachricht</label>
              <textarea rows={6} className="w-full p-4 bg-stone-50 border border-stone-200 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 transition-all" placeholder="Erzählen Sie mir kurz von Ihrem Tier..."></textarea>
            </div>
            <button className="w-full bg-emerald-700 text-white py-5 rounded-2xl font-bold hover:bg-emerald-800 transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0">
              Anfrage senden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
