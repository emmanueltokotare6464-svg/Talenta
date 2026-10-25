import React from 'react';
import { Compass, Sparkles, ArrowRight, Activity, Church, Users } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
  onExploreTalents: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartQuiz, onExploreTalents }) => {
  return (
    <section className="relative overflow-hidden bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed editorial metadata without static pills */}
            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium tracking-wide uppercase">
              <span>Orientation Vocations</span>
              <span aria-hidden="true">·</span>
              <span>Jeunesse Chrétienne</span>
              <span aria-hidden="true">·</span>
              <span>15–25 Ans</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] font-display">
              Fais briller tes dons pour <span className="text-amber-400 italic">servir</span> et <span className="text-amber-300">inspirer</span>.
            </h1>

            <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed">
              Une boussole interactive pour aider les jeunes chrétiens à identifier et déployer leurs talents selon leurs passions : <strong className="text-stone-100 font-semibold">sportivement</strong> (discipline et endurance), <strong className="text-stone-100 font-semibold">spirituellement</strong> (foi vivante et louange) et <strong className="text-stone-100 font-semibold">socialement</strong> (solidarité et fraternité).
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onStartQuiz}
                className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold rounded-lg shadow-md transition-colors flex items-center gap-2 text-sm whitespace-nowrap"
              >
                <Compass className="w-4 h-4 text-stone-950" />
                <span>Passer la Boussole des Talents</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={onExploreTalents}
                className="px-5 py-3.5 bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium rounded-lg border border-stone-700 transition-colors text-sm whitespace-nowrap"
              >
                <span>Explorer le Répertoire</span>
              </button>
            </div>

            {/* 3 Pillars Overview without pill enclosures */}
            <div className="pt-6 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-300">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-stone-800 text-amber-400 shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-stone-100">Dimension Sportive</div>
                  <div className="text-stone-400 leading-snug mt-0.5">Discipline du corps, coaching, fair-play et dépassement.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-stone-800 text-amber-400 shrink-0">
                  <Church className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-stone-100">Dimension Spirituelle</div>
                  <div className="text-stone-400 leading-snug mt-0.5">Louange, intercession, partage biblique et vie de prière.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-stone-800 text-amber-400 shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-stone-100">Dimension Sociale</div>
                  <div className="text-stone-400 leading-snug mt-0.5">Solidarité de rue, écoute, mentorat et réconciliation.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with resilient zero-broken image fallback */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-700/60 aspect-video lg:aspect-[4/3] bg-stone-800">
              <img
                src="/src/assets/images/hero_talents_jeunesse_1790172884817.jpg"
                alt="Jeunes chrétiens engagés dans le sport, la musique et le service communautaire"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback container in case image load fails
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent flex flex-col justify-end p-6">
                <div className="text-amber-300 text-xs font-mono tracking-wider uppercase mb-1">
                  1 Pierre 4:10
                </div>
                <p className="text-white text-sm italic font-serif leading-snug">
                  « Que chacun de vous mette au service des autres le don qu'il a reçu, comme de bons dispensateurs des diverses grâces de Dieu. »
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
