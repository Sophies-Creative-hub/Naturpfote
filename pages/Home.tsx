
import React from 'react';
import { Icons } from '../constants';

interface HomeProps {
  onAction: (target: string) => void;
}

const Home: React.FC<HomeProps> = ({ onAction }) => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 md:pt-40">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2000&auto=format" 
            alt="Glücklicher Hund mit Fokus auf das Gesicht" 
            className="w-full h-full object-cover object-[center_top] brightness-[0.8] scale-105 animate-[ken-burns_20s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#fdfdfb]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="max-w-3xl reveal">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-950/40 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-8 shadow-inner">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span>Ganzheitliche Tiergesundheit</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-[1.05]">
              Für ein Leben <br />
              <span className="italic font-serif text-emerald-300 drop-shadow-sm">voller Vitalität.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-stone-100/90 mb-12 font-medium leading-relaxed max-w-2xl drop-shadow-sm">
              Individuelle Naturheilkunde & Ernährungsberatung, die die Ursache findet – nicht nur das Symptom.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => onAction('booking')}
                className="group relative bg-emerald-600 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10">Termin vereinbaren</span>
                <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              <button 
                onClick={() => onAction('anamnese')}
                className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-lg"
              >
                Online-Anamnese
              </button>
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes ken-burns {
            from { transform: scale(1); }
            to { transform: scale(1.15); }
          }
        `}</style>
      </section>

      {/* Modern Focus Area */}
      <section className="py-32 bg-[#fdfdfb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 reveal">
            <span className="text-emerald-700 font-bold text-sm tracking-widest uppercase mb-4 block">Mein Weg</span>
            <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6">Expertise aus Leidenschaft</h2>
            <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { 
                title: 'Naturheilkunde', 
                desc: 'Sanfte Unterstützung durch Homöopathie und Heilkräuter für ein starkes Immunsystem.', 
                img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format',
                icon: '🌿'
              },
              { 
                title: 'Ernährung', 
                desc: 'Optimale Nährstoffversorgung durch maßgeschneiderte Futterpläne (BARF & Co.).', 
                img: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=800&auto=format',
                icon: '🥣'
              },
              { 
                title: 'Vorsorge', 
                desc: 'Präventive Beratung und moderne Labordiagnostik für ein gesundes Altern.', 
                img: 'https://images.unsplash.com/photo-1576089172869-4f5f6f315620?q=80&w=800&auto=format',
                icon: '🔬'
              },
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-stone-50 overflow-hidden">
                <div className="absolute top-0 right-0 p-6 text-4xl opacity-10 group-hover:scale-125 transition-transform duration-500">{item.icon}</div>
                <div className="relative h-60 rounded-3xl overflow-hidden mb-8">
                  <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900">{item.title}</h3>
                <p className="text-stone-500 leading-relaxed text-lg">{item.desc}</p>
                <div className="mt-6 flex items-center text-emerald-700 font-bold cursor-pointer group-hover:translate-x-2 transition-transform">
                  <span>Mehr erfahren</span>
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-End Philosophy Section */}
      <section className="py-32 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,95,70,0.15),transparent)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
          <div className="reveal">
            <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight">
              Warum Sie mir <br />
              <span className="text-emerald-400 italic">vertrauen können.</span>
            </h2>
            <div className="space-y-10">
              {[
                { t: 'Über 12 Jahre Erfahrung', d: 'Tausende erfolgreich begleitete Tiere und zufriedene Besitzer.' },
                { t: 'Evidenzbasierte Naturheilkunde', d: 'Ich verbinde Laborwerte mit traditionellem Heilwissen.' },
                { t: 'Individueller Zeitrahmen', d: 'Ich nehme mir die Zeit, die Ihr Tier für eine ruhige Untersuchung braucht.' }
              ].map((point, i) => (
                <div key={i} className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 shrink-0 bg-emerald-900/50 rounded-2xl flex items-center justify-center text-emerald-400 border border-emerald-800/50 group-hover:bg-emerald-500 group-hover:text-emerald-950 transition-all duration-300">
                    <Icons.Check />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{point.t}</h4>
                    <p className="text-stone-400 leading-relaxed text-lg">{point.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative reveal delay-2">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_0_80px_rgba(6,95,70,0.2)]">
                <img 
                    src="https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1000&auto=format" 
                    className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000 scale-100 hover:scale-105" 
                    alt="Tierliebe" 
                />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 bg-white text-stone-900 p-8 rounded-3xl shadow-2xl hidden lg:block animate-bounce-slow">
              <div className="text-4xl mb-2">🐾</div>
              <div className="font-bold text-xl">100% Natur</div>
              <div className="text-stone-500 text-sm">Ganzheitlicher Fokus</div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Home;
