import React, { useState } from 'react';
import { INSPIRING_GUIDES, GuideArticle } from '../data/guidesData';
import { BookOpen, Clock, CheckCircle2, ChevronDown, ChevronUp, Share2, ArrowRight } from 'lucide-react';

export const GuidesAndWisdom: React.FC = () => {
  const [selectedArticleId, setSelectedArticleId] = useState<string>(INSPIRING_GUIDES[0].id);

  const selectedArticle = INSPIRING_GUIDES.find(g => g.id === selectedArticleId) || INSPIRING_GUIDES[0];

  return (
    <section className="py-12 bg-stone-100 min-h-[700px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 tracking-wider uppercase mb-1">
            <span>Enseignements & Méditations</span>
            <span aria-hidden="true">·</span>
            <span>Fondements Bibliques</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 font-display">
            Guides & Sagesse pour Jeunes Chrétiens
          </h2>
          <p className="mt-1 text-sm sm:text-base text-stone-600">
            Des clés bibliques pour éclairer la pratique du sport, la gestion de la timidité, la parabole des talents et l'équilibre de vie entre le corps, l'âme et l'esprit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column : Article Selector Cards */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
              Dossiers Thématiques
            </div>

            {INSPIRING_GUIDES.map(article => {
              const isActive = article.id === selectedArticleId;
              return (
                <button
                  key={article.id}
                  onClick={() => setSelectedArticleId(article.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                    isActive
                      ? 'border-amber-500 bg-white shadow-sm ring-1 ring-amber-400'
                      : 'border-stone-200 bg-white/70 hover:bg-white hover:border-stone-300'
                  }`}
                >
                  <div>
                    {/* Meta info (NO pills) */}
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                      <span className="font-semibold text-amber-800">{article.category}</span>
                      <span className="font-mono text-[11px]">{article.readTime}</span>
                    </div>

                    <h4 className={`text-sm sm:text-base font-bold leading-snug mb-1 font-display ${isActive ? 'text-stone-950' : 'text-stone-800'}`}>
                      {article.title}
                    </h4>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-stone-400">{article.scriptureReference}</span>
                    <span className={`font-semibold ${isActive ? 'text-amber-700' : 'text-stone-500'}`}>
                      {isActive ? 'En cours de lecture' : 'Lire →'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column : Reading Pane */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs">
            {/* Article Header */}
            <div className="pb-6 border-b border-stone-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wider mb-2">
                <span>{selectedArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.readTime}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-stone-500">{selectedArticle.scriptureReference}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-display leading-tight">
                {selectedArticle.title}
              </h3>

              <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
                {selectedArticle.summary}
              </p>
            </div>

            {/* Key Takeaways Box */}
            <div className="my-6 p-5 bg-amber-50/70 border border-amber-200/80 rounded-xl space-y-2">
              <div className="text-xs font-bold text-amber-950 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span>Ce qu'il faut retenir</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-stone-800">
                {selectedArticle.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-1 shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Paragraphs */}
            <div className="space-y-6 text-stone-800 text-sm sm:text-base leading-relaxed">
              {selectedArticle.paragraphs.map((p, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-lg font-bold text-stone-900 font-display">
                    {p.heading}
                  </h4>
                  <p className="text-stone-700 leading-relaxed">
                    {p.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Footer Quote */}
            <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span>Source : Méditations pour la jeunesse chrétienne</span>
              <span className="font-mono font-bold text-stone-700">{selectedArticle.scriptureReference}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
