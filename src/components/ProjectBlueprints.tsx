import React, { useState } from 'react';
import { PROJECT_BLUEPRINTS } from '../data/blueprintsData';
import { ProjectBlueprint, Dimension } from '../types';
import { HeartHandshake, Activity, Church, Sparkles, Clock, CheckCircle2, Copy, Check, Users, ArrowRight } from 'lucide-react';

export const ProjectBlueprints: React.FC = () => {
  const [selectedBlueprint, setSelectedBlueprint] = useState<ProjectBlueprint | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [dimensionFilter, setDimensionFilter] = useState<string>('all');

  const filteredProjects = PROJECT_BLUEPRINTS.filter(p => {
    if (dimensionFilter === 'all') return true;
    return p.dimensions.includes(dimensionFilter as Dimension);
  });

  const handleCopyProject = (blueprint: ProjectBlueprint) => {
    const textToCopy = `PROJET TALENTA : ${blueprint.title}
Audience : ${blueprint.targetAudience}
Durée : ${blueprint.duration}
Difficulté : ${blueprint.difficulty}

PITCH :
${blueprint.pitch}

ANCRAGE BIBLIQUE :
${blueprint.biblicalAnchor}

ÉQUIPE NÉCESSAIRE :
${blueprint.requiredTeam.map(t => `- ${t}`).join('\n')}

PHASES DU PROJET :
${blueprint.phases.map(ph => `${ph.title} :\n${ph.tasks.map(t => `  * ${t}`).join('\n')}`).join('\n\n')}

CONSEIL PRO :
${blueprint.proTips}`;

    navigator.clipboard.writeText(textToCopy);
    setCopiedId(blueprint.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section className="py-12 bg-stone-100 min-h-[700px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 tracking-wider uppercase mb-1">
            <span>Boîte à Idées & Initiatives</span>
            <span aria-hidden="true">·</span>
            <span>Prêt à Lancer</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 font-display">
            Projets d'Impact pour Groupes de Jeunes
          </h2>
          <p className="mt-1 text-sm sm:text-base text-stone-600">
            Des initiatives concrètes, équilibrées et structurées étape par étape pour mobiliser les jeunes chrétiens de ton quartier ou ton église.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 text-xs">
          <button
            onClick={() => setDimensionFilter('all')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap ${
              dimensionFilter === 'all'
                ? 'bg-stone-900 text-white'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            Tous les formats ({PROJECT_BLUEPRINTS.length})
          </button>
          <button
            onClick={() => setDimensionFilter('sport')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              dimensionFilter === 'sport'
                ? 'bg-emerald-700 text-white'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Sport & Plein Air</span>
          </button>
          <button
            onClick={() => setDimensionFilter('spiritual')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              dimensionFilter === 'spiritual'
                ? 'bg-amber-600 text-white'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            <Church className="w-3.5 h-3.5" />
            <span>Spirituel & Retraite</span>
          </button>
          <button
            onClick={() => setDimensionFilter('social')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              dimensionFilter === 'social'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
            }`}
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Solidarité & Entraide</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(blueprint => (
            <div
              key={blueprint.id}
              className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs hover:border-amber-400 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                {/* Meta header (NO pills) */}
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                  <span className="flex items-center gap-1 font-mono text-[11px] text-stone-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{blueprint.duration}</span>
                  </span>
                  <span className="font-medium text-stone-700">{blueprint.difficulty}</span>
                </div>

                <h3 className="text-xl font-bold text-stone-900 mb-2 font-display">
                  {blueprint.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {blueprint.pitch}
                </p>

                <div className="bg-stone-50 rounded-lg p-3 border border-stone-200/70 text-xs space-y-1 mb-4">
                  <div className="font-semibold text-stone-700">Public cible :</div>
                  <div className="text-stone-600">{blueprint.targetAudience}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedBlueprint(blueprint)}
                  className="text-xs font-semibold text-stone-900 hover:text-amber-800 flex items-center gap-1.5 transition-colors"
                >
                  <span>Voir le déroulé complet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleCopyProject(blueprint)}
                  className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors"
                  title="Copier la fiche de projet"
                  aria-label="Copier la fiche de projet"
                >
                  {copiedId === blueprint.id ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Blueprint Details Modal */}
        {selectedBlueprint && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
            <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-stone-200 overflow-hidden max-h-[90vh] flex flex-col">
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50">
                <div>
                  <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                    Fiche Projet Clé en Main
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display mt-0.5">
                    {selectedBlueprint.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyProject(selectedBlueprint)}
                    className="px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-medium text-stone-700 hover:bg-stone-100 flex items-center gap-1.5 transition-colors"
                  >
                    {copiedId === selectedBlueprint.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copié !</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copier le plan</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => setSelectedBlueprint(null)}
                    className="p-2 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-200/50"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto p-4 sm:p-8 space-y-6 text-stone-800 text-xs sm:text-sm leading-relaxed">
                {/* Pitch & Ancrage */}
                <div className="space-y-2">
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    {selectedBlueprint.pitch}
                  </p>
                  <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 italic font-serif text-amber-950">
                    « {selectedBlueprint.biblicalAnchor} »
                  </div>
                </div>

                {/* Équipe requise */}
                <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
                  <div className="flex items-center gap-2 font-semibold text-stone-900 uppercase tracking-wider text-xs mb-2">
                    <Users className="w-4 h-4 text-stone-600" />
                    <span>Équipe Nécessaire & Rôles</span>
                  </div>
                  <ul className="space-y-1.5 text-stone-700">
                    {selectedBlueprint.requiredTeam.map((role, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Phases chronologiques */}
                <div className="space-y-4">
                  <div className="font-semibold text-stone-900 uppercase tracking-wider text-xs">
                    Déroulé Chronologique par Phases
                  </div>
                  <div className="space-y-3">
                    {selectedBlueprint.phases.map((phase, pIdx) => (
                      <div key={pIdx} className="border border-stone-200 rounded-xl p-4 bg-white">
                        <div className="font-bold text-stone-900 text-sm mb-2 text-amber-900">
                          {phase.title}
                        </div>
                        <ul className="space-y-1.5 text-stone-600">
                          {phase.tasks.map((task, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact & Pro Tips */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                    <div className="font-semibold text-stone-900 text-xs mb-1">Impact Espéré</div>
                    <div className="text-stone-700">{selectedBlueprint.expectedImpact}</div>
                  </div>
                  <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50">
                    <div className="font-semibold text-amber-900 text-xs mb-1">Le Conseil d'Or</div>
                    <div className="text-amber-950">{selectedBlueprint.proTips}</div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 border-t border-stone-100 bg-stone-50 flex items-center justify-end">
                <button
                  onClick={() => setSelectedBlueprint(null)}
                  className="px-5 py-2 text-xs font-semibold text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-200/50"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
