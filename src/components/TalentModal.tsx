import React, { useState } from 'react';
import { Talent } from '../types';
import { X, Bookmark, BookOpen, CheckSquare, Target, Lightbulb, Users, Church, Activity, HeartHandshake } from 'lucide-react';

interface TalentModalProps {
  talent: Talent | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (talentId: string) => void;
}

export const TalentModal: React.FC<TalentModalProps> = ({
  talent,
  onClose,
  isBookmarked,
  onToggleBookmark
}) => {
  if (!talent) return null;

  const [checkedChecklist, setCheckedChecklist] = useState<number[]>([]);

  const handleToggleCheck = (index: number) => {
    if (checkedChecklist.includes(index)) {
      setCheckedChecklist(checkedChecklist.filter(i => i !== index));
    } else {
      setCheckedChecklist([...checkedChecklist, index]);
    }
  };

  const getDimensionIcon = () => {
    switch (talent.category) {
      case 'sport':
        return <Activity className="w-4 h-4 text-emerald-600" />;
      case 'spiritual':
        return <Church className="w-4 h-4 text-amber-600" />;
      case 'social':
        return <HeartHandshake className="w-4 h-4 text-blue-600" />;
      default:
        return <Lightbulb className="w-4 h-4 text-purple-600" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-stone-200 overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="p-4 sm:p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
            {getDimensionIcon()}
            <span className="uppercase tracking-wider">{talent.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-stone-500">{talent.biblicalFoundation.reference}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(talent.id)}
              className={`p-2 rounded-lg border text-xs flex items-center gap-1.5 transition-colors ${
                isBookmarked
                  ? 'border-amber-400 bg-amber-50 text-amber-900 font-semibold'
                  : 'border-stone-200 hover:bg-stone-100 text-stone-600'
              }`}
              title={isBookmarked ? 'Retirer des favoris' : 'Enregistrer ce talent'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
              <span className="hidden sm:inline">{isBookmarked ? 'Enregistré' : 'Favori'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-200/60 transition-colors"
              aria-label="Fermer la modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-6 text-stone-800 text-sm sm:text-base leading-relaxed">
          {/* Main Title & Image if present */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-display">
              {talent.title}
            </h3>
            <p className="mt-2 text-stone-600 text-base leading-relaxed">
              {talent.fullDescription}
            </p>
          </div>

          {/* Biblical Foundation Box */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-900 uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-amber-700" />
              <span>Fondement Biblique</span>
            </div>
            <p className="font-serif italic text-amber-950 text-sm sm:text-base">
              « {talent.biblicalFoundation.verse} »
            </p>
            <div className="text-xs font-bold text-amber-800">
              {talent.biblicalFoundation.reference}
            </div>
            <p className="text-xs text-stone-600 pt-1 border-t border-amber-200/50">
              {talent.biblicalFoundation.context}
            </p>
          </div>

          {/* Key Qualities */}
          <div>
            <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
              Qualités Essentielles à Développer
            </h4>
            <div className="flex flex-wrap gap-2">
              {talent.keyQualities.map((q, idx) => (
                <div
                  key={idx}
                  className="text-xs font-medium bg-stone-100 text-stone-800 border border-stone-200/80 px-3 py-1.5 rounded-lg"
                >
                  {q}
                </div>
              ))}
            </div>
          </div>

          {/* Practical Activation Steps */}
          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-900 uppercase tracking-wider">
              <Target className="w-4 h-4 text-amber-600" />
              <span>Plan d'Activation : Passer à l'Action</span>
            </div>

            <div className="p-3 bg-white rounded-lg border border-amber-200/80 text-xs sm:text-sm text-stone-800">
              <strong className="text-amber-900 font-semibold">Micro-action pour cette semaine : </strong>
              {talent.immediateAction}
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-medium text-stone-600">Feuille de route pas-à-pas :</div>
              <ol className="space-y-1.5 list-decimal list-inside text-xs sm:text-sm text-stone-700">
                {talent.weeklySteps.map((step, i) => (
                  <li key={i} className="leading-snug pl-1">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Role in Church & City */}
          <div className="border border-stone-200 rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-800 uppercase tracking-wider">
              <Users className="w-4 h-4 text-stone-600" />
              <span>Rôle dans la Communauté ou la Cité</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {talent.churchAndCommunityRole}
            </p>
          </div>

          {/* Self-Evaluation Checklist */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-600 uppercase tracking-wider">
              <CheckSquare className="w-4 h-4 text-stone-500" />
              <span>Auto-Évaluation & Questions de Discernement</span>
            </div>
            <p className="text-xs text-stone-500">
              Coche les affirmations qui résonnent déjà en toi pour jauger ton alignement avec ce talent :
            </p>
            <div className="space-y-2">
              {talent.selfEvaluationQuestions.map((q, idx) => {
                const isChecked = checkedChecklist.includes(idx);
                return (
                  <button
                    key={idx}
                    onClick={() => handleToggleCheck(idx)}
                    className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-colors flex items-start gap-3 ${
                      isChecked
                        ? 'border-emerald-500 bg-emerald-50/60 text-emerald-950 font-medium'
                        : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded border mt-0.5 shrink-0 flex items-center justify-center text-[10px] ${
                        isChecked ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-stone-300'
                      }`}
                    >
                      {isChecked && '✓'}
                    </div>
                    <span>{q}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-stone-100 bg-stone-50 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-200/50 transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
