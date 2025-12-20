
import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [paymentOption, setPaymentOption] = useState<'sofort' | 'praxis'>('praxis');

  const slots = ['09:00', '10:30', '14:00', '15:30', '17:00'];

  const handleBooking = () => {
    alert(`Termin am ${selectedDate} um ${selectedSlot} Uhr erfolgreich gebucht! ${paymentOption === 'sofort' ? 'Anzahlung wird bearbeitet...' : 'Zahlung erfolgt in der Praxis.'}`);
  };

  return (
    <div className="pt-32 pb-24 px-4 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-serif mb-6 text-stone-800">Wunschtermin finden</h1>
          <p className="text-stone-600 mb-10 leading-relaxed">
            Wählen Sie ein Datum und eine Uhrzeit für unser Gespräch. 
            Ich biete sowohl Vor-Ort-Termine als auch Video-Sprechstunden an.
          </p>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Datum wählen</label>
              <input 
                type="date" 
                className="w-full p-4 border border-stone-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>

            {selectedDate && (
              <div className="animate-in fade-in slide-in-from-top duration-500">
                <label className="block text-sm font-bold text-stone-700 mb-4">Verfügbare Uhrzeiten</label>
                <div className="grid grid-cols-3 gap-3">
                  {slots.map(slot => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-3 rounded-xl border-2 transition-all ${
                        selectedSlot === slot ? 'border-emerald-700 bg-emerald-50 text-emerald-800' : 'border-stone-100 hover:border-emerald-200 text-stone-600'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-serif mb-6 text-stone-800">Ihre Buchungsübersicht</h2>
            <div className="space-y-4 mb-10">
              <div className="flex justify-between py-2 border-b border-stone-200">
                <span className="text-stone-500">Service</span>
                <span className="font-bold">Erstberatung</span>
              </div>
              <div className="flex justify-between py-2 border-b border-stone-200">
                <span className="text-stone-500">Datum</span>
                <span className="font-bold">{selectedDate || 'Nicht gewählt'}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-stone-200">
                <span className="text-stone-500">Uhrzeit</span>
                <span className="font-bold">{selectedSlot ? `${selectedSlot} Uhr` : 'Nicht gewählt'}</span>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <label className="block text-sm font-bold text-stone-700">Zahlungsweise</label>
              <div className="space-y-2">
                <label className="flex items-center space-x-3 p-4 bg-white border border-stone-200 rounded-xl cursor-pointer hover:bg-stone-50">
                  <input 
                    type="radio" 
                    name="payment" 
                    className="w-4 h-4 text-emerald-700" 
                    checked={paymentOption === 'praxis'}
                    onChange={() => setPaymentOption('praxis')}
                  />
                  <span>Bezahlung vor Ort</span>
                </label>
                <label className="flex items-center space-x-3 p-4 bg-white border border-stone-200 rounded-xl cursor-pointer hover:bg-stone-50">
                  <input 
                    type="radio" 
                    name="payment" 
                    className="w-4 h-4 text-emerald-700" 
                    checked={paymentOption === 'sofort'}
                    onChange={() => setPaymentOption('sofort')}
                  />
                  <div>
                    <span className="block">Anzahlung (25€)</span>
                    <span className="text-xs text-stone-400">Restbetrag nach dem Termin</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <button
            disabled={!selectedDate || !selectedSlot}
            onClick={handleBooking}
            className="w-full bg-emerald-700 disabled:bg-stone-300 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-800 transition-all shadow-lg"
          >
            Termin verbindlich buchen
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
