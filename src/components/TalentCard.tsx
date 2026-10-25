import React from 'react';
import { Talent } from '../types';
import { Bookmark, ArrowRight, Activity, Church, HeartHandshake, Sparkles } from 'lucide-react';

interface TalentCardProps {
  talent: Talent;
  onOpenDetails: (talent: Talent) => void;
  isBookmarked: boolean;
  onToggleBookmark: (talentId: string) => void;
}

export const TalentCard: React.FC<TalentCardProps> = ({
  talent,
  onOpenDetails,
  isBookmarked,
  onToggleBookmark
}) => {
  const getDimensionIcon = () => {
    switch (talent.category) {
      case 'sport':
        return <Activity className="w-3.5 h-3.5 text-emerald-600" />;
      case 'spiritual':
        return <Church className="w-3.5 h-3.5 text-amber-600" />;
      case 'social':
        return <HeartHandshake className="w-3.5 h-3.5 text-blue-600" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-purple-600" />;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-stone-200/90 shadow-xs hover:border-amber-400/90 hover:shadow-sm transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      {/* Top Banner if image exists */}
      {talent.image && (
        <div className="h-36 w-full overflow-hidden bg-stone-100 relative">
          <img
            src={talent.image}
            alt={talent.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>
      )}

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Clean unboxed metadata with separators (NO static pills) */}
          <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
            <div className="flex items-center gap-1.5 font-medium text-stone-600">
              {getDimensionIcon()}
              <span>{talent.categoryLabel}</span>
            </div>
            <span className="font-mono text-[11px] text-stone-400">{talent.biblicalFoundation.reference}</span>
          </div>

          {/* Title */}
          <h4 className="text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors font-display mb-2">
            {talent.title}
          </h4>

          {/* Short summary */}
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3 mb-4">
            {talent.shortSummary}
          </p>

          {/* Immediate micro-action */}
          <div className="bg-stone-50 rounded-lg p-2.5 border border-stone-200/70 text-xs text-stone-700 mb-4">
            <span className="font-semibold text-amber-800">Action cette semaine : </span>
            <span className="line-clamp-2">{talent.immediateAction}</span>
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
          <button
            onClick={() => onOpenDetails(talent)}
            className="text-xs font-semibold text-stone-900 hover:text-amber-700 flex items-center gap-1.5 transition-colors py-1"
          >
            <span>Consulter la fiche</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => onToggleBookmark(talent.id)}
            className={`p-1.5 rounded-md transition-colors ${
              isBookmarked
                ? 'text-amber-600 bg-amber-50'
                : 'text-stone-400 hover:text-stone-700 hover:bg-stone-100'
            }`}
            title={isBookmarked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            aria-label={isBookmarked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};
