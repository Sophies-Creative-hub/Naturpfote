
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-32 bg-white overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative reveal">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
          <div className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?q=80&w=1000&auto=format" 
              alt="Martina Schmidt - Tierheilpraktikerin bei der Arbeit" 
              className="rounded-[3rem] shadow-2xl w-full object-cover aspect-[4/5] lg:aspect-auto h-auto max-h-[700px]"
            />
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-emerald-800 text-white p-8 md:p-10 rounded-[2rem] shadow-2xl max-w-xs transition-transform hover:scale-105 duration-300">
              <span className="text-5xl font-serif italic mb-4 block leading-none">"</span>
              <p className="text-lg leading-relaxed mb-4">
                Meine Mission ist es, die natürliche Balance Ihres Tieres wiederherzustellen.
              </p>
              <p className="text-sm font-bold uppercase tracking-widest opacity-70">- Martina Schmidt</p>
            </div>
          </div>
        </div>
        
        <div className="reveal delay-1">
          <span className="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-4 block">Ganzheitliche Expertise</span>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 leading-tight">
            Hallo, ich bin <br /><span className="text-emerald-800 italic">Martina.</span>
          </h1>
          <div className="space-y-6 text-xl text-stone-600 leading-relaxed mb-10">
            <p>
              Seit über 12 Jahren widme ich mein Leben der Gesundheit unserer vierbeinigen Begleiter. Als zertifizierte Tierheilpraktikerin und Ernährungsberaterin sehe ich den Körper als großes Ganzes.
            </p>
            <p>
              Mein Weg führte mich von der klassischen Ausbildung hin zur tiefen Faszination für die Phytotherapie und Homöopathie. Ich glaube fest daran, dass die Natur für fast jedes Problem eine Antwort bereithält.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-stone-50 rounded-[2rem] border border-stone-100 hover:bg-emerald-50 transition-colors duration-300">
              <h3 className="font-bold text-emerald-900 mb-3 text-lg">Meine Philosophie</h3>
              <p className="text-stone-500 text-base leading-relaxed">
                Ich betrachte jedes Tier als Individuum. Symptome sind Wegweiser zur Ursache, nicht nur Feinde, die man unterdrücken muss.
              </p>
            </div>
            <div className="p-8 bg-stone-50 rounded-[2rem] border border-stone-100 hover:bg-emerald-50 transition-colors duration-300">
              <h3 className="font-bold text-emerald-900 mb-3 text-lg">Wissenschaft</h3>
              <p className="text-stone-500 text-base leading-relaxed">
                Stetige Fortbildung in Labordiagnostik ermöglicht mir die Brücke zwischen modernen Daten und Naturheilkunde.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="h-px bg-stone-200 flex-grow"></div>
            <div className="text-stone-400 font-bold italic tracking-tighter text-sm uppercase">Zertifiziertes Mitglied im Verband Deutscher Tierheilpraktiker</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
