
import React, { useState } from 'react';

const Anamnese: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    petType: 'Hund',
    petName: '',
    age: '',
    symptoms: '',
    diet: '',
    ownerName: '',
    ownerEmail: '',
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Vielen Dank! Das Formular wurde sicher übermittelt. Wir melden uns in Kürze.');
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-24 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden reveal">
        <div className="bg-emerald-700 p-10 text-white">
          <h2 className="text-3xl font-serif font-bold mb-2">Online-Anamnese</h2>
          <p className="text-emerald-100 opacity-90 text-lg">Schritt {step} von 3</p>
          <div className="w-full bg-emerald-900/50 h-2 mt-8 rounded-full overflow-hidden">
            <div 
              className="bg-white h-full transition-all duration-700 ease-out" 
              style={{ width: `${(step/3)*100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-10 space-y-8">
          {step === 1 && (
            <div className="space-y-6 animate-in slide-in-from-right duration-500">
              <h3 className="text-2xl font-bold text-stone-800">Basis-Informationen</h3>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-4 uppercase tracking-wider">Tierart</label>
                <div className="flex gap-4">
                  {['Hund', 'Katze'].map(t => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormData({...formData, petType: t})}
                      className={`flex-1 py-4 rounded-2xl border-2 font-bold transition-all ${
                        formData.petType === t ? 'border-emerald-700 bg-emerald-50 text-emerald-800 shadow-md' : 'border-stone-100 text-stone-400 hover:border-emerald-200'
                      }`}
                    >
                      {t === 'Hund' ? '🐕 Hund' : '🐈 Katze'}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wider">Name des Tieres</label>
                <input 
                  type="text" 
                  placeholder="Bello"
                  className="w-full p-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  value={formData.petName}
                  onChange={e => setFormData({...formData, petName: e.target.value})}
                  required
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in slide-in-from-right duration-500">
              <h3 className="text-2xl font-bold text-stone-800">Gesundheit & Ernährung</h3>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wider">Hauptbeschwerde / Symptome</label>
                <textarea 
                  rows={4}
                  className="w-full p-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  placeholder="Was belastet Ihr Tier aktuell besonders?"
                  value={formData.symptoms}
                  onChange={e => setFormData({...formData, symptoms: e.target.value})}
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wider">Aktuelle Fütterung</label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  placeholder="Z.B. BARF, Trockenfutter (Marke)..."
                  value={formData.diet}
                  onChange={e => setFormData({...formData, diet: e.target.value})}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in slide-in-from-right duration-500">
              <h3 className="text-2xl font-bold text-stone-800">Ihre Kontaktdaten</h3>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wider">Ihr vollständiger Name</label>
                <input 
                  type="text" 
                  placeholder="Gabriele Muster"
                  className="w-full p-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  value={formData.ownerName}
                  onChange={e => setFormData({...formData, ownerName: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2 uppercase tracking-wider">E-Mail Adresse</label>
                <input 
                  type="email" 
                  placeholder="beispiel@mail.de"
                  className="w-full p-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  value={formData.ownerEmail}
                  onChange={e => setFormData({...formData, ownerEmail: e.target.value})}
                  required
                />
              </div>
            </div>
          )}

          <div className="flex justify-between pt-8 border-t border-stone-100 items-center">
            {step > 1 ? (
              <button 
                type="button" 
                onClick={prevStep}
                className="px-6 py-3 text-stone-500 font-bold hover:text-emerald-700 transition-colors"
              >
                ← Zurück
              </button>
            ) : <div />}
            
            {step < 3 ? (
              <button 
                type="button" 
                onClick={nextStep}
                className="bg-emerald-700 text-white px-10 py-4 rounded-2xl font-bold hover:bg-emerald-800 transition-all shadow-lg hover:-translate-y-0.5"
              >
                Weiter
              </button>
            ) : (
              <button 
                type="submit"
                className="bg-stone-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-black transition-all shadow-lg hover:-translate-y-0.5"
              >
                Anamnese absenden
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Anamnese;
