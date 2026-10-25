import React, { useState } from 'react';
import { QUIZ_QUESTIONS, calculateQuizResult, PERSONALITY_ARCHETYPES } from '../data/quizQuestions';
import { TALENTS_CATALOG } from '../data/talentsData';
import { PROJECT_BLUEPRINTS } from '../data/blueprintsData';
import { PersonalityArchetype, Talent, ProjectBlueprint } from '../types';
import { Compass, CheckCircle2, RotateCcw, ArrowRight, ArrowLeft, Bookmark, Activity, Church, Users, Sparkles, BookOpen } from 'lucide-react';

interface QuizCompassProps {
  onSelectTalent: (talent: Talent) => void;
  onSaveResult: (scores: { sport: number; spiritual: number; social: number }, archetypeId: string) => void;
  savedArchetypeId?: string | null;
}

export const QuizCompass: React.FC<QuizCompassProps> = ({ onSelectTalent, onSaveResult, savedArchetypeId }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<{
    scores: { sport: number; spiritual: number; social: number };
    archetype: PersonalityArchetype;
  } | null>(() => {
    if (savedArchetypeId) {
      const match = PERSONALITY_ARCHETYPES.find(a => a.id === savedArchetypeId);
      if (match) {
        return {
          scores: { sport: 35, spiritual: 35, social: 30 },
          archetype: match
        };
      }
    }
    return null;
  });

  const handleSelectOption = (optionIndex: number) => {
    const updated = [...selectedAnswers];
    updated[currentStep] = optionIndex;
    setSelectedAnswers(updated);
  };

  const handleNext = () => {
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate
      const outcome = calculateQuizResult(selectedAnswers);
      setResult(outcome);
      onSaveResult(outcome.scores, outcome.archetype.id);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers([]);
    setCurrentStep(0);
    setResult(null);
  };

  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const isCurrentAnswered = selectedAnswers[currentStep] !== undefined;

  return (
    <section id="boussole-section" className="py-12 bg-stone-100 text-stone-900 min-h-[600px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-700 tracking-wider uppercase mb-2">
            <span>Orientation Personnalisée</span>
            <span aria-hidden="true">·</span>
            <span>Boussole des Talents</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 font-display">
            Découvre ton profil de dons
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            Un questionnaire de 8 situations concrètes pour discerner tes équilibres majeurs : physique et sportif, foi et vie spirituelle, impact social et fraternel.
          </p>
        </div>

        {/* QUIZ IN PROGRESS */}
        {!result && (
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 p-6 sm:p-10">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                <span className="font-semibold text-stone-700">Question {currentStep + 1} sur {QUIZ_QUESTIONS.length}</span>
                <span className="font-mono tabular-nums">{Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}%</span>
              </div>
              <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-amber-500 h-2 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Heading */}
            <div className="mb-6">
              <div className="text-xs text-amber-700 font-medium mb-1 tracking-wide">
                Situation : {currentQuestion.theme}
              </div>
              <p className="text-xs text-stone-500 italic mb-2">
                « {currentQuestion.scenario} »
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold text-stone-900 leading-snug">
                {currentQuestion.question}
              </h3>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((opt, idx) => {
                const isSelected = selectedAnswers[currentStep] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all flex items-start gap-4 ${
                      isSelected
                        ? 'border-amber-500 bg-amber-50/70 shadow-xs ring-1 ring-amber-500'
                        : 'border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full border shrink-0 flex items-center justify-center text-xs font-mono mt-0.5 ${
                        isSelected
                          ? 'border-amber-600 bg-amber-600 text-white'
                          : 'border-stone-300 text-stone-500'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <div className="flex-1">
                      <div className={`text-sm sm:text-base leading-relaxed ${isSelected ? 'font-semibold text-stone-950' : 'text-stone-800'}`}>
                        {opt.text}
                      </div>
                      <div className="text-xs text-stone-500 mt-1">
                        {opt.explanation}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Step Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-stone-100">
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="px-4 py-2.5 text-xs font-medium text-stone-600 hover:text-stone-900 disabled:opacity-40 disabled:hover:text-stone-600 flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Précédent</span>
              </button>

              <button
                onClick={handleNext}
                disabled={!isCurrentAnswered}
                className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 disabled:bg-stone-300 disabled:cursor-not-allowed text-stone-950 font-semibold text-xs sm:text-sm rounded-lg shadow-sm transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <span>{currentStep === QUIZ_QUESTIONS.length - 1 ? 'Voir mon Diagnostic' : 'Continuer'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* RESULTS SCREEN */}
        {result && (
          <div className="space-y-8 animate-fadeIn">
            {/* Result Hero Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-100">
                <div>
                  <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                    {result.archetype.badge}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1 font-display">
                    {result.archetype.name}
                  </h3>
                </div>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-900 px-3 py-2 rounded-lg border border-stone-200 hover:bg-stone-50 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Repasser le test</span>
                </button>
              </div>

              {/* Tagline & Description */}
              <div className="my-6 space-y-3">
                <p className="text-base sm:text-lg font-medium text-amber-900 italic font-serif leading-relaxed">
                  « {result.archetype.tagline} »
                </p>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                  {result.archetype.description}
                </p>
              </div>

              {/* 3 Dimensional Score Breakdown */}
              <div className="bg-stone-50 rounded-xl p-5 border border-stone-200/80 my-6">
                <div className="text-xs font-semibold text-stone-600 uppercase tracking-wider mb-4">
                  Répartition de ton Profil de Dons
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* Sport Score */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 font-medium text-stone-800">
                        <Activity className="w-4 h-4 text-emerald-600" />
                        <span>Sport & Dépassement</span>
                      </span>
                      <span className="font-mono font-bold text-stone-900 tabular-nums">{result.scores.sport}%</span>
                    </div>
                    <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${result.scores.sport}%` }}
                      />
                    </div>
                    <div className="text-[11px] text-stone-500">Énergie corporelle, endurance, fair-play</div>
                  </div>

                  {/* Spiritual Score */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 font-medium text-stone-800">
                        <Church className="w-4 h-4 text-amber-600" />
                        <span>Spirituel & Ministère</span>
                      </span>
                      <span className="font-mono font-bold text-stone-900 tabular-nums">{result.scores.spiritual}%</span>
                    </div>
                    <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-amber-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${result.scores.spiritual}%` }}
                      />
                    </div>
                    <div className="text-[11px] text-stone-500">Prière, louange, profondeur biblique</div>
                  </div>

                  {/* Social Score */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 font-medium text-stone-800">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span>Social & Fraternité</span>
                      </span>
                      <span className="font-mono font-bold text-stone-900 tabular-nums">{result.scores.social}%</span>
                    </div>
                    <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${result.scores.social}%` }}
                      />
                    </div>
                    <div className="text-[11px] text-stone-500">Solidarité, écoute, réconciliation</div>
                  </div>
                </div>
              </div>

              {/* Biblical Anchor & Mindset Formula */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-xl border border-stone-200 bg-amber-50/40">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 mb-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Verset d'Ancrage Biblique</span>
                  </div>
                  <p className="text-xs sm:text-sm italic font-serif text-stone-800">
                    « {result.archetype.biblicalAnchor.verse} »
                  </p>
                  <div className="text-xs text-amber-900 font-semibold mt-1">
                    — {result.archetype.biblicalAnchor.reference}
                  </div>
                  <div className="text-xs text-stone-600 mt-2 leading-relaxed">
                    {result.archetype.biblicalAnchor.teaching}
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                  <div className="text-xs font-semibold text-stone-800 mb-1">
                    Conseil de Croissance & Posture Intérieure
                  </div>
                  <div className="text-xs font-mono text-amber-800 font-semibold mb-2">
                    {result.archetype.mindsetFormula}
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {result.archetype.growthAdvice}
                  </p>
                </div>
              </div>

              {/* Key Strengths list */}
              <div>
                <div className="text-xs font-semibold text-stone-600 uppercase tracking-wider mb-2">
                  Tes Forces Maîtresses
                </div>
                <div className="flex flex-wrap gap-2">
                  {result.archetype.dominantTraits.map((trait, i) => (
                    <div
                      key={i}
                      className="text-xs font-medium text-stone-800 bg-stone-100 border border-stone-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>{trait}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommended Talents Matching this Profile */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-stone-900 font-display">
                    Talents recommandés pour ton profil
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Des vocations précises où tes dons naturels peuvent immédiatement s'épanouir.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.archetype.recommendedTalents.map(talentId => {
                  const talent = TALENTS_CATALOG.find(t => t.id === talentId);
                  if (!talent) return null;
                  return (
                    <div
                      key={talent.id}
                      className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs hover:border-amber-400 hover:shadow-sm transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                          <span className="font-semibold text-amber-700 uppercase">{talent.categoryLabel}</span>
                          <span>{talent.biblicalFoundation.reference}</span>
                        </div>
                        <h5 className="text-base font-bold text-stone-900 mb-1">
                          {talent.title}
                        </h5>
                        <p className="text-xs text-stone-600 leading-relaxed mb-4">
                          {talent.shortSummary}
                        </p>
                        <div className="bg-amber-50/60 p-2.5 rounded-lg border border-amber-200/60 text-xs text-amber-950 mb-4">
                          <strong className="font-semibold">Micro-défi cette semaine : </strong>
                          {talent.immediateAction}
                        </div>
                      </div>

                      <button
                        onClick={() => onSelectTalent(talent)}
                        className="w-full text-center py-2 px-3 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-medium transition-colors"
                      >
                        Consulter la fiche complète & plan
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recommended Blueprints */}
            <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8">
              <div className="max-w-2xl mb-6">
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                  Passe à l'action
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white font-display">
                  Projets d'impact suggérés pour ton groupe
                </h4>
                <p className="text-xs sm:text-sm text-stone-300 mt-1">
                  Ne reste pas dans la théorie : voici des formats d'initiatives testées que tu peux porter avec ton église ou tes amis.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {result.archetype.idealProjects.map(projId => {
                  const proj = PROJECT_BLUEPRINTS.find(p => p.id === projId);
                  if (!proj) return null;
                  return (
                    <div
                      key={proj.id}
                      className="bg-stone-800 rounded-xl p-4 border border-stone-700 flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-[11px] text-amber-400 font-mono mb-1">{proj.duration}</div>
                        <div className="text-sm font-semibold text-white mb-2">{proj.title}</div>
                        <p className="text-xs text-stone-300 line-clamp-3 leading-relaxed mb-3">
                          {proj.pitch}
                        </p>
                      </div>
                      <div className="text-[11px] text-stone-400 border-t border-stone-700/80 pt-2 flex items-center justify-between">
                        <span>Cible : {proj.targetAudience.split('&')[0]}</span>
                        <span className="font-semibold text-stone-300">{proj.difficulty}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
