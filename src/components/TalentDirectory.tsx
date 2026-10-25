import React, { useState, useMemo } from 'react';
import { TALENTS_CATALOG } from '../data/talentsData';
import { Talent, Dimension } from '../types';
import { TalentCard } from './TalentCard';
import { Search, Filter, Bookmark, Activity, Church, HeartHandshake, Sparkles, X } from 'lucide-react';

interface TalentDirectoryProps {
  onOpenDetails: (talent: Talent) => void;
  bookmarkedTalentIds: string[];
  onToggleBookmark: (talentId: string) => void;
  defaultFilter?: string;
}

export const TalentDirectory: React.FC<TalentDirectoryProps> = ({
  onOpenDetails,
  bookmarkedTalentIds,
  onToggleBookmark,
  defaultFilter = 'all'
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultFilter);
  const [showOnlyBookmarks, setShowOnlyBookmarks] = useState(false);

  const filteredTalents = useMemo(() => {
    return TALENTS_CATALOG.filter(talent => {
      // Category filter
      if (selectedCategory !== 'all' && talent.category !== selectedCategory) {
        return false;
      }

      // Bookmarks filter
      if (showOnlyBookmarks && !bookmarkedTalentIds.includes(talent.id)) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inTitle = talent.title.toLowerCase().includes(q);
        const inSummary = talent.shortSummary.toLowerCase().includes(q);
        const inQualities = talent.keyQualities.some(k => k.toLowerCase().includes(q));
        const inScripture = talent.biblicalFoundation.reference.toLowerCase().includes(q) ||
                            talent.biblicalFoundation.verse.toLowerCase().includes(q);
        return inTitle || inSummary || inQualities || inScripture;
      }

      return true;
    });
  }, [selectedCategory, showOnlyBookmarks, searchQuery, bookmarkedTalentIds]);

  return (
    <section className="py-12 bg-stone-50 min-h-[700px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 tracking-wider uppercase mb-1">
            <span>Catalogue Vocations</span>
            <span aria-hidden="true">·</span>
            <span>Talents & Dons Chrétiens</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 font-display">
            Répertoire des Talents & Ministères Jeunesse
          </h2>
          <p className="mt-1 text-sm sm:text-base text-stone-600">
            Parcours les différentes voies pour mettre ton énergie, ta foi et ton écoute au service des autres. Chaque talent comporte un fondement biblique, des micro-actions et des étapes de progression.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-xs mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher un talent (ex: foot, prière, écoute, musique, verset)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm border border-stone-200 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-stone-50/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-0.5"
                  aria-label="Effacer la recherche"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Bookmarks Toggle button */}
            <button
              onClick={() => setShowOnlyBookmarks(!showOnlyBookmarks)}
              className={`px-3 py-2 text-xs font-medium rounded-lg border transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 ${
                showOnlyBookmarks
                  ? 'border-amber-400 bg-amber-50 text-amber-900 font-semibold'
                  : 'border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-50'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${showOnlyBookmarks ? 'fill-amber-500 text-amber-500' : ''}`} />
              <span>Favoris ({bookmarkedTalentIds.length})</span>
            </button>
          </div>

          {/* Interactive Filter Tabs (Segmented controls) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-stone-900 text-white'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              Tous les Talents ({TALENTS_CATALOG.length})
            </button>

            <button
              onClick={() => setSelectedCategory('sport')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                selectedCategory === 'sport'
                  ? 'bg-emerald-700 text-white'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Sport & Dépassement</span>
            </button>

            <button
              onClick={() => setSelectedCategory('spiritual')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                selectedCategory === 'spiritual'
                  ? 'bg-amber-600 text-white'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <Church className="w-3.5 h-3.5" />
              <span>Spirituel & Ministère</span>
            </button>

            <button
              onClick={() => setSelectedCategory('social')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                selectedCategory === 'social'
                  ? 'bg-blue-600 text-white'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Social & Solidarité</span>
            </button>

            <button
              onClick={() => setSelectedCategory('creative')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                selectedCategory === 'creative'
                  ? 'bg-purple-700 text-white'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Créatif & Médias</span>
            </button>
          </div>
        </div>

        {/* Results Metadata */}
        <div className="flex items-center justify-between text-xs text-stone-500 mb-6">
          <span>{filteredTalents.length} talent{filteredTalents.length > 1 ? 's' : ''} disponible{filteredTalents.length > 1 ? 's' : ''}</span>
          {(selectedCategory !== 'all' || showOnlyBookmarks || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setShowOnlyBookmarks(false);
                setSearchQuery('');
              }}
              className="text-amber-800 hover:underline"
            >
              Réinitialiser les filtres
            </button>
          )}
        </div>

        {/* Talents Cards Grid */}
        {filteredTalents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTalents.map(talent => (
              <TalentCard
                key={talent.id}
                talent={talent}
                onOpenDetails={onOpenDetails}
                isBookmarked={bookmarkedTalentIds.includes(talent.id)}
                onToggleBookmark={onToggleBookmark}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8 max-w-md mx-auto">
            <Filter className="w-8 h-8 text-stone-300 mx-auto mb-3" />
            <h4 className="text-base font-semibold text-stone-800 mb-1">Aucun talent trouvé</h4>
            <p className="text-xs text-stone-500 mb-4">
              {showOnlyBookmarks
                ? "Tu n'as pas encore enregistré de talent en favori. Clique sur l'icône de signet sur une fiche pour l'ajouter."
                : "Essaie d'ajuster ta recherche ou de sélectionner une autre catégorie."}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setShowOnlyBookmarks(false);
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-medium hover:bg-stone-800 transition-colors"
            >
              Voir tous les talents
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
